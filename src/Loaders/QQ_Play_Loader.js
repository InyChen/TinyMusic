const querystring = require("querystring");
const https = require('https');
const tokenCache = require('../TokenCache');

function getDownLoadUrl(params, callback) {
    let filename = `C400${params.mid}.m4a`;

    let query = {
        g_tk: tokenCache.getGtk(),
        loginUin: '0',
        hostUin: '0',
        format: 'json',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: '0',
        platform: 'yqq',
        needNewCode: '0',
        cid: tokenCache.getCid(),
        uin: tokenCache.getUid(),
        songmid: params.mid,
        filename: filename,
        guid: tokenCache.getGuid()
    }

    url = "https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?" + querystring.stringify(query);

    https.get(url, function (req, res) {
        var html = '';
        req.on('data', function (data) {
            html += data;
        });
        req.on('end', function () {
            let rs = JSON.parse(html);
            let key = rs.data.items[0].vkey;//"443E805BAAB0EA61CB9AAD6A90C03EAD9F92B935842DD85BFC845B0EEF3F5BC9667991D747DCDA0B41F430253C112D4E9B295DEBE87DF4B3";
            url = `http://dl.stream.qqmusic.qq.com/${filename}?vkey=${key}&guid=7777758900&uin=350874218&fromtag=66`;
            callback(url);
        });
    });
}

module.exports = getDownLoadUrl;