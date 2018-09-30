const querystring = require("querystring");
const https = require('https');
const tokenCache = require('../TokenCache');

function load(params, callback) {
    let map = {
        ct: '24',
        qqmusic_ver: '1298',
        new_json: '1',
        remoteplace: 'txt.yqq.center',
        searchid: new Date().getTime(),
        t: '0',
        aggr: '1',
        cr: '1',
        catZhida: '1',
        lossless: '0',
        flag_qc: '0',
        p: params.page || '1',//分页
        n: '20',
        w: params.keyword,
        g_tk: tokenCache.getGtk(),
        loginUin: '0',
        hostUin: '0',
        format: 'json',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: '0',
        platform: 'yqq',
        needNewCode: '0'
    };

    let url = "https://c.y.qq.com/soso/fcgi-bin/client_search_cp?" + querystring.stringify(map);

    https.get(url, function (req, res) {
        var html = '';
        req.on('data', function (data) {
            html += data;
        });
        req.on('end', function () {
            let rs = JSON.parse(html);
            callback(rs.data);
        });
    });
}

module.exports = load;