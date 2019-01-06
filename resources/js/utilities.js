export function filterField (field) {
    return [
        truncateField,
        maskField
    ].reduce((field, fn) => fn(field), [field, field.value])[1]
}

function truncateField ([field, display]) {
    return [
        field,
        display && field.truncate > 0
            ?  `${display.substring(0, field.truncate)}...`
            : display
    ]
}

function maskField ([ field, display ]) {
    return [
        field,
        field.masked
            ? field.masked_character.repeat(display.length)
            : display
    ]
}

export function copyButtonTitle (field) {
    return field.copy_button_title || `Copy ${field.name}`
}

export function copyValue (field) {
    return field.copy_value || field.value
}

export default filterField
