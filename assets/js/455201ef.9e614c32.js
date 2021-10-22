"use strict";(self.webpackChunklibro_disenio_oop=self.webpackChunklibro_disenio_oop||[]).push([[4774],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1223:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={sidebar_position:5,title:"Manipulaci\xf3n de strings",description:"Algunas t\xe9cnicas \xfatiles para transformar porciones de texto en Kotlin."},l=void 0,p={unversionedId:"kotlin/herramientas-lenguaje/manipulacion-strings",id:"kotlin/herramientas-lenguaje/manipulacion-strings",isDocsHomePage:!1,title:"Manipulaci\xf3n de strings",description:"Algunas t\xe9cnicas \xfatiles para transformar porciones de texto en Kotlin.",source:"@site/docs/kotlin/herramientas-lenguaje/manipulacion-strings.md",sourceDirName:"kotlin/herramientas-lenguaje",slug:"/kotlin/herramientas-lenguaje/manipulacion-strings",permalink:"/libro-disenio-oop/docs/kotlin/herramientas-lenguaje/manipulacion-strings",editUrl:"https://github.com/surprograma/libro-disenio-oop/edit/main/docs/kotlin/herramientas-lenguaje/manipulacion-strings.md",tags:[],version:"current",lastUpdatedBy:"Federico Aloi",lastUpdatedAt:1634917706,formattedLastUpdatedAt:"10/22/2021",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Manipulaci\xf3n de strings",description:"Algunas t\xe9cnicas \xfatiles para transformar porciones de texto en Kotlin."},sidebar:"tutorialSidebar",previous:{title:"Manejo de fechas",permalink:"/libro-disenio-oop/docs/kotlin/herramientas-lenguaje/manejo-fechas"},next:{title:"Gu\xeda de instalaci\xf3n IntelliJ Idea",permalink:"/libro-disenio-oop/docs/kotlin/entorno-desarrollo/guia-instalacion-intellij-idea"}},u=[{value:"Los <em>strings</em> son listas",id:"los-strings-son-listas",children:[]},{value:"Operaciones habituales",id:"operaciones-habituales",children:[]},{value:"Separar... y volver a unir",id:"separar-y-volver-a-unir",children:[]}],c={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Es muy usual que en nuestros programas tengamos que manipular ",(0,o.kt)("em",{parentName:"p"},"strings")," o cadenas de texto: separar el nombre del apellido, quedarnos solamente con los primeros tres caracteres, quitar espacios de m\xe1s, etc."),(0,o.kt)("p",null,"En este apunte, rasgaremos apenas la superficie para mostrar algunas cosas que se pueden hacer. Como siempre, recomendamos leer ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/"},"la documentaci\xf3n oficial")," para conocer qu\xe9 otros m\xe9todos hay."),(0,o.kt)("h2",{id:"los-strings-son-listas"},"Los ",(0,o.kt)("em",{parentName:"h2"},"strings")," son listas"),(0,o.kt)("p",null,"Es interesante notar que, en Kotlin, los ",(0,o.kt)("em",{parentName:"p"},"strings")," son en efecto listas de caracteres. En general esa particularidad no nos afecta en nada, pero tiene la consecuencia positiva de que podemos usar todos ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/libro-disenio-oop/docs/kotlin/herramientas-lenguaje/wollok-a-kotlin/#colecciones"},"los m\xe9todos que ya conocemos para las listas"),"."),(0,o.kt)("p",null,"Vamos con algunos ejemplos:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Se queda con los caracteres que no son la \'e\'.\n// (\ud83d\udc40 dentro del filter usamos comillas simples\n// porque estamos trabajando con caracteres, no con strings)\n"ola ke ase".filterNot { it == \'e\' }\n>> "ola k as"\n\n// Toma solamente los primeros 3 caracteres.\n"oye c\xf3mo va".take(3)\n>> "oye"\n\n// Descarta los primeros 4 caracteres.\n"oye c\xf3mo va".drop(4)\n>> "c\xf3mo va"\n')),(0,o.kt)("h2",{id:"operaciones-habituales"},"Operaciones habituales"),(0,o.kt)("p",null,"Todos los m\xe9todos que vienen a continuaci\xf3n ",(0,o.kt)("strong",{parentName:"p"},"devuelve un nuevo ",(0,o.kt)("em",{parentName:"strong"},"string")),". En ning\xfan caso modifican el original (",(0,o.kt)("a",{parentName:"p",href:"/docs/cualidades-disenio/cualidades-independientes-tecnologia/#mutaciones-controladas"},"mutaciones controladas")," \ud83d\ude0f)."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Sintaxis"),(0,o.kt)("th",{parentName:"tr",align:null},"Comportamiento"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"replace(viejo, nuevo)")),(0,o.kt)("td",{parentName:"tr",align:null},"Reemplaza todas las veces que aparezca el ",(0,o.kt)("em",{parentName:"td"},"string")," ",(0,o.kt)("inlineCode",{parentName:"td"},"viejo")," por ",(0,o.kt)("inlineCode",{parentName:"td"},"nuevo"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"toUppercase() / toLowerCase()")),(0,o.kt)("td",{parentName:"tr",align:null},"Convierten el texto en may\xfasculas (upper) y en min\xfasculas (lower) respectivamente.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"substring(inicio, fin)")),(0,o.kt)("td",{parentName:"tr",align:null},"Devuelve un ",(0,o.kt)("em",{parentName:"td"},"string")," que va desde el caracter n\xfamero ",(0,o.kt)("inlineCode",{parentName:"td"},"inicio")," hasta el caracter n\xfamero ",(0,o.kt)("inlineCode",{parentName:"td"},"fin"),", contando desde 0. Si se omite el par\xe1metro ",(0,o.kt)("inlineCode",{parentName:"td"},"fin"),", corta desde ",(0,o.kt)("inlineCode",{parentName:"td"},"inicio")," hasta el final del ",(0,o.kt)("em",{parentName:"td"},"string"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"trim()")),(0,o.kt)("td",{parentName:"tr",align:null},"Devuelve un ",(0,o.kt)("em",{parentName:"td"},"string")," sin espacios de m\xe1s ni al principio ni al final.")))),(0,o.kt)("h2",{id:"separar-y-volver-a-unir"},"Separar... y volver a unir"),(0,o.kt)("p",null,"Otra tarea que resulta habitual es la de querer separar un ",(0,o.kt)("em",{parentName:"p"},"string")," seg\xfan un cierto caracter y tambi\xe9n la inversa: querer unir una lista de ",(0,o.kt)("em",{parentName:"p"},"strings")," en un solo texto. Estas tareas en Kotlin se pueden lograr con dos m\xe9todos: ",(0,o.kt)("inlineCode",{parentName:"p"},"texto.split(delimitador)")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"lista.joinToString(separador)"),"."),(0,o.kt)("p",null,"Veamos unos ejemplos:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Separo el texto por sus espacios: " "\n"Ing. Juana Beduarte L\xf3pez".split(" ")\n>> ["Ing.", "Juana", "Beduarte", "L\xf3pez"]\n\n// Junto una lista, poniendo guiones en el medio.\n// Notar que la lista puede ser de cualquier tipo que pueda convertirse en string.\n[11, 3123, 0304].joinToString("-")\n>> "11-3123-0304"\n')),(0,o.kt)("p",null,"Luego, usando un poco la imaginaci\xf3n, podemos combinar esto con los m\xe9todos de arriba para hacer manipulaciones m\xe1s complejas:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Separamos y nos quedamos con los dos \xfaltimos elementos,\n// asumiendo que el apellido es compuesto (paterno y materno).\nfun soloApellido(nombreCompleto: String) = nombreCompleto.split(" ").takeLast(2)\n\n// Asumiendo que viene algo de la forma "Sr. Pedro D\xedaz",\n// nos quedamos con lo que viene despu\xe9s del t\xedtulo, "Pedro D\xedaz" en ese ejemplo.\nfun sinTitulo(nombreCompleto: String) = nombreCompleto.split(" ").drop(1).joinToString(" ")\n')))}m.isMDXComponent=!0}}]);