const {
  contextBridge,
  ipcRenderer,
} = require('electron');

contextBridge.exposeInMainWorld('ipcRenderer', {
  send: ipcRenderer.send,
  invoke: ipcRenderer.invoke,
});
