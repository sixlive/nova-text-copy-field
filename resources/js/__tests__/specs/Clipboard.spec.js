import { shallowMount } from '@vue/test-utils'

import Clipboard from '../../components/Clipboard.vue'
import ClipboardIcon from '../../components/Icons/Clipboard.vue'

describe('Clipboard.vue', () => {
  it('It should render an `<button>`.', () => {
    const wrapper = shallowMount(Clipboard, {
      propsData: {
        value: 'Example Value'
      }
    })

    expect(wrapper.is('button')).toBe(true)
  })

  it('It should contain a `<clipboard-icon>`.', () => {
    const wrapper = shallowMount(Clipboard, {
      propsData: {
        value: 'Example Value'
      }
    })

    expect(wrapper.contains(ClipboardIcon)).toBe(true)
  })
})
