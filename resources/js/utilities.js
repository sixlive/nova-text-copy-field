export const filterField = function (field) {
    return [
        fieldTruncator,
        maskField
    ].reduce((field, fn) => fn(field), {field, display: field.value})
}

export const fieldTruncator = function ({ field, display }) {
    return {
        field,
        display: display && field.truncate > 0
            ?  `${display.substring(0, field.truncate)}...`
            : display
    }
}

export const maskField = function ({ field, display }) {
    return {
        field,
        display: field.masked
            ? field.masked_character.repeat(display.length)
            : display
        }
}
