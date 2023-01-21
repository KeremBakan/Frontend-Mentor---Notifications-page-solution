(function(){"use strict";var i={5070:function(i,e,a){var n=a(9242),t=a(3396);function o(i,e,a,n,o,r){const s=(0,t.up)("NavBar"),c=(0,t.up)("NotificationItem");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(s,{notifications:o.notifications},null,8,["notifications"]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.notifications,((i,e)=>((0,t.wg)(),(0,t.iD)("div",{key:e},[(0,t.Wm)(c,{userName:i.name,profilePic:i.profilePicture,action:i.action,actionName:i.actionName,time:i.notificationTime,notificationPic:i.notificationPicture,message:i.message,isReaded:i.isReaded},null,8,["userName","profilePic","action","actionName","time","notificationPic","message","isReaded"])])))),128))],64)}var r=a(7139);const s=i=>((0,t.dD)("data-v-637c9669"),i=i(),(0,t.Cn)(),i),c=s((()=>(0,t._)("li",{class:"heading"},[(0,t._)("h1",null,"Notifications")],-1))),u={class:"badge"},f={class:"marking-button"};function m(i,e,a,n,o,s){return(0,t.wg)(),(0,t.iD)("ul",null,[c,(0,t._)("li",u,[(0,t._)("h2",null,(0,r.zw)(o.notCount),1)]),(0,t._)("li",f,[(0,t._)("a",{href:"#",onClick:e[0]||(e[0]=(...i)=>s.mark&&s.mark(...i))},"Mark all as read")])])}var l={name:"NavBar",props:{notifications:Array},data(){return{n:this.notifications,notCount:3}},methods:{mark(){for(let i=0;i<this.n.length;i++)this.n[i].isReaded=!0;this.notCount=0}}},d=a(89);const g=(0,d.Z)(l,[["render",m],["__scopeId","data-v-637c9669"]]);var p=g;const v=i=>((0,t.dD)("data-v-e3fd107a"),i=i(),(0,t.Cn)(),i),h={class:"grid-container"},w={class:"notifier-image"},b=["src"],y={class:"notifier-text"},P={href:"#",class:"profile-link"},_={class:"notifier-t"},N={class:"notifier-badge"},k=["src"],C={class:"notifier-time"},R=v((()=>(0,t._)("div",null,null,-1))),O={class:"notifier-msg"};function T(i,e,a,o,s,c){return(0,t.wg)(),(0,t.iD)("div",h,[(0,t._)("div",w,[(0,t._)("img",{src:a.profilePic,alt:""},null,8,b)]),(0,t._)("div",y,[(0,t._)("a",P,(0,r.zw)(a.userName),1),(0,t._)("p",_,(0,r.zw)(a.action),1),(0,t.wy)((0,t._)("a",{href:"#",class:"notifier-action"},(0,r.zw)(a.actionName),513),[[n.F8,""==!a.actionName]]),(0,t.wy)((0,t._)("span",N,null,512),[[n.F8,!a.isReaded]]),(0,t.wy)((0,t._)("img",{class:"notifier-pic",src:a.notificationPic,alt:""},null,8,k),[[n.F8,""==!a.notificationPic]]),(0,t._)("p",C,(0,r.zw)(a.time),1)]),R,(0,t.wy)((0,t._)("div",O,[(0,t._)("div",null,[(0,t._)("p",null,(0,r.zw)(a.message),1)])],512),[[n.F8,""==!a.message]])])}var j={name:"NotificationItem",props:{profilePic:String,userName:String,action:String,actionName:String,notificationPic:String,time:String,message:String,isReaded:Boolean}};const z=(0,d.Z)(j,[["render",T],["__scopeId","data-v-e3fd107a"]]);var S=z,D={name:"App",components:{NavBar:p,NotificationItem:S},data(){return{notifications:[{name:"Mark Webber",profilePicture:"./assets/images/avatar-mark-webber.webp",action:"reacted to your recent post",actionName:"My first tournament today!",notificationTime:"1m ago",isReaded:!1,notificationPicture:"",message:""},{name:"Angela Gray",profilePicture:"./assets/images/avatar-angela-gray.webp",action:"followed you",actionName:"",notificationTime:"5m ago",isReaded:!1,notificationPicture:"",message:""},{name:"Jacob Thompson",profilePicture:"./assets/images/avatar-jacob-thompson.webp",action:"has joined your group",actionName:"Chess Club",notificationTime:"1 day ago",isReaded:!1,notificationPicture:"",message:""},{name:"Rizky Hasanuddin",profilePicture:"./assets/images/avatar-rizky-hasanuddin.webp",action:"sent you a private message",actionName:"",notificationTime:"5 days ago",isReaded:!0,notificationPicture:"",message:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."},{name:"Kimberly Smith",profilePicture:"./assets/images/avatar-kimberly-smith.webp",action:"commented on your picture",actionName:"",notificationTime:"1 week ago",isReaded:!0,notificationPicture:"./assets/images/image-chess.webp",message:""},{name:"Nathan Peterson",profilePicture:"./assets/images/avatar-nathan-peterson.webp",action:"reacted to your recent post",actionName:"5 end-game strategies to increase your win rate",notificationTime:"2 weeks ago",isReaded:!0,notificationPicture:"",message:""},{name:"Anna Kim",profilePicture:"./assets/images/avatar-anna-kim.webp",action:"left the group",actionName:"Chess Club",notificationTime:"2 weeks ago",isReaded:!0,notificationPicture:"",message:""}]}}};const I=(0,d.Z)(D,[["render",o]]);var x=I;(0,n.ri)(x).mount("#app")}},e={};function a(n){var t=e[n];if(void 0!==t)return t.exports;var o=e[n]={exports:{}};return i[n](o,o.exports,a),o.exports}a.m=i,function(){var i=[];a.O=function(e,n,t,o){if(!n){var r=1/0;for(f=0;f<i.length;f++){n=i[f][0],t=i[f][1],o=i[f][2];for(var s=!0,c=0;c<n.length;c++)(!1&o||r>=o)&&Object.keys(a.O).every((function(i){return a.O[i](n[c])}))?n.splice(c--,1):(s=!1,o<r&&(r=o));if(s){i.splice(f--,1);var u=t();void 0!==u&&(e=u)}}return e}o=o||0;for(var f=i.length;f>0&&i[f-1][2]>o;f--)i[f]=i[f-1];i[f]=[n,t,o]}}(),function(){a.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return a.d(e,{a:e}),e}}(),function(){a.d=function(i,e){for(var n in e)a.o(e,n)&&!a.o(i,n)&&Object.defineProperty(i,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(i){if("object"===typeof window)return window}}()}(),function(){a.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)}}(),function(){var i={143:0};a.O.j=function(e){return 0===i[e]};var e=function(e,n){var t,o,r=n[0],s=n[1],c=n[2],u=0;if(r.some((function(e){return 0!==i[e]}))){for(t in s)a.o(s,t)&&(a.m[t]=s[t]);if(c)var f=c(a)}for(e&&e(n);u<r.length;u++)o=r[u],a.o(i,o)&&i[o]&&i[o][0](),i[o]=0;return a.O(f)},n=self["webpackChunknotification_app"]=self["webpackChunknotification_app"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(5070)}));n=a.O(n)})();
//# sourceMappingURL=app.3304a0df.js.map