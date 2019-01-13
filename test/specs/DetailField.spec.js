import { shallow } from 'vue-test-utils';
import test from 'ava';

import DetailField from '../../resources/js/components/DetailField.vue';
import CopyButton from '../../resources/js/components/CopyButton.vue';

  const field = {
    value: 'Example String',
    truncate: false,
    mask: false,
  }

test('It should render an `<panel-item>`.', (t) => {
    const wrapper = shallow(DetailField, {
      propsData: {
        field
      }
    })

    t.true(wrapper.is('panel-item'))
    t.true(wrapper.contains(CopyButton))
})

test('It should contain a `<copy-button>`.', (t) => {
    const wrapper = shallow(DetailField, {
      propsData: {
        field
      }
    })

    t.true(wrapper.contains(CopyButton))
})
