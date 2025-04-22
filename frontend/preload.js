// preload.js
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Expose safe APIs here if needed
});