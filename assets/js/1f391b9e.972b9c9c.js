"use strict";(self.webpackChunklibro_disenio_oop=self.webpackChunklibro_disenio_oop||[]).push([[3085],{895:function(e,n,t){t.d(n,{dK:function(){return c},_k:function(){return o},vc:function(){return l},rx:function(){return i},qo:function(){return u},Hk:function(){return s},Iz:function(){return d}});var r=t(1336),a=t.n(r);t(892)(a()),t(9574)(a());var c=["es"],o=!1,l=null,i="97191d0c",u=8,s=100,d={search_placeholder:"Buscar",see_all_results:"Ver todos los resultados",no_results:"No hay resultados. \ud83d\ude1e",search_results_for:'Buscar resultados para "{{ keyword }}"',search_the_documentation:"Buscar en la documentaci\xf3n",count_documents_found:"{{ count }} documento encontrado",count_documents_found_plural:"{{ count }} documentos encontrados",no_documents_were_found:"No encontramos nada que coincida con tu b\xfasqueda... \ud83d\ude22"}},6159:function(e,n,t){t.d(n,{N:function(){return m},Z:function(){return f}});var r=t(9756),a=t(2122),c=t(7294),o=t(6010),l=t(4973),i=t(3018),u="enhancedAnchor_2LWZ",s="h1Heading_27L5",d=["id"],m=function(e){var n=Object.assign({},e);return c.createElement("header",null,c.createElement("h1",(0,a.Z)({},n,{id:void 0,className:s}),n.children))},f=function(e){return"h1"===e?m:(n=e,function(e){var t,a=e.id,s=(0,r.Z)(e,d),m=(0,i.LU)().navbar.hideOnScroll;return a?c.createElement(n,s,c.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,o.Z)("anchor",(t={},t[u]=!m,t)),id:a}),s.children,c.createElement("a",{className:"hash-link",href:"#"+a,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):c.createElement(n,s)});var n}},2238:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(2122),a=t(7294),c=t(6742),o=t(1756),l=t(6159),i=t(6010),u=t(3018),s="details_1VDD";function d(e){var n=Object.assign({},e);return a.createElement(u.PO,(0,r.Z)({},n,{className:(0,i.Z)("alert alert--info",s,n.className)}))}var m={code:function(e){var n=e.children;return(0,a.isValidElement)(n)?n:n.includes("\n")?a.createElement(o.Z,e):a.createElement("code",e)},a:function(e){return a.createElement(c.Z,e)},pre:function(e){var n,t=e.children;return(0,a.isValidElement)(null==t||null==(n=t.props)?void 0:n.children)?null==t?void 0:t.props.children:a.createElement(o.Z,(0,a.isValidElement)(t)?null==t?void 0:t.props:Object.assign({},e))},details:function(e){var n=a.Children.toArray(e.children),t=n.find((function(e){var n;return"summary"===(null==e||null==(n=e.props)?void 0:n.mdxType)})),c=a.createElement(a.Fragment,null,n.filter((function(e){return e!==t})));return a.createElement(d,(0,r.Z)({},e,{summary:t}),c)},h1:(0,l.Z)("h1"),h2:(0,l.Z)("h2"),h3:(0,l.Z)("h3"),h4:(0,l.Z)("h4"),h5:(0,l.Z)("h5"),h6:(0,l.Z)("h6")}},7979:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(7294),a=t(6010),c=t(2273),o=t(3905),l=t(2238),i=t(571),u=t(3018),s="mdxPageWrapper_3qD3";var d=function(e){var n=e.content,t=n.frontMatter,d=n.metadata,m=t.title,f=t.description,h=t.wrapperClassName,v=t.hide_table_of_contents,p=d.permalink;return r.createElement(c.Z,{title:m,description:f,permalink:p,wrapperClassName:null!=h?h:u.kM.wrapper.mdxPages,pageClassName:u.kM.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,a.Z)("row",s)},r.createElement("div",{className:(0,a.Z)("col",!v&&"col--8")},r.createElement(o.Zo,{components:l.Z},r.createElement(n,null))),!v&&n.toc&&r.createElement("div",{className:"col col--2"},r.createElement(i.Z,{toc:n.toc})))))}},571:function(e,n,t){t.d(n,{r:function(){return i},Z:function(){return u}});var r=t(7294),a=t(6010);var c=function(e,n,t){var a=(0,r.useState)(void 0),c=a[0],o=a[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),n=e.find((function(e){return e.getBoundingClientRect().top>=t}));if(n){if(n.getBoundingClientRect().top>=t){var r=e[e.indexOf(n)-1];return null!=r?r:n}return n}return e[e.length-1]}();if(r)for(var a=0,l=!1,i=document.getElementsByClassName(e);a<i.length&&!l;){var u=i[a],s=u.href,d=decodeURIComponent(s.substring(s.indexOf("#")+1));r.id===d&&(c&&c.classList.remove(n),u.classList.add(n),o(u),l=!0),a+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},o="tableOfContents_35-E",l="table-of-contents__link";function i(e){var n=e.toc,t=e.isChild;return n.length?r.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},n.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:l,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(i,{isChild:!0,toc:e.children}))}))):null}var u=function(e){var n=e.toc;return c(l,"table-of-contents__link--active",100),r.createElement("div",{className:(0,a.Z)(o,"thin-scrollbar")},r.createElement(i,{toc:n}))}}}]);