let uid, guid, cid, g_tk; //QQ账号

cid = "205361747";
g_tk = "931653289";
uid = "350874218";
guid = "7777758900";

const cache = {
    getCid() {
        return cid;
    },
    getUid() {
        return uid;
    },
    getGuid() {
        return guid;
    },
    getGtk() {
        return g_tk;
    }
}

module.exports = cache;