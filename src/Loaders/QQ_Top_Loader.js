const querystring = require("querystring");
const https = require('https');
const tokenCache = require('../TokenCache');

function getTop(params, callback) {
    let query = {
        tpl: '3',
        page: 'detail',
        date: params.date,
        topid: params.topid, //可能是榜单id 4/26
        type: 'top',
        song_begin: params.song_begin || '1',//开始
        song_num: params.song_num || '30', //取几条
        g_tk: tokenCache.getGtk,
        loginUin: '0',
        hostUin: '0',
        format: 'json',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: '0',
        platform: 'yqq',
        needNewCode: '0'
    }

    url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?" + querystring.stringify(query);

    https.get(url, function (req, res) {
        var html = '';
        req.on('data', function (data) {
            html += data;
        });
        req.on('end', function () {
            let data = JSON.parse(html);
            data.topid = params.topid;
            callback(data);
        });
    });
}

module.exports = getTop;

// getTop({
//     topid: 4,
//     date: "2017-08-31",
//     song_begin: 0,
//     song_num: 10
// }, data => {
//     console.log(data)
// });