<template>
  <div>
    <Header/>
    <h3>App1 in Vue 2</h3>
    <Content :count="count"/>
    <Button @btnClick="inc"/>
  </div>
</template>

<script>
import Content from "./components/Content";
import Button from './components/Button';
import Header from './components/Header'

export default {
  components: {
    Content,
    Button,
     Header,
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    inc() {
      this.count++;
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
