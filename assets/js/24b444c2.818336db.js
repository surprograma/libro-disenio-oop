"use strict";(self.webpackChunklibro_disenio_oop=self.webpackChunklibro_disenio_oop||[]).push([[6778],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2993:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:3,title:"Matchers de Kotest",description:"Machete sobre las formas m\xe1s comunes para verificar condiciones en los tests."},s=void 0,c={unversionedId:"kotlin/herramientas-lenguaje/matchers-kotest",id:"kotlin/herramientas-lenguaje/matchers-kotest",isDocsHomePage:!1,title:"Matchers de Kotest",description:"Machete sobre las formas m\xe1s comunes para verificar condiciones en los tests.",source:"@site/docs/kotlin/herramientas-lenguaje/matchers-kotest.md",sourceDirName:"kotlin/herramientas-lenguaje",slug:"/kotlin/herramientas-lenguaje/matchers-kotest",permalink:"/libro-disenio-oop/docs/kotlin/herramientas-lenguaje/matchers-kotest",editUrl:"https://github.com/surprograma/libro-disenio-oop/edit/main/docs/kotlin/herramientas-lenguaje/matchers-kotest.md",tags:[],version:"current",lastUpdatedBy:"Federico Aloi",lastUpdatedAt:1631125364,formattedLastUpdatedAt:"9/8/2021",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Matchers de Kotest",description:"Machete sobre las formas m\xe1s comunes para verificar condiciones en los tests."},sidebar:"tutorialSidebar",previous:{title:"De Wollok a Kotlin",permalink:"/libro-disenio-oop/docs/kotlin/herramientas-lenguaje/wollok-a-kotlin"},next:{title:"Companion objects",permalink:"/libro-disenio-oop/docs/kotlin/herramientas-lenguaje/companion-objects"}},d=[{value:"Igualdad",id:"igualdad",children:[{value:"Un caso especial: n\xfameros decimales",id:"un-caso-especial-n\xfameros-decimales",children:[]}]},{value:"Colecciones",id:"colecciones",children:[{value:"Control estricto de elementos",id:"control-estricto-de-elementos",children:[]}]},{value:"Excepciones",id:"excepciones",children:[]}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Esta es una lista, para nada exhaustiva, de los ",(0,o.kt)("em",{parentName:"p"},"matchers")," que tiene Kotest (m\xe9todos para verificar condiciones en los tests)."),(0,o.kt)("p",null,"Para ver otros m\xe9todos, recomendamos leer ",(0,o.kt)("a",{parentName:"p",href:"https://kotest.io/docs/assertions/core-matchers.html"},"la documentaci\xf3n"),"."),(0,o.kt)("h2",{id:"igualdad"},"Igualdad"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Sintaxis"),(0,o.kt)("th",{parentName:"tr",align:null},"Sirve para verificar..."))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"objeto.shouldBe(otro)")),(0,o.kt)("td",{parentName:"tr",align:null},"...si un ",(0,o.kt)("inlineCode",{parentName:"td"},"objeto")," ",(0,o.kt)("strong",{parentName:"td"},"es igual")," a ",(0,o.kt)("inlineCode",{parentName:"td"},"otro"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"objeto.shouldNotBe(otro)")),(0,o.kt)("td",{parentName:"tr",align:null},"...si un ",(0,o.kt)("inlineCode",{parentName:"td"},"objeto")," ",(0,o.kt)("strong",{parentName:"td"},"es distinto")," a ",(0,o.kt)("inlineCode",{parentName:"td"},"otro"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"booleano.shouldBeTrue()")),(0,o.kt)("td",{parentName:"tr",align:null},"...si un ",(0,o.kt)("inlineCode",{parentName:"td"},"booleano")," ",(0,o.kt)("strong",{parentName:"td"},"es verdadero"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"booleano.shouldBeFalse()")),(0,o.kt)("td",{parentName:"tr",align:null},"...si un ",(0,o.kt)("inlineCode",{parentName:"td"},"booleano")," ",(0,o.kt)("strong",{parentName:"td"},"es falso"),".")))),(0,o.kt)("h3",{id:"un-caso-especial-n\xfameros-decimales"},"Un caso especial: n\xfameros decimales"),(0,o.kt)("p",null,"En inform\xe1tica, las operaciones con decimales suelen implementarse con una t\xe9cnica llamada ",(0,o.kt)("a",{parentName:"p",href:"http://puntoflotante.org/"},(0,o.kt)("strong",{parentName:"a"},"punto flotante")),". Esta implementaci\xf3n trae aparejada una serie de imprecisiones, que afectan entre otras cosas a la ",(0,o.kt)("a",{parentName:"p",href:"http://puntoflotante.org/errors/comparison/"},"comparaci\xf3n"),"."),(0,o.kt)("p",null,"Para evitar casos en los que un test rompa porque ",(0,o.kt)("inlineCode",{parentName:"p"},'"se esperaba 2.78 pero se obtuvo 2.78000000001"'),", estas comparaciones se suelen hacer con una cierta ",(0,o.kt)("strong",{parentName:"p"},"tolerancia"),", que indica cu\xe1l es el desfasaje m\xe1ximo aceptable."),(0,o.kt)("p",null,"En Kotest, podemos configurar una tolerancia de la siguiente manera:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"// Aceptamos como v\xe1lido a cualquier n\xfamero entre 2.77 y 2.79\nnumero.shouldBe(2.78 plusOrMinus 0.01)\n")),(0,o.kt)("h2",{id:"colecciones"},"Colecciones"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Sintaxis"),(0,o.kt)("th",{parentName:"tr",align:null},"Sirve para verificar..."))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"coleccion.shouldBeEmpty()")),(0,o.kt)("td",{parentName:"tr",align:null},"...si la colecci\xf3n ",(0,o.kt)("strong",{parentName:"td"},"est\xe1 vac\xeda"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"coleccion.shouldBeUnique()")),(0,o.kt)("td",{parentName:"tr",align:null},"...si la colecci\xf3n ",(0,o.kt)("strong",{parentName:"td"},"no tiene duplicados"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"coleccion.shouldContain(elemento)")),(0,o.kt)("td",{parentName:"tr",align:null},"...si la colecci\xf3n ",(0,o.kt)("strong",{parentName:"td"},"contiene")," al ",(0,o.kt)("inlineCode",{parentName:"td"},"elemento"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"coleccion.shouldContainAll(elem1, elem2, ...)")),(0,o.kt)("td",{parentName:"tr",align:null},"...si la colecci\xf3n ",(0,o.kt)("strong",{parentName:"td"},"contiene a todos")," los elementos indicados.")))),(0,o.kt)("p",null,"\ud83d\udc40 ",(0,o.kt)("strong",{parentName:"p"},"Ojo:")," los dos \xfaltimos matchers verifican que los elementos dados existan, pero no dicen nada sobre los dem\xe1s elementos de la colecci\xf3n."),(0,o.kt)("h3",{id:"control-estricto-de-elementos"},"Control estricto de elementos"),(0,o.kt)("p",null,"Algunas veces nos alcanza con verificar que los elementos que queremos existan, pero otras necesitamos verificar tambi\xe9n que no haya otros elementos."),(0,o.kt)("p",null,"En ese caso, deber\xedamos usar alguno de los matchers que vienen a continuaci\xf3n:"),(0,o.kt)("h4",{id:"verificando-que-aparezan-en-cierto-orden"},"Verificando que aparezan en cierto orden:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"unaLista.shouldContainExactly(elem1, elem2, ...)\n// o pasando una lista:\nunaLista.shouldContainExactly(otraLista)\n")),(0,o.kt)("h4",{id:"sin-importar-en-qu\xe9-orden-aparecen"},"Sin importar en qu\xe9 orden aparecen:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"unaLista.shouldContainExactlyInAnyOrder(elem1, elem2, ...)\n// o pasando una lista:\nunaLista.shouldContainExactlyInAnyOrder(otraLista)\n")),(0,o.kt)("h2",{id:"excepciones"},"Excepciones"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Verificando el mensaje\nshouldThrowMessage("Ac\xe1 va el mensaje de error que tira") {\n  codigoQueDeberiaLanzarUnError()\n}\n\n// Sin verificar el mensaje\nshouldThrowAny {\n  codigoQueDeberiaLanzarUnError()\n}\n')))}m.isMDXComponent=!0}}]);