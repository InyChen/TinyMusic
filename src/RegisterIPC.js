const { ipcMain } = require('electron')
const loadMap = {
    "QQ_TOP": "./Loaders/QQ_Top_Loader",         //QQ巅峰榜单
    "QQ_SEARCH": "./Loaders/QQ_Search_Loader",   //QQ搜索
    "QQ_Album": "./Loaders/QQ_Album_Loader",     //QQ获取专辑
    "QQ_PLAY": "./Loaders/QQ_Play_Loader",       //QQ获取播放路径
    "QQ_LRC": "./Loaders/QQ_Lrc_Loader",         //QQ获取Lrc歌词
}

function register() {

    //加载信息类统一入口
    ipcMain.on('load', (event, loaderName, params) => {
        let loader = loadMap[loaderName];
        if (loader) {
            let loaderFunc = require(loader);
            loaderFunc(params, rs => {
                event.sender.send('resLoad', loaderName, rs);
            });
        } else {
            event.sender.send('resLoad', loaderName, {
                returnCode: -1,
                returnMsg: "未找到Loader"
            });
        }
    })
}

module.exports = register;