import { shallowMount, mount } from '@vue/test-utils'
import test from 'ava'

import Clipboard from '../../resources/js/components/Clipboard.vue'
import ClipboardIcon from '../../resources/js/components/Icons/Clipboard.vue'

test('It should render an `<button>`.', (t) => {
  const wrapper = shallowMount(Clipboard, {
    propsData: {
      value: 'Example Value'
    }
  })

  t.true(wrapper.is('button'))
})

test('It should contain a `<clipboard-icon>`.', (t) => {
  const wrapper = shallowMount(Clipboard, {
    propsData: {
      value: 'Example Value'
    }
  })

  t.true(wrapper.contains(ClipboardIcon))
})
