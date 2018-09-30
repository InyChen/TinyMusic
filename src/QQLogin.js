const { app, BrowserWindow, ipcMain } = require('electron')

const loginWin;

const QQLogin = {
    show() {
        if (!loginWin) {
            loginWin = new BrowserWindow({
                width: 1200,
                height: 800,
                webPreferences: {
                    nodeIntegration: false,
                    preload: path.join(__dirname, "qqhack.js")
                }
            })
        }

        let keyWord = "周杰伦";
        let playUrl = "https://y.qq.com/portal/search.html#searchid=1&remoteplace=txt.yqq.top&t=song&w=" + encodeURI(keyWord);
        let indexUrl = "https://y.qq.com/";
        let playerURL = "https://y.qq.com/portal/player.html";
        win.loadURL(playUrl);

        // // 打开开发者工具。
        win.webContents.openDevTools()
    }
}