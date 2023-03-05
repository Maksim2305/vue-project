const mouseover = event => {
  event.target.style.color = 'yellow'
}

const mouseout = event => {
  event.target.style.color = 'black'
}

export default {
  mounted (el, binding) {
    el.style[binding.arg] = binding.value
    if (binding.modifiers.hover) {
      el.addEventListener('mouseover', mouseover)
      el.addEventListener('mouseout', mouseout)
    }
  },
  updated (el, binding) {
    el.style[binding.arg] = binding.value
  },
  unmounted (el) {
    el.removeEventListener('mouseover', mouseover)
    el.removeEventListener('mouseout', mouseout)
  }
}
