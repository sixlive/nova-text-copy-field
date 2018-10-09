<template>
    <panel-item :field="field">
        <div slot="value" class="flex">
            <div class="flex-no-shrink">{{ field.value }}</div>
            <div class="w-4 mx-4">
                <span v-show="isNotDirty"><copy-button @success="handleSuccess" @error="handleError" :value="field.value" /></span>
                <span v-show="success"><success-icon /></span>
                <span v-show="error"><error-icon /></span>
            </div>
        </div>
    </panel-item>
</template>

<script>
import CopyButton from './CopyButton'
import SuccessIcon from './Icons/Success'
import ErrorIcon from './Icons/Error'

export default {
    components: {
        CopyButton,
        SuccessIcon,
        ErrorIcon
    },
    props: ['resource', 'resourceName', 'resourceId', 'field'],
    data () {
        return {
            success: false,
            error: false,
        }
    },
    methods: {
        handleSuccess () {
            this.reset()
            this.success = true
        },
        handleError () {
            this.reset()
            this.error = true
        },
        reset () {
            setTimeout(() => {
                this.success = false
                this.error = false
            }, 2300)
        }
    },
    computed: {
        isNotDirty () {
            return ! this.success && ! this.error
        }
    }
}
</script>
