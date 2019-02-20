export default function filterField(field) {
  return [truncateField, maskField].reduce((field, fn) => fn(field), [field, field.value])[1]
}

function truncateField([field, display]) {
  return [
    field,
    display && field.truncate > 0 ? `${display.substring(0, field.truncate)}...` : display,
  ]
}

function maskField([field, display]) {
  return [field, field.masked ? field.masked_character.repeat(display.length) : display]
}
