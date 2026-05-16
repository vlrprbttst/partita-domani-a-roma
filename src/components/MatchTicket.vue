<script setup>
import { computed } from 'vue'

const props = defineProps({
  match: { type: Object, required: true },
  label: { type: String, default: 'PROSSIMA PARTITA' },
})

const MESI = ['GEN','FEB','MAR','APR','MAG','GIU','LUG','AGO','SET','OTT','NOV','DIC']

function hasKnownTime(date) {
  return date.getUTCHours() !== 0 || date.getUTCMinutes() !== 0
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const variant = computed(() => {
  const m = props.match
  const away = (m.awayTeamName || '').toLowerCase()
  const home = m.homeTeam?.name
  if ((home === 'roma'  && away.includes('lazio')) ||
      (home === 'lazio' && away.includes('roma'))) return 'derby'
  return home === 'lazio' ? 'lazio' : 'roma'
})

const dateParts = computed(() => {
  const d = new Date(props.match.date + 'T12:00:00')
  return {
    day:   String(d.getDate()),
    month: MESI[d.getMonth()],
    weekday: capitalize(d.toLocaleDateString('it-IT', { weekday: 'long' })),
  }
})

const time = computed(() => {
  const ts = props.match.timestamp
  if (!ts || !hasKnownTime(ts)) return 'TBD'
  return ts.toLocaleTimeString('it-IT', {
    hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Rome',
  })
})

const subtitle = computed(() => {
  if (variant.value === 'derby') return `${dateParts.value.weekday} — Derby`
  const comp = props.match.competition
  return comp ? `${dateParts.value.weekday} · ${comp}` : dateParts.value.weekday
})

const matchTitle = computed(() => {
  if (variant.value === 'derby') return null
  return variant.value === 'lazio' ? 'Gioca la Lazio' : 'Gioca la Roma'
})
</script>

<template>
  <div class="match-ticket-wrap">
    <div class="match-ticket" :class="`match-ticket--${variant}`">
      <div class="match-ticket__stub">
        <b>{{ dateParts.day }}</b>
        <i>{{ dateParts.month }}</i>
      </div>
      <div class="match-ticket__perf"></div>
      <div class="match-ticket__body">
        <div class="match-ticket__label">{{ label }}</div>
        <div class="match-ticket__match">
          <template v-if="variant === 'derby'">Roma<span class="match-ticket__vs">·</span>Lazio</template>
          <template v-else>{{ matchTitle }}</template>
        </div>
        <div class="match-ticket__small">{{ subtitle }}</div>
      </div>
      <div class="match-ticket__time">{{ time }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes ticket-slide-up {
  from { transform: translateY(70px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}

.match-ticket-wrap {
  display: inline-block;
  filter: drop-shadow(0 14px 40px rgba(0, 0, 0, 0.55));
  margin-top: 12px;
  animation: ticket-slide-up 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both;
}

.match-ticket {
  --bg: #fdf5e1;
  --ink: #2a0a10;
  --stub-bg: #8e1f2f;
  --stub-ink: #f0bc42;
  --time-bg: #8e1f2f;
  --time-ink: #f0bc42;
  --accent: #8e1f2f;
  --punch: 7px;

  position: relative;
  display: grid;
  grid-template-columns: auto 1px auto auto;
  align-items: stretch;
  background: var(--bg);
  color: var(--ink);
  font-family: 'JetBrains Mono', monospace;
  border-radius: 6px;
  transform: rotate(-1.2deg);
  text-align: left;

  -webkit-mask:
    radial-gradient(circle var(--punch) at 0 50%,    transparent calc(var(--punch) - 0.5px), #000 var(--punch)),
    radial-gradient(circle var(--punch) at 100% 50%, transparent calc(var(--punch) - 0.5px), #000 var(--punch));
  -webkit-mask-composite: source-in;
  mask:
    radial-gradient(circle var(--punch) at 0 50%,    transparent calc(var(--punch) - 0.5px), #000 var(--punch)),
    radial-gradient(circle var(--punch) at 100% 50%, transparent calc(var(--punch) - 0.5px), #000 var(--punch));
  mask-composite: intersect;

  &--lazio {
    --bg: #ffffff;
    --ink: #0e2b3d;
    --stub-bg: #87d8f7;
    --stub-ink: #000000;
    --time-bg: #87d8f7;
    --time-ink: #000000;
    --accent: #87d8f7;
  }

  &--derby {
    --bg: #fdf5e1;
    --ink: #14110d;
    --stub-bg: #8e1f2f;
    --stub-ink: #f0bc42;
    --time-bg: #87d8f7;
    --time-ink: #000000;
    --accent: #14110d;
  }
}

.match-ticket__stub {
  padding: 12px 18px;
  background: var(--stub-bg);
  color: var(--stub-ink);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Anton', sans-serif;
  min-width: 84px;
  box-sizing: border-box;

  b {
    font-size: 32px;
    line-height: 1;
    letter-spacing: 0.01em;
    font-weight: 400;
  }
  i {
    font-size: 11px;
    font-style: normal;
    letter-spacing: 0.22em;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 700;
    margin-top: 0;
    line-height: 1;
  }
}

.match-ticket__perf {
  background: repeating-linear-gradient(180deg, var(--accent) 0 4px, transparent 4px 8px);
  opacity: 0.4;
}

.match-ticket__body {
  padding: 12px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1.15;
}

.match-ticket__label {
  font-size: 9px;
  letter-spacing: 0.24em;
  font-weight: 700;
  color: color-mix(in srgb, var(--ink) 50%, transparent);
}

.match-ticket__match {
  font-family: 'Anton', sans-serif;
  font-size: 28px;
  letter-spacing: 0.02em;
  line-height: 1;
  margin-top: 4px;
  text-transform: uppercase;
}

.match-ticket__vs {
  margin: 0 4px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
}

.match-ticket__small {
  font-size: 11px;
  margin-top: 6px;
  letter-spacing: 0.08em;
  font-weight: 700;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--ink) 65%, transparent);
}

.match-ticket__time {
  padding: 12px 18px;
  background: var(--time-bg);
  color: var(--time-ink);
  font-family: 'Anton', sans-serif;
  font-size: 32px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  font-weight: 400;
}

@media (max-width: 540px) {
  .match-ticket__stub {
    padding: 10px 14px;
    min-width: 72px;
    b { font-size: 26px; }
    i { font-size: 10px; }
  }
  .match-ticket__body {
    padding: 10px 20px;
  }
  .match-ticket__label { font-size: 8px; }
  .match-ticket__match { font-size: 22px; }
  .match-ticket__small { font-size: 10px; }
  .match-ticket__time {
    padding: 10px 14px;
    font-size: 26px;
  }
}
</style>
