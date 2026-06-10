# Diseño: Sistema de racha (streak) corregido + recompensas cada 7 días

## Problema actual

`updateStreak()` se ejecuta en `loadSession()` y `doAuth()` — es decir, al
**abrir la app o iniciar sesión**, no al estudiar. Esto significa que un
usuario puede subir su racha cada día solo abriendo la app, sin completar
ninguna lección. La racha no refleja actividad real.

## 1. Corrección de la racha

- Se elimina la llamada a `updateStreak()` en `loadSession()` y `doAuth()`.
- Nueva función `registerStreakActivity(u)`, llamada **solo** desde
  `showComplete()` (al terminar cualquier lección o test, sin importar el
  resultado).
- Reglas (usando fechas `YYYY-MM-DD`, UTC, igual que el código actual):
  - `lastActive === hoy` → no cambia nada (la racha solo sube una vez al día).
  - `lastActive === ayer` → `streak += 1`.
  - `lastActive === anteayer` y `streakFreezes > 0` → se consume 1 freeze,
    `streak += 1` (la racha continúa como si no hubiera hueco). Se marca
    `freezeUsed = true` para mostrar un aviso.
  - cualquier otro caso → `streak = 1` (reinicio).
  - `lastActive = hoy`.
- **Racha mostrada en el mapa** (`map-streak`): se calcula con
  `effectiveStreak(u)`, que devuelve `0` si la racha ya está "rota" según las
  reglas de arriba pero el usuario aún no ha completado una lección hoy (para
  no mostrar una racha fantasma desactualizada). No modifica el estado — solo
  afecta la visualización hasta la próxima lección completada.

## 2. Streak Freeze (poistka)

- Campo `streakFreezes` (0 o 1, máx. 1 en stock).
- Se obtiene automáticamente: por cada **500 XP acumulados**, si el usuario
  no tiene ya un freeze, se le concede 1. Se usa un campo auxiliar
  `freezeTier` (= `floor(xp / 500)` ya evaluado) para no conceder de más.
- En el mapa, junto al chip `🔥 N`, aparece un badge `🧊` cuando
  `streakFreezes > 0`.
- Cuando se consume un freeze (caso "anteayer" arriba), se muestra un toast:
  "🧊 ¡Usamos tu congelación de racha! Tu racha sigue viva."

## 3. Recompensa cada 7 días de racha

- Cuando `streak % 7 === 0` y `streak > lastRewardStreak`:
  - `lastRewardStreak = streak` (se fija inmediatamente para no repetir el
    popup si se recarga la página).
  - Se muestra la pantalla **"Elige tu recompensa"** con hasta 3 opciones,
    una de cada categoría (`romantic`, `slang`, `slovakia`).
  - Para cada categoría se ofrece el primer paquete (`deck`) que el usuario
    **no haya completado todavía** (`usedBonusDecks[categoria]`). Si una
    categoría ya no tiene paquetes sin usar, se omite (la pantalla puede
    mostrar 1, 2 o 3 opciones). Si las 3 categorías están agotadas (9/9
    completados), no se muestra el popup en futuros milestones.
- Al elegir un paquete, se abre la pantalla del **deck**:
  1. Carrusel de 6-8 tarjetas (mismo estilo visual que las slides `sl` de las
     lecciones), con botón "🔊 Escuchar" para frases eslovacas.
  2. Mini-quiz de 3 preguntas `mc` (mismo motor que `renderMc`/`pickMc`, pero
     sin pérdida de ❤️ en caso de error).
  3. Pantalla final: `+XP` (5 XP por respuesta correcta, máx. 15) y vuelta al
     mapa. El `id` del deck se añade a `usedBonusDecks[categoria]`.

## 4. Animación motivacional al completar lección

En la pantalla "¡Lección completada!" (`sc-complete`):
- Si la racha subió: el ícono 🔥 hace una animación "pop" (CSS keyframes,
  scale bounce) y el número cuenta desde el valor anterior al nuevo.
- Debajo, una barra de progreso hacia el próximo múltiplo de 7, con texto
  motivacional, p.ej.: `🔥 ¡Racha de 5 días!` + `Faltan 2 días para
  desbloquear contenido especial 🎁` + barra `5/7`.
- Si `streak % 7 === 0`: en vez de la barra, un mensaje de celebración
  "🎉 ¡7 días seguidos!" y, tras un breve delay (mismo patrón que
  `showGramPopup`), se abre la pantalla "Elige tu recompensa".
- Si se consumió un freeze: toast adicional como se describe arriba.

## 5. Modelo de datos

### Nuevas columnas en `users` (Postgres)

```sql
ALTER TABLE users ADD COLUMN IF NOT EXISTS streak_freezes integer NOT NULL DEFAULT 0;
ALTER TABLE users ADD COLUMN IF NOT EXISTS freeze_tier integer NOT NULL DEFAULT 0;
ALTER TABLE users ADD COLUMN IF NOT EXISTS last_reward_streak integer NOT NULL DEFAULT 0;
ALTER TABLE users ADD COLUMN IF NOT EXISTS used_bonus_decks jsonb NOT NULL DEFAULT '{}';
```

`used_bonus_decks` tiene la forma `{"romantic": ["r1"], "slang": [], "slovakia": ["s1","s2"]}`.

### Estado del cliente (`ST.user`)

Se añaden los campos: `streakFreezes`, `freezeTier`, `lastRewardStreak`,
`usedBonusDecks`. `updateProgress()` los envía al backend; `setUser()` los
normaliza con valores por defecto.

## 6. Contenido de los paquetes bonus (`data/bonus.js`)

3 categorías × 3 paquetes = 9 paquetes. No se repiten hasta agotar los 9.

### `romantic` — Frases para el corazón
- `r1` "Frases para el corazón" 💕 — vocabulario romántico básico
- `r2` "Frases para una cita" 🌹 — invitar, coquetear
- `r3` "Para el aniversario y el compromiso" 💍 — declaraciones serias

### `slang` — Jerga y dichos (con cuidado)
- `g1` "Para los amigos (con cuidado)" 😏 — insultos suaves de uso común
- `g2` "Para el tráfico y el fútbol" ⚽🚗 — exclamaciones cotidianas
- `g3` "Jerga juvenil moderna" 🤳 — expresiones de jóvenes

### `slovakia` — Rincones de Eslovaquia (lugares por todo el país, no solo Bratislava)
- `s1` "Hrady a zámky" 🏰 — 6 castillos/ruinas de distintas regiones
- `s2` "Naturaleza y aventura" 🏔️ — Tatras, cuevas, valles, picos
- `s3` "Ciudades y cultura" 🏙️ — Bratislava, Košice, Banská Štiavnica, Levoča, Bardejov

Cada tarjeta de `slovakia` incluye: nombre del lugar, foto (URL de Wikimedia
Commons / `upload.wikimedia.org`, con `loading="lazy"` y fallback a emoji si
falla la carga), un 💡 tip de qué hacer/ver, y una ✨ curiosidad.

Cada paquete incluye 3 preguntas `mc` de quiz al final.

## 7. Alcance / fuera de alcance

- No se cambia la lógica de zona horaria (sigue usando `toISOString().slice(0,10)`,
  igual que el código actual).
- Las prácticas de corazones (`sc-hearts`) NO cuentan para la racha — solo
  lecciones/tests vía `showComplete()`.
- No hay UI para "comprar" o "regalar" freezes manualmente — se obtienen solo
  automáticamente por XP, máx. 1 en stock.
- Si en el futuro se agotan los 9 paquetes, se puede ampliar `data/bonus.js`
  con más decks por categoría sin cambios de mecánica.
