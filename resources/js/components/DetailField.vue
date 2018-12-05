<template>
    <panel-item :field="field">
        <div slot="value" class="flex">
            <div class="flex-no-shrink">{{ fieldDisplayValue }}</div>
            <copy-button :value="field.value" class="w-4 mx-3" />
        </div>
    </panel-item>
</template>

<script>
import CopyButton from './CopyButton'
import filterField from '../utilities'

export default {
    props: ['resource', 'resourceName', 'resourceId', 'field'],
    components: {
       CopyButton
    },
    computed: {
        fieldDisplayValue() {
            return filterField(this.field)
        }
    }
}
</script>
