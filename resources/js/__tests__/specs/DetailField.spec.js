import { shallowMount } from '@vue/test-utils'
import test from 'ava'
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

test('It should render an <panel-item>', (t) => {
  const wrapper = shallowMount(DetailField, {
    stubs: {
      PanelItem
    },
    propsData: {
      field
    }
  })

  t.true(wrapper.is('#panel-item'))
})

test('It should contain a <copy-button>', (t) => {
  const wrapper = shallowMount(DetailField, {
    stubs: {
      PanelItem
    },
    propsData: {
      field
    }
  })

  t.true(wrapper.contains(CopyButton))
})

test('It renders the value using the filter', (t) => {
  const spy = sinon.spy(filterField, 'default')

  const wrapper = shallowMount(DetailField, {
    stubs: {
      PanelItem
    },
    propsData: {
      field
    }
  })

  t.true(spy.calledWith(field))
  t.is(wrapper.find('#panel-item > div > div').text(), field.value)
})
