"use strict";(self.webpackChunklibro_disenio_oop=self.webpackChunklibro_disenio_oop||[]).push([[5007],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},803:function(e,t,r){r.d(t,{_:function(){return a}});var n=r(7294),a=function(e){var t=e.id,r=e.titulo,a=e.descripcion;return n.createElement("div",{className:"card"},n.createElement("div",{className:"card__image"},n.createElement("iframe",{src:"https://www.youtube.com/embed/"+t,className:"post-content-video",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),r&&n.createElement("div",{className:"card__body"},n.createElement("h3",null,r),n.createElement("p",null,a)))}},1930:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=r(803),c=["components"],s={sidebar_position:1,title:"Refactorizaci\xf3n",description:"Una t\xe9cnica para reestructurar el dise\xf1o de un programa, sin alterar su comportamiento."},l=void 0,p={unversionedId:"tecnicas-disenio/refactorizacion",id:"tecnicas-disenio/refactorizacion",isDocsHomePage:!1,title:"Refactorizaci\xf3n",description:"Una t\xe9cnica para reestructurar el dise\xf1o de un programa, sin alterar su comportamiento.",source:"@site/docs/tecnicas-disenio/refactorizacion.mdx",sourceDirName:"tecnicas-disenio",slug:"/tecnicas-disenio/refactorizacion",permalink:"/libro-disenio-oop/docs/tecnicas-disenio/refactorizacion",editUrl:"https://github.com/surprograma/libro-disenio-oop/edit/main/docs/tecnicas-disenio/refactorizacion.mdx",version:"current",lastUpdatedBy:"Federico Aloi",lastUpdatedAt:1631127262,formattedLastUpdatedAt:"9/8/2021",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Refactorizaci\xf3n",description:"Una t\xe9cnica para reestructurar el dise\xf1o de un programa, sin alterar su comportamiento."},sidebar:"tutorialSidebar",previous:{title:"Cat\xe1logo de patrones",permalink:"/libro-disenio-oop/docs/patrones-disenio/catalogo"},next:{title:"De Wollok a Kotlin",permalink:"/libro-disenio-oop/docs/kotlin/herramientas-lenguaje/wollok-a-kotlin"}},u=[],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Seg\xfan ",(0,o.kt)("a",{parentName:"p",href:"https://www.refactoring.com/"},"Martin Fowler"),", la palabra ",(0,o.kt)("em",{parentName:"p"},"refactoring")," (que aqu\xed solemos traducir como ",(0,o.kt)("em",{parentName:"p"},"refactorizaci\xf3n"),") puede utilizarse como sustantivo y como verbo. En su libro ",(0,o.kt)("a",{parentName:"p",href:"https://www.refactoring.com/"},"Refactoring - Improving the Design of Existing Code"),", nos acerca una definici\xf3n que aqu\xed nos tomamos la libertad de traducir:"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Definici\xf3n")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Refactorizaci\xf3n")," (sustantivo):")," un cambio hecho a la estructura interna de un programa, con el objetivo de hacer m\xe1s sencilla su comprensi\xf3n y m\xe1s barata su modificaci\xf3n, sin introducir cambios en su comportamiento observable."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Refactorizar")," (verbo):")," reestructurar un programa aplicando una serie de refactorizaciones, sin introducir cambios en su comportamiento observable."))),(0,o.kt)("p",null,"A continuaci\xf3n, te dejamos un video donde se ve paso a paso c\xf3mo aplicar la t\xe9cnica."),(0,o.kt)(i._,{id:"KPc8OWW0EZM",mdxType:"VideoYouTube"}))}d.isMDXComponent=!0}}]);