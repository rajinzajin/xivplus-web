(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[823],{4506:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(5321).Z,o=i(1322).Z,n=i(6687).Z,a=i(6239).Z,l=n(i(959)),s=o(i(1339)),c=i(7910),d=i(3199),u=i(3928);i(6513);var f=o(i(3534));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/xivplus-web/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,i,o,n,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&a(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;o.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}function v(e){let[t,i]=l.version.split("."),r=parseInt(t,10),o=parseInt(i,10);return r>18||18===r&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let w=l.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:o,widthInt:n,qualityInt:s,className:c,imgStyle:d,blurStyle:u,isLazy:f,fetchPriority:g,fill:h,placeholder:p,loading:w,srcString:b,config:y,unoptimized:E,loader:S,onLoadRef:C,onLoadingCompleteRef:_,setBlurComplete:j,setShowAltText:x,onLoad:z,onError:R}=e,k=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return w=f?"lazy":w,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},k,v(g),{loading:w,width:n,height:o,decoding:"async","data-nimg":h?"fill":"1",className:c,style:r({},d,u)},i,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(R&&(e.src=e.src),e.complete&&m(e,b,p,C,_,j,E))},[b,p,C,_,j,R,E,t]),onLoad:e=>{let t=e.currentTarget;m(t,b,p,C,_,j,E)},onError:e=>{x(!0),"blur"===p&&j(!0),R&&R(e)}})))}),b=l.forwardRef((e,t)=>{let i,o;var n,{src:m,sizes:b,unoptimized:y=!1,priority:E=!1,loading:S,className:C,quality:_,width:j,height:x,fill:z,style:R,onLoad:k,onLoadingComplete:I,placeholder:P="empty",blurDataURL:O,fetchPriority:M,layout:A,objectFit:L,objectPosition:N,lazyBoundary:B,lazyRoot:D}=e,F=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let W=l.useContext(u.ImageConfigContext),T=l.useMemo(()=>{let e=g||W||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:i})},[W]),q=F,G=q.loader||f.default;delete q.loader;let Z="__next_img_default"in G;if(Z){if("custom"===T.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=G;G=t=>{let{config:i}=t,r=a(t,["config"]);return e(r)}}if(A){"fill"===A&&(z=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];e&&(R=r({},R,e));let t={responsive:"100vw",fill:"100vw"}[A];t&&!b&&(b=t)}let U="",V=p(j),J=p(x);if("object"==typeof(n=m)&&(h(n)||void 0!==n.src)){let e=h(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,o=e.blurHeight,O=O||e.blurDataURL,U=e.src,!z){if(V||J){if(V&&!J){let t=V/e.width;J=Math.round(e.height*t)}else if(!V&&J){let t=J/e.height;V=Math.round(e.width*t)}}else V=e.width,J=e.height}}let Y=!E&&("lazy"===S||void 0===S);(!(m="string"==typeof m?m:U)||m.startsWith("data:")||m.startsWith("blob:"))&&(y=!0,Y=!1),T.unoptimized&&(y=!0),Z&&m.endsWith(".svg")&&!T.dangerouslyAllowSVG&&(y=!0),E&&(M="high");let[H,$]=l.useState(!1),[K,Q]=l.useState(!1),X=p(_),ee=Object.assign(z?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:L,objectPosition:N}:{},K?{}:{color:"transparent"},R),et="blur"===P&&O&&!H?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:V,heightInt:J,blurWidth:i,blurHeight:o,blurDataURL:O,objectFit:ee.objectFit}),'")')}:{},ei=function(e){let{config:t,src:i,unoptimized:r,width:o,quality:n,sizes:a,loader:l}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,i){let{deviceSizes:r,allSizes:o}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let n=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:n,kind:"x"}}(t,o,a),d=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,r)=>"".concat(l({config:t,src:i,quality:n,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:l({config:t,src:i,quality:n,width:s[d]})}}({config:T,src:m,unoptimized:y,width:V,quality:X,sizes:b,loader:G}),er=m,eo=l.useRef(k);l.useEffect(()=>{eo.current=k},[k]);let en=l.useRef(I);l.useEffect(()=>{en.current=I},[I]);let ea=r({isLazy:Y,imgAttributes:ei,heightInt:J,widthInt:V,qualityInt:X,className:C,imgStyle:ee,blurStyle:et,loading:S,config:T,fetchPriority:M,fill:z,unoptimized:y,placeholder:P,loader:G,srcString:er,onLoadRef:eo,onLoadingCompleteRef:en,setBlurComplete:$,setShowAltText:Q},q);return l.default.createElement(l.default.Fragment,null,l.default.createElement(w,Object.assign({},ea,{ref:t})),E?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src,imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:q.crossOrigin},v(M)))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7910:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:o,blurDataURL:n,objectFit:a}=e,l=r||t,s=o||i,c=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&o?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E")}},3534:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(r,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},8823:function(e,t,i){e.exports=i(4506)}}]);