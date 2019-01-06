<template>
    <span class="flex">
        <div class="flex-no-shrink">{{ fieldDisplayValue }}</div>
        <copy-button
            :value="field.value"
            :title="copyButtonTitleValue"
            class="w-4 mx-3" />
    </span>
</template>

<script>
import CopyButton from './CopyButton'
import { filterField, copyButtonTitle } from '../utilities'

export default {
    components: { CopyButton },
    props: ['resourceName', 'field'],
     computed: {
        fieldDisplayValue() {
            return filterField(this.field)
        },
        copyButtonTitleValue() {
            return copyButtonTitle(this.field)
        }
    }
}
</script>
