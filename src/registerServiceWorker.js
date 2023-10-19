/* eslint-disable no-console */

import { register } from 'register-service-worker'
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated (registration) {
      if (registration.waiting) {
        registration.waiting.postMessage({
          type: 'SKIP_WAITING'
        })
      }
      console.log('新的 ServiceWorker.js 已经下载并安装')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error(error) {
      console.error('Error during service worker registration:', error)
    }
  })
