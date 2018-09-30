const querystring = require("querystring");
const https = require('https');
const tokenCache = require('../TokenCache');


function loadLrc(params, callback) {
    let query = {
        pcachetime: new Date().getTime(),
        songmid: params.mid,
        g_tk: tokenCache.getGtk(),
        loginUin: '0',
        hostUin: '0',
        format: 'jsonp',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: '0',
        platform: 'yqq',
        needNewCode: '0',
        callback: 'MusicJsonCallback_lrc',
        jsonpCallback: 'MusicJsonCallback_lrc'
    };

    let url = "/lyric/fcgi-bin/fcg_query_lyric_new.fcg?" + querystring.stringify(query);

    https.get({
        hostname: 'c.y.qq.com',
        port: 443,
        path: url,
        method: 'get',
        headers: {
            "REFERER": "https://y.qq.com/portal/search.html#searchid=1&remoteplace=txt.yqq.top&t=song&w="
        }
    }, function (req, res) {
        var html = '';
        req.on('data', function (data) {
            html += data;
        });
        req.on('end', function () {
            function MusicJsonCallback_lrc(rs) {
                let lyric = rs.lyric;
                let lyricStr = new Buffer(lyric, 'base64').toString();
                callback(lyricStr);
            }
            eval(html);
        });
    });
}

module.exports = loadLrc;