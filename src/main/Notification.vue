<template>
    <div v-if="showNotification"
      class="fixed bottom-0 right-0 p-4 m-4 rounded-md bg-green-500 text-white">
      {{ message }}
    </div>
  </template>

<script>
export default {
  data() {
    return {
      showNotification: false,
      message: ''
    }
  },
  methods: {
    show(message) {
      this.showNotification = true;
      this.message = message;
    },
    hide() {
      this.showNotification = false;
      this.message = '';
    }
  }
}
</script>