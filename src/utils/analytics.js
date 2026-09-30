// Google Analytics is loaded ONLY after explicit consent: before that no
// request of any kind reaches Google (no Consent Mode "cookieless pings").
const GA_ID      = 'G-T02RCCNKG9'
const CHOICE_KEY = 'cookiesChoice' // 'accepted' | 'refused'

let loaded = false

export function getConsent() {
  try { return localStorage.getItem(CHOICE_KEY) } catch { return null }
}

function loadAnalytics() {
  if (loaded || location.hostname === 'localhost') return
  loaded = true
  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('consent', 'default', {
    analytics_storage:  'granted',
    ad_storage:         'denied',
    ad_user_data:       'denied',
    ad_personalization: 'denied',
  })
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, {
    allow_google_signals:             false,
    allow_ad_personalization_signals: false,
  })
  const s = document.createElement('script')
  s.async = true
  s.src   = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)
}

function deleteAnalyticsCookies() {
  const names = document.cookie.split(';').map(c => c.split('=')[0].trim()).filter(n => n.startsWith('_ga'))
  for (const name of names) {
    for (const domain of ['', location.hostname, `.${location.hostname}`]) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`
    }
  }
}

// Called once at startup: loads GA only if the user already accepted
export function initAnalytics() {
  if (getConsent() === 'accepted') loadAnalytics()
}

export function setConsent(accepted) {
  try { localStorage.setItem(CHOICE_KEY, accepted ? 'accepted' : 'refused') } catch { /* storage bloccato */ }
  if (accepted) {
    loadAnalytics()
    trackEvent('consent_accepted')
  } else {
    deleteAnalyticsCookies()
  }
}

// Withdraws consent: forgets the choice, removes GA cookies, reloads without GA
export function resetConsent() {
  try { localStorage.removeItem(CHOICE_KEY) } catch { /* storage bloccato */ }
  deleteAnalyticsCookies()
  window.location.reload()
}

export function trackEvent(name, params = {}) {
  if (loaded) window.gtag('event', name, params)
}
