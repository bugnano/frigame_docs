window.Modernizr=function(t,e,i){function r(t){v.cssText=t}function n(t,e){return r(y.join(t+";")+(e||""))}function a(t,e){return typeof t===e}function o(t,e){return!!~(""+t).indexOf(e)}function s(t,e){for(var r in t){var n=t[r];if(!o(n,"-")&&v[n]!==i)return"pfx"==e?n:!0}return!1}function h(t,e,r){for(var n in t){var o=e[t[n]];if(o!==i)return r===!1?t[n]:a(o,"function")?o.bind(r||e):o}return!1}function l(t,e,i){var r=t.charAt(0).toUpperCase()+t.slice(1),n=(t+" "+k.join(r+" ")+r).split(" ");return a(e,"string")||a(e,"undefined")?s(n,e):(n=(t+" "+w.join(r+" ")+r).split(" "),h(n,e,i))}var c,d,u,p="2.6.2",f={},m=e.documentElement,g="modernizr",b=e.createElement(g),v=b.style,y=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),x="Webkit Moz O ms",k=x.split(" "),w=x.toLowerCase().split(" "),C={svg:"http://www.w3.org/2000/svg"},j={},A=[],M=A.slice,_={}.hasOwnProperty;u=a(_,"undefined")||a(_.call,"undefined")?function(t,e){return e in t&&a(t.constructor.prototype[e],"undefined")}:function(t,e){return _.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var i=M.call(arguments,1),r=function(){if(this instanceof r){var n=function(){};n.prototype=e.prototype;var a=new n,o=e.apply(a,i.concat(M.call(arguments)));return Object(o)===o?o:a}return e.apply(t,i.concat(M.call(arguments)))};return r}),j.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),o(v.backgroundColor,"rgba")},j.backgroundsize=function(){return l("backgroundSize")},j.opacity=function(){return n("opacity:.55"),/^0.55$/.test(v.opacity)},j.csstransforms=function(){return!!l("transform")},j.svg=function(){return!!e.createElementNS&&!!e.createElementNS(C.svg,"svg").createSVGRect};for(var O in j)u(j,O)&&(d=O.toLowerCase(),f[d]=j[O](),A.push((f[d]?"":"no-")+d));return f.addTest=function(t,e){if("object"==typeof t)for(var r in t)u(t,r)&&f.addTest(r,t[r]);else{if(t=t.toLowerCase(),f[t]!==i)return f;e="function"==typeof e?e():e,"undefined"!=typeof enableClasses&&enableClasses&&(m.className+=" "+(e?"":"no-")+t),f[t]=e}return f},r(""),b=c=null,f._version=p,f._prefixes=y,f._domPrefixes=w,f._cssomPrefixes=k,f.testProp=function(t){return s([t])},f.testAllProps=l,f.prefixed=function(t,e,i){return e?l(t,e,i):l(t,"pfx")},f}(this,this.document),function(){var t="undefined"!=typeof window?window:exports,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i=function(){try{document.createElement("$")}catch(t){return t}}();t.btoa||(t.btoa=function(t){for(var r,n,a=0,o=e,s="";t.charAt(0|a)||(o="=",a%1);s+=o.charAt(63&r>>8-8*(a%1))){if(n=t.charCodeAt(a+=.75),n>255)throw i;r=r<<8|n}return s}),t.atob||(t.atob=function(t){if(t=t.replace(/=+$/,""),1==t.length%4)throw i;for(var r,n,a=0,o=0,s="";n=t.charAt(o++);~n&&(r=a%4?64*r+n:n,a++%4)?s+=String.fromCharCode(255&r>>(6&-2*a)):0)n=e.indexOf(n);return s})}(),function(t){var e,i,r,n,a,o,s={},h=this;h.friGame=s,"function"!=typeof Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),window.requestAnimFrame||(window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}()),Date.now||(Date.now=function(){return(new Date).getTime()}),t.extend(s,{GRADIENT_VERTICAL:0,GRADIENT_HORIZONTAL:1,ANIMATION_VERTICAL:0,ANIMATION_HORIZONTAL:1,BACKGROUND_TILED:0,BACKGROUND_STRETCHED:1,refreshRate:30}),t.extend(s,{cssClass:"friGame",domPrefix:"friGame_",resources:{},sprites:{},playgroundCallbacks:[],idUpdate:null,drawDone:!0}),s.r=s.resources,s.s=s.sprites,s.Maker=function(t){return function(){var e=Object.create(t);return e.init.apply(e,arguments),e}},s.pick=function(t,e){var i,r,n=e.length,a={};for(r=0;n>r;r+=1)i=e[r],void 0!==t[i]&&(a[i]=t[i]);return a},s.truncate=function(t){return 0>t?Math.ceil(t):Math.floor(t)},s.clamp=function(t,e,i){return Math.min(Math.max(t,e),i)},s.resourceManager={idPreload:null,preloadList:[],loadCallback:null,startCallbacks:[],completeCallback:null,addResource:function(t,e){return s.resourceManager.preloadList.push(e),s.r[t]=e,s.resourceManager},removeResource:function(t){return s.r[t]&&(s.r[t].remove(),delete s.r[t]),s.resourceManager},clear:function(){var t,e,i,r=s.resourceManager,n=r.removeResource,a=s.r,o=[];for(t in a)a.hasOwnProperty(t)&&o.push(t);for(e=o.length,i=0;e>i;i+=1)n(o[i]);return r},preload:function(){var t,e=s.resourceManager,i=e.preloadList,r=i.length,n=0,a=e.loadCallback,o=e.startCallbacks,h=o.length;for(t=0;r>t;t+=1)i[t].complete()&&(n+=1);if(a&&(0!==r?a.call(s,n/r):a.call(s,1)),n===r){for(a&&(e.loadCallback=null),clearInterval(e.idPreload),e.idPreload=null,t=0;r>t;t+=1)i[t].onLoad();for(i.splice(0,r),t=0;h>t;t+=1)o[t].call(s);o.splice(0,h),e.completeCallback&&(e.completeCallback.call(s),e.completeCallback=null),null===s.idUpdate&&(s.idUpdate=setInterval(s.update,s.refreshRate))}}},e={},s.PGradient=e,t.extend(s.PGradient,{init:function(e,i,r){var n=s.clamp,a=Math.round;this.startColor={r:0,g:0,b:0,a:1},e&&(e=t.extend(this.startColor,s.pick(e,["r","g","b","a"])),e.r=n(a(e.r),0,255),e.g=n(a(e.g),0,255),e.b=n(a(e.b),0,255),e.a=n(e.a,0,1),this.startColorStr=["rgba(",e.r+"",",",e.g+"",",",e.b+"",",",e.a+"",")"].join("")),i?(this.endColor={r:0,g:0,b:0,a:1},i=t.extend(this.endColor,s.pick(i,["r","g","b","a"])),i.r=n(a(i.r),0,255),i.g=n(a(i.g),0,255),i.b=n(a(i.b),0,255),i.a=n(i.a,0,1),this.endColorStr=["rgba(",i.r+"",",",i.g+"",",",i.b+"",",",i.a+"",")"].join(""),this.startColorStr===this.endColorStr&&(this.endColor=this.startColor)):(this.endColor=this.startColor,this.endColorStr=this.startColorStr),this.type=void 0!==r?r:s.GRADIENT_VERTICAL},remove:function(){var e=this;t.each(s.s,function(){this.options.background===e&&this.setBackground({background:null})})},complete:function(){return!0},onLoad:function(){}}),s.Gradient=s.Maker(s.PGradient),s.resourceManager.addGradient=function(t){var e=Array.prototype.slice.call(arguments,1),i=s.Gradient.apply(this,e);return i.name=t,s.resourceManager.addResource(t,i)},i={},s.PAnimation=i,t.extend(s.PAnimation,{images:{},init:function(e,r){var n,a,o=r||{},h=i;this.options?n=this.options:(n={},this.options=n),t.extend(n,{numberOfFrame:1,rate:s.refreshRate,type:s.ANIMATION_HORIZONTAL,once:!1,pingpong:!1,backwards:!1,offsetx:0,offsety:0,frameWidth:0,frameHeight:0,imageURL:"",img:null,halfWidth:0,halfHeight:0,deltax:0,deltay:0,multix:0,multiy:0}),o=t.extend(n,s.pick(o,["numberOfFrame","rate","type","once","pingpong","backwards","offsetx","offsety","frameWidth","frameHeight"])),o.rate=Math.round(o.rate/s.refreshRate),0===o.rate&&(o.rate=1),n.rate=o.rate,n.imageURL=e,h.images[e]?(a=h.images[e].img,h.images[e].refCount+=1):(a=new Image,a.src=e,h.images[e]={img:a,refCount:1}),n.img=a},remove:function(){var e=this.options.imageURL,r=i,n=this;t.each(s.s,function(){this.options.animation===n&&this.setAnimation({animation:null}),this.options.background===n&&this.setBackground({background:null})}),r.images[e].refCount-=1,0>=r.images[e].refCount&&delete r.images[e]},complete:function(){return this.options.img.complete},onLoad:function(){var t=this.options,e=t.img,i=s.truncate;t.type===s.ANIMATION_VERTICAL?(t.frameWidth||(t.frameWidth=e.width-t.offsetx),t.frameHeight||(t.frameHeight=i((e.height-t.offsety)/t.numberOfFrame)),t.deltax=0,t.deltay=t.frameHeight,t.multix=t.frameWidth,t.multiy=0):(t.frameWidth||(t.frameWidth=i((e.width-t.offsetx)/t.numberOfFrame)),t.frameHeight||(t.frameHeight=e.height-t.offsety),t.deltax=t.frameWidth,t.deltay=0,t.multix=0,t.multiy=t.frameHeight),t.halfWidth=i(t.frameWidth/2),t.halfHeight=i(t.frameHeight/2),this.width=t.frameWidth,this.height=t.frameHeight,this.halfWidth=t.halfWidth,this.halfHeight=t.halfHeight}}),s.Animation=s.Maker(s.PAnimation),s.resourceManager.addAnimation=function(t){var e=Array.prototype.slice.call(arguments,1),i=s.Animation.apply(this,e);return i.name=t,s.resourceManager.addResource(t,i)},r={},s.PRect=r,t.extend(s.PRect,{init:function(e){t.extend(this,{left:0,right:0,centerx:0,top:0,bottom:0,centery:0,width:0,height:0,halfWidth:0,halfHeight:0,radius:0,last_x:"left",last_y:"top"}),this.resize&&this.resize(e)},resize:function(t){var e,i=t||{},r=s.truncate;return void 0!==i.width?(this.width=r(i.width),this.halfWidth=r(i.width/2),e=!0):void 0!==i.halfWidth?(this.width=r(2*i.halfWidth),this.halfWidth=r(i.halfWidth),e=!0):e=!1,void 0!==i.height?(this.height=r(i.height),this.halfHeight=r(i.height/2),e=!0):void 0!==i.halfHeight?(this.height=r(2*i.halfHeight),this.halfHeight=r(i.halfHeight),e=!0):e=!1,e?this.radius=Math.max(this.halfWidth,this.halfHeight):void 0!==i.radius&&(this.radius=r(i.radius),this.width=2*this.radius,this.height=this.width,this.halfWidth=this.radius,this.halfHeight=this.halfWidth),this.move&&this.move(t),this},move:function(t){var e,i,r=t||{},n=s.truncate;return void 0!==r.last_x&&void 0!==r[r.last_x]?(this[r.last_x]=n(r[r.last_x]),e=r.last_x):void 0!==r.centerx?(this.centerx=n(r.centerx),e="centerx"):void 0!==r.right?(this.right=n(r.right),e="right"):void 0!==r.left?(this.left=n(r.left),e="left"):e=this.last_x,void 0!==r.last_y&&void 0!==r[r.last_y]?(this[r.last_y]=n(r[r.last_y]),i=r.last_y):void 0!==r.centery?(this.centery=n(r.centery),i="centery"):void 0!==r.bottom?(this.bottom=n(r.bottom),i="bottom"):void 0!==r.top?(this.top=n(r.top),i="top"):i=this.last_y,"centerx"===e?(this.left=this.centerx-this.halfWidth,this.right=this.left+this.width):"right"===e?(this.left=this.right-this.width,this.centerx=this.left+this.halfWidth):(this.centerx=this.left+this.halfWidth,this.right=this.left+this.width),"centery"===i?(this.top=this.centery-this.halfHeight,this.bottom=this.top+this.height):"bottom"===i?(this.top=this.bottom-this.height,this.centery=this.top+this.halfHeight):(this.centery=this.top+this.halfHeight,this.bottom=this.top+this.height),this.last_x=e,this.last_y=i,this},collidePointRect:function(t,e){return t>=this.left&&this.right>t&&e>=this.top&&this.bottom>e},collideRect:function(t){var e=this.left,i=this.right,r=this.top,n=this.bottom,a=t.left,o=t.right,s=t.top,h=t.bottom;return(e>=a&&o>e||a>=e&&i>a)&&(r>=s&&h>r||s>=r&&n>s)},collidePointCircle:function(t,e){var i=t-this.centerx,r=e-this.centery,n=this.radius;return n*n>i*i+r*r},collideCircle:function(t){var e=t.centerx-this.centerx,i=t.centery-this.centery,r=this.radius+t.radius;return r*r>e*e+i*i}}),s.Rect=s.Maker(s.PRect),n=Object.create(r),s.PBaseSprite=n,t.extend(s.PBaseSprite,{init:function(e,i,n){var a;this.options?a=this.options:(a={},this.options=a),t.extend(a,{angle:0,scalex:1,scaley:1,fliph:1,flipv:1,alpha:1,hidden:!1,scaleh:1,scalev:1,posOffsetX:0,posOffsetY:0}),s.s[e]=this,this.name=e,this.parent=n,this.userData={},this.callbacks=[],r.init.call(this,i)},remove:function(){var t,e,i,r=this.parent,n=this.name;if(r)for(t=s.s[r].layers,e=t.length,i=0;e>i;i+=1)if(t[i].name===n){t.splice(i,1);break}delete s.s[n]},registerCallback:function(t,e){return e=Math.round(e/s.refreshRate),0===e&&(e=1),this.callbacks.push({callback:t,rate:e,idleCounter:0}),this},clearCallbacks:function(){return this.callbacks.splice(0,this.callbacks.length),this},hide:function(){return this.options.hidden=!0,this},show:function(){return this.options.hidden=!1,this},toggle:function(t){return void 0===t&&(t=this.options.hidden),this.options.hidden=!t,this},drawFirst:function(){var t,e,i,r,n=this.parent,a=this.name;if(n){for(t=s.s[n].layers,e=t.length,r=0;e>r;r+=1)if(t[r].name===a){i=t.splice(r,1)[0];break}i&&t.unshift(i)}return this},drawLast:function(){var t,e,i,r,n=this.parent,a=this.name;if(n){for(t=s.s[n].layers,e=t.length,r=0;e>r;r+=1)if(t[r].name===a){i=t.splice(r,1)[0];break}i&&t.push(i)}return this},drawTo:function(t){var e,i,r,n,a=this.parent,o=this.name;if(a){for(e=s.s[a].layers,i=e.length,n=0;i>n;n+=1)if(e[n].name===o){r=e.splice(n,1)[0];break}r&&e.splice(s.clamp(Math.round(t),0,e.length),0,r)}return this},drawBefore:function(t){var e,i,r,n,a=this.parent,o=this.name;if(a){for(e=s.s[a].layers,i=e.length,n=0;i>n;n+=1)if(e[n].name===o){r=e.splice(n,1)[0],i-=1;break}for(n=0;i>n&&e[n].name!==t;n+=1);r&&e.splice(n,0,r)}return this},drawAfter:function(t){var e,i,r,n,a=this.parent,o=this.name;if(a){for(e=s.s[a].layers,i=e.length,n=0;i>n;n+=1)if(e[n].name===o){r=e.splice(n,1)[0],i-=1;break}for(n=0;i>n;n+=1)if(e[n].name===t){n+=1;break}r&&e.splice(n,0,r)}return this},rotate:function(t){return void 0===t?this.options.angle:(this.options.angle=t,this)},scale:function(t,e){var i=this.options;return void 0===t?i.scalex:(i.scalex=t,i.scaleh=t*i.fliph,void 0===e?(i.scaley=t,i.scalev=t*i.flipv):(i.scaley=e,i.scalev=e*i.flipv),this)},scalex:function(t){var e=this.options;return void 0===t?e.scalex:(e.scalex=t,e.scaleh=t*e.fliph,this)},scaley:function(t){var e=this.options;return void 0===t?e.scaley:(e.scaley=t,e.scalev=t*e.flipv,this)},fliph:function(t){var e=this.options;return void 0===t?0>e.fliph:(t?(e.fliph=-1,e.scaleh=-e.scalex):(e.fliph=1,e.scaleh=e.scalex),this)},flipv:function(t){var e=this.options;return void 0===t?0>e.flipv:(t?(e.flipv=-1,e.scalev=-e.scaley):(e.flipv=1,e.scalev=e.scaley),this)},opacity:function(t){return void 0===t?this.options.alpha:(this.options.alpha=t,this)},update:function(){var t,e,i,r,n=this.callbacks,a=n.length,o=[];for(r=0;a>r;r+=1)t=n[r],t.idleCounter+=1,t.idleCounter>=t.rate&&(t.idleCounter=0,e=t.callback.call(this,this),e&&o.unshift(r));for(i=o.length,r=0;i>r;r+=1)n.splice(r,1)}}),a=Object.create(n),s.PSprite=a,t.extend(s.PSprite,{init:function(e,i){var r,a=i||{};this.options?r=this.options:(r={},this.options=r),t.extend(r,{animation:null,animationIndex:0,callback:null,idleCounter:0,currentFrame:0,frameIncrement:1,multix:0,multiy:0,paused:!1}),n.init.apply(this,arguments),void 0===a.animation&&(a.animation=null),this.setAnimation(a)},setAnimation:function(t){var e,i,r,a=this.options,o=t||{},h=void 0!==o.animation,l=void 0!==o.animationIndex;return h&&(e=s.r[o.animation],a.animation=e,e?(r=Object.create(e.options),o.width=r.frameWidth,o.height=r.frameHeight):(r=null,o.width=0,o.height=0),this.animation_options=r,n.resize.call(this,o),0===a.animationIndex||l||(o.animationIndex=0,l=!0)),r=this.animation_options,l&&(i=o.animationIndex,a.animationIndex=i,e=a.animation,e?(a.multix=i*r.multix,a.multiy=i*r.multiy):(a.multix=0,a.multiy=0)),void 0!==o.rate&&(r.rate=Math.round(o.rate/s.refreshRate)||1,h=!0),void 0!==o.once&&(r.once=o.once,h=!0),void 0!==o.pingpong&&(r.pingpong=o.pingpong,h=!0),void 0!==o.backwards&&(r.backwards=o.backwards,h=!0),(h||l)&&(r&&r.backwards?(a.currentFrame=r.numberOfFrame-1,a.frameIncrement=-1):(a.currentFrame=0,a.frameIncrement=1),a.idleCounter=0,this.endAnimation=!1),void 0!==o.callback&&(a.callback=o.callback),void 0!==o.paused&&(a.paused=o.paused),this},resize:null,update:function(){var t=this.options,e=t.callback,i=t.animation,r=this.animation_options,a=t.currentFrame;n.update.call(this),this.endAnimation||t.paused||(i?(t.idleCounter+=1,t.idleCounter>=r.rate&&(t.idleCounter=0,a+=t.frameIncrement,r.backwards?r.pingpong?a>=r.numberOfFrame?(t.frameIncrement=-1,r.once?(a-=1,t.idleCounter=1,this.endAnimation=!0):a-=r.numberOfFrame>1?2:1,t.currentFrame=a,e&&e.call(this,this)):0>a?(t.frameIncrement=1,a=r.numberOfFrame>1?1:0,t.currentFrame=a):t.currentFrame=a:0>a?(r.once?(a=0,t.idleCounter=1,this.endAnimation=!0):a=r.numberOfFrame-1,t.currentFrame=a,e&&e.call(this,this)):t.currentFrame=a:r.pingpong?0>a?(t.frameIncrement=1,r.once?(a=0,t.idleCounter=1,this.endAnimation=!0):a=r.numberOfFrame>1?1:0,t.currentFrame=a,e&&e.call(this,this)):a>=r.numberOfFrame?(t.frameIncrement=-1,a-=r.numberOfFrame>1?2:1,t.currentFrame=a):t.currentFrame=a:a>=r.numberOfFrame?(r.once?(a-=1,t.idleCounter=1,this.endAnimation=!0):a=0,t.currentFrame=a,e&&e.call(this,this)):t.currentFrame=a)):e&&e.call(this,this))}}),o=Object.create(n),s.PSpriteGroup=o,t.extend(s.PSpriteGroup,{init:function(e,i){var r,a=i||{};this.options?r=this.options:(r={},this.options=r),t.extend(r,{background:null,backgroundType:s.BACKGROUND_TILED,crop:!1}),a.parentDOM&&(this.parentDOM=a.parentDOM),this.layers=[],n.init.apply(this,arguments),void 0===a.background&&(a.background=null),this.setBackground(a)},remove:function(){this.clear(),n.remove.apply(this,arguments)},resize:function(t){var e,i={},r=!1;return n.resize.call(this,t),this.parent&&(e=s.s[this.parent],this.width||(i.width=e.width,r=!0),this.height||(i.height=e.height,r=!0),r&&n.resize.call(this,i)),this},clear:function(){for(var t=this.layers;t.length;)t[0].obj.remove();return this},children:function(t){var e,i,r,n,a=this.layers,o=a.length;if(t)for(n=0;o>n&&(e=a[n],!(e&&(i=e.obj,r=t.call(i,i))));n+=1);return this},setBackground:function(t){var e=this.options,i=t||{};return void 0!==i.background&&(e.background=s.r[i.background]),void 0!==i.backgroundType&&(e.backgroundType=i.backgroundType),this},crop:function(t){var e=this.options;return void 0===t?e.crop:(e.crop=t,this)},addSprite:function(t,e){var i=s.Sprite(t,e,this.name);return this.layers.push({name:t,obj:i}),this},insertSprite:function(t,e){var i=s.Sprite(t,e,this.name);return this.layers.unshift({name:t,obj:i}),this},addGroup:function(t,e){var i=s.SpriteGroup(t,e,this.name);return this.layers.push({name:t,obj:i}),i},insertGroup:function(t,e){var i=s.SpriteGroup(t,e,this.name);return this.layers.unshift({name:t,obj:i}),i},end:function(){var t=this.parent;return t||(t=this.name),s.s[t]},update:function(){var t,e=this.layers,i=e.length;for(n.update.call(this),t=0;i>t;t+=1)e[t]&&e[t].obj.update()},draw:function(){var t,e=this.layers,i=e.length;for(t=0;i>t;t+=1)e[t].obj.draw()}}),t.extend(s,{playground:function(e){var i,r=s.s.playground;return r||(i=e?t(e):t("#playground"),r=s.SpriteGroup("playground",{width:i.width(),height:i.height(),parentDOM:i},""),r.resize=null,r.move=null,r.crop=null,setTimeout(s.firePlaygroundCallbacks,0)),r},startGame:function(t,e){var i=s.resourceManager;return t&&(i.completeCallback=t),e&&(s.refreshRate=e),null===i.idPreload&&(i.idPreload=setInterval(i.preload,100)),this},stopGame:function(){return null!==s.idUpdate&&(clearInterval(s.idUpdate),s.idUpdate=null),this},loadCallback:function(t){return s.resourceManager.loadCallback=t,this},startCallback:function(t){return s.resourceManager.startCallbacks.push(t),this},playgroundCallback:function(t){return s.playgroundCallbacks.push(t),this},firePlaygroundCallbacks:function(){var t,e=s.s.playground,i=e.parentDOM,r=s.playgroundCallbacks,n=r.length;for(t=0;n>t;t+=1)r[t].call(e,i);r.splice(0,n)},update:function(){var t=s.s.playground;t&&(t.update(),s.drawDone&&(s.drawDone=!1,window.requestAnimFrame(s.draw)))},draw:function(){s.s.playground.draw(),s.drawDone=!0}})}(jQuery),function(t,e){var i=e.PSprite,r=e.PSpriteGroup;e.support={ieFilter:!1,rgba:Modernizr.rgba,svg:Modernizr.svg},Modernizr.opacity&&(e.support.opacity=Modernizr.prefixed("opacity")),Modernizr.csstransforms&&(e.support.transformFunction=Modernizr.prefixed("transform")),Modernizr.backgroundsize&&(e.support.backgroundsize=Modernizr.prefixed("backgroundSize")),e.nextGradientId=0,t.extend(e.PGradient,{initDOM:function(){var t,i,r,n,a,o,s,h,l,c,d=this.startColor,u=this.endColor,p=e.support;d===u?1===d.a?this.css_options={"background-color":["rgb(",d.r+"",",",d.g+"",",",d.b+"",")"].join("")}:p.rgba?this.css_options={"background-color":this.startColorStr}:p.ieFilter?(t=["0",Math.round(255*d.a).toString(16).toUpperCase()].join(""),i=["0",d.r.toString(16).toUpperCase()].join(""),r=["0",d.g.toString(16).toUpperCase()].join(""),n=["0",d.b.toString(16).toUpperCase()].join(""),a=["#",t.slice(t.length-2),i.slice(i.length-2),r.slice(r.length-2),n.slice(n.length-2)].join(""),this.ie_filter=['progid:DXImageTransform.Microsoft.Gradient(GradientType=0,startColorstr="',a,'",endColorstr="',a,'")'].join("")):this.css_options={"background-color":["rgb(",d.r+"",",",d.g+"",",",d.b+"",")"].join("")}:p.svg?(a=["rgb(",d.r+"",",",d.g+"",",",d.b+"",")"].join(""),o=["rgb(",u.r+"",",",u.g+"",",",u.b+"",")"].join(""),this.type===e.GRADIENT_HORIZONTAL?(h=100,l=0):(h=0,l=100),c=['<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none">',"<defs>",'<linearGradient id="friGameGradient',e.nextGradientId+"",'" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="',h+"",'%" y2="',l+"",'%">','<stop offset="0%" stop-color="',a,'" stop-opacity="',d.a+"",'" />','<stop offset="100%" stop-color="',o,'" stop-opacity="',u.a+"",'" />',"</linearGradient>","</defs>",'<rect x="0" y="0" width="1" height="1" fill="url(#friGameGradient',e.nextGradientId+"",')" />',"</svg>"].join(""),e.nextGradientId+=1,this.css_options={"background-image":['url("data:image/svg+xml;base64,',btoa(c),'")'].join("")},p.backgroundsize&&(this.css_options[p.backgroundsize]="100% 100%")):p.ieFilter?(t=["0",Math.round(255*d.a).toString(16).toUpperCase()].join(""),i=["0",d.r.toString(16).toUpperCase()].join(""),r=["0",d.g.toString(16).toUpperCase()].join(""),n=["0",d.b.toString(16).toUpperCase()].join(""),a=["#",t.slice(t.length-2),i.slice(i.length-2),r.slice(r.length-2),n.slice(n.length-2)].join(""),t=["0",Math.round(255*u.a).toString(16).toUpperCase()].join(""),i=["0",u.r.toString(16).toUpperCase()].join(""),r=["0",u.g.toString(16).toUpperCase()].join(""),n=["0",u.b.toString(16).toUpperCase()].join(""),o=["#",t.slice(t.length-2),i.slice(i.length-2),r.slice(r.length-2),n.slice(n.length-2)].join(""),s=this.type===e.GRADIENT_HORIZONTAL?1:0,this.ie_filter=["progid:DXImageTransform.Microsoft.Gradient(GradientType=",s,',startColorstr="',a,'",endColorstr="',o,'")'].join("")):this.css_options=1===d.a?{"background-color":["rgb(",d.r+"",",",d.g+"",",",d.b+"",")"].join("")}:p.rgba?{"background-color":this.startColorStr}:{"background-color":["rgb(",d.r+"",",",d.g+"",",",d.b+"",")"].join("")},this.dom_initialized=!0},getBackground:function(e,i,r){var n=!1;return this.dom_initialized||this.initDOM(),this.css_options&&t.extend(i,this.css_options),this.ie_filter&&(r.gradient=this.ie_filter,n=!0),n}}),t.extend(e.PAnimation,{getBackground:function(t,i,r){var n=e.support,a=!1;return t===e.BACKGROUND_STRETCHED?n.backgroundsize?(i["background-image"]=['url("',this.options.imageURL,'")'].join(""),i[n.backgroundsize]="100% 100%"):n.ieFilter?(r.image=['progid:DXImageTransform.Microsoft.AlphaImageLoader(src="',this.options.imageURL,'",sizingMethod="scale")'].join(""),a=!0):i["background-image"]=['url("',this.options.imageURL,'")'].join(""):i["background-image"]=['url("',this.options.imageURL,'")'].join(""),a}}),t.extend(e.PBaseSprite,{transform:function(){var t=this.options,e=t.angle,i=t.scaleh,r=t.scalev,n=[];return e&&Array.prototype.push.apply(n,["rotate(",e+"","rad)"]),(1!==i||1!==r)&&Array.prototype.push.apply(n,["scale(",i+"",",",r+"",")"]),n.join("")},ieTransform:function(){var t,e,i,r=this.options,n=r.angle,a=r.scaleh,o=r.scalev;n||1!==a||1!==o?(t=Math.cos(n),e=Math.sin(n),i=["progid:DXImageTransform.Microsoft.Matrix(M11=",t*a+"",",M12=",-e*o+"",",M21=",e*a+"",",M22=",t*o+"",',SizingMethod="auto expand",FilterType="nearest neighbor")'].join("")):i="",this.ieFilters.matrix=i},ieAlpha:function(){var t,e=this.options.alpha;t=1!==e?["progid:DXImageTransform.Microsoft.Alpha(opacity=",Math.round(100*e)+"",")"].join(""):"",this.ieFilters.alpha=t},applyIeFilters:function(){var t,e,i=this.dom,r=this.options,n=this.ieFilters,a=Math.round;i.css("filter",[n.matrix,n.alpha,n.gradient,n.image].join("")),t=i.width(),e=i.height(),r.posOffsetX=a((t-this.width)/2),r.posOffsetY=a((e-this.height)/2),i.css({left:[this.left-r.posOffsetX+"","px"].join(""),top:[this.top-r.posOffsetY+"","px"].join("")})}}),e.PSprite=Object.create(i),t.extend(e.PSprite,{init:function(){i.init.apply(this,arguments),this.old_options={}},remove:function(){this.dom&&this.dom.remove(),i.remove.apply(this,arguments)},draw:function(){var i=this.options,r=this.old_options,n=this.parent,a=i.currentFrame,o=i.animation,s=this.animation_options,h=this.dom,l=this.left,c=this.top,d=i.multix,u=i.multiy,p=i.angle,f=i.scaleh,m=i.scalev,g=i.alpha,b=i.hidden,v={},y=!1,x=!1,k=e.support,w=k.transformFunction,C=k.ieFilter,j=!1,A=e.last_sprite;o&&g&&!i.hidden?(h?A!==r.last_sprite&&(h.detach(),A===n?h.prependTo(e.s[n].dom):h.insertAfter(e.s[A].dom),r.last_sprite=A):(h=t(['<div id="',e.domPrefix,this.name,'"></div>'].join("")),h.addClass(e.cssClass),A===n?h.prependTo(e.s[n].dom):h.insertAfter(e.s[A].dom),r.last_sprite=A,this.dom=h,C&&(this.ieFilters={matrix:"",alpha:"",gradient:"",image:""})),e.last_sprite=this.name,b!==r.hidden&&(h.show(),r.hidden=b),l!==r.left&&(v.left=[l-i.posOffsetX+"","px"].join(""),y=!0,r.left=l),c!==r.top&&(v.top=[c-i.posOffsetY+"","px"].join(""),y=!0,r.top=c),o!==r.animation&&(t.extend(v,{width:[this.width+"","px"].join(""),height:[this.height+"","px"].join(""),"background-image":['url("',s.imageURL,'")'].join("")}),y=!0,x=!0,C&&(p||1!==f||1!==m)&&(j=!0),r.animation=o),(d!==r.multix||u!==r.multiy)&&(x=!0,r.multix=d,r.multiy=u),(x||0===i.idleCounter&&1!==s.numberOfFrame)&&(v["background-position"]=[-(s.offsetx+d+a*s.deltax)+"","px ",-(s.offsety+u+a*s.deltay)+"","px"].join(""),y=!0),(p!==r.angle||f!==r.scaleh||m!==r.scalev)&&(w?(v[w]=this.transform(),y=!0):C?(this.ieTransform(),y=!0,j=!0):t.noop(),r.angle=p,r.scaleh=f,r.scalev=m),g!==r.alpha&&(r.alpha||h.show(),k.opacity?(v[k.opacity]=1!==g?g+"":"",y=!0):C?(this.ieAlpha(),y=!0,j=!0):t.noop(),r.alpha=g),y&&h.css(v),C&&j&&this.applyIeFilters()):h&&(b&&b!==r.hidden&&(h.hide(),r.hidden=b),o||o===r.animation||(h.css({"background-image":"","background-position":""}),r.animation=o),g||g===r.alpha||(h.hide(),r.alpha=g))}}),e.Sprite=e.Maker(e.PSprite),e.PSpriteGroup=Object.create(r),t.extend(e.PSpriteGroup,{init:function(i,n,a){var o;r.init.apply(this,arguments),this.old_options={},a||(o=t(['<div id="',e.domPrefix,i,'"></div>'].join("")).prependTo(n.parentDOM),o.addClass(e.cssClass),o.css({left:"0px",top:"0px",width:[n.width+"","px"].join(""),height:[n.height+"","px"].join(""),overflow:"hidden"}),this.old_options.last_sprite=i,this.dom=o,o.get(0).filters?(e.support.ieFilter=!0,this.ieFilters={matrix:"",alpha:"",gradient:"",image:""}):e.support.ieFilter=!1)},remove:function(){r.remove.apply(this,arguments),this.dom&&this.dom.remove()},draw:function(){var i=this.options,n=this.old_options,a=this.parent,o=this.left,s=this.top,h=this.width,l=this.height,c=i.background,d=i.backgroundType,u=i.angle,p=i.scaleh,f=i.scalev,m=i.alpha,g=i.hidden,b=i.crop,v={},y=!1,x=this.dom,k=e.support,w=k.transformFunction,C=k.ieFilter,j=C&&this.ieFilters,A=!1,M=e.last_sprite,_=this.name;a||(M=_,e.last_sprite=M),(this.layers.length||c)&&m&&!i.hidden?(this.dom?M!==n.last_sprite&&(x.detach(),M===a?x.prependTo(e.s[a].dom):x.insertAfter(e.s[M].dom),n.last_sprite=M):(x=t(['<div id="',e.domPrefix,this.name,'"></div>'].join("")),x.addClass(e.cssClass),M===a?x.prependTo(e.s[a].dom):x.insertAfter(e.s[M].dom),n.last_sprite=M,this.dom=x,C&&(this.ieFilters={matrix:"",alpha:"",gradient:"",image:""},j=this.ieFilters)),e.last_sprite=this.name,g!==n.hidden&&(x.show(),n.hidden=g),o!==n.left&&(v.left=[o-i.posOffsetX+"","px"].join(""),y=!0,n.left=o),s!==n.top&&(v.top=[s-i.posOffsetY+"","px"].join(""),y=!0,n.top=s),h!==n.width&&(v.width=[h+"","px"].join(""),y=!0,C&&(u||1!==p||1!==f)&&(A=!0),n.width=h),l!==n.height&&(v.height=[l+"","px"].join(""),y=!0,C&&(u||1!==p||1!==f)&&(A=!0),n.height=l),(u!==n.angle||p!==n.scaleh||f!==n.scalev)&&(w?(v[w]=this.transform(),y=!0):C?(this.ieTransform(),y=!0,A=!0):t.noop(),n.angle=u,n.scaleh=p,n.scalev=f),m!==n.alpha&&(n.alpha||x.show(),k.opacity?(v[k.opacity]=1!==m?m+"":"",y=!0):C?(this.ieAlpha(),y=!0,A=!0):t.noop(),n.alpha=m),(c!==n.background||d!==n.backgroundType)&&(v["background-color"]="",v["background-image"]="",k.backgroundsize&&(v[k.backgroundsize]=""),j&&j.gradient&&(j.gradient="",A=!0),j&&j.image&&(j.image="",A=!0),c&&c.getBackground(d,v,j)&&(A=!0),y=!0,n.background=c,n.backgroundType=d),b!==n.crop&&(a&&(v.overflow=b?"hidden":"visible",y=!0),n.crop=b),y&&x.css(v),C&&A&&this.applyIeFilters(),r.draw.apply(this,arguments),e.last_sprite=_):x&&(g&&g!==n.hidden&&(x.hide(),n.hidden=g),m||m===n.alpha||(x.hide(),n.alpha=m))}}),e.SpriteGroup=e.Maker(e.PSpriteGroup)}(jQuery,friGame),function(t,e){e.mouseTracker={x:0,y:0},e.playgroundCallback(function(t){t.mousemove(function(i){var r=e.mouseTracker,n=t.offset();r.x=i.pageX-n.left,r.y=i.pageY-n.top}),t.mousedown(function(t){e.mouseTracker[t.which]=!0}),t.mouseup(function(t){e.mouseTracker[t.which]=!1})})}(jQuery,friGame);