<template>
  <div>
  <div id="vue2Header"></div>
  <vue2-header/>
    <h3>App2 - Title (in Vue 3)</h3>
    <Content :count="count"/>
    
    <div id="vue2Button"></div>
    <vue2-button @btnClick="inc"/>  
    <Footer/>
  </div>
</template>

<script>
import { ref } from "vue";
import Content from "./components/Content";
import { vue2ToVue3 } from './utils';
import {applyReactInVue} from 'veaury'
import Button from 'vue1App/Button';
import Header from 'vue1App/Header';
import Footer from 'reactApp1/Footer';

export default {
  components: {
    Content, 
    vue2Header: vue2ToVue3(Header, 'vue2Header'),
    vue2Button: vue2ToVue3(Button, 'vue2Button'),
    Footer: applyReactInVue(Footer)
  },
  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };

    return {
      count,
      inc,
    };
  }
};
</script>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
