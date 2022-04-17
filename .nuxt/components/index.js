export { default as Home } from '../../components/Home/index.vue'
export { default as Kiosk } from '../../components/Kiosk/index.vue'
export { default as KioskMachine } from '../../components/Kiosk/machine.vue'
export { default as User } from '../../components/User/index.vue'
export { default as AuthLogin } from '../../components/Auth/Login/index.vue'
export { default as AuthLoginXIndex } from '../../components/Auth/Login/x-index.vue'
export { default as AuthRegister } from '../../components/Auth/Register/index.vue'
export { default as LayoutsHeader } from '../../components/Layouts/Header/index.vue'
export { default as LayoutsHeaderXIndex } from '../../components/Layouts/Header/x-index.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
