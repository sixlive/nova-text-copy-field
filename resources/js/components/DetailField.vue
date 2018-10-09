<template>
    <panel-item :field="field">
        <div slot="value" class="flex">
            <div class="flex-no-shrink">{{ field.value }}</div>
            <copy-button :value="field.value" class="w-4 mx-3" />
        </div>
    </panel-item>
</template>

<script>
import CopyButton from './CopyButton'

export default {
    props: ['resource', 'resourceName', 'resourceId', 'field'],
    components: {
       CopyButton
    }
}
</script>
