webpackJsonp([1],{"/DBc":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC7ElEQVRYhe2YTWxMURiGvzOKVqU//iJIBEUstCJEJI20kVhILUTSWIgIGyyEZWMjokJsRCIshKWIhYVVmyINEon/37BgIWi0/ha0ScvzWvSb5GrHdGbuvWHRd3Pu5J73/Z5z5t4z54zZuOIplGKSVCupPoSwVNJsMys3s+8hhA+SXoQQnoUQ+pNFLUBAC3AZ+K48AnqB85Ia49YsaAYlNUk6GkJY6597zOyGmT00s/chhAFJU81svpmtMrOmEEKN971qZm2ZTOZ5XNicAtojM9MJtEgqH2NA1cA24L77BoHdiYJJmgBc8gJ9QGsJGQHYB/zyMR5LDBC46HAPgQUxs9YAPZ53OAm4gx72FJgWO3A4cxnQ57lb4gQ1MKyvcWcuR3azA36SNKPUkC5/XnYkCRfJP+GQJ0sxr3bzoxTYsjWqgM/AADCrWPNpB9yeEl+2znGvs7dgk6Qy4K2PLJEX428CVjpgRzGmOjfdTJHNzMwkTQR6JX0DKvL1LYtcL/I2tecvqxDCEPDczJrMbI6Zvf5b3yhg9rXvSQ/tD33wtjZfp7Ic1z9TwRmtwRwMoxS9+cPbqlRwRqva27z7xijgO28XpoIzWnWSZGYfC+oNTPdt0RtJJe20CxUwExgCXhVVC+j2paYhRT4DWr3OmWKNe9x4KiW2bJ1rXqe5KKMfhr4B/cC8NOAkNTrcE0mZogOANg+4kgJcGfDY8zeVGjIJeOYhB5IEBM4mMnigHuj3sJ0JwR2JHCHir7XAxshh51CMnErgXORkeF3ShNiAHr4B+OLB3cC6Iv2bgZfuf+BwArrG2sUUU6QO6IjOALALWAxMjvaVNAVYDuyXdC/iuQBU+lG2K3FIB90K3FVEwEefmTvA4+xsR+53AutH5FSkBmk2vI4B7f6V90ZgAN4DHX5sXZFnsOlCRmDL/Xd1rqQZkiYW6h0BeU3SlFQg42gcMimNgLyl4T9F/y855G0/9i751zw5JakGWDR2z3EVrt9inMRQhzgbmgAAAABJRU5ErkJggg=="},"/KFX":function(t,s,e){"use strict";function a(t){e("UXWj")}var n=e("AHJT"),i=e("i2tG"),r=e("VU/8"),A=a,o=r(n.a,i.a,A,"data-v-a224c99c",null);s.a=o.exports},"0d/v":function(t,s,e){"use strict";s.a={state:{song:null,currentTime:0,totalTime:0,lrcList:[],album:null,url:"",playList:[]},mutations:{PLAY:function(t,s){t.playList.includes(s)||t.playList.push(s),t.song=s;var e=window.require("electron"),a=e.ipcRenderer;a.send("load","QQ_PLAY",{mid:s.mid}),a.send("load","QQ_Album",{albummid:s.album.mid}),a.send("load","QQ_LRC",{mid:s.mid})},ON_PLAY:function(t,s){t.currentTime=s.currentTime,t.totalTime=s.totalTime},QQ_PLAY:function(t,s){t.url=s},QQ_Album:function(t,s){t.album=s},QQ_LRC:function(t,s){s&&(t.lrcList=s.split("\n"))}}}},"3DD7":function(t,s){},"6PHD":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header",style:{background:t.header_background,borderBottom:t.header_border_bottom}},[a("div",{staticClass:"band"},[t._v("TinyMusic")]),t._v(" "),a("div",{staticClass:"nav"},[a("div",{staticClass:"nav-back nav-active",on:{click:t.goBack}}),t._v(" "),a("div",{staticClass:"nav-forward nav-active",on:{click:t.goForward}})]),t._v(" "),a("div",{staticClass:"search"},[a("input",{staticClass:"input",attrs:{placeholder:"搜索音乐,歌手,歌词"},on:{input:t.onInput}}),t._v(" "),a("img",{staticClass:"search-icon",attrs:{src:e("/DBc")},on:{click:t.search}})]),t._v(" "),a("div",{staticClass:"tools"},[a("div",{staticClass:"tools-themes",on:{click:t.changeTheme}},[a("img",{staticClass:"tools-themes-icon",attrs:{src:e("Z2r6")}})]),t._v(" "),a("div",{staticClass:"tools-split"}),t._v(" "),a("div",{staticClass:"tools-min",on:{click:t.min}}),t._v(" "),a("div",{staticClass:"tools-max",on:{click:t.max}}),t._v(" "),a("div",{staticClass:"tools-close",on:{click:t.close}})])])},n=[],i={render:a,staticRenderFns:n};s.a=i},"7M+6":function(t,s,e){"use strict";s.a={state:{topList:[{topid:4,name:"流行指数",dateType:"date",songList:[]},{topid:26,name:"热歌",dateType:"week",songList:[]},{topid:27,name:"新歌",dateType:"week",songList:[]}]},mutations:{GET_TOP:function(t,s){window.require("electron").ipcRenderer.send("load","QQ_TOP",s)},QQ_TOP:function(t,s){s.topid&&s.songlist&&t.topList.forEach(function(t){t.topid==s.topid&&(t.songList=s.songlist)})}}}},"971J":function(t,s){},AHJT:function(t,s,e){"use strict";var a=e("NYxO");s.a={name:"search",data:function(){return{}},computed:e.i(a.a)({keyword:function(t){return t.Search.keyword},curnum:function(t){return t.Search.curnum},curpage:function(t){return t.Search.curpage},totalnum:function(t){return t.Search.totalnum},songList:function(t){return t.Search.songList}}),methods:{prevPage:function(){this.curpage>=1&&this.$store.commit("SEARCH",this.curpage-1)},nextPage:function(){this.curnum>0&&this.$store.commit("SEARCH",this.curpage+1)},play:function(t){this.$store.commit("PLAY",t)}},created:function(){}}},FRMc:function(t,s){},FlWB:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"lrc"},[t._v("\n  "+t._s(t.totalTime)+"-"+t._s(t.currentTime)+"\n  "),t._l(t.lineList,function(s,a){return e("div",{key:s.time,staticClass:"lrc-line",class:{"lrc-line-active":a==t.currentLineIndex}},[t._v("\n    "+t._s(s.text)+"\n  ")])})],2)},n=[],i={render:a,staticRenderFns:n};s.a=i},HCTz:function(t,s,e){"use strict";s.a={name:"header",data:function(){return{}},computed:{header_background:function(){return this.$store.state.Colors.header_background},header_border_bottom:function(){return this.$store.state.Colors.header_border_bottom}},methods:{onInput:function(t){this.$store.commit("KEYWORD_CHANGE",t.target.value)},search:function(){"/search"!=this.$router.history.path&&this.$router.push("search"),this.$store.commit("SEARCH")},min:function(){window.require("electron").remote.getCurrentWindow().minimize()},max:function(){var t=window.require("electron").remote,s=t.getCurrentWindow();s.isMaximized()?s.unmaximize():s.maximize()},close:function(){window.require("electron").remote.getCurrentWindow().close()},goBack:function(){this.$router.go(-1)},goForward:function(){this.$router.go(1)},changeTheme:function(){this.$store.commit("CHANGE_THEME")}},created:function(){}}},HPzs:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("MainHeader"),t._v(" "),e("div",{staticClass:"body"},[e("router-view"),t._v(" "),e("router-view",{attrs:{name:"sidebar"}})],1),t._v(" "),e("MainFooter"),t._v(" "),t.coverList&&t.coverList.length>0?e("div",{staticClass:"cover"},[e("transition-group",{attrs:{name:"list"}},t._l(t.coverList,function(t){return e("img",{key:t,attrs:{src:t}})}))],1):t._e()],1)},n=[],i={render:a,staticRenderFns:n};s.a=i},IcnI:function(t,s,e){"use strict";var a=e("7+uW"),n=e("NYxO"),i=e("7M+6"),r=e("Wo6r"),A=e("rkqq"),o=e("aKJ6"),c=e("0d/v"),l=e("j9w6");a.a.use(n.b);var u=new n.b.Store({state:{},mutations:{},modules:{Main:i.a,SideBar:A.a,Search:o.a,Player:c.a,Colors:r.a},plugins:[l.a]});s.a=u},JA1j:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrklEQVRoge2YzUrEQBCEAy57030izfoq4kV8GlkUdTX+7GtKlZcEwjBZ8tPT0xP6O+bQU0UVyaSrynEcx3HKAkBNcptbxxAkNyT3IsMA3JMkgJPIwAQA+Gg1Pi4dVLMHgC8hjWIAeAs03s4eRnJH8tuqaQCvgbYGwJXE4E9rpiNmj9IHmDEdqbGs2d5B2U0nTzZyYJPLtLrZ3sHqSavV+IwANdPZko0ISV5vM2Z7gpIlnb3GQ6QwbS7ZEMl6mzfbIZG02RoPscR0McmGzKl3sWY7piRdXI2HGGO6+GRDztV7dWY7Ikm/AHgKnr3n1ilKaHqVyYYAeI6YPWhq2GgeVlXVX+TZhbIGHcIX1NhPVpFE3saHsN6rMX3uUmFhRybKmO/sakxPuVTkXAyKMOduXGzSS66LxZmWuBsXU2/JXzzzSaf46zFrOuUvnrl6a2wqzCSt+fOePekcm4pspnMu3NTrbWEHpZa0BbM9LWlNW9wbJ6k3gEsAR2tmOyJJ/5LcLRlYWzXbETF9s3TgQzuoEdIoDoCfVuOdyECSe5LaG87RkNwCuM6tw3Ecx3Em8g/YgVNyUGY8fQAAAABJRU5ErkJggg=="},K9Tq:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABXklEQVRYhe2WvUoDURCFz0yMoC8gIgQsBbEVGxufQbCwFCJoZ2HtA2hpodjZWQs2Ym+hIJaijUKsLP0Bz7FJsTF7ryS7yaLer7zDnfl2Z3cYIJFIJP43FgqQnAYwORQJs5aZ3fd0ieS+hgTJg5DHSMSx3tMTFSNYKyZ4LekCwGf5Ph3UAFwNuEYi8XeJDeotAMtD8jhx9928QGzMzJjZ/ICEOpB0G4rFBN8H4NJzrViLpwBMoNxB/QbAAYxmzmoAnt39qcQ6/SGpISnWtWohuU3yRlKjapdcSDbb28sjycWqfboguZ5ZsT5Irv10J/g9kFwAMIfiP0kNwJ27n2cPzawO4JDkrJntmNlLT1lJHpW4kJ61czYD8aWQR+yPCo6gPsjNJakFYPX7280SEzyV9IriLXbkLKSSLgGsuPtDwfzlQXKz3dJjkmNV+3RBcoPkXtUeQSSNV+2QSCQSv40vkMNbSA5gF3EAAAAASUVORK5CYII="},M93x:function(t,s,e){"use strict";function a(t){e("o3ee")}var n=e("xJD8"),i=e("HPzs"),r=e("VU/8"),A=a,o=r(n.a,i.a,A,null,null);s.a=o.exports},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n=e("M93x"),i=e("YaEn"),r=e("IcnI"),A=e("a/Dg");e.n(A);a.a.config.productionTip=!1,new a.a({el:"#app",router:i.a,store:r.a,template:"<App/>",components:{App:n.a}})},O7Uz:function(t,s,e){"use strict";function a(t){e("V1kt")}var n=e("x9AJ"),i=e("FlWB"),r=e("VU/8"),A=a,o=r(n.a,i.a,A,"data-v-5f425e03",null);s.a=o.exports},Owch:function(t,s){},PmVp:function(t,s,e){"use strict";function a(t){e("971J")}var n=e("zvck"),i=e("VG38"),r=e("VU/8"),A=a,o=r(n.a,i.a,A,"data-v-c770e1bc",null);s.a=o.exports},SDdg:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"footer",style:{background:t.footer_background,borderTop:t.footer_border_top}},[a("audio",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{id:"__player"}}),t._v(" "),a("div",{staticClass:"control-left"},[a("div",{staticClass:"controll-prev"}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.playing,expression:"!playing"}],staticClass:"controll-play",on:{click:t.play}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.playing,expression:"playing"}],staticClass:"controll-pause",on:{click:t.pause}}),t._v(" "),a("div",{staticClass:"controll-next",on:{click:t.next}})]),t._v(" "),a("div",{staticClass:"range"},[a("div",{staticClass:"range-now"},[t._v(t._s(t.formatTime(t.playedTime)))]),t._v(" "),a("div",{staticClass:"range-input-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.percent,expression:"percent"}],staticClass:"range-input",style:{background:"-webkit-linear-gradient("+t.player_process+", "+t.player_process+") no-repeat, #333",backgroundSize:t.percent+"% 100%"},attrs:{type:"range"},domProps:{value:t.percent},on:{mousedown:function(s){t.isDrag=!0},mouseup:t.finishDrag,__r:function(s){t.percent=s.target.value}}})]),t._v(" "),a("div",{staticClass:"range-total"},[t._v(t._s(t.formatTime(t.totalTime)))])]),t._v(" "),a("div",{staticClass:"control-right"},[a("div",{staticClass:"volumn"},[a("div",{staticClass:"volumn-icon",class:{"volumn-icon-muted":t.muted},on:{click:t.mute}}),t._v(" "),a("input",{staticClass:"volumn-input",style:{background:"-webkit-linear-gradient("+t.player_process+", "+t.player_process+") no-repeat, #333",backgroundSize:t.volumn+"% 100%"},attrs:{value:"50",type:"range"},on:{input:t.volumnChange}})]),t._v(" "),a("div",{staticClass:"mode",on:{click:t.changeMode}},[a("div",{class:"mode-icon-"+t.playMode})]),t._v(" "),a("div",{staticClass:"playlist"},[a("img",{staticClass:"playlist-icon",attrs:{src:e("K9Tq")},on:{click:function(s){t.showPlayList=!t.showPlayList}}}),t._v(" "),a("div",{staticClass:"playlist-num"},[t._v(t._s(t.playList.length))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showPlayList,expression:"showPlayList"}],staticClass:"playlist-list"},[a("div",{staticClass:"playlist-title"},[a("img",{staticClass:"playlist-close",attrs:{src:e("JA1j")},on:{click:function(s){t.showPlayList=!1}}})]),t._v(" "),t.playList&&0!=t.playList.length?t._e():a("div",{staticClass:"playlist-empty"},[t._v("\n          播放列表是空的,快去添加吧~\n        ")]),t._v(" "),t._l(t.playList,function(s){return a("div",{key:s.mid,staticClass:"playlist-item",class:{"playlist-item-playing":t.song==s},on:{click:function(e){t.playSong(s)}}},[a("img",{staticClass:"playlist-item-icon",attrs:{src:e("U/Vr")}}),t._v(" "),a("div",{staticClass:"playlist-item-name"},[t._v(t._s(s.name))]),t._v(" "),a("div",{staticClass:"playlist-item-singer"},[t._v(t._s(s.album.name))]),t._v(" "),a("div",{staticClass:"playlist-item-time"},[t._v(t._s(t.formatSinger(s.singer)))])])})],2)])])])},n=[],i={render:a,staticRenderFns:n};s.a=i},SG9h:function(t,s,e){"use strict";s.a={name:"sidebarplayer",data:function(){return{}},computed:{album:function(){return this.$store.state.Player.album},song:function(){return this.$store.state.Player.song}},methods:{formatSinger:function(t){var s="";return t.forEach(function(t){s="/"+t.name}),s.substring(1)},max:function(){"/player"!=this.$router.history.path&&this.$router.push("player")}}}},Sxru:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIEAYAAAD9yHLdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAABqFJREFUeNrt3T1uFEkAhuGuERE5+AzcgBABCRBxDm5Agp2QA+IQiAAkJByABHfAESmRISCC0L1Be3bZEbbHNdVdf8+TlNpOPo+D123LPWEAijGejCfjyfv3QxjCEO7dy70HzrPKPQCAOgkIAFEEBIAoAgJAFAEBIIqAABBFQACIIiAARBEQAKIICABRBASAKAICQBQBASCKgAAQRUAAiCIgAEQREACiCAgAUQQEgCgCAkAUAQEgioAAEEVAAIgiIABEERAAoggIAFEEBIAoV3IPAP4QhjCEw8Pp4tu33HPK9vDhdF67lntJr0LuAQDbGsdxHMf9/enqyZPce3onIEDxhKNMAgIUSzjKJiBAcYSjDgICFEM46iIgQHbCUScBAbIRjroJCLA44WiDgACLEY62CAgwO+Fok4AAsxGOtgkIkJxw9EFAgGSEoy8CAuxMOPokIEA04eibgACXJhwMg4AAlyAc/ElAgAsJB38jIMCZhIPzrHIPAMojHCkcH+deMDcBAf4lHCmsX79Xr3IvmZuAAMKRxP5+CCGEcHCQe8lSBAQ6Jhwp9BeONQGBDglHCv2GY01AoCPCkYJwrAkIdEA4UhCOTQICDROOFITjLAICDRKOFITjIgICDRGOFIRjWwICDRCOFITjsgQEKiYcKQhHLAGBCglHCsKxKwGBighHCsKRioBABYQjBeFITUCgYMKRgnDMRUCgQMKRgnDMTUCgIMKRgnAsRUCgAMKRgnAsTUAgI+FIQThyERDIQDhSEI7cBAQWJBwpCEcpBAQWIBwpCEdpBARmJBwpCEepBARmIBwpCEfpBAQSEo4UhKMWAgIJCEcKwlEbAYEdTOF49Gi6Eo44BwfCUScBgV2MwziMr19PF0dHuefUZX3Hsb5zozYCAjsIq7AKq+/fp5DcuTN9VEjO51dVrRAQSEBItiEcrREQSEhI/kY4WiUgMAMhGQbhaJ+AwIz6DIlw9EJAYAF9hEQ4eiMgsKA2QyIcvRIQyKCNkAhH767kHgA9W4dkPBlPxpO7d4cwhCF8+jR99saN3Pv+zn+Ob+fr1+kHhI8fcy8BOjCF5Pr16REpX76MRfGoFoDilRUS4QCoTt6QCAdA9ZYNiXAANGfekAgHQPPShkQ4ALqzW0iEA6B7lwuJcACw4fyQCAcAF5hCsrc3hWP9nu0AAAAAAAAAAAAAAAAAAAAAAABtmZ619PjxdN66lXsPAIWbgrG///+nvf76NZ23b+feB0Bh/h6OTUICwKntwiEkAJyKC4eQAHQrTTiEBKAb84RDSKBFYXrryw8fcg+Z7yscwhDevg0hhBBevsw9p1TrcExXS7139u/f0/ngwfT9+fw59+sAXMK8P2mW4tmz3K9zqdbhyPv9cUcCNVrlHkAe63BMV0vdcZzl6tXpfPdOSKAeAtKZssKxSUigJgLSibLDsUlIoAYC0ri6wrFJSKBkAtKousOxSUigRALSmLbCsUlIoCQC0oi2w7FJSKAEAlK5vsKxSUggJwGpVN/h2CQkkIOAVEY4ziMksCQBqYRwXIaQwBIEpHDCsYt1SG7ezL0EWiQghRKOFPb3p6f8Pn2aewm0SEAKIxwprMNxcJB7CbRMQAohHCkIByxJQDITjhSEA3IQkEyEIwXhgJwEZGHCkYJwQAkEZCHCkYJwQEkEZGbCkYJwQIkEZCbCkYJwQMkEJDHhSEE4oAYCkohwpCAcUBMB2ZFwpCAcUCMBiSQcKQgH1ExALkk4UhAOaIGAbEk4UhAOaImAXEA4UhAOaJGAnEE4UhAOaJmAbBCOFIQDeiAgp4QjBeGAnnQfEOFIQTigR90GRDhSEA7oWXcBEY4UhAMYhjCeyj1kXs+fT+fPn9MpHHGEA/hPJwE5Pp7Ovb3cS+p0cDCFY33nBtBNQIjjjgM4W3d/A2EbwgFcTED4g3AA2xMQBuEAYghI14QDiCcgXRIOYHcC0hXhANIRkC4IB5CegDRNOID5CEiThAOYn4A0RTiA5QhIE4QDWJ6AVE04gHwEpErCAeQnIFURDqAcAlIF4QDKIyBFEw6gXAJSJOEAyicgRREOoB7e0rYIP35M55s3uZeU7ehoCuyLF7mXAAJCLcZhHMbDw7AKq7C6fz/3HMCvsACIJCAARBEQAKIICABRBASAKAICQBQBASCKgAAQRUAAiCIgAEQREACiCAgAUQQEgCgCAkAUAQEgioAAEEVAAIgiIABEERAAoggIAFEEBIAoAgJAFAEBIIqAABBFQACIIiAARBEQAKL8Aw02mf+7pXW/AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA5LTAxVDE0OjI0OjQ4KzA4OjAwEauX6gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wOS0wMVQxNDoyNDo0OCswODowMGD2L1YAAABjdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uX3F3cGFlZjZ0dGJiYWt5YjkvJUU2JTlDJTgwJUU1JUE0JUE3JUU1JThDJTk2LnN2Z1riiggAAAAASUVORK5CYII="},TNlB:function(t,s){},TVmP:function(t,s,e){"use strict";function a(t){e("TNlB")}var n=e("UthT"),i=e("SDdg"),r=e("VU/8"),A=a,o=r(n.a,i.a,A,"data-v-2df2b9a5",null);s.a=o.exports},"U/Vr":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEvElEQVRYhe2YS2xUZRTHf+e7j2H6JJZWbTtTfMUCkkhEHgYjKl0JGl0YgzHByIqtSowxkZW4ZmVClMQYFyZGYjQmPOrCBRIhMTLQphgJlIdgWzst087cO/c7LmZ4tAztvEo3/rf3O+f+vvOd+91zjrDIUjAXEt6KLLrJEXnJIls8CPLogXR7uFsWA2owGXvIV/tshPSp6CZPZHmjQABkLAjwoAuX8nx2TwDHHqZ1JIytM2KfV+QFq6xpdfABsgo5BZ1lYwCrhAsGeDbhrTKimyNkC7AxbuT+GJADchby89gr4FCIZl2U6ml4IGbz6x3Ykhc2A6taDWKBaYWwRJTKUU2AJxN0ton/Zl60z6qsazS0uhSOLKtga3FeK+Cpbu+NFod9jUbaA70VpXqrKsCBhL+txeH7SCGjdcyTEqrYd6qdJifuDTaLdE0uMByAW6mBifvPtRq6Jmx94AywRMCXgr/pYrrc8F0xIGinUwOaAK5AXArXyISFaSU1pXpUMH9a1XfihiezWiWgWqyaymxuRCkmEALTltGM1WMiejhmpT95MUzdWDvQ7WUaRL6oGrAcCeBJAcoB0hbNKalQtT9Cjtgw+LX3CiOlbB1n5vVUN0CHQoRui9JIRvWYIEdiqkd7hsPT5fixirk9g2oCVAqRapJClLLKqVC1X0UOh/ng+MrLjNbiv2ZAX8BasteFT2Lw7fILwZlagWarakADOGDzyvbHh4Pv6sg0Q1UDugLTyvgSJ/ipnkB3vKdGext6+EC2HjClVBOggDh2Yf92C3IP1lP/A1ah3O05syiAA4l4p2eiDSirA6XTBeOgY6HICVES4WIBnu7x1sSRd1WjbQ1CiyO3+hRBCIFJi520NZVb1Wko6X/sw0cNgjsJpEs0LAIYMAtSLMylgYS/f5nDzjELo3MUusqdnd+8gPoU3tk08cYM+a4rTGGZrOTiG+x2d3W47ByJCmVUJbZyN8CzPe5GUdmqIhuG/tEehZaMRzCYkCFEw+tl9iJDj9ISBbJn0lbXglrQGYCnku4zzWL2AH2NDgQKIXJz576hK1Iho4W6b17lYuubHW3PVEEXF5iy/HET8HTSf79R+HSJYCYsZKMS7ysmSLnHlFe7zEEqnigo0GxgCt3nApxJ+B90OOxNW/i3Tt0agHUYyGlxEFQB3DID1/L83jscfummkv7KJinAhZX3uWKiu5s8cT78/XTC+6HTla1XS5zIbDAXuM+BdEQqjIKXBfKuC7tjcmsuVzYZoKrhaEgw57oo3DEi/sF2h01TCtlZH4yh0DY0mAJD2vJ5WoL31lxmHEAGE/6EIzTPs8E71GpgPNL+FcPhi/Ot/QactUl3F2J2RMrqmOAZAVsYMlmDnjNwKLB6oPdi/rcZGxxM+lFxI2XLAEsNjOV5tfdicLAS2/OJ2COBySexTrMn0XXXOJf+bgv+WnuSsNR6GUh6h5Ya6Rsv84gF6HDgSp6vVg4Hb1UCV41cVD+MkL5GmX9S1VDMlWsRX18dDt5eaDgo8qS6ve1NDvuajLRlFaYtRMWHseKEQICM6rlI2fvYhXD/vYC7CQhwvJO2dtd7zQqvWJWnLXQAUwaGjOgvRsyPJxpyP79+Zu6vtt76Dzv84c9Gf3INAAAAAElFTkSuQmCC"},UXWj:function(t,s){},Uhku:function(t,s,e){"use strict";var a=e("NYxO"),n=e("PJh5"),i=e.n(n);s.a={name:"main",data:function(){return{currentTop:null}},computed:e.i(a.a)({topList:function(t){return t.Main.topList}}),methods:{changeTop:function(t){this.currentTop=t,0==t.songList.length&&this.loadTop()},loadTop:function(){"week"==this.currentTop.dateType?i()().weeks():i()().subtract(1,"days").format("YYYY-MM-DD"),this.$store.commit("GET_TOP",{topid:this.currentTop.topid,date:"",song_begin:0,song_num:10})},formatSinger:function(t){var s="";return t.forEach(function(t){s="/"+t.name}),s.substring(1)},play:function(t){var s=t.data;s.mid=s.songmid,s.name=s.songname,s.album={name:s.albumname,mid:s.albummid,albummid:s.albummid},this.$store.commit("PLAY",s)}},created:function(){this.currentTop=this.topList[0],this.loadTop()}}},UthT:function(t,s,e){"use strict";var a=e("NYxO");s.a={name:"footer",data:function(){return{playing:!1,playedTime:0,totalTime:0,isDrag:!1,percent:0,volumn:50,muted:!1,playMode:"single",playModes:["normal","random","loop","single"],showPlayList:!1,songNameText:"",titleSplashNum:0,splashIndex:null}},computed:e.i(a.a)({playList:function(t){return t.Player.playList},song:function(t){return t.Player.song},lrc:function(t){return t.Player.lrc},album:function(t){return t.Player.album},url:function(t){return t.Player.url},player_process:function(t){return t.Colors.player_process},player_mark:function(t){return t.Colors.player_mark},footer_background:function(t){return t.Colors.footer_background},footer_border_top:function(t){return t.Colors.footer_border_top}}),watch:{song:function(t,s){var e=this;this.songNameText=t.name+"-"+t.album.name,t.singer.forEach(function(t){e.songNameText=e.songNameText+"-"+t.name}),this.splash()},url:function(t){this.$audio.paused||this.$audio.pause(),this.$audio.src=t,this.$audio.play()}},methods:{splash:function(){if(this.splashIndex&&clearTimeout(this.splashIndex),this.songNameText){this.songNameText.length<=this.titleSplashNum?this.titleSplashNum=0:this.titleSplashNum++;var t=this.songNameText.substring(this.titleSplashNum);t=t+"........."+this.songNameText,document.title=t,this.splashIndex=setTimeout(this.splash,500)}else document.title="TinyMusic",this.splashIndex=null},formatTime:function(t){var s=parseInt(t/60)+"",e=parseInt(t-60*s)+"";return s.padStart(2,"0")+":"+e.padStart(2,"0")},formatSinger:function(t){var s="";return t.forEach(function(t){s="/"+t.name}),s.substring(1)},play:function(){this.$audio.src&&this.$audio.play()},next:function(){if(this.$audio.pause(),"single"==this.playMode)this.$store.commit("PLAY",this.song);else if("normal"==this.playMode){var t=this.playList.indexOf(this.song);t<this.playList.length-1&&this.$store.commit("PLAY",this.playList[t+1])}else if("loop"==this.playMode){var s=this.playList.indexOf(this.song);s<this.playList.length-1?this.$store.commit("PLAY",this.playList[s+1]):this.$store.commit("PLAY",this.playList[0])}else if("random"==this.playMode){var e=parseInt(Math.random()*this.playList.length);this.$store.commit("PLAY",this.playList[e])}},playSong:function(t){this.$store.commit("PLAY",t)},pause:function(){this.$audio.pause()},mute:function(){this.muted=!this.muted,this.$audio.muted=this.muted},volumnChange:function(t){var s=t.target.value/100;this.$audio.volume=s,this.volumn=t.target.value},finishDrag:function(){this.$audio.currentTime=this.totalTime*this.percent/100,this.isDrag=!1},changeMode:function(){var t=this.playModes.indexOf(this.playMode);t>=this.playModes.length-1?t=0:t++,this.playMode=this.playModes[t]}},mounted:function(){var t=this;this.$audio=document.getElementById("__player"),this.$audio.addEventListener("play",function(s){t.playing=!0}),this.$audio.addEventListener("pause",function(s){t.playing=!1}),this.$audio.addEventListener("ended",function(s){t.playing=!1,t.next()}),this.$audio.addEventListener("loadedmetadata",function(s){s.target.duration&&(t.totalTime=s.target.duration)}),this.$audio.addEventListener("timeupdate",function(s){s.target.currentTime&&(t.$store.commit("ON_PLAY",{currentTime:s.target.currentTime,totalTime:t.totalTime}),t.playedTime=s.target.currentTime,t.isDrag||(t.percent=100*t.playedTime/t.totalTime))})},beforeDestroy:function(){this.splashIndex&&clearTimeout(this.splashIndex)}}},UwfF:function(t,s,e){"use strict";function a(t){e("bqQE")}var n=e("SG9h"),i=e("mxOA"),r=e("VU/8"),A=a,o=r(n.a,i.a,A,"data-v-0ae49e23",null);s.a=o.exports},V1kt:function(t,s){},VG38:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"menus"},[t._l(t.menuGroups,function(s){return e("div",{key:s.name,staticClass:"menu-group"},[e("div",{staticClass:"menu-group-name"},[t._v(t._s(s.name))]),t._v(" "),t._l(s.menus,function(s){return e("div",{key:s.name,staticClass:"menu-group-item"},[t._v("\n      "+t._s(s.name)+"\n    ")])})],2)}),t._v(" "),e("SideBarPlayer")],2)},n=[],i={render:a,staticRenderFns:n};s.a=i},Wo6r:function(t,s,e){"use strict";var a=[{header_background:"rgba(0,0,0,0.5)",header_border_bottom:"1px solid #333",footer_background:"rgba(0,0,0,0.5)",footer_border_top:"1px solid #333",player_process:"#58B4FB",player_mark:"#fff"},{header_background:"#58B4FB",header_border_bottom:"1px solid #fff",footer_background:"#fff",footer_border_top:"1px solid #fff",player_process:"#58B4FB",player_mark:"#fff"}];s.a={state:{currentTheme:0,header_background:"rgba(0,0,0,0.5)",header_border_bottom:"1px solid #333",footer_background:"rgba(0,0,0,0.5)",footer_border_top:"1px solid #333",player_process:"#58B4FB",player_mark:"#fff"},mutations:{CHANGE_THEME:function(t){t.currentTheme<a.length-1?t.currentTheme++:t.currentTheme=0;var s=a[t.currentTheme];for(var e in s)t[e]=s[e]}}}},"YU+r":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"player"},[t.album?a("div",{staticClass:"player-header"},[a("div",{staticClass:"player-cd"},[a("img",{attrs:{src:t.album.data.cover}})]),t._v(" "),a("img",{staticClass:"player-min",attrs:{src:e("jqI9")},on:{click:t.min}}),t._v(" "),a("div",{staticClass:"player-lrc"},[a("Lrc")],1)]):t._e()])])},n=[],i={render:a,staticRenderFns:n};s.a=i},YaEn:function(t,s,e){"use strict";var a=e("7+uW"),n=e("/ocq"),i=e("s6+2"),r=e("PmVp"),A=e("/KFX"),o=e("rwDq");a.a.use(n.a),s.a=new n.a({routes:[{path:"/",name:"Main",components:{default:i.a,sidebar:r.a}},{path:"/search",name:"Search",components:{default:A.a,sidebar:r.a}},{path:"/player",name:"Player",component:o.a}]})},Z2r6:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAADCklEQVRYhe1ZO2sVQRg9Z+4m+CY2NkIEY25EC+3FShG1sLMUxEoQ/QdW1ja+QAUbe0XBR6GF+Bt8xKgQIYWkMTE+iOQcC3dvJnrHu3NXSYocWPh2duZw5pvdb775Fu4TkqYl3ZQ0hgQktcs+0zX49gGA7Zak8aod/QqMiL9JOtRF3CFJ3zJ49kcCP1TtRUVoex7AZMobEQwgABgmOUhyje3btsdIfiq5Ntu+TXJNxP0BgAAwwfslsl/Z/g5g0YOlWwdtt2pchaTdkl5H409E3jsRtb+WtMt2keIqr47wqL1VRKpNcr6GByu8kHQZwJXyvh09i+1LIYSXGbwguVDZsUDabsUPa+BzPD5hz+WIs03bewGs/V1gP2jF3Ak77lMHAcBdktuA5gL/Fzqv2koV2FmBlSqwg1WBTbEkDi6bij/R9R1kZgz8LyC5IKkTRwvbsyQ3AdgqaTSEMJFB1jMI1+kTQ9IogK0AYHu2AHAHwEmS620/lHS12vR7wfZ+MrX3d/octr2+Jt8QgDMkq/53IGlE0nzdtOgv6dKFyAsX/gHfvO3tRQjhnaRjtq+THK4z0wTWJexs2J4EcJrk+wIAQgiPbe+xfZRk2/YA8r7qFsmn1Q3JR/6VA+Z8dCT5w/Ybkg9IzmSMXUUScRY71HSJST4puQ7aPoD+l/jhkkgi6bCkyYZf3cWI72JDrklJRwCgkDQC4D7JgYzZdsPXhJ0NksO279neWZA8D2AAAGxPALiWGahP9ehzi+TzmnxVoN5BcsD2eUiaKd06J2lHHaKI8Hi0LKlAfTyHU9KopLmSc6Yo92EAmAohvM0UuKHGVrchhzOEMCFpCkCb5KYl6ZbzT3X/HP51Ju6ebi2DnhQW063lVFEHqwKbYlVgUzQVGIekVPGoUdj6vfyWS7YxHp+wswJ1earrHgdtD6LejGl7DMDZqG08st9E9jlJz0iOo14K13JUzGQVtd1nCbgc+5HkzqgEPGR7nOSWiLtXCTjGtop7xRTRU+hbYPkb4oak9h/zXxQ5Wvbp+RsihZ9A3ArHZyuuogAAAABJRU5ErkJggg=="},aKJ6:function(t,s,e){"use strict";s.a={state:{keyword:"周杰伦",curnum:0,curpage:0,totalnum:0,songList:[]},mutations:{KEYWORD_CHANGE:function(t,s){t.keyword=s},QQ_SEARCH:function(t,s){s&&(t.curnum=s.song.curnum,t.curpage=s.song.curpage,t.totalnum=s.song.totalnum,t.songList=s.song.list)},SEARCH:function(t,s){var e=window.require("electron"),a=e.ipcRenderer;t.keyword&&a.send("load","QQ_SEARCH",{keyword:t.keyword,page:s})}}}},bqQE:function(t,s){},i2tG:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page"},[e("div",{staticClass:"search-title"},[t._v('\n    查询"'+t._s(t.keyword)+'"相关结果:'+t._s(t.totalnum)+"条,当前第"+t._s(t.curpage)+"页,当前页:"+t._s(t.curnum)+"条\n    "),e("a",{on:{click:t.prevPage}},[t._v("上一页")]),t._v(" "),e("a",{on:{click:t.nextPage}},[t._v("下一页")])]),t._v(" "),e("div",{staticClass:"search-rs"},t._l(t.songList,function(s){return e("div",{key:s.mid,staticClass:"search-item",on:{click:function(e){t.play(s)}}},[e("div",{staticClass:"song-name"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"song-album"},[t._v(t._s(s.album.name))])])}))])},n=[],i={render:a,staticRenderFns:n};s.a=i},j9w6:function(t,s,e){"use strict";var a=function(t){window.require("electron").ipcRenderer.on("resLoad",function(s,e,a){a&&t.commit(e,a)})};s.a=a},jqI9:function(t,s){t.exports="data:image/png;base64,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"},mxOA:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.song&&t.album?a("div",{staticClass:"player"},[a("div",{staticClass:"player-cover"},[a("img",{staticClass:"player-cover-img",attrs:{src:t.album.data.cover}}),t._v(" "),a("div",{staticClass:"player-cover-max",on:{click:t.max}},[a("img",{staticClass:"player-cover-maxicon",attrs:{src:e("Sxru")}})])]),t._v(" "),a("div",{staticClass:"player-info"},[a("div",{staticClass:"player-name"},[t._v(t._s(t.song.name))]),t._v(" "),a("div",{staticClass:"player-singer"},[t._v(t._s(t.formatSinger(t.song.singer)))])])]):t._e()},n=[],i={render:a,staticRenderFns:n};s.a=i},o3ee:function(t,s){},rkqq:function(t,s,e){"use strict";s.a={state:{menuGroups:[{name:"推荐",menus:[{name:"发现音乐"},{name:"私人FM"},{name:"MV"},{name:"朋友"}]},{name:"我的音乐",menus:[{name:"本地音乐"},{name:"私人FM"},{name:"MV"},{name:"朋友"}]}]}}},rwDq:function(t,s,e){"use strict";function a(t){e("3DD7")}var n=e("yFA6"),i=e("YU+r"),r=e("VU/8"),A=a,o=r(n.a,i.a,A,"data-v-56328beb",null);s.a=o.exports},"s6+2":function(t,s,e){"use strict";function a(t){e("FRMc")}var n=e("Uhku"),i=e("voJq"),r=e("VU/8"),A=a,o=r(n.a,i.a,A,"data-v-7b42df43",null);s.a=o.exports},teIl:function(t,s,e){"use strict";function a(t){e("Owch")}var n=e("HCTz"),i=e("6PHD"),r=e("VU/8"),A=a,o=r(n.a,i.a,A,"data-v-4f251d97",null);s.a=o.exports},uslO:function(t,s,e){function a(t){return e(n(t))}function n(t){var s=i[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}var i={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id="uslO"},voJq:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page main"},[e("div",{staticClass:"top-list"},t._l(t.topList,function(s){return e("div",{key:s.topid,staticClass:"top-item",class:{"top-item-active":t.currentTop==s},on:{click:function(e){t.changeTop(s)}}},[t._v("\n      "+t._s(s.name)+"\n    ")])})),t._v(" "),e("div",{staticClass:"top-songs"},t._l(t.currentTop.songList,function(s){return e("div",{key:s.data.strMediaMid,staticClass:"top-song",on:{click:function(e){t.play(s)}}},[e("img",{staticClass:"top-song-icon",attrs:{src:"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+s.data.albummid+".jpg?max_age=2592000"}}),t._v(" "),e("div",{staticClass:"top-song-name"},[t._v(t._s(s.data.songname))]),t._v(" "),e("div",{staticClass:"top-song-singer"},[t._v(t._s(t.formatSinger(s.data.singer)))]),t._v(" "),e("div",{staticClass:"top-song-album"},[t._v(t._s(s.data.albumname))])])}))])},n=[],i={render:a,staticRenderFns:n};s.a=i},x9AJ:function(t,s,e){"use strict";s.a={name:"lrc",data:function(){return{lineList:[]}},computed:{totalTime:function(){return this.$store.state.Player.totalTime},currentTime:function(){return this.$store.state.Player.currentTime},lrcList:function(){return this.$store.state.Player.lrcList},currentLineIndex:function(){for(var t=0;t<this.lineList.length;t++){if(this.lineList[t].time>this.currentTime)return t-1}return-1}},watch:{currentLineIndex:function(t){t>0&&(this.$el.style.transform="translateY(-"+(30*t-120)+"px)")}},created:function(){var t=this;this.lrcList.forEach(function(s){var e=s.match(/\[[a-zA-Z]*:(.*)\]/);if(e)t.lineList.push({time:0,text:e[1]});else if(e=s.match(/\[([0-9:]*):(.*)\](.*)/)){var a=parseInt(e[1]),n=parseFloat(e[2]),i=e[3];i&&t.lineList.push({time:60*a+n,text:i})}})}}},xJD8:function(t,s,e){"use strict";var a=e("teIl"),n=e("TVmP");s.a={name:"app",components:{MainHeader:a.a,MainFooter:n.a},data:function(){return{coverList:[]}},computed:{album:function(){return this.$store.state.Player.album}},watch:{album:function(t,s){this.coverList.push(t.data.cover),this.coverList.length>1&&this.coverList.shift()}}}},yFA6:function(t,s,e){"use strict";var a=e("O7Uz");s.a={name:"player",data:function(){return{}},computed:{album:function(){return this.$store.state.Player.album},song:function(){return this.$store.state.Player.song}},components:{Lrc:a.a},methods:{min:function(){this.$router.go(-1)}}}},zvck:function(t,s,e){"use strict";var a=e("UwfF");s.a={name:"sidebar",data:function(){return{}},computed:{menuGroups:function(){return this.$store.state.SideBar.menuGroups}},components:{SideBarPlayer:a.a}}}},["NHnr"]);