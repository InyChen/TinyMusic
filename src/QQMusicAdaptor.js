const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')
const getDownloadURL = require('./getDownloadURL')
const getSongList = require('./getSongList')

class QQMusicAdaptor {
    constructor() {
        super();
    }
}

module.exports = QQMusicAdaptor;