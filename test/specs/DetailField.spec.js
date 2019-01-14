import { shallowMount } from '@vue/test-utils'
import test from 'ava'

import * as utils from '../../resources/js/utilities'

import DetailField from '../../resources/js/components/DetailField.vue'
import CopyButton from '../../resources/js/components/CopyButton.vue'
const sinon = require('sinon')

const field = {
  value: 'Example String',
  truncate: false,
  mask: false
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
  const spy = sinon.spy(utils, 'filterField')

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
