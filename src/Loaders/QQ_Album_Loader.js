const querystring = require("querystring");
const https = require('https');

function loadAlnumInfo(params, cb) {
    let query = {
        albummid: params.albummid,
        loginUin: '0',
        hostUin: '0',
        format: 'json',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: '0',
        platform: 'yqq',
        needNewCode: '0'
    };
    let url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?" + querystring.stringify(query);
    https.get(url, function (req, res) {
        var html = '';
        req.on('data', function (data) {
            html += data;
        });
        req.on('end', function () {
            let rs = JSON.parse(html);
            rs.data.cover = `https://y.gtimg.cn/music/photo_new/T002R300x300M000${params.albummid}.jpg?max_age=2592000`;
            cb(rs);
        });
    });
}

// loadAlnumInfo("000f01724fd7TH");

module.exports = loadAlnumInfo;