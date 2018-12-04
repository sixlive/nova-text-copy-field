export const fieldTruncator = function (field) {
    return field.value && field.truncate > 0
        ?  `${field.value.substring(0, field.truncate)}...`
        : field.value
}
