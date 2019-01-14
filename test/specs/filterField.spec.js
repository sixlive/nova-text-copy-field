import test from 'ava'
import filterField from '../../resources/js/filterField'

test('It will truncate a field', (t) => {
  const filtered = filterField({
    value: 'Example Value',
    truncate: 4
  })

  t.is(filtered, 'Exam...')
})

test('It will mask a field', (t) => {
  const filtered = filterField({
    value: 'Example Value',
    masked: true,
    masked_character: 'X'
  })

  t.is(filtered, 'XXXXXXXXXXXXX')
})

test('It will mask and truncate a field', (t) => {
  const filtered = filterField({
    value: 'Example Value',
    truncate: 4,
    masked: true,
    masked_character: 'X'
  })

  t.is(filtered, 'XXXXXXX')
})
