function inject () {
  const backdrop = document.createElement('div')
  backdrop.id = 'backdrop'

  const $body = document.querySelector('body')
  const $title = document.querySelector('h1')
  $body.prepend(backdrop)
  $title.innerHTML = 'CheleWonder!'
}

module.exports = inject
