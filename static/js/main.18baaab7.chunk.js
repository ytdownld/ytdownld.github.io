(this.webpackJsonpytdl=this.webpackJsonpytdl||[]).push([[0],{31:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(5),c=a.n(r),i=(a(31),a(4)),o=a.n(i),l=a(6),u=a(3),d=a(25),j=a.n(d),m=(a(52),a.p+"static/media/loading.841823b5.svg"),b=a(1);function f(){return Object(b.jsx)("div",{className:"loadingSection",children:Object(b.jsx)("img",{src:m,alt:""})})}a(54);function h(e){var t=e.dark,a=e.switchTheme,n=e.setPref,s=e.showMain,r=e.isSearching;return Object(b.jsxs)("div",{className:"nav",style:r?{pointerEvents:"none"}:{},children:[Object(b.jsxs)("div",{className:"site_title",onClick:s,children:[Object(b.jsx)("span",{children:"Yt"})," downld"]}),Object(b.jsxs)("div",{className:"site_pref",children:[Object(b.jsx)("div",{onClick:a,className:"site_theme ".concat(t?"dark":"")}),Object(b.jsx)("div",{className:"pref",onClick:function(){return n(!0)},children:Object(b.jsx)("i",{className:"ri-settings-6-fill"})})]})]})}var v=a(26);a(55);function O(e){var t=e.value,a=e.onClick;return Object(b.jsx)("div",{onClick:a,className:"switch ".concat(t?"on":"")})}function p(e){var t=e.setPref,a=e.autoDownload,n=e.onAutoDownloadChange,s=e.formatType,r=e.formatTypes,c=e.onFormatChange,i=e.nativeMode,o=e.onNativeModeChange;return Object(b.jsx)("div",{className:"prefModal",children:Object(b.jsxs)("div",{className:"prefContainer",children:[Object(b.jsxs)("div",{className:"prefHeader",children:[Object(b.jsx)("div",{children:"Preferences"}),Object(b.jsx)("button",{onClick:function(){return t(!1)},children:Object(b.jsx)("i",{className:"ri-close-line"})})]}),Object(b.jsxs)("div",{className:"prefList",children:[Object(b.jsxs)("div",{className:"prefItem",children:[Object(b.jsxs)("div",{className:"prefItemInfo",children:[Object(b.jsxs)("div",{className:"prefTitle",children:[Object(b.jsx)("span",{children:"Auto"})," download"]}),Object(b.jsx)("div",{className:"prefDesc",children:"Videos will be automatically downloaded after giving the url."})]}),Object(b.jsx)("div",{className:"prefItemAction",children:Object(b.jsx)(O,{value:a,onClick:n})})]}),Object(b.jsxs)("div",{className:"prefItem ".concat(a?"":"disabled"),children:[Object(b.jsxs)("div",{className:"prefItemInfo",children:[Object(b.jsxs)("div",{className:"prefTitle",children:[Object(b.jsx)("span",{children:"Download"})," Type"]}),Object(b.jsx)("div",{className:"prefDesc",children:"Select which type you want to auto download."})]}),Object(b.jsx)("div",{className:"prefItemAction",children:Object(b.jsx)(v.a,{onChange:function(e){return c(e)},options:r,value:s})})]}),Object(b.jsxs)("div",{className:"prefItem",children:[Object(b.jsxs)("div",{className:"prefItemInfo",children:[Object(b.jsxs)("div",{className:"prefTitle",children:[Object(b.jsx)("span",{children:"Use"})," Native MODE"]}),Object(b.jsx)("div",{className:"prefDesc",children:"You can download video from native player. (By using this option you can save our server resources)"})]}),Object(b.jsx)("div",{className:"prefItemAction",children:Object(b.jsx)(O,{value:i,onClick:o})})]})]})]})})}a(71);function x(e){var t=e.status;return t.showStatus&&Object(b.jsxs)("div",{className:"status ".concat(t.error?"error":""),children:[t.error&&Object(b.jsx)("i",{className:"ri-error-warning-line"}),!t.error&&Object(b.jsx)("i",{className:"ri-information-line"}),Object(b.jsx)("div",{children:t.statusMsg}),Object(b.jsx)("button",{onClick:function(){t.setError(!1),t.setStatusMsg(""),t.setStatus(!1)},children:Object(b.jsx)("i",{className:"ri-close-line"})})]})}function g(e){var t=e.url,a=e.setUrl,n=e.getVideoInfo,s=e.status;return Object(b.jsxs)("div",{className:"searchSection",children:[Object(b.jsx)("i",{className:"ri-youtube-line"}),Object(b.jsxs)("div",{className:"isearchWrapper",children:[Object(b.jsxs)("div",{className:"search",children:[Object(b.jsx)("input",{value:t,onChange:function(e){return a(e.target.value)},onKeyDown:function(e){return n(e)},onPaste:function(e){return n(e)},type:"text",placeholder:"Video Url"}),Object(b.jsx)("button",{className:"searchIco",children:Object(b.jsx)("i",{className:"ri-search-eye-line"})}),Object(b.jsx)("button",{onClick:function(){return a("")},className:"searchClearIco",children:Object(b.jsx)("i",{className:"ri-close-line"})})]}),Object(b.jsx)(x,{status:s})]})]})}a(72),a(73);function N(e){var t=e.resolution,a=e.format,n=e.url,s=e.isVideo,r=e.download,c=e.itag;return Object(b.jsxs)("div",{className:"qualityCard",onClick:function(){return r(n,c)},children:[Object(b.jsx)("div",{className:"downldIco",children:Object(b.jsx)("i",{className:s?"ri-movie-line":"ri-music-fill"})}),Object(b.jsx)("div",{className:"resolution",children:t}),Object(b.jsx)("div",{className:"format",children:a})]})}var w=function(e){var t,a;return e<60?"".concat(e," sec"):(a=Math.floor(e/60))<60?"".concat(a," min").concat(e%60!==0?" ".concat(e%60," sec"):""):(t=Math.floor(a/60),"".concat(t," h").concat(a%60!==0?" ".concat(a%60," min"):"").concat(e%60!==0?" ".concat(e%60," sec"):""))};function y(e){var t=e.url,a=e.setUrl,n=e.getVideoInfo,s=e.videoInfo,r=e.download,c=e.status;return Object(b.jsxs)("div",{className:"videoInfoSection",children:[Object(b.jsxs)("div",{className:"searchWrapper",children:[Object(b.jsxs)("div",{className:"search",children:[Object(b.jsx)("input",{value:t,onChange:function(e){return a(e.target.value)},onKeyDown:function(e){return n(e)},onPaste:function(e){return n(e)},type:"text",placeholder:"Video Url"}),Object(b.jsx)("button",{className:"searchIco",children:Object(b.jsx)("i",{className:"ri-search-eye-line"})}),Object(b.jsx)("button",{onClick:function(){return a("")},className:"searchClearIco",children:Object(b.jsx)("i",{className:"ri-close-line"})})]}),Object(b.jsx)(x,{status:c})]}),Object(b.jsxs)("div",{className:"infoContainer",children:[Object(b.jsxs)("div",{className:"thumbnailContainer",children:[Object(b.jsx)("i",{className:"ri-youtube-line"}),Object(b.jsx)("div",{className:"thumbnail",style:{backgroundImage:"url('".concat(s.thumbnail,"')")}})]}),Object(b.jsxs)("div",{className:"videoInfo",children:[Object(b.jsx)("div",{className:"videoChannel",children:s.channel.name}),Object(b.jsx)("div",{className:"videoTitle",children:s.title}),Object(b.jsxs)("div",{className:"videoDuration",children:[Object(b.jsx)("i",{className:"ri-time-fill"}),w(s.duration)]}),Object(b.jsxs)("div",{className:"availableTitle",children:[Object(b.jsx)("span",{children:"Available"})," Formats"]}),Object(b.jsx)("div",{className:"videoQualityList",children:s.formats.map((function(e,t){return Object(b.jsx)(N,{resolution:e.quality,format:e.format,isVideo:e.hasVideo,url:e.url,download:r,itag:e.itag},t)}))})]})]})]})}var S=a(13),I=a(14),k=[{itag:137,format:"mp4",quality:"1080p",value:"1080pmp4",label:"Video 1080P"},{itag:136,format:"mp4",quality:"720p",value:"720pmp4",label:"Video 720P"},{itag:135,format:"mp4",quality:"480p",value:"480pmp4",label:"Video 480P"},{itag:18,format:"mp4",quality:"360p",value:"360pmp4",label:"Video 360P"},{itag:140,format:"mp3",quality:"0p",value:"128 kbpsmp4",label:"Audio 128kbps"}],C="https://ytdl-api.herokuapp.com",D=/(http:|https:)?\/\/(www\.)?(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/;function M(e){return new Promise((function(t){return setTimeout(t,e)}))}var V=function(e){var t={title:e.videoDetails.title,duration:e.videoDetails.lengthSeconds,thumbnail:e.videoDetails.thumbnails[3].url},a={name:e.videoDetails.author.name,url:e.videoDetails.author.channel_url},n=e.formats.filter((function(e){return null!==e.container&&"webm"!==e.container&&!0===e.hasAudio})).map((function(e){var t=e.hasVideo?e.qualityLabel:"".concat(e.audioBitrate," kbps"),a="mp4"!==e.container||e.hasVideo?e.container:"mp3";return{url:e.url,quality:t,format:a,hasVideo:e.hasVideo,itag:e.itag}})),s=n.filter((function(e){return!e.hasVideo})),r=n.filter((function(e){return e.hasVideo}));return r.sort((function(e,t){return e.itag>t.itag?-1:e.itag<t.itag?1:0})),Object(I.a)(Object(I.a)({},t),{},{channel:a,formats:[].concat(Object(S.a)(r),Object(S.a)(s))})},A=function(){var e=Object(l.a)(o.a.mark((function e(t,a,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.autoDownload){e.next=2;break}return e.abrupt("return",!1);case 2:if(t.formats.find((function(e){return e.itag===a.formatType.itag}))){e.next=6;break}return n("Can't able to start auto download. Reason - preferred format type not found for this video.",!0),e.abrupt("return",!1);case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),T=function(e){var t=document.createElement("a");t.href=e,t.click()},E=function(e){return"".concat(C,"/download?").concat(new URLSearchParams(e).toString())};var P=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(""),c=Object(u.a)(r,2),i=c[0],d=c[1],m=Object(n.useState)(!1),v=Object(u.a)(m,2),O=v[0],x=v[1],N=Object(n.useState)(!0),w=Object(u.a)(N,2),S=w[0],I=w[1],P=Object(n.useState)(""),U=Object(u.a)(P,2),q=U[0],L=U[1],J=Object(n.useState)(!1),R=Object(u.a)(J,2),_=R[0],B=R[1],F=Object(n.useState)(!1),K=Object(u.a)(F,2),W=K[0],Y=K[1],H=Object(n.useState)(!1),Q=Object(u.a)(H,2),z=Q[0],G=Q[1],X=Object(n.useState)(!1),Z=Object(u.a)(X,2),$=Z[0],ee=Z[1],te=Object(n.useState)(!1),ae=Object(u.a)(te,2),ne=ae[0],se=ae[1],re=Object(n.useState)({}),ce=Object(u.a)(re,2),ie=ce[0],oe=ce[1],le=Object(n.useState)({}),ue=Object(u.a)(le,2),de=ue[0],je=ue[1];Object(n.useEffect)((function(){var e=localStorage.getItem("dark");e&&"false"!==e?(s(!0),document.documentElement.setAttribute("data-theme","dark")):(s(!1),document.documentElement.setAttribute("data-theme",""));var t=localStorage.getItem("autoDownload");ee("true"===t);var a=JSON.parse(localStorage.getItem("formatType"));a?oe(a):(localStorage.setItem("formatType",JSON.stringify(k[0])),oe(k[0]));var n=localStorage.getItem("nativeMode");se("true"===n)}),[]);var me=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"===t.key){e.next=2;break}return e.abrupt("return");case 2:if(a=S,I(!1),x(!0),B(!1),e.prev=6,D.test(i)){e.next=9;break}throw new Error("Invalid youtube link");case 9:return e.next=11,j.a.get("".concat(C,"/videoInfo"),{params:{videoURL:i}});case 11:if(200===(n=e.sent).status){e.next=14;break}throw new Error(n.data.message);case 14:return s=V(n.data),e.next=17,A(s,{autoDownload:$,formatType:ie},fe);case 17:if(r=e.sent,I(!1),je(s),x(!1),!r){e.next=24;break}return e.next=24,be();case 24:e.next=33;break;case 26:e.prev=26,e.t0=e.catch(6),Y(!0),L(e.t0.message),B(!0),I(!!a),x(!1);case 33:case"end":return e.stop()}}),e,null,[[6,26]])})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(!0),Y(!1),L("Auto start downloading in 3 sec"),e.next=5,M(1e3);case 5:return L("Auto start downloading in 2 sec"),e.next=8,M(1e3);case 8:return L("Auto start downloading in 1 sec"),e.next=11,M(1e3);case 11:return L("Auto start downloading in 0 sec"),e.next=14,M(1e3);case 14:return L("Started"),e.next=17,M(1e3);case 17:ne?(t=de.formats.find((function(e){return e.itag===ie.itag})).url,T(t)):(a=k.find((function(e){return e.itag===ie.itag})),T(E({videoURL:i,format:a.format,itag:a.itag}))),B(!1);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];B(!0),t&&Y(!0),L(e)};return Object(b.jsxs)("div",{className:"App",children:[z&&Object(b.jsx)(p,{setPref:G,autoDownload:$,onAutoDownloadChange:function(){$?(ee(!1),localStorage.setItem("autoDownload","false")):(ee(!0),localStorage.setItem("autoDownload","true"))},formatType:ie,formatTypes:k,onFormatChange:function(e){localStorage.setItem("formatType",JSON.stringify(e)),oe(e)},nativeMode:ne,onNativeModeChange:function(){ne?(se(!1),localStorage.setItem("nativeMode","false")):(se(!0),localStorage.setItem("nativeMode","true"))}}),Object(b.jsx)(h,{dark:a,switchTheme:function(){a?(s(!1),localStorage.setItem("dark","false"),document.documentElement.setAttribute("data-theme","")):(s(!0),localStorage.setItem("dark","true"),document.documentElement.setAttribute("data-theme","dark"))},setPref:G,showMain:function(){d(""),I(!0),L(""),B(!1),Y(!1),oe({}),je({})},isSearching:O}),O?Object(b.jsx)(f,{}):!S&&Object(b.jsx)(y,{url:i,setUrl:d,getVideoInfo:me,videoInfo:de,download:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(ne)T(e);else{var a=k.find((function(e){return e.itag===t}));T(E({videoURL:i,format:a.format,itag:a.itag}))}},status:{showStatus:_,setStatus:B,statusMsg:q,setStatusMsg:L,error:W,setError:Y}}),S&&Object(b.jsx)(g,{url:i,setUrl:d,getVideoInfo:me,status:{showStatus:_,setStatus:B,statusMsg:q,setStatusMsg:L,error:W,setError:Y}})]})};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.18baaab7.chunk.js.map