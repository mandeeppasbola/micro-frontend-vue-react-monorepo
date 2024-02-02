<template>
  <div>
    {{ title }}
    <div>
       <h4>count: {{ count }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ['count'],
  data() {
    return {
      title: "App2 - Content (in Vue 3)",
    };
  },
};
</script>

<style>
div {
  font-family: Arial, Helvetica, sans-serif;
}
</style>