export const AUTHOR = 'https://geekrodion.com'
export const APP_URL = 'https://booksconcepts.com'

const getUrl = (domain) => `https://${domain}`
const getEmbeddedLanding = (url) => `${url}/embedded-landing`

export const INCREASER = getUrl('increaser.org')
export const EMBEDDED_INCREASER = getEmbeddedLanding(INCREASER)