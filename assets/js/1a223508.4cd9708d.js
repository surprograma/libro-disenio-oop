"use strict";(self.webpackChunklibro_disenio_oop=self.webpackChunklibro_disenio_oop||[]).push([[503],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7332:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=t(2122),o=t(9756),r=(t(7294),t(3905)),i=["components"],l={sidebar_position:4},c="LocalDateTime en un minuto",s={unversionedId:"kotlin/localdatetime-un-minuto",id:"kotlin/localdatetime-un-minuto",isDocsHomePage:!1,title:"LocalDateTime en un minuto",description:"B\xe1sicamente son clases nativas de Java 8, que sirven para representar momentos en el tiempo. Como hemos dicho en alguna otra oportunidad, en Kotlin se puede usar cualquier clase de Java, y por eso es que Kotlin no incluye una API propia para manejar fechas.",source:"@site/docs/kotlin/localdatetime-un-minuto.md",sourceDirName:"kotlin",slug:"/kotlin/localdatetime-un-minuto",permalink:"/libro-disenio-oop/docs/kotlin/localdatetime-un-minuto",editUrl:"https://github.com/surprograma/libro-disenio-oop/edit/main/docs/kotlin/localdatetime-un-minuto.md",version:"current",lastUpdatedBy:"Marcelo.Torres",lastUpdatedAt:1628692843,formattedLastUpdatedAt:"8/11/2021",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Matchers de Kotest",permalink:"/libro-disenio-oop/docs/kotlin/matchers-kotest"},next:{title:"Gu\xeda de instalaci\xf3n Android Studio",permalink:"/libro-disenio-oop/docs/kotlin/guia-instalacion-android-studio"}},u=[{value:"M\xe9todos que pueden ser de inter\xe9s",id:"m\xe9todos-que-pueden-ser-de-inter\xe9s",children:[]}],p={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"localdatetime-en-un-minuto"},"LocalDateTime en un minuto"),(0,r.kt)("p",null,"B\xe1sicamente son clases nativas de Java 8, que sirven para representar momentos en el tiempo. Como hemos dicho en alguna otra oportunidad, en Kotlin se puede usar cualquier clase de Java, y por eso es que Kotlin no incluye una API propia para manejar fechas."),(0,r.kt)("p",null,"Con ",(0,r.kt)("inlineCode",{parentName:"p"},"LocalDate")," podemos representar una fecha, y con ",(0,r.kt)("inlineCode",{parentName:"p"},"LocalDateTime")," una fecha y una hora."),(0,r.kt)("h2",{id:"m\xe9todos-que-pueden-ser-de-inter\xe9s"},"M\xe9todos que pueden ser de inter\xe9s"),(0,r.kt)("p",null,"A continuaci\xf3n, un ejemplo utilizando ",(0,r.kt)("inlineCode",{parentName:"p"},"LocalDate"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"import java.time.LocalDate\n\n// Instancia de LocalDate con los valores de la fecha actual del sistema.\nval fechaActual = LocalDate.now()\n>>> 2020-08-28\n\n// Instancia de LocalDate con valores que recibe por par\xe1metro.\n// Notar que el orden es de mayor a menor: a\xf1o, mes, d\xeda\nval renunciaDeLaRua = LocalDate.of(2001, 12, 20)\n>>> 2001-12-20\n\n// Devuelve un booleano indicando si la fecha es posterior\n// a la que viene por par\xe1metro.\nfechaActual.isAfter(renunciaDeLaRua)\n>>> true\n\n// Como arriba, pero al rev\xe9s.\nfechaActual.isBefore(renunciaDeLaRua)\n>>> false\n")),(0,r.kt)("p",null,"Exactamente lo mismo podr\xeda hacerse con ",(0,r.kt)("inlineCode",{parentName:"p"},"LocalDateTime"),", agregando en la creaci\xf3n los valores de hora, minutos y segundos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"import java.time.LocalDateTime\n\nval inicioAislamientoArgentina = LocalDateTime.of(2020, 3, 20, 0, 0, 0)\n")),(0,r.kt)("p",null,"Esto es bien bien b\xe1sico, pero suficiente para resolver varios ejercicios de la materia. Te dejamos la documentaci\xf3n oficial de ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/time/LocalDateTime.html"},(0,r.kt)("inlineCode",{parentName:"a"},"LocalDateTime"))," y la de ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/time/LocalDate.html"},(0,r.kt)("inlineCode",{parentName:"a"},"LocalDate"))," por si quer\xe9s chusmear algo m\xe1s."))}d.isMDXComponent=!0}}]);