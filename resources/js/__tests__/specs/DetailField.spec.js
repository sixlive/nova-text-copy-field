import { shallowMount } from '@vue/test-utils'
import sinon from 'sinon'

import * as filterField from '../../filterField'
import DetailField from '../../components/DetailField.vue'
import CopyButton from '../../components/CopyButton.vue'

const field = {
  value: 'Example String',
  truncate: false,
  masked: false
}

const PanelItem = {
  name: 'panel-item',
  props: ['field'],
  render: function (h) {
    return h('div', { attrs: { id: 'panel-item' } }, this.$slots.value)
  }
}

describe('DetailField.vue', () => {
  it('It should render an <panel-item>', () => {
    const wrapper = shallowMount(DetailField, {
      stubs: {
        PanelItem
      },
      propsData: {
        field
      }
    })

    expect(wrapper.is('#panel-item')).toBe(true)
  })

  it('It should contain a <copy-button>', () => {
    const wrapper = shallowMount(DetailField, {
      stubs: {
        PanelItem
      },
      propsData: {
        field
      }
    })

    expect(wrapper.contains(CopyButton)).toBe(true)
  })

  it('It renders the value using the filter', () => {
    const spy = sinon.spy(filterField, 'default')

    const wrapper = shallowMount(DetailField, {
      stubs: {
        PanelItem
      },
      propsData: {
        field
      }
    })

    expect(spy.calledWith(field)).toBe(true)
    expect(wrapper.find('#panel-item > div > div').text()).toBe(field.value)
  })
})
