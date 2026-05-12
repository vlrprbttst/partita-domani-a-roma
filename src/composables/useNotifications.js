import { ref } from 'vue'
import {
  notificationsSupported,
  subscribeToNotifications,
  unsubscribeFromNotifications,
  detectNotificationState,
} from '../api/firebase.js'
import { trackEvent } from '../utils/analytics.js'

export function useNotifications({ state, onSubscribeSuccess }) {
  const supported = notificationsSupported()

  // Optimistic init based on Notification.permission (durable across storage eviction).
  // The real state is verified asynchronously via syncState().
  const notifState = ref(
    !supported                                                                                     ? 'unsupported' :
    Notification.permission === 'denied'                                                           ? 'denied'      :
    Notification.permission === 'granted' && localStorage.getItem('notifUnsubscribed') !== 'true'  ? 'subscribed'  : 'idle'
  )

  // Guard against the (rare) race where syncState resolves after the user
  // has tapped the bell: once the user has acted, their action is the truth.
  let userActed = false

  async function syncState() {
    const real = await detectNotificationState()
    if (real === null || userActed) return
    notifState.value = real
  }

  async function subscribe() {
    userActed    = true
    state.loaded = false
    let succeeded = false
    try {
      const result = await subscribeToNotifications()
      notifState.value = result === 'granted' ? 'subscribed' : result
      if (result === 'granted') succeeded = true
      trackEvent('notify_subscribe', { result })
    } catch {
      notifState.value = 'idle'
    } finally {
      state.loaded = true
      if (succeeded) onSubscribeSuccess?.()
    }
  }

  async function unsubscribe() {
    userActed    = true
    state.loaded = false
    try {
      await unsubscribeFromNotifications()
      notifState.value = 'idle'
      trackEvent('notify_unsubscribe')
    } catch {
      notifState.value = 'subscribed'
    } finally {
      state.loaded = true
    }
  }

  function explainDenied() {
    alert("Le notifiche di questo sito sono bloccate dal browser.\n\nPer riattivarle:\n• Tocca l'icona del lucchetto nella barra degli indirizzi\n• Vai su \"Notifiche\" e abilitale\n• Ricarica la pagina")
  }

  function onBellClick() {
    if (notifState.value === 'denied')     return explainDenied()
    if (notifState.value === 'subscribed') return unsubscribe()
    return subscribe()
  }

  return { supported, notifState, syncState, onBellClick }
}
