const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')

let lrcWindow;

function createLrcWin() {
    if (lrcWindow) {
        return lrcWindow;
    }
    let screen = require('electron').screen;
    var size = screen.getPrimaryDisplay().workAreaSize;
    lrcWindow = new BrowserWindow({
        x: size.width - 800,
        y: size.height - 60,
        width: 800,
        height: 60,
        frame: false,
        transparent: true,
        skipTaskbar: true,
        alwaysOnTop: true,
        resizable: false,
        // background: "#00000000"
    })
    // 加载应用的 index.html。
    let lrcUrl = url.format({
        pathname: path.join(__dirname, '../lrc.html'),
        protocol: 'file:'
    });

    lrcWindow.loadURL(lrcUrl);
    // lrcWindow.webContents.openDevTools()

    ipcMain.on('lrc-change', (event, lrc) => {
        console.log(lrc);
        lrcWindow.webContents.send('lrc-change', lrc);
    })

    ipcMain.on('lrc-unlock', (event, lrc) => {
        lrcWindow.webContents.send('lrc-unlock');
    })
    return lrcWindow;
}

module.exports = createLrcWin;