<template>
  <div>
    {{ title }}
    <div>
    <h4> count: {{ count }} </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ['count'],
  data() {
    return {
      title: "App1 Content is loaded (Provider componnet)",
    };
  },
};
</script>

<style>
div {
  font-family: Arial, Helvetica, sans-serif;
}
</style>