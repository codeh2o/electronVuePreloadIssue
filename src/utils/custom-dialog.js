import Blockly from '@/views/blockly/Blockly.vue';

Blockly.prompt = (a, b, c) => {
  this.promptModalDesc = a; // Message description
  this.promptCallback = c; // Callback function
  this.promptModal.show(); // Show a modal
};
