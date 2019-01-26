<template>
    <panel-item :field="field">
        <div slot="value" class="flex" @mouseover="hover = true" @mouseleave="hover = false">
            <div class="flex-no-shrink">{{ fieldDisplayValue }}</div>
            <copy-button
                :value="copyFieldValue"
                :title="copyButtonTitleValue"
                :class="['w-4 mx-3', {'invisible': ! shouldShowButton}]" />
        </div>
    </panel-item>
</template>

<script>
import CopyButton from './CopyButton'
import { filterField, copyButtonTitle, copyValue } from '../utilities'

export default {
    props: ['resource', 'resourceName', 'resourceId', 'field'],
    components: {
       CopyButton
    },
    data() {
        return {
            hover: false
        }
    },
    computed: {
        fieldDisplayValue() {
            return filterField(this.field)
        },
        copyButtonTitleValue() {
            return copyButtonTitle(this.field)
        },
        copyFieldValue() {
            return copyValue(this.field)
        },
        shouldShowButton() {
            if (this.field.show_button_on_hover) {
                return this.hover
            }

            return true
        }
    }
}
</script>
