<template>
    <panel-item :field="field">
        <div slot="value" class="flex">
           <span class="flex-no-shrink">{{ field.value }}</span>
           <span v-if="isNotDirty"><button type="button" class="text-70 appearance-none cursor-pointer hover:text-primary" v-clipboard:copy="field.value" v-clipboard:success="onCopy" v-clipboard:error="onError"><svg class="w-4 mx-4" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="currentcolor" stroke-width="1" fill="none" fill-rule="evenodd"><g id="icon-shape"><path d="M12.9728369,2.59456737 C12.7749064,1.12946324 11.5193533,0 10,0 C8.48064666,0 7.2250936,1.12946324 7.02716314,2.59456737 L5,3 L5,4 L3.99406028,4 C2.89451376,4 2,4.8927712 2,5.99406028 L2,18.0059397 C2,19.1054862 2.8927712,20 3.99406028,20 L16.0059397,20 C17.1054862,20 18,19.1072288 18,18.0059397 L18,5.99406028 C18,4.89451376 17.1072288,4 16.0059397,4 L15,4 L15,3 L12.9728369,2.59456737 Z M5,6 L4,6 L4,18 L16,18 L16,6 L15,6 L15,7 L5,7 L5,6 Z M10,4 C10.5522847,4 11,3.55228475 11,3 C11,2.44771525 10.5522847,2 10,2 C9.44771525,2 9,2.44771525 9,3 C9,3.55228475 9.44771525,4 10,4 Z" id="Combined-Shape"></path></g></g></svg></button></span>
           <span v-if="success"><svg viewBox="0 0 20 20" class="text-success w-4 mx-4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="currentcolor" fill-rule="evenodd"><g id="icon-shape"><polygon id="Path-126" points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon></g></g></svg></span>
           <span v-if="error"><svg class="text-danger w-4 mx-4" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="currentcolor" fill-rule="evenodd"><g id="icon-shape"><polygon id="Combined-Shape" points="10 8.58578644 2.92893219 1.51471863 1.51471863 2.92893219 8.58578644 10 1.51471863 17.0710678 2.92893219 18.4852814 10 11.4142136 17.0710678 18.4852814 18.4852814 17.0710678 11.4142136 10 18.4852814 2.92893219 17.0710678 1.51471863 10 8.58578644"></polygon></g></g></svg></span>
        </div>
    </panel-item>
</template>

<script>
export default {
    props: ['resource', 'resourceName', 'resourceId', 'field'],
    data () {
        return {
            success: false,
            error: false
        }
    },
    methods: {
        onCopy () {
            this.reset()
            this.success = true
        },
        onError () {
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
