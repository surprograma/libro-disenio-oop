"use strict";(self.webpackChunklibro_disenio_oop=self.webpackChunklibro_disenio_oop||[]).push([[514,167],{895:function(e,t,n){n.d(t,{dK:function(){return i},_k:function(){return r},vc:function(){return l},rx:function(){return c},qo:function(){return s},Hk:function(){return d},Iz:function(){return u}});var a=n(1336),o=n.n(a);n(892)(o()),n(9574)(o());var i=["es"],r=!1,l=null,c="1912f2be",s=8,d=100,u={search_placeholder:"Buscar",see_all_results:"Ver todos los resultados",no_results:"No hay resultados. \ud83d\ude1e",search_results_for:'Buscar resultados para "{{ keyword }}"',search_the_documentation:"Buscar en la documentaci\xf3n",count_documents_found:"{{ count }} documento encontrado",count_documents_found_plural:"{{ count }} documentos encontrados",no_documents_were_found:"No encontramos nada que coincida con tu b\xfasqueda... \ud83d\ude22"}},3616:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var a=n(7294),o=n(3905),i=n(2263),r=n(6291),l=n(8692),c=n(2122),s=n(9756),d=n(6010),u=n(9306),m=n(1839),b=n(3783),p=n(7898),h=n(6742),f=n(3919),v=n(5537),_=function(e){return a.createElement("svg",(0,c.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},E=n(4478),C=n(8617),g=n(4973),k="sidebar_15mo",N="sidebarWithHideableNavbar_267A",Z="sidebarHidden_2kNb",I="sidebarLogo_3h0W",S="menu_Bmed",M="menuLinkText_2aKo",y="menuWithAnnouncementBar_2WvA",T="collapseSidebarButton_1CGd",w="collapseSidebarButtonIcon_3E-R",A="sidebarMenuIcon_fgN0",R="sidebarMenuCloseIcon_1lpH",x=["items"],B=["item","onItemClick","collapsible","activePath"],L=["item","onItemClick","activePath","collapsible"],P=function e(t,n){return"link"===t.type?(0,u.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},H=(0,a.memo)((function(e){var t=e.items,n=(0,s.Z)(e,x);return t.map((function(e,t){return a.createElement(D,(0,c.Z)({key:t,item:e},n))}))}));function D(e){switch(e.item.type){case"category":return a.createElement(W,e);case"link":default:return a.createElement(F,e)}}function W(e){var t,n=e.item,o=e.onItemClick,i=e.collapsible,r=e.activePath,l=(0,s.Z)(e,B),m=n.items,b=n.label,p=P(n,r),h=(0,u.D9)(p),f=(0,a.useState)((function(){return!!i&&(!p&&n.collapsed)})),v=f[0],_=f[1],E=(0,a.useRef)(null),C=(0,a.useState)(void 0),g=C[0],k=C[1],N=function(e){var t;void 0===e&&(e=!0),k(e?(null==(t=E.current)?void 0:t.scrollHeight)+"px":void 0)};(0,a.useEffect)((function(){p&&!h&&v&&_(!1)}),[p,h,v]);var Z=(0,a.useCallback)((function(e){e.preventDefault(),g||N(),setTimeout((function(){return _((function(e){return!e}))}),100)}),[g]);return 0===m.length?null:a.createElement("li",{className:(0,d.Z)("menu__list-item",{"menu__list-item--collapsed":v})},a.createElement("a",(0,c.Z)({className:(0,d.Z)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&p},t[M]=!i,t)),onClick:i?Z:void 0,href:i?"#":void 0},l),b),a.createElement("ul",{className:"menu__list",ref:E,style:{height:g},onTransitionEnd:function(){v||N(!1)}},a.createElement(H,{items:m,tabIndex:v?"-1":"0",onItemClick:o,collapsible:i,activePath:r})))}function F(e){var t=e.item,n=e.onItemClick,o=e.activePath,i=(e.collapsible,(0,s.Z)(e,L)),r=t.href,l=t.label,u=P(t,o);return a.createElement("li",{className:"menu__list-item",key:l},a.createElement(h.Z,(0,c.Z)({className:(0,d.Z)("menu__link",{"menu__link--active":u}),to:r},(0,f.Z)(r)&&{isNavLink:!0,exact:!0,onClick:n},i),(0,f.Z)(r)?l:a.createElement("span",null,l,a.createElement(C.Z,null))))}function O(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,g.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,g.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,d.Z)("button button--secondary button--outline",T),onClick:t},a.createElement(_,{className:w}))}function K(e){var t=e.responsiveSidebarOpened,n=e.onClick;return a.createElement("button",{"aria-label":t?(0,g.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,g.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?a.createElement("span",{className:(0,d.Z)(A,R)},"\xd7"):a.createElement(E.Z,{className:A,height:24,width:24}))}var q=function(e){var t,n,o=e.path,i=e.sidebar,r=e.sidebarCollapsible,l=void 0===r||r,c=e.onCollapse,s=e.isHidden,h=function(){var e=(0,u.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],o=t[1];return(0,p.Z)((function(t){var n=t.scrollY;e||o(0===n)})),n}(),f=(0,u.LU)(),_=f.navbar.hideOnScroll,E=f.hideableSidebar,C=(0,u.nT)().isClosed,M=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,m.Z)(t);var o=(0,b.Z)();return(0,a.useEffect)((function(){o===b.D.desktop&&n(!1)}),[o]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),T=M.showResponsiveSidebar,w=M.closeResponsiveSidebar,A=M.toggleResponsiveSidebar;return a.createElement("div",{className:(0,d.Z)(k,(t={},t[N]=_,t[Z]=s,t))},_&&a.createElement(v.Z,{tabIndex:-1,className:I}),a.createElement("nav",{className:(0,d.Z)("menu","menu--responsive","thin-scrollbar",S,(n={"menu--show":T},n[y]=!C&&h,n)),"aria-label":(0,g.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},a.createElement(K,{responsiveSidebarOpened:T,onClick:A}),a.createElement("ul",{className:"menu__list"},a.createElement(H,{items:i,onItemClick:w,collapsible:l,activePath:o}))),E&&a.createElement(O,{onClick:c}))},z=n(7277),J=n(4608),U=n(5977),Y={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainer:"docSidebarContainer_3Kbt",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function G(e){var t,n,r,c,s,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,h=(0,i.Z)(),f=h.siteConfig,v=h.isClient,E=b.pluginId,C=b.version,k=function(e){var t,n=e.versionMetadata,a=e.currentDocRoute,o=n.permalinkToSidebar,i=n.docsSidebars,r=o[a.path]||o[(t=a.path,t.endsWith("/")?t:t+"/")]||o[function(e){return e.endsWith("/")?e.slice(0,-1):e}(a.path)];return{sidebar:i[r],sidebarName:r}}({versionMetadata:b,currentDocRoute:m}),N=k.sidebarName,Z=k.sidebar,I=(0,a.useState)(!1),S=I[0],M=I[1],y=(0,a.useState)(!1),T=y[0],w=y[1],A=(0,a.useCallback)((function(){T&&w(!1),M(!S)}),[T]);return a.createElement(l.Z,{key:v,wrapperClassName:u.kM.wrapper.docPages,pageClassName:u.kM.page.docPage,searchMetadatas:{version:C,tag:(0,u.os)(E,C)}},a.createElement("div",{className:Y.docPage},Z&&a.createElement("aside",{className:(0,d.Z)(Y.docSidebarContainer,(t={},t[Y.docSidebarContainerHidden]=S,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Y.docSidebarContainer)&&S&&w(!0)}},a.createElement(q,{key:N,sidebar:Z,path:m.path,sidebarCollapsible:null==(n=null==(r=f.themeConfig)?void 0:r.sidebarCollapsible)||n,onCollapse:A,isHidden:T}),T&&a.createElement("div",{className:Y.collapsedDocSidebar,title:(0,g.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,g.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:A,onClick:A},a.createElement(_,{className:Y.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,d.Z)(Y.docMainContainer,(c={},c[Y.docMainContainerEnhanced]=S||!Z,c))},a.createElement("div",{className:(0,d.Z)("container padding-top--md padding-bottom--lg",Y.docItemWrapper,(s={},s[Y.docItemWrapperEnhanced]=S,s))},a.createElement(o.Zo,{components:z.Z},p)))))}var Q=function(e){var t=e.route.routes,n=e.versionMetadata,o=e.location,i=t.find((function(e){return(0,U.LX)(o.pathname,e)}));return i?a.createElement(G,{currentDocRoute:i,versionMetadata:n},(0,r.Z)(t,{versionMetadata:n})):a.createElement(J.default,e)}},4608:function(e,t,n){n.r(t);var a=n(7294),o=n(8692),i=n(4973);t.default=function(){return a.createElement(o.Z,{title:(0,i.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(i.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(i.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(i.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);