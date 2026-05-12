import { unref } from 'vue'

const COLORS = ['#8C1A2E', '#fcff00', '#88D8F1', '#ffffff']
const DEFS = [
  [  0,-95, 1],[ 28,-90,-1],[ 55,-78, 1],[ 75,-55,-1],[ 90,-20, 1],[ 88, 20,-1],
  [ 75, 52, 1],[ 52, 76,-1],[ 20, 92, 1],[-20, 90,-1],[-52, 74, 1],[-76, 50,-1],
  [-92,  8, 1],[-88,-20,-1],[-75,-52, 1],[-52,-78,-1],[-18,-93, 1],[ 22,-90,-1],
  [ 50,-76, 1],[ 76,-50,-1],[ 93, -5, 1],[ 82, 38,-1],[ 55, 72, 1],[ 25, 91,-1],
]
const SHAPES = [
  [10,5],[6,6],[14,5],[5,5],[9,4],[7,7],[12,4],[4,8],
  [8,4],[13,5],[6,6],[10,4],[7,7],[9,3],[5,5],[11,4],
  [9,9],[6,3],[13,5],[4,4],[11,4],[7,3],[8,8],[5,10],
]

export function useConfetti(targetRef) {
  function fire() {
    const target = unref(targetRef)
    if (!target) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const { left, top, width, height } = target.getBoundingClientRect()
    const cx = left + width / 2
    const cy = top  + height / 2
    DEFS.forEach(([tx, ty, rotSign], i) => {
      const [w, h] = SHAPES[i]
      const el = document.createElement('div')
      Object.assign(el.style, {
        position: 'fixed', zIndex: '9999', pointerEvents: 'none',
        left: (cx - w / 2) + 'px', top: (cy - h / 2) + 'px',
        width: w + 'px', height: h + 'px',
        background: COLORS[i % COLORS.length],
        borderRadius: '2px',
      })
      document.body.appendChild(el)
      el.animate(
        [
          { transform: 'translate(0,0) rotate(0deg) scale(0.5)',                                                       opacity: 1, offset: 0    },
          { transform: `translate(${tx * 0.18}px,${ty * 0.18}px) rotate(${rotSign * 80}deg) scale(1.5)`,              opacity: 1, offset: 0.12 },
          { transform: `translate(${tx}px,${ty}px) rotate(${rotSign * 540}deg) scale(0.1)`,                           opacity: 0, offset: 1    },
        ],
        { duration: 1500, easing: 'ease-out', fill: 'forwards' }
      ).onfinish = () => el.remove()
    })
  }
  return { fire }
}
