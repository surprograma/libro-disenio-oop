"use strict";(self.webpackChunklibro_disenio_oop=self.webpackChunklibro_disenio_oop||[]).push([[13],{895:function(e,t,a){a.d(t,{dK:function(){return s},_k:function(){return l},vc:function(){return c},rx:function(){return i},qo:function(){return o},Hk:function(){return u},Iz:function(){return m}});var n=a(1336),r=a.n(n);a(892)(r()),a(9574)(r());var s=["es"],l=!1,c=null,i="1912f2be",o=8,u=50,m={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},5601:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(7294),r=a(6010),s=a(6742),l="sidebar_2ahu",c="sidebarItemTitle_2hhb",i="sidebarItemList_2xAf",o="sidebarItem_2UVv",u="sidebarItemLink_1RT6",m="sidebarItemLinkActive_12pM",d=a(4973);function f(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,r.Z)(l,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.Z)(c,"margin-bottom--md")},t.title),n.createElement("ul",{className:i},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:o},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:m},e.title))}))))}},94:function(e,t,a){a.r(t);var n=a(7294),r=a(8692),s=a(6742),l=a(5601),c=a(4973),i=a(9306);t.default=function(e){var t=e.tags,a=e.sidebar,o=(0,c.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"}),u={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);u[t]=u[t]||[],u[t].push(e)}));var m=Object.entries(u).sort((function(e,t){var a=e[0],n=t[0];return a.localeCompare(n)})).map((function(e){var a=e[0],r=e[1];return n.createElement("article",{key:a},n.createElement("h2",null,a),r.map((function(e){return n.createElement(s.Z,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),n.createElement("hr",null))})).filter((function(e){return null!=e}));return n.createElement(r.Z,{title:o,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"}},n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("aside",{className:"col col--3"},n.createElement(l.Z,{sidebar:a})),n.createElement("main",{className:"col col--7"},n.createElement("h1",null,o),n.createElement("section",{className:"margin-vert--lg"},m)))))}}}]);