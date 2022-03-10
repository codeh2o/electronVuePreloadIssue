<template>
  <div class="wrapper">
    <golden-layout class="hscreen">
      <gl-col>
        <gl-row>
          <gl-stack :width="15">
          <gl-component title="模型浏览器" >
            <ExploreWindow></ExploreWindow>
          </gl-component>
          </gl-stack>
          <gl-stack>
            <gl-component title="未命名模型-1">
              <Blockly></Blockly>
            </gl-component>
            <gl-component title="未命名模型-2">
              <h1>Component 3</h1>
            </gl-component>
          </gl-stack>
          <gl-component title="数据" :width="20">
            <h1>Component 1</h1>
          </gl-component>
        </gl-row>
        <gl-row :height="20">
          <gl-stack>
            <gl-component title="输出" :closable="false">
              <h1>Component 1</h1>
            </gl-component>
            <gl-component title="结果" :closable="false">
              <h1>Component 1</h1>
            </gl-component>
          </gl-stack>
        </gl-row>
      </gl-col>
    </golden-layout>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import 'golden-layout/src/css/goldenlayout-light-theme.css';
import Blockly from './blockly/Blockly.vue';
import ExploreWindow from './exploreWindow/ExploreWindow.vue';
import '@/utils/custom-dialog';

export default {
  name: 'Home',
  components: {
    Blockly,
    ExploreWindow,
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

<style lang="stylus">
.wrapper {
  height: 100vh;

  .hscreen {
    width: 100vw;
    height: 100vh;
  }
}

</style>
