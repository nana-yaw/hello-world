const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

const createWindow = () => {
    win = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.on('ready-to-show', () => {
        win.webContents.send('change-name', 'Alex')
      })

    win.loadFile('index.html')
    // Open the DevTools.
    // win.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})