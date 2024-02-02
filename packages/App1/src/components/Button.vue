<template>
  <button @click="click">App1 button (in Vue 2) </button>
</template>

<script>

export default {
  methods: {
    click() {
      this.$emit("btnClick");
      // vue3 events needs the Camel-Case start with "on"
      this.$emit("onBtnClick");
    }
  }
}
</script>

<style>
button {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #BAF5B2;
  padding: 10px;
}
</style>

