import { shallow } from 'vue-test-utils'
import test from 'ava'

import DetailField from '../../resources/js/components/DetailField.vue'
import CopyButton from '../../resources/js/components/CopyButton.vue'

const field = {
  value: 'Example String',
  truncate: false,
  mask: false
}

test('It should render an `<panel-item>`.', (t) => {
  const wrapper = shallow(DetailField, {
    propsData: {
      field
    }
  })

  t.true(wrapper.is('panel-item'))
})

test('It should contain a `<copy-button>`.', (t) => {
  const wrapper = shallow(DetailField, {
    propsData: {
      field
    }
  })

  t.true(wrapper.contains(CopyButton))
})

test('It should render the value unfiltered', (t) => {
  const wrapper = shallow(DetailField, {
    propsData: {
      field
    }
  })

  t.is(wrapper.find('panel-item > div > div').text(), field.value)
})

test('It should render the value with a mask', (t) => {
  const wrapper = shallow(DetailField, {
    propsData: {
      field: Object.assign({}, field, {
        masked: true,
        masked_character: 'X'
      })
    }
  })

  t.is(wrapper.find('panel-item > div > div').text(), 'XXXXXXXXXXXXXX')
})

test('It should render a truncated value', (t) => {
  const wrapper = shallow(DetailField, {
    propsData: {
      field: Object.assign({}, field, {
        truncate: 4
      })
    }
  })

  t.is(wrapper.find('panel-item > div > div').text(), 'Exam...')
})

test('It should render a truncated and masked value', (t) => {
  const wrapper = shallow(DetailField, {
    propsData: {
      field: Object.assign({}, field, {
        truncate: 4,
        masked: true,
        masked_character: 'X'
      })
    }
  })

  t.is(wrapper.find('panel-item > div > div').text(), 'XXXXXXX')
})
