(function(e){function t(t){for(var o,c,s=t[0],u=t[1],i=t[2],d=0,p=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0cec":function(e,t,n){},1794:function(e,t,n){},2188:function(e,t,n){},2505:function(e,t,n){"use strict";n("90ba")},"2e15":function(e,t,n){"use strict";n("0cec")},"4e86":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"nav"},a=Object(o["f"])("Home"),c=Object(o["f"])(" | "),s=Object(o["f"])("View other posts"),u=Object(o["f"])(" | "),i=Object(o["f"])("Login "),l=Object(o["f"])(" | "),d=Object(o["f"])("View your posts ");function p(e,t){var n=Object(o["w"])("router-link"),p=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])(o["a"],null,[Object(o["e"])("div",r,[Object(o["g"])(n,{to:"/"},{default:Object(o["C"])((function(){return[a]})),_:1}),c,Object(o["g"])(n,{to:{name:"others"}},{default:Object(o["C"])((function(){return[s]})),_:1}),u,Object(o["g"])(n,{to:{name:"login"}},{default:Object(o["C"])((function(){return[i]})),_:1}),l,Object(o["g"])(n,{to:{name:"yours"}},{default:Object(o["C"])((function(){return[d]})),_:1})]),Object(o["g"])(p)],64)}n("dce7");var b=n("6b0d"),f=n.n(b);const m={},O=f()(m,[["render",p]]);var j=O,h=n("6c02"),v={class:"home"},g=Object(o["e"])("h1",null," Welcome to super blogs ",-1),y=Object(o["e"])("p",null," Get started ",-1),w=["src"];function P(e,t,r,a,c,s){return Object(o["p"])(),Object(o["d"])("div",v,[g,y,Object(o["e"])("img",{src:n("6951")},null,8,w)])}var _={name:"Home",components:{}};n("2e15");const x=f()(_,[["render",P]]);var A=x,D=(n("b0c0"),function(e){return Object(o["s"])("data-v-c1d274a4"),e=e(),Object(o["q"])(),e}),S=D((function(){return Object(o["e"])("h1",null," Hello ",-1)})),k=D((function(){return Object(o["e"])("h2",null," Here are some previous posts ",-1)})),H={id:"border"},M={id:"name"},C={id:"text"},I={id:"hash_tag"};function V(e,t,n,r,a,c){return Object(o["p"])(),Object(o["d"])(o["a"],null,[S,k,(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(a.sample_post,(function(e){return Object(o["p"])(),Object(o["d"])("div",{key:e.id},[Object(o["e"])("div",H,[Object(o["e"])("h3",M,Object(o["y"])(e.name),1),Object(o["e"])("h3",C,Object(o["y"])(e.text),1),Object(o["e"])("h3",I,Object(o["y"])(e.hash_tag),1)])])})),128))],64)}var U={data:function(){return{sample_post:[{id:1,name:"Clark Kent",text:"Hi my name is Clark Kent. I am not superman",hash_tag:"#num_1"},{id:2,name:"Bruce Wayne",text:"Hi my name is Bruce Wayne. I am not batman. (I am the NIGHT)",hash_tag:"#num_2"},{id:3,name:"Peter Parker",text:"Hi spiderman over here!",hash_tag:"#Marvel #Spiderman #GreatPowerComesGreatResponsibility"}]}}};n("76eb");const G=f()(U,[["render",V],["__scopeId","data-v-c1d274a4"]]);var q=G;function E(e,t,n,r,a,c){var s=Object(o["w"])("AddPost"),u=Object(o["w"])("Posts");return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["g"])(s,{onAddPost:c.addPost},null,8,["onAddPost"]),Object(o["g"])(u,{onDeletePost:c.deletePost,posts:a.posts},null,8,["onDeletePost","posts"])])}var N=n("2909");n("99af"),n("4de4"),n("d3b7");function T(e,t,n,r,a,c){var s=Object(o["w"])("Post");return Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(n.posts,(function(t){return Object(o["p"])(),Object(o["d"])("div",{key:t.id},[Object(o["g"])(s,{onDeletePost:function(n){return e.$emit("delete-post",t.id)},post:t},null,8,["onDeletePost","post"])])})),128)}var W={class:"post"};function $(e,t,n,r,a,c){return Object(o["p"])(),Object(o["d"])("div",W,[Object(o["e"])("button",{id:"button",onClick:t[0]||(t[0]=function(e){return c.onDelete(n.post.id)})}," X "),Object(o["e"])("h3",null,Object(o["y"])(n.post.name),1),Object(o["e"])("p",null,Object(o["y"])(n.post.text),1),Object(o["e"])("h3",null,Object(o["y"])(n.post.hash_tag),1)])}var B={name:"post",props:{post:Object},methods:{onDelete:function(e){this.$emit("delete-post",e)}}};n("8dd8");const J=f()(B,[["render",$],["__scopeId","data-v-317ed0d3"]]);var K=J,L={name:"Posts",props:{posts:Array},components:{Post:K},emits:["delete-post"]};const R=f()(L,[["render",T]]);var X=R,z=function(e){return Object(o["s"])("data-v-02d8ca86"),e=e(),Object(o["q"])(),e},F=z((function(){return Object(o["e"])("h1",null," View your recent posts and make a new post ",-1)})),Q={class:"form-control"},Y=z((function(){return Object(o["e"])("label",{class:"input"}," Name",-1)})),Z={class:"form-control"},ee=z((function(){return Object(o["e"])("label",{class:"input"}," Post",-1)})),te={class:"form-control"},ne=z((function(){return Object(o["e"])("label",{class:"input"}," Hashtag",-1)})),oe=z((function(){return Object(o["e"])("input",{type:"submit",value:"Save Post",id:"submit"},null,-1)}));function re(e,t,n,r,a,c){return Object(o["p"])(),Object(o["d"])(o["a"],null,[F,Object(o["e"])("form",{onSubmit:t[3]||(t[3]=function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),class:"add-form"},[Object(o["e"])("div",Q,[Y,Object(o["D"])(Object(o["e"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.name=e}),name:"name",placeholder:"Enter Name"},null,512),[[o["A"],a.name]])]),Object(o["e"])("div",Z,[ee,Object(o["D"])(Object(o["e"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.text=e}),name:"post",placeholder:"Add Post"},null,512),[[o["A"],a.text]])]),Object(o["e"])("div",te,[ne,Object(o["D"])(Object(o["e"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.hash_tag=e}),name:"hash_tag",placeholder:"Add hashtag"},null,512),[[o["A"],a.hash_tag]])]),oe],32)],64)}var ae={name:"AddPost",data:function(){return{name:"",text:"",hash_tag:""}},methods:{onSubmit:function(e){if(e.preventDefault(),this.text){var t={id:Math.floor(1e5*Math.random()),name:this.name,text:this.text,hash_tag:this.hash_tag};this.$emit("add-post",t),this.name="",this.text="",this.hash_tag=""}else alert("Please enter a post")}}};n("2505");const ce=f()(ae,[["render",re],["__scopeId","data-v-02d8ca86"]]);var se=ce,ue={name:"selfposts",components:{Posts:X,AddPost:se},data:function(){return{posts:[]}},methods:{addPost:function(e){this.posts=[].concat(Object(N["a"])(this.posts),[e])},deletePost:function(e){confirm("Are you sure?")&&(this.posts=this.posts.filter((function(t){return t.id!==e})))}},created:function(){this.posts=[]}};const ie=f()(ue,[["render",E]]);var le=ie,de=function(e){return Object(o["s"])("data-v-0a5d49ca"),e=e(),Object(o["q"])(),e},pe=de((function(){return Object(o["e"])("h1",null," Please log in to write a post",-1)})),be={class:"form-control"},fe=de((function(){return Object(o["e"])("label",null," username ",-1)})),me={class:"form-control"},Oe=de((function(){return Object(o["e"])("label",null," password ",-1)})),je=de((function(){return Object(o["e"])("input",{type:"submit",value:"Login",class:"button-27"},null,-1)})),he=de((function(){return Object(o["e"])("h1",null," Don't have an account?, sign up! ",-1)})),ve=de((function(){return Object(o["e"])("input",{type:"submit",value:"signup",class:"button-27"},null,-1)}));function ge(e,t,n,r,a,c){return Object(o["p"])(),Object(o["d"])(o["a"],null,[pe,Object(o["e"])("form",{onSubmit:t[2]||(t[2]=function(){return c.login&&c.login.apply(c,arguments)}),class:"add-form"},[Object(o["e"])("div",be,[fe,Object(o["D"])(Object(o["e"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e}),name:"name",placeholder:"Enter username (email)"},null,512),[[o["A"],a.username]])]),Object(o["e"])("div",me,[Oe,Object(o["D"])(Object(o["e"])("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e}),name:"name",placeholder:"Enter password"},null,512),[[o["A"],a.password]])]),je],32),he,ve],64)}var ye={name:"login",data:function(){return{username:"",password:""}},methods:{login:function(e){if(e.preventDefault(),this.username)if(this.password){var t={id:Math.floor(1e3*Math.random()),username:this.username,password:this.password};console.log(t.username),console.log(t.password),this.username="",this.password=""}else alert("Please enter a password");else alert("Please enter a username")}}};n("70ea");const we=f()(ye,[["render",ge],["__scopeId","data-v-0a5d49ca"]]);var Pe=we,_e=[{path:"/",name:"Home",component:A},{path:"/viewothers",name:"others",component:q},{path:"/viewyours",name:"yours",component:le},{path:"/login",name:"login",component:Pe}],xe=Object(h["a"])({history:Object(h["b"])("/"),routes:_e}),Ae=xe;Object(o["c"])(j).use(Ae).mount("#app")},"67bb":function(e,t,n){},6951:function(e,t,n){e.exports=n.p+"img/blogwallpaper.7fbf42ab.jpeg"},"70ea":function(e,t,n){"use strict";n("67bb")},"76eb":function(e,t,n){"use strict";n("1794")},"8dd8":function(e,t,n){"use strict";n("4e86")},"90ba":function(e,t,n){},dce7:function(e,t,n){"use strict";n("2188")}});
//# sourceMappingURL=app.4f339e0a.js.map