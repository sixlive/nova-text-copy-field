<template>
  <div>
    <div v-show="isNotDirty">
      <clipboard
        :value="value"
        @success="handleSuccess"
        @error="handleError"
      />
    </div>

    <div v-show="success">
      <success-icon />
    </div>

    <div v-show="error">
      <error-icon />
    </div>
  </div>
</template>

<script>
import Clipboard from './Clipboard'
import SuccessIcon from './Icons/Success'
import ErrorIcon from './Icons/Error'

export default {
  components: {
    Clipboard,
    SuccessIcon,
    ErrorIcon
  },
  props: ['value'],
  data () {
    return {
      success: false,
      error: false
    }
  },
  computed: {
    isNotDirty () {
      return !this.success && !this.error
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
  }
}
</script>
