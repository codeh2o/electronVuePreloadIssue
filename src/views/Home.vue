<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    We are using Node.js <span id="node-version"></span>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  mounted() {
    // eslint-disable-next-line no-undef
    ipcRenderer.invoke('some-name', {
      data: 'some data',
    })
      .then((result) => {
        console.log(result);
      });
  },
};
</script>
