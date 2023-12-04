"use strict";(self.webpackChunkHRJ_London=self.webpackChunkHRJ_London||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,o=new RegExp("^"+i.source),s=new RegExp(i.source+r.source,"gu"),l=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,n,r)=>{let i=!1,o=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,s=o,o=!0,l++):o&&s&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=o,o=!1,i=!0):(i=n(c)===c&&r(c)!==c,s=o,o=r(c)===c&&n(c)!==c)}return e})(e,i,c)),e=e.replace(o,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,i):i(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return h},M:function(){return j},P:function(){return E},S:function(){return W},_:function(){return s},a:function(){return o},b:function(){return d},g:function(){return m},h:function(){return l}});var n=a(7294),r=(a(3204),a(5697)),i=a.n(r);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),o({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},r,{opacity:t?1:0})})}function m(e,t,a,n,r,i,s,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],g=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=s(e,u);return n.createElement(n.Fragment,null,n.createElement(g,o({},a)),t,null)},p=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:r,alt:i="",shouldLoad:l}=e,c=s(e,p);return n.createElement("img",o({},c,{decoding:"async",loading:r,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,i=s(e,f);const l=i.sizes||(null==t?void 0:t.sizes),c=n.createElement(y,o({},i,t,{sizes:l,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return n.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:l})})),c):c};var v;y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},b.displayName="Picture",b.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=s(e,w);return t?n.createElement(b,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},a))};E.displayName="Placeholder",E.propTypes={fallback:r.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const j=function(e){return n.createElement(n.Fragment,null,n.createElement(b,o({},e)),n.createElement("noscript",null,n.createElement(b,o({},e,{shouldLoad:!0}))))};j.displayName="MainImage",j.propTypes=b.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],x=e=>e.replace(/\n/g,""),k=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),o=3;o<n;o++)r[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:i().object.isRequired,alt:k},_=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],N=new Set;let q,P;const I=function(e){let{as:t="div",image:r,style:i,backgroundColor:d,className:m,class:u,onStartLoad:g,onLoad:h,onError:p}=e,f=s(e,_);const{width:y,height:b,layout:v}=r,w=c(y,b,v),{style:E,className:j}=w,C=s(w,T),S=(0,n.useRef)(),x=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);u&&(m=u);const k=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,y,b);return(0,n.useEffect)((()=>{q||(q=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return P=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==h||h({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void N.add(x);if(P&&N.has(x))return;let t,n;return q.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;S.current&&(S.current.innerHTML=a(o({isLoading:!0,isLoaded:N.has(x),image:r},f)),N.has(x)||(t=requestAnimationFrame((()=>{S.current&&(n=s(S.current,x,N,i,g,h,p))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{N.has(x)&&P&&(S.current.innerHTML=P(o({isLoading:N.has(x),isLoaded:N.has(x),image:r},f)),null==g||g({wasCached:!0}),null==h||h({wasCached:!0}))}),[r]),(0,n.createElement)(t,o({},C,{style:o({},E,i,{backgroundColor:d}),className:j+(m?" "+m:""),ref:S,dangerouslySetInnerHTML:{__html:k},suppressHydrationWarning:!0}))},R=(0,n.memo)((function(e){return e.image?(0,n.createElement)(I,e):null}));R.propTypes=L,R.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function B(e){return function(t){let{src:a,__imageData:r,__error:i}=t,l=s(t,O);return i&&console.warn(i),r?n.createElement(e,o({image:r},l)):(console.warn("Image not loaded",a),null)}}const M=B((function(e){let{as:t="div",className:a,class:r,style:i,image:l,loading:u="lazy",imgClassName:g,imgStyle:p,backgroundColor:f,objectFit:y,objectPosition:b}=e,v=s(e,C);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),p=o({objectFit:y,objectPosition:b,backgroundColor:f},p);const{width:w,height:k,layout:L,images:_,placeholder:T,backgroundColor:N}=l,q=c(w,k,L),{style:P,className:I}=q,R=s(q,S),O={fallback:void 0,sources:[]};return _.fallback&&(O.fallback=o({},_.fallback,{srcSet:_.fallback.srcSet?x(_.fallback.srcSet):void 0})),_.sources&&(O.sources=_.sources.map((e=>o({},e,{srcSet:x(e.srcSet)})))),n.createElement(t,o({},R,{style:o({},P,i,{backgroundColor:f}),className:I+(a?" "+a:"")}),n.createElement(h,{layout:L,width:w,height:k},n.createElement(E,o({},m(T,!1,L,w,k,N,y,b))),n.createElement(j,o({"data-gatsby-image-ssr":"",className:g},v,d("eager"===u,!1,O,u,p)))))})),z=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),H={src:i().string.isRequired,alt:k,width:z,height:z,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};M.displayName="StaticImage",M.propTypes=H;const W=B(R);W.displayName="StaticImage",W.propTypes=H},5592:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(1883);var i=e=>{let{siteTitle:t}=e;return n.createElement("header",{style:{margin:"0 auto",padding:"var(--space-4) var(--size-gutter)",display:"flex",alignItems:"center",justifyContent:"space-between"}})};var o=e=>{var t;let{children:a}=e;const o=(0,r.useStaticQuery)("3649515864");return n.createElement(n.Fragment,null,n.createElement(i,{siteTitle:(null===(t=o.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),n.createElement("div",{style:{margin:"0 auto",maxWidth:"var(--size-content)",padding:"var(--size-gutter)"}},n.createElement("main",null,a),n.createElement("footer",{style:{textAlign:"center",marginTop:"var(--space-6)",fontSize:"var(--font-sm)"}},"© ",(new Date).getFullYear()," · Goldstein Holdings")))}},9357:function(e,t,a){var n=a(7294),r=a(1883);t.Z=function(e){var t,a;let{description:i,title:o,children:s}=e;const{site:l}=(0,r.useStaticQuery)("63159454"),c=i||l.siteMetadata.description,d=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,d?o+" | "+d:o),n.createElement("meta",{name:"description",content:c}),n.createElement("meta",{property:"og:title",content:o}),n.createElement("meta",{property:"og:description",content:c}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=l.siteMetadata)||void 0===a?void 0:a.author)||""}),n.createElement("meta",{name:"twitter:title",content:o}),n.createElement("meta",{name:"twitter:description",content:c}),s)}},3976:function(e,t,a){a.r(t),a.d(t,{Head:function(){return l},default:function(){return c}});var n=a(7294),r=(a(1883),a(5592)),i=a(9357),o=a(8032);var s=function(){return n.createElement("div",null,n.createElement("section",{class:"splash"},n.createElement(o.S,{src:"../../images/goldstein-holdings-colour-bar.png",loading:"eager",width:750,quality:95,formats:["auto","webp","avif"],alt:"",style:{marginBottom:"var(--space-3)"},__error:'No data found for image "../../images/goldstein-holdings-colour-bar.png"\n              undefinedCould not read image data file "/home/jamie/github/hrj-london/.cache/caches/gatsby-plugin-image/3006649398.json". \nThis may mean that the images in "/home/jamie/github/hrj-london/src/components/CompanySection/index.js" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78.'})),n.createElement("section",{class:"container"},n.createElement("div",{class:"card ag"},n.createElement("a",{href:"https://www.allengoldstein.com/",target:"_blank",rel:"noreferrer"},n.createElement("div",null,n.createElement(o.S,{src:"../../images/allen-goldstein-white.png",loading:"eager",width:250,quality:95,formats:["auto","webp","avif"],alt:"",style:{marginBottom:"var(--space-3)"},__error:'No data found for image "../../images/allen-goldstein-white.png"\n              undefinedCould not read image data file "/home/jamie/github/hrj-london/.cache/caches/gatsby-plugin-image/413104633.json". \nThis may mean that the images in "/home/jamie/github/hrj-london/src/components/CompanySection/index.js" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78.'})),n.createElement("p",null,"Allen Goldstein was formed by a group of property specialists and offers a truly in-house comprehensive property consultancy service. From specific building details, yield, and contract terms to other technical letting and sales aspects of residential properties, Allen Goldstein has expertise in all areas. "))),n.createElement("div",{class:"card sh"},n.createElement("a",{href:"https://www.sherlockhomesuk.com/",target:"_blank",rel:"noreferrer"},n.createElement("div",null,n.createElement(o.S,{src:"../../images/sherlock-homes.png",loading:"eager",width:275,quality:95,formats:["auto","webp","avif"],alt:"",style:{marginBottom:"var(--space-3)"},__error:'No data found for image "../../images/sherlock-homes.png"\n              undefinedCould not read image data file "/home/jamie/github/hrj-london/.cache/caches/gatsby-plugin-image/4084841526.json". \nThis may mean that the images in "/home/jamie/github/hrj-london/src/components/CompanySection/index.js" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78.'})),n.createElement("p",null,"Sherlock Homes provides luxury, fully furnished apartments in the heart of London. With decades of experience and a focus on customer service Sherlock Homes is the ideal base for trips to the Capital. "))),n.createElement("div",{class:"card bs"},n.createElement("a",{href:"https://www.bilshaboxingclub.com/",target:"_blank",rel:"noreferrer"},n.createElement("div",null,n.createElement(o.S,{src:"../../images/bil-sha-boxing.png",loading:"eager",width:250,quality:95,formats:["auto","webp","avif"],alt:"",style:{marginBottom:"var(--space-3)"},__error:'No data found for image "../../images/bil-sha-boxing.png"\n              undefinedCould not read image data file "/home/jamie/github/hrj-london/.cache/caches/gatsby-plugin-image/2787569612.json". \nThis may mean that the images in "/home/jamie/github/hrj-london/src/components/CompanySection/index.js" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78.'})),n.createElement("p",null,"The Bil Sha Boxing Club focuses on boxing in its purest form, providing a friendly, high-energy environment with the latest equipment and modern facilities for boxers at all levels and ages. "))),n.createElement("div",{class:"card up"},n.createElement("a",{href:"https://www.undisputedsports.promo/",target:"_blank",rel:"noreferrer"},n.createElement("div",null,n.createElement(o.S,{src:"../../images/undisputed.png",loading:"eager",width:350,quality:95,formats:["auto","webp","avif"],alt:"",style:{marginBottom:"var(--space-3)"},__error:'No data found for image "../../images/undisputed.png"\n              undefinedCould not read image data file "/home/jamie/github/hrj-london/.cache/caches/gatsby-plugin-image/2279024321.json". \nThis may mean that the images in "/home/jamie/github/hrj-london/src/components/CompanySection/index.js" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78.'})),n.createElement("p",null,"Undisputed is a London-based boxing promotion created by Bilat Shaista, an experienced former boxer, entrepreneur, and owner of the Bil Sha Boxing Club. With a focus on safety, trust, and integrity, Undisputed strives to transform the current white collar boxing landscape and give boxers the chance to show off their talent with confidence."))),n.createElement("div",{class:"card cb"},n.createElement("a",{href:"https://cloudeberry.com/",target:"_blank",rel:"noreferrer"},n.createElement("div",null,n.createElement(o.S,{src:"../../images/cloudeberry.png",loading:"eager",width:250,quality:95,formats:["auto","webp","avif"],alt:"",style:{marginBottom:"var(--space-3)"},__error:'No data found for image "../../images/cloudeberry.png"\n              undefinedCould not read image data file "/home/jamie/github/hrj-london/.cache/caches/gatsby-plugin-image/2153673799.json". \nThis may mean that the images in "/home/jamie/github/hrj-london/src/components/CompanySection/index.js" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78.'})),n.createElement("p",null,"CLOUDeBERRY is a responsive, client-focused Managed Service Provider (MSP) that provides end to end IT system support and maintenance. CLOUDeBERRY builds long term relationships and provides sustained support to businesses of any size."))),n.createElement("div",{class:"card vb"},n.createElement("a",{href:"https://vimbi.io",target:"_blank",rel:"noreferrer"},n.createElement("div",null,n.createElement(o.S,{src:"../../images/vimbi.png",loading:"eager",width:200,quality:95,formats:["auto","webp","avif"],alt:"",style:{marginBottom:"var(--space-3)"},__error:'No data found for image "../../images/vimbi.png"\n              undefinedCould not read image data file "/home/jamie/github/hrj-london/.cache/caches/gatsby-plugin-image/230150927.json". \nThis may mean that the images in "/home/jamie/github/hrj-london/src/components/CompanySection/index.js" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78.'})),n.createElement("p",null,"Vimbi is a Cloud and Technology Consultancy firm that offers high quality, cohesive solutions to clients through innovative strategic consultancy and software development. Vimbi's approach is to help organisation's evolve their current technology and processes."))),n.createElement("div",{class:"card gl"},n.createElement("a",{href:"https://glowlia.com/",target:"_blank",rel:"noreferrer"},n.createElement("div",null,n.createElement(o.S,{src:"../../images/glowlia-white.png",loading:"eager",width:180,quality:95,formats:["auto","webp","avif"],alt:"",style:{marginBottom:"var(--space-3)"},__error:'No data found for image "../../images/glowlia-white.png"\n              undefinedCould not read image data file "/home/jamie/github/hrj-london/.cache/caches/gatsby-plugin-image/3364216852.json". \nThis may mean that the images in "/home/jamie/github/hrj-london/src/components/CompanySection/index.js" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78.'})),n.createElement("p",null,"Glowlia skincare products are for women who practise self-love and care and contain organic, evidence based ingredients. Glowlia offer a deliberately minimal selection of nourishing products that focus on anti-aging, pigmentation, hydration and achieving a glowing complexion."))),n.createElement("div",{class:"card og"},n.createElement("a",{href:"https://www.odysseymalegrooming.com/",target:"_blank",rel:"noreferrer"},n.createElement("div",null,n.createElement(o.S,{src:"../../images/odyssey.png",loading:"eager",width:250,quality:95,formats:["auto","webp","avif"],alt:"",style:{marginBottom:"var(--space-3)"},__error:'No data found for image "../../images/odyssey.png"\n              undefinedCould not read image data file "/home/jamie/github/hrj-london/.cache/caches/gatsby-plugin-image/78808759.json". \nThis may mean that the images in "/home/jamie/github/hrj-london/src/components/CompanySection/index.js" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78.'})),n.createElement("p",null,"Odyssey Male Grooming is a London-based creative hub for barbering, colour and cuts. The salon is an artistic hair-focused space that strives to work with the individual and their unique hair needs.")))))};const l=()=>n.createElement(i.Z,{title:"Home"});var c=()=>n.createElement(r.Z,null,n.createElement("div",{className:"index-module--textCenter--4ece3"},n.createElement(s,null)))}}]);
//# sourceMappingURL=component---src-pages-index-js-3740887e1e83a49607cd.js.map