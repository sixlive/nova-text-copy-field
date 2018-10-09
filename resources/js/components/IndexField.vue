<template>
    <span class="flex">
        <div class="flex-no-shrink">{{ field.value }}</div>
        <copy-button :value="field.value" class="w-4 mx-3" />
    </span>
</template>

<script>
import CopyButton from './CopyButton'

export default {
    components: { CopyButton },
    props: ['resourceName', 'field'],
}
</script>
