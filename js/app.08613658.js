(function(t){function e(e){for(var a,i,o=e[0],s=e[1],r=e[2],u=0,v=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&v.push(c[i][0]),c[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);f&&f(e);while(v.length)v.shift()();return l.push.apply(l,r||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(a=!1)}a&&(l.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},c={app:0},l=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var r=0;r<o.length;r++)e(o[r]);var f=s;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},4748:function(t,e,n){"use strict";n("8593")},"4beb":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function c(t,e,n,c,l,i){var o=Object(a["s"])("niji-weekly");return Object(a["m"])(),Object(a["c"])(o)}var l={class:"page-bg"},i={class:"main-area",id:"cap"};function o(t,e,n,c,o,s){var r=Object(a["s"])("niji-times");return Object(a["m"])(),Object(a["e"])("div",l,[Object(a["f"])("div",i,[Object(a["i"])(r)])])}n("b0c0");var s=n("d68e"),r=n.n(s),f=function(t){return Object(a["o"])("data-v-3b406943"),t=t(),Object(a["n"])(),t},u={class:"left"},v={class:"text"},b=Object(a["h"])(" 爬取数据 "),p={class:"progress"},d={class:"right"},m={class:"bg"},j={key:0,class:"tips"},h=Object(a["g"])('<div class="line" data-v-3b406943>当你看到这段文字,说明你是第一次使用本网站,请按一下步骤操作</div><div class="line" data-v-3b406943>1、左边选择文件,导入一份历史爬取记录</div><div class="line" data-v-3b406943>2、点击爬取数据,并等待下方进度条走完。</div><div class="line" data-v-3b406943>3、点击生成相应页面,再点击右边下载图片</div><div class="line" data-v-3b406943>4、整个过程仅需要爬取一次数据,若无必要请勿随意点击爬取数据键,防止被拉黑</div><div class="line" data-v-3b406943>5、离开网页后数据并不会小时(只要不清理缓存),下次打开网页依然能看到上次的结果</div><div class="line" data-v-3b406943>6、一周之后,重新点击爬取数据按钮,数据就会被覆盖</div><div class="line" data-v-3b406943>7、若不清理缓存,则全生涯仅需要导入第一次数据,以后再来无需导入</div><div class="line" data-v-3b406943>8、右方导出可备份爬取记录防止缓存被清除。</div><div class="line" data-v-3b406943>9、请使用Edge游览器,chrome会吞水印,其他游览器未知。</div>',10),g=[h],O={key:0,class:"title-1"},I=f((function(){return Object(a["f"])("img",{class:"wbg",src:r.a,alt:""},null,-1)})),D=f((function(){return Object(a["f"])("div",{class:"icon"},"订阅统计",-1)})),y=f((function(){return Object(a["f"])("h1",null,"本社订阅达成",-1)})),k=f((function(){return Object(a["f"])("h2",null,"按万位计算(Youtube)",-1)})),w=[I,D,y,k],M={key:1,class:"title"},S=f((function(){return Object(a["f"])("img",{class:"wbg",src:r.a,alt:""},null,-1)})),N={key:2,class:"up"},J=["src"],z={class:"name"},x={class:"fans"},C={key:3,class:"normal"},B=["src"],_={class:"fans"};function K(t,e,n,c,l,i){return Object(a["m"])(),Object(a["e"])(a["a"],null,[Object(a["f"])("div",u,[Object(a["f"])("input",{ref:"upfile",class:"upload",type:"file",onChange:e[0]||(e[0]=function(){return c.upload&&c.upload.apply(c,arguments)})},null,544),Object(a["f"])("div",v,"历史检索时间:"+Object(a["t"])(c.oldtime),1),Object(a["f"])("div",{class:"btn",onClick:e[1]||(e[1]=function(){return c.click0&&c.click0.apply(c,arguments)})},[b,Object(a["f"])("div",p,Object(a["t"])(c.progress.now)+"/"+Object(a["t"])(c.progress.tot),1)]),Object(a["f"])("div",{class:"btn",onClick:e[2]||(e[2]=function(){return c.click1&&c.click1.apply(c,arguments)})},"生成第一页"),Object(a["f"])("div",{class:"btn",onClick:e[3]||(e[3]=function(){return c.click2&&c.click2.apply(c,arguments)})},"生成第二页"),Object(a["f"])("div",{class:"btn",onClick:e[4]||(e[4]=function(){return c.click3&&c.click3.apply(c,arguments)})},"生成第三页"),Object(a["f"])("div",{class:"btn",onClick:e[5]||(e[5]=function(){return c.click4&&c.click4.apply(c,arguments)})},"生成第四页")]),Object(a["f"])("div",d,[Object(a["f"])("div",{class:"btn",onClick:e[6]||(e[6]=function(){return c.downimg&&c.downimg.apply(c,arguments)})},"下载当前图片"),Object(a["f"])("div",{class:"btn",onClick:e[7]||(e[7]=function(){return c.downjson&&c.downjson.apply(c,arguments)})},"生成爬取记录(.json)")]),Object(a["f"])("div",m,[c.parts.length?Object(a["d"])("",!0):(Object(a["m"])(),Object(a["e"])("div",j,g)),(Object(a["m"])(!0),Object(a["e"])(a["a"],null,Object(a["r"])(c.parts,(function(t){return Object(a["m"])(),Object(a["e"])("div",{class:"part",key:t.title},["first"==t.title?(Object(a["m"])(),Object(a["e"])("div",O,w)):(Object(a["m"])(),Object(a["e"])("div",M,[S,Object(a["f"])("h1",null,Object(a["t"])(t.title),1),Object(a["f"])("h2",null,Object(a["t"])(t.comment),1)])),t.up?(Object(a["m"])(),Object(a["e"])("div",N,[(Object(a["m"])(!0),Object(a["e"])(a["a"],null,Object(a["r"])(t.v,(function(t){return Object(a["m"])(),Object(a["e"])("div",{key:t.name,class:Object(a["j"])(["v",{light:t.light}])},[Object(a["f"])("img",{src:t.img,alt:""},null,8,J),Object(a["f"])("div",z,Object(a["t"])(t.name),1),Object(a["f"])("div",x,Object(a["t"])(t.fans),1)],2)})),128))])):(Object(a["m"])(),Object(a["e"])("div",C,[(Object(a["m"])(!0),Object(a["e"])(a["a"],null,Object(a["r"])(t.v,(function(t){return Object(a["m"])(),Object(a["e"])("div",{key:t.name,class:Object(a["j"])(["v",{light:t.light}])},[Object(a["f"])("img",{src:t.img,alt:""},null,8,B),Object(a["f"])("div",{class:"name",style:Object(a["k"])({fontSize:t.fs+"px"})},Object(a["t"])(t.name),5),Object(a["f"])("div",_,Object(a["t"])(t.fans),1)],2)})),128))]))])})),128))])],64)}var P=n("b85c"),R=(n("d3b7"),n("99af"),n("a9e3"),n("e9c4"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("4e82"),n("bc3a")),Y=n.n(R),A=n("c0e9"),W=n.n(A),E={name:"NIjiTimes",props:{},components:{},setup:function(){var t=Object(a["p"])([]),e=Object(a["q"])(null),n=Object(a["p"])({now:0,tot:0}),c={},l=Object(a["q"])("无历史记录"),i=0,o=[{class:"jp",to:"youtube",v:jp},{class:"vr",to:"bilibili",v:vr},{class:"vrl",to:"bilibili",v:vrl},{class:"vrs",to:"bilibili",v:vrs},{class:"id",to:"youtube",v:id},{class:"kr",to:"youtube",v:kr},{class:"en",to:"youtube",v:en}],s={};function r(){if(c.pn)return new Promise((function(t,e){if(s.pn){for(var a in s)if("time"!=a&&"pn"!=a)for(var l in s[a])c[a][l]=Math.max(c[a][l],s[a][l]);c.time=s.time,c.pn=s.pn}var i=new Date,r=i.getFullYear(),f=i.getMonth()+1>=10?i.getMonth()+1:"0".concat(i.getMonth()+1),u=i.getDate()>=10?i.getDate():"0".concat(i.getDate()),v="".concat(r,"-").concat(f,"-").concat(u);s={vr:{},vrl:{},vrs:{},jp:{},en:{},id:{},kr:{},inb:{},pn:Number(c.pn)+1,time:v},n.tot=0,n.now=0,console.log(o);var b=function(t){console.log(t),n.tot+=o[t].v.length,console.log(n.tot);var e,a=Object(P["a"])(o[t].v);try{var c=function(){var a=e.value;Y.a.get("bilibili"==o[t].to?"https://www.virtualfans.club/api/".concat(o[t].to,"?id=").concat(a.biliID):"https://www.virtualfans.club/api/".concat(o[t].to,"?id=").concat(a.youtubeID)).then((function(e){s[o[t].class][a.ID]=e.data.fans,n.now++}),(function(t){console.log("no",t)})),"youtube"==o[t].to&&a.biliID&&(n.tot++,Y.a.get("https://www.virtualfans.club/api/bilibili?id=".concat(a.biliID)).then((function(t){s.inb[a.ID]=t.data.fans,n.now++}),(function(t){console.log("no",t)})))};for(a.s();!(e=a.n()).done;)c()}catch(l){a.e(l)}finally{a.f()}};for(var p in o)b(p);var d=setInterval((function(){if(n.tot==n.now){for(var e in clearInterval(d),console.log(s),s)if("time"!=e&&"pn"!=e)for(var a in s[e])c[e][a]||(c[e][a]=0);localStorage.setItem("newfans",JSON.stringify(s)),localStorage.setItem("oldfans",JSON.stringify(c)),t()}}),100)}));alert("请读入历史记录json文件后再进行操作")}function f(){var t=new FileReader;t.onloadend=function(){if(t.result)try{c=JSON.parse(t.result),l.value=c.time,s={vr:{},vrl:{},vrs:{},jp:{},en:{},id:{},kr:{},inb:{},pn:0,time:""}}catch(e){console.log(e)}finally{console.log("ok")}},t.readAsText(e.value.files[0])}function u(){console.log("click"),W()(document.querySelector("#cap"),{scale:2,dpi:600}).then((function(t){var e=t.toDataURL("image/png"),n=document.createElement("a");n.href=e,n.download="".concat(s.pn,"期订阅统计").concat(i),document.body.appendChild(n),n.click(),document.body.removeChild(n)}))}function v(){}function b(){var t=document.createElement("a");t.href=URL.createObjectURL(new Blob([JSON.stringify(s)])),t.download="".concat(s.time,".json"),document.body.appendChild(t),t.click(),document.body.removeChild(t)}function p(){r().then((function(){l.value=s.time,j()}))}function d(){if(s.pn){while(t.length)t.pop();i=4;var e,n={title:"原 NIJISANJI ID 订阅统计",comment:"按期数顺以千位计算(Youtube)",v:[]},a=Object(P["a"])(id);try{for(a.s();!(e=a.n()).done;){var c=e.value;n.v.push({name:c.name,ID:c.ID,img:"/img/id/".concat(c.ID,".png"),fans:Math.floor(s.id[c.ID]/1e3)+"K",fs:c.fontSize||30})}}catch(b){a.e(b)}finally{a.f()}t.push(n),n={},n.title="原 NIJISANJI KR 订阅统计",n.comment="按期数顺以千位计算(Youtube)",n.v=[];var l,o=Object(P["a"])(kr);try{for(o.s();!(l=o.n()).done;){var r=l.value;n.v.push({name:r.name,ID:r.ID,img:"/img/kr/".concat(r.ID,".png"),fans:Math.floor(s.kr[r.ID]/1e3)+"K",fs:r.fontSize||30})}}catch(b){o.e(b)}finally{o.f()}t.push(n),n={},n.title="NIJISANJI EN 订阅统计",n.comment="按期数顺以千位计算(Youtube)",n.v=[];var f,u=Object(P["a"])(en);try{for(u.s();!(f=u.n()).done;){var v=f.value;n.v.push({name:v.name,ID:v.ID,img:"/img/en/".concat(v.ID,".png"),fans:Math.floor(s.en[v.ID]/1e3)+"K",fs:v.fontSize||30})}}catch(b){u.e(b)}finally{u.f()}t.push(n)}else alert("请先爬取数据。")}function m(){if(s.pn){while(t.length)t.pop();i=3;var e,n={title:"本社B站官号订阅统计",comment:"按期数顺以千位计算(Bilibili)",v:[]},a=Object(P["a"])(jp);try{for(a.s();!(e=a.n()).done;){var c=e.value;c.biliID&&n.v.push({name:c.name,ID:c.ID,img:"/img/jp/".concat(c.ID,".png"),order:c.biliOrder,fans:Math.floor(s.inb[c.ID]/1e3)+"K",fs:c.fontSize||30})}}catch(f){a.e(f)}finally{a.f()}n.v.sort((function(t,e){return t.order-e.order})),t.push(n),n={},n.title="NIJISANJI EN B站官号订阅统计",n.comment="按期数顺以千位计算(Bilibili)",n.v=[];var l,o=Object(P["a"])(en);try{for(o.s();!(l=o.n()).done;){var r=l.value;r.biliID&&n.v.push({name:r.name,ID:r.ID,order:r.biliOrder,img:"/img/en/".concat(r.ID,".png"),fans:Math.floor(s.inb[r.ID]/1e3)+"K",fs:r.fontSize||30})}}catch(f){o.e(f)}finally{o.f()}n.v.sort((function(t,e){return t.order-e.order})),t.push(n)}else alert("请先爬取数据。")}function j(){if(s.pn){while(t.length)t.pop();i=1;var e={},n=[];e.title="first",e.class="jp",e.v=[];var a,l=Object(P["a"])(jp);try{for(l.s();!(a=l.n()).done;){var r=a.value;Math.floor(s[e.class][r.ID]/1e4)>Math.floor(c[e.class][r.ID]/1e4)&&e.v.push({name:r.name,ID:r.ID,img:"/img/".concat(e.class,"/").concat(r.ID,".png"),light:Math.floor(s[e.class][r.ID]/1e5)>Math.floor(c[e.class][r.ID]/1e5),fans:Math.floor(s[e.class][r.ID]/1e4)+"W",fs:r.fontSize||30,tfans:s[e.class][r.ID]})}}catch(J){l.e(J)}finally{l.f()}e.v.sort((function(t,e){return e.tfans-t.tfans})),t.push(e),e={},e.title="B站订阅达成",e.comment="按万位计算(Bilibili)",e.v=[];var f,u=Object(P["a"])(o);try{for(u.s();!(f=u.n()).done;){var v,b=f.value,p=Object(P["a"])(b.v);try{for(p.s();!(v=p.n()).done;){var d=v.value;"youtube"==b.to&&d.biliID&&Math.floor(s.inb[d.ID]/1e4)>Math.floor(c.inb[d.ID]/1e4)&&e.v.push({name:d.name,ID:d.ID,img:"/img/".concat(b.class,"/").concat(d.ID,".png"),light:Math.floor(s.inb[d.ID]/1e5)>Math.floor(c.inb[d.ID]/1e5),fans:Math.floor(s.inb[d.ID]/1e4)+"W",tfans:s.inb[d.ID],fs:d.fontSize||30,class:b.class}),"bilibili"==b.to&&Math.floor(s[b.class][d.ID]/1e4)>Math.floor(c[b.class][d.ID]/1e4)&&e.v.push({name:d.name,ID:d.ID,img:"/img/".concat(b.class,"/").concat(d.ID,".png"),light:Math.floor(s[b.class][d.ID]/1e5)>Math.floor(c[b.class][d.ID]/1e5),fans:Math.floor(s[b.class][d.ID]/1e4)+"W",tfans:s[b.class][d.ID],class:b.class,fs:d.fontSize||30})}}catch(J){p.e(J)}finally{p.f()}}}catch(J){u.e(J)}finally{u.f()}e.v.sort((function(t,e){if(t.class!=e.class){var n="jp"==t.class?1:"vr"==t.class?2:3,a="jp"==e.class?1:"vr"==e.class?2:3;return n-a}return e.tfans-t.tfans})),t.push(e),e={},e.title="海外订阅达成",e.comment="按万位计算(Youtube)",e.v=[];var m,j=Object(P["a"])(o);try{for(j.s();!(m=j.n()).done;){var h=m.value;if("youtube"==h.to&&"jp"!=h.class){var g,O=Object(P["a"])(h.v);try{for(O.s();!(g=O.n()).done;){var I=g.value;Math.floor(s[h.class][I.ID]/1e4)>Math.floor(c[h.class][I.ID]/1e4)&&e.v.push({name:I.name,ID:I.ID,img:"/img/".concat(h.class,"/").concat(I.ID,".png"),light:Math.floor(s[h.class][I.ID]/1e5)>Math.floor(c[h.class][I.ID]/1e5),fans:Math.floor(s[h.class][I.ID]/1e4)+"W",tfans:s[h.class][I.ID],fs:I.fontSize||30})}}catch(J){O.e(J)}finally{O.f()}}}}catch(J){j.e(J)}finally{j.f()}e.v.sort((function(t,e){return e.tfans-t.tfans})),t.push(e),e={},e.title="一周急上升",e.comment="Bilibili/Youtube",e.up=!0,e.v=[],n=[];var D,y=Object(P["a"])(o);try{for(y.s();!(D=y.n()).done;){var k=D.value;if("vrl"!=k.class&&"vrs"!=k.class){var w,M=Object(P["a"])(k.v);try{for(M.s();!(w=M.n()).done;){var S=w.value;n.push({name:S.name,img:"/img/".concat(k.class,"/").concat(S.ID,".png"),up:s[k.class][S.ID]-c[k.class][S.ID],fans:"",light:!1})}}catch(J){M.e(J)}finally{M.f()}}}}catch(J){y.e(J)}finally{y.f()}n.sort((function(t,e){return e.up-t.up})),console.log(n);for(var N=0;N<5;N++)e.v.push(n[N]);t.push(e)}else alert("请先爬取数据。")}function h(){if(s.pn){while(t.length)t.pop();i=2;var e,n={title:"VirtuaReal 订阅统计",comment:"按期数顺以千位计数(Bilibili)",class:"vr",v:[]},a=Object(P["a"])(vr);try{for(a.s();!(e=a.n()).done;){var c=e.value;n.v.push({name:c.name,ID:c.ID,img:"/img/vr/"+c.ID+".png",biliID:c.biliID,fans:Math.floor(s[n.class][c.ID]/1e3)+"K",fs:c.fontSize||30})}}catch(b){a.e(b)}finally{a.f()}t.push(n),n={},n.title="VirtuaReal Link 订阅统计",n.comment="以千位计数(Bilibili)",n.class="vrl",n.v=[];var l,o=Object(P["a"])(vrl);try{for(o.s();!(l=o.n()).done;){var r=l.value;n.v.push({name:r.name,ID:r.ID,img:"/img/vrl/"+r.ID+".png",biliID:r.biliID,fans:Math.floor(s[n.class][r.ID]/1e3)+"K",fs:r.fontSize||30})}}catch(b){o.e(b)}finally{o.f()}t.push(n),n={},n.title="VirtuaReal Star 订阅统计",n.comment="以千位计数(Bilibili)",n.class="vrs",n.v=[];var f,u=Object(P["a"])(vrs);try{for(u.s();!(f=u.n()).done;){var v=f.value;n.v.push({name:v.name,ID:v.ID,img:"/img/vrs/"+v.ID+".png",biliID:v.biliID,fans:Math.floor(s[n.class][v.ID]/1e3)+"K",fs:v.fontSize||30})}}catch(b){u.e(b)}finally{u.f()}t.push(n)}else alert("请先爬取数据。")}return Object(a["l"])((function(){t=localStorage.getItem("newfans"),t?(s=JSON.parse(t),l.value=s.time):s={vr:{},vrl:{},vrs:{},jp:{},en:{},id:{},kr:{},inb:{},pn:0,time:""},console.log(s);var t=localStorage.getItem("oldfans");t?(c=JSON.parse(t),j()):c={},console.log(c)})),{progress:n,parts:t,click0:p,click1:j,click2:h,click3:m,click4:d,upload:f,upfile:e,oldtime:l,downimg:u,downjson:b,downxls:v}}},T=(n("c1e2"),n("6b0d")),L=n.n(T);const q=L()(E,[["render",K],["__scopeId","data-v-3b406943"]]);var U=q,V={name:"NijiWeekly",props:{},components:{NijiTimes:U},setup:function(){return{}}};n("4748");const F=L()(V,[["render",o],["__scopeId","data-v-1310e32c"]]);var G=F,H={name:"App",components:{NijiWeekly:G}};n("d3dc");const Q=L()(H,[["render",c]]);var X=Q;Object(a["b"])(X).mount("#app")},8593:function(t,e,n){},c1e2:function(t,e,n){"use strict";n("ebaa")},d3dc:function(t,e,n){"use strict";n("4beb")},d68e:function(t,e,n){t.exports=n.p+"img/bg.37a1a787.png"},ebaa:function(t,e,n){}});