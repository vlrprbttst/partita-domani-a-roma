const THRESHOLD = 80

export function usePullToRefresh({ state, onRefresh }) {
  let startY    = 0
  let pullY     = 0
  let pullReady = false

  function onTouchStart(e) {
    if (state.menuOpen) return
    startY = e.touches[0].clientY
  }

  function onTouchMove(e) {
    if (state.menuOpen) return
    const delta = e.touches[0].clientY - startY
    if (delta > 0) {
      pullY = Math.min(delta, THRESHOLD * 1.5)
      if (!pullReady && pullY >= THRESHOLD) {
        pullReady    = true
        state.loaded = false
      } else if (pullReady && pullY < THRESHOLD) {
        pullReady    = false
        state.loaded = true
      }
    }
  }

  async function onTouchEnd() {
    const wasReady = pullReady
    pullY     = 0
    pullReady = false
    if (wasReady) await onRefresh()
  }

  return { onTouchStart, onTouchMove, onTouchEnd }
}
