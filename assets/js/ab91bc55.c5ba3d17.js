"use strict";(self.webpackChunklibro_disenio_oop=self.webpackChunklibro_disenio_oop||[]).push([[389],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=o,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3305:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),i=["components"],s={sidebar_position:1,title:"Matchers de Jest",description:"Machete sobre las formas m\xe1s comunes para verificar condiciones en los tests."},l=void 0,c={unversionedId:"typescript/matchers-jest",id:"typescript/matchers-jest",isDocsHomePage:!1,title:"Matchers de Jest",description:"Machete sobre las formas m\xe1s comunes para verificar condiciones en los tests.",source:"@site/docs/typescript/matchers-jest.md",sourceDirName:"typescript",slug:"/typescript/matchers-jest",permalink:"/libro-disenio-oop/docs/typescript/matchers-jest",editUrl:"https://github.com/surprograma/libro-disenio-oop/edit/main/docs/typescript/matchers-jest.md",version:"current",lastUpdatedBy:"Federico Aloi",lastUpdatedAt:1629226435,formattedLastUpdatedAt:"8/17/2021",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Matchers de Jest",description:"Machete sobre las formas m\xe1s comunes para verificar condiciones en los tests."},sidebar:"tutorialSidebar",previous:{title:"Repositorios semilla",permalink:"/libro-disenio-oop/docs/kotlin/repositorios-semilla"}},p=[{value:"B\xe1sicos",id:"b\xe1sicos",children:[{value:"\xbfIgualdad o identidad?",id:"\xbfigualdad-o-identidad",children:[]},{value:"Un caso especial: n\xfameros decimales",id:"un-caso-especial-n\xfameros-decimales",children:[]}]},{value:"Colecciones",id:"colecciones",children:[]},{value:"Excepciones",id:"excepciones",children:[]},{value:"<em>Matchers</em> parciales",id:"matchers-parciales",children:[]}],d={toc:p};function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Esta es una lista, para nada exhaustiva, de los ",(0,r.kt)("em",{parentName:"p"},"matchers")," que tiene Jest (m\xe9todos para verificar condiciones en los tests)."),(0,r.kt)("p",null,"Para ver otros m\xe9todos, recomendamos leer ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/expect"},"la documentaci\xf3n"),"."),(0,r.kt)("h2",{id:"b\xe1sicos"},"B\xe1sicos"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sintaxis"),(0,r.kt)("th",{parentName:"tr",align:null},"Sirve para verificar..."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expect(objeto).toBe(otro)")),(0,r.kt)("td",{parentName:"tr",align:null},"...si un ",(0,r.kt)("inlineCode",{parentName:"td"},"objeto")," ",(0,r.kt)("strong",{parentName:"td"},"el mismo")," que ",(0,r.kt)("inlineCode",{parentName:"td"},"otro")," (por identidad).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expect(objeto).toEqual(otro)")),(0,r.kt)("td",{parentName:"tr",align:null},"...si un ",(0,r.kt)("inlineCode",{parentName:"td"},"objeto")," ",(0,r.kt)("strong",{parentName:"td"},"es igual")," a ",(0,r.kt)("inlineCode",{parentName:"td"},"otro")," (por igualdad).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expect(booleano).toBeTruthy()")),(0,r.kt)("td",{parentName:"tr",align:null},"...si un ",(0,r.kt)("inlineCode",{parentName:"td"},"booleano")," ",(0,r.kt)("strong",{parentName:"td"},"es verdadero"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expect(booleano).toBeFalsy()")),(0,r.kt)("td",{parentName:"tr",align:null},"...si un ",(0,r.kt)("inlineCode",{parentName:"td"},"booleano")," ",(0,r.kt)("strong",{parentName:"td"},"es falso"),".")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Todos los ",(0,r.kt)("em",{parentName:"p"},"matchers")," se pueden negar anteponiendo ",(0,r.kt)("inlineCode",{parentName:"p"},".not"),":"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expect(numero).not.toBe(21)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expect(lista).not.toEqual([])"),".")))),(0,r.kt)("h3",{id:"\xbfigualdad-o-identidad"},"\xbfIgualdad o identidad?"),(0,r.kt)("p",null,"En el paradigma de objetos existen dos conceptos que a menudo se confunden, pero tienen significados bien diferentes: la ",(0,r.kt)("strong",{parentName:"p"},"identidad")," y la ",(0,r.kt)("strong",{parentName:"p"},"igualdad"),". No tener clara esta diferencia puede resultar particularmente molesto a la hora de escribir pruebas con Jest, porque debemos utilizar m\xe9todos distintos seg\xfan qu\xe9 querramos probar."),(0,r.kt)("p",null,"Conceptualmente, la ",(0,r.kt)("strong",{parentName:"p"},"identidad"),' se refiere a la capacidad de un objeto de "saber qui\xe9n es", mientras que la ',(0,r.kt)("strong",{parentName:"p"},"igualdad")," es una caracter\xedstica configurable, que tiene que ver con comparar atributos para saber si dos objetos son similares."),(0,r.kt)("p",null,"Lo m\xe1s habitual es utilizar ",(0,r.kt)("inlineCode",{parentName:"p"},"toEqual"),", excepto que lo que se quiera verificar es efectivamente que el objeto es el mismo. Para tipos primitivos (n\xfameros, strings, etc) ambos m\xe9todos funcionan de la misma manera."),(0,r.kt)("p",null,"Veamos un ejemplo, donde el primer test falla y el otro pasa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"describe('Identidad VS igualdad', () => {\n  const juanaAzurduy = { nombre: 'Juana' };\n  const juanaDeArco = { nombre: 'Juana' };\n\n  // \u274c Failed\n  it('toBe compara por identidad', () => {\n    expect(juanaAzurduy).toBe(juanaDeArco);\n    /*\n    Error: expect(received).toBe(expected) // Object.is equality\n    If it should pass with deep equality, replace \"toBe\" with \"toStrictEqual\"\n\n    Expected: {\"nombre\": \"Juana\"}\n    Received: serializes to the same string\n    */\n  });\n\n  // \u2714\ufe0f Passed\n  it('toEqual compara por igualdad', () => {\n    expect(juanaAzurduy).toEqual(juanaDeArco);\n  });\n});\n")),(0,r.kt)("h3",{id:"un-caso-especial-n\xfameros-decimales"},"Un caso especial: n\xfameros decimales"),(0,r.kt)("p",null,"En inform\xe1tica, las operaciones con decimales suelen implementarse con una t\xe9cnica llamada ",(0,r.kt)("a",{parentName:"p",href:"http://puntoflotante.org/"},(0,r.kt)("strong",{parentName:"a"},"punto flotante")),". Esta implementaci\xf3n trae aparejada una serie de imprecisiones, que afectan entre otras cosas a la ",(0,r.kt)("a",{parentName:"p",href:"http://puntoflotante.org/errors/comparison/"},"comparaci\xf3n"),"."),(0,r.kt)("p",null,"Para evitar casos en los que un test rompa porque ",(0,r.kt)("inlineCode",{parentName:"p"},'"se esperaba 2.78 pero se obtuvo 2.78000000001"'),", estas comparaciones se suelen hacer con una cierta ",(0,r.kt)("strong",{parentName:"p"},"tolerancia"),", que indica cu\xe1l es el desfasaje m\xe1ximo aceptable."),(0,r.kt)("p",null,"En Jest, la tolerancia se configura en la forma de ",(0,r.kt)("em",{parentName:"p"},"\xbfcu\xe1ntos d\xedgitos decimales me interesan?"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"// Esta cuenta dar\xe1 algo como 2.78000000012\nconst numero = 2.1 + 0.68;\n\n// Por defecto, solo mira los 2 primeros d\xedgitos e ignora el resto\nexpect(numero).toBeCloseTo(2.781);\n\n// Pero ese valor se puede modificar si queremos que considere m\xe1s decimales\nexpect(numero).toBeCloseTo(2.78001, 4);\n")),(0,r.kt)("h2",{id:"colecciones"},"Colecciones"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sintaxis"),(0,r.kt)("th",{parentName:"tr",align:null},"Sirve para verificar..."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expect(coleccion).toHaveLength(numero)")),(0,r.kt)("td",{parentName:"tr",align:null},"...si la colecci\xf3n tiene ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"numero")," elementos"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expect(coleccion).toContain(elemento)")),(0,r.kt)("td",{parentName:"tr",align:null},"...si la colecci\xf3n ",(0,r.kt)("strong",{parentName:"td"},"contiene")," al ",(0,r.kt)("inlineCode",{parentName:"td"},"elemento")," (por identidad).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expect(coleccion).toContainEqual(elemento)")),(0,r.kt)("td",{parentName:"tr",align:null},"...si la colecci\xf3n ",(0,r.kt)("strong",{parentName:"td"},"contiene")," al ",(0,r.kt)("inlineCode",{parentName:"td"},"elemento")," (por igualdad).")))),(0,r.kt)("p",null,"\ud83d\udc40 ",(0,r.kt)("strong",{parentName:"p"},"Ojo:")," para entender la diferencia entre los ultimos dos, ver la secci\xf3n ",(0,r.kt)("a",{parentName:"p",href:"#%C2%BFigualdad-o-identidad"},"\xbfIgualdad o identidad?"),"."),(0,r.kt)("h2",{id:"excepciones"},"Excepciones"),(0,r.kt)("p",null,"Para chequear que un m\xe9todo o funci\xf3n falla se utiliza el matcher ",(0,r.kt)("inlineCode",{parentName:"p"},"toThrow")," en cualquiera de sus variantes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"// Solo verifica que falle\nexpect(\n  () => objeto.metodoQueDeberiaFallar()\n).toThrow();\n\n// Verifica que falle con cierto mensaje\nexpect(\n  () => objeto.metodoQueDeberiaFallar()\n).toThrow('Ups, esto no se pudo hacer');\n")),(0,r.kt)("h2",{id:"matchers-parciales"},(0,r.kt)("em",{parentName:"h2"},"Matchers")," parciales"),(0,r.kt)("p",null,"Hay veces que puede resultar molesto tener que crear un objeto cuando en verdad solo nos interesan algunos atributos. En casos as\xed podemos utilizar el matcher ",(0,r.kt)("inlineCode",{parentName:"p"},"toMatchObject"),", que solamente verifica que el objeto en cuesti\xf3n tiene los atributos que nos interesan (ignorando los dem\xe1s)."),(0,r.kt)("p",null,"Veamos un ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"it('tiene las dimensiones adecuadas', () => {\n  const mesa = {\n    ancho: 50,\n    largo: 150,\n    madera: 'lapacho',\n    color: 'natural',\n  };\n\n  // Solo comprueba que ancho y largo tengan los valores especificados.\n  expect(mesa).toMatchObject({ ancho: 50, largo: 150 });\n});\n")),(0,r.kt)("p",null,"Este matcher funciona tambi\xe9n para listas, y lo que hace en este caso es comparar uno a uno, ",(0,r.kt)("strong",{parentName:"p"},"en orden"),", los elementos, teniendo en cuenta solamente los atributos especificados. Si las listas no tienen la misma cantidad de elementos, falla."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"describe('toMatchObject en listas', () => {\n  const mesaLapacho = {\n    ancho: 50,\n    largo: 150,\n    madera: 'lapacho',\n    color: 'natural',\n  };\n\n  const mesaPino = {\n    ancho: 60,\n    largo: 145,\n    madera: 'pino',\n    color: 'blanco',\n  };\n\n  // \u2714\ufe0f Passed\n  it('compara atributos, en orden', () => {\n    expect([mesaPino, mesaLapacho]).toMatchObject([\n      { madera: 'pino' },\n      { madera: 'lapacho' },\n    ]);\n  });\n\n  // \u274c Failed\n  it('falla si los elementos est\xe1n en otro orden', () => {\n    expect([mesaPino, mesaLapacho]).toMatchObject([\n      { madera: 'lapacho' },\n      { madera: 'pino' },\n    ]);\n  });\n\n  // \u274c Failed\n  it('falla si la cantidad de elementos no coincide', () => {\n    expect([mesaPino, mesaLapacho]).toMatchObject([{ madera: 'pino' }]);\n  });\n});\n")))}m.isMDXComponent=!0}}]);