const { contextBridge, ipcRenderer } = require('electron')


contextBridge.exposeInMainWorld('electronAPI', {
    handleChangeName: (callback) => ipcRenderer.on('change-name', callback)
  })