export default {
  install (app, options) {
    let current = 'ru'

    const changeLang = name => {
      current = name
    }

    app.config.globalProperties.$multiLang = key => {
      return key.split('.').reduce((words, i) => {
        return words[i] || 'unknown text'
      }, options[current])
    }

    app.provide('changeLn', changeLang)
  }
}
