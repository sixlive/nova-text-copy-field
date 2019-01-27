<template>
    <button
        @click.stop="handleClick"
        type="button"
        :ref="identifier"
        :title="title"
        class="text-70 appearance-none outline-none focus:outline-none cursor-pointer">
        <clipboard-icon />
    </button>
</template>

<script>
import shortid from 'shortid'
import Clipboard from 'clipboard'
import ClipboardIcon from './Icons/Clipboard'

export default {
    components: { ClipboardIcon },
    props: ['value', 'title'],
    data () {
        return {
            clipboard: null,
            identifier: null
        }
    },
    created () {
        this.identifier = shortid.generate()
    },
    mounted () {
        const el = this.$refs[this.identifier]
        this.clipboard = new Clipboard(el, {
            text: () => this.value.trim()
        })

        this.clipboard.on('success', this.handleSuccess)
        this.clipboard.on('error', this.handleError)
    },
    beforeDestroy() {
        this.clipboard.destroy()
    },
    methods: {
        handleClick (e) {
            this.$emit('click', e)
        },
        handleSuccess () {
            this.$emit('success')
        },
        handleError () {
            this.$emit('error')
        }
    }
}
</script>
