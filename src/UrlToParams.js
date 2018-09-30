const querystring = require("querystring");

let url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2017-08-31&topid=4&type=top&song_begin=30&song_num=30&g_tk=516198774&jsonpCallback=MusicJsonCallbacktoplist&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0";

let map = querystring.parse(url);

console.log(map)