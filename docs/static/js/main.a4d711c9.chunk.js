(this.webpackJsonpmediacard=this.webpackJsonpmediacard||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c(16),r=c.n(n),a=c(7),s=(c(23),c(11)),l=c(2),o=function(){return fetch("http://rickandmortyapi.com/documentation/#get-all-characters").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,image:e.image,name:e.name,status:e.status,specie:e.species,origin:e.origin.name,episode:e.episode,url:e.url}}))}))},j=(c(24),c.p+"static/media/img.de13d484.png"),d=(c(25),c(0));var h=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(a.b,{className:"section__detail--link",to:"/",children:"Volver"}),Object(d.jsxs)("section",{className:"section__detail",children:[Object(d.jsx)("img",{className:"section__detail--img",src:e.character.image,alt:e.character.name}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:e.character.name}),Object(d.jsxs)("ul",{className:"section__detail--list",children:[Object(d.jsxs)("li",{children:["Status: ",e.character.status]}),Object(d.jsxs)("li",{children:["Especie: ",e.character.specie]}),Object(d.jsxs)("li",{children:["Origen: ",e.character.origin]}),Object(d.jsxs)("li",{children:["Episodios: ",e.character.episode.length]}),Object(d.jsx)("a",{className:"section__detail--share",href:"http://localhost:3000/#/detail/".concat(e.character.id),children:"Compartir tarjeta"})]})]})]})]})};c(32),c(33);var u=function(e){return console.log(e),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(a.b,{className:"section__card--link",to:"/detail/".concat(e.character.id),children:Object(d.jsxs)("section",{className:"section__card",children:[Object(d.jsx)("img",{className:"section__card--img",src:e.character.image,alt:e.character.name}),Object(d.jsxs)("div",{className:"section__card--name",children:[Object(d.jsx)("h1",{children:e.character.name}),Object(d.jsx)("span",{children:e.character.specie}),Object(d.jsx)("p",{children:e.character.episode.length})]})]})})})};var f=function(e){var t=e.characters.map((function(e){return Object(d.jsx)("li",{character:e,children:Object(d.jsx)(u,{character:e})},e.id)}));return Object(d.jsx)("section",{className:"section__list",children:Object(d.jsx)("ul",{className:"section__list--elements",children:t})})};c(34);var m=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{htmlFor:"filterName",children:"Busca tu personaje"}),Object(d.jsx)("input",{className:"section__filters--filterName",placeholder:"Ej: Abradolf Lincler",type:"text",name:"name",id:"filterName",onChange:function(t){e.handleFilters({value:t.target.value,key:"filterName"})},value:e.filterName})]})};var b=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{htmlFor:"filterspecies",children:"Especie"}),Object(d.jsxs)("select",{className:"section__filters--filterSpecies",name:"filterSpecies",id:"filterSpecies",onChange:function(t){e.handleFilters({value:t.target.value,key:"filterSpecies"})},value:e.filterSpecies,children:[Object(d.jsx)("option",{value:"",children:"Todos"}),Object(d.jsx)("option",{value:"Human",children:"Human"}),Object(d.jsx)("option",{value:"Alien",children:"Alien"})]})]})};var O=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"episodesFilter"}),Object(d.jsx)("input",{type:"number",name:"name",id:"filterEpisodes",onChange:function(t){e.handleFilters({value:parseInt(t.target.value),key:"filterEpisodes"})},value:e.filterEpisodes})]})};var p=function(e){return Object(d.jsxs)("form",{onSubmit:e.handleForm,className:"section__filters",children:[Object(d.jsx)(m,{handleFilters:e.handleFilters,filterName:e.filterName}),Object(d.jsx)(b,{handleFilters:e.handleFilters,filterSpecies:e.filterSpecies}),Object(d.jsx)(O,{handleFilters:e.handleFilters,filterEpisodes:e.filterEpisodes})]})};c(35);var x=function(){return Object(d.jsxs)("div",{className:"section__notFound",children:[Object(d.jsx)("h2",{children:"P\xe1gina no encontrada"}),Object(d.jsx)("p",{children:" Vuelve al inicio haciendo click "}),Object(d.jsx)(a.b,{className:"section__notFound--link",to:"/",children:"AQUI"})]})},g={get:function(e,t){var c=localStorage.getItem(e);return null===c?t:JSON.parse(c)},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},v=c(18);var N=function(){var e=Object(i.useState)(g.get("characters",[])),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(i.useState)(g.get("filterName","")),a=Object(s.a)(r,2),u=a[0],m=a[1],b=Object(i.useState)(g.get("filterSpecies","")),O=Object(s.a)(b,2),N=O[0],_=O[1],F=Object(i.useState)(g.get("filterEpisodes",0)),S=Object(s.a)(F,2),E=S[0],k=S[1];Object(i.useEffect)((function(){o().then((function(e){n(e)}))}),[]),Object(i.useEffect)((function(){g.set("characters",c)}),[c]),Object(i.useEffect)((function(){g.set("characters",c),g.set("filterName",u),g.set("filterSpecies",N)}),[c,u,N]);var y=c.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())})).filter((function(e){return""===N||e.specie===N})).filter((function(e){return console.log(e.episode.length,E),0===E||e.episode.length===E}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:Object(d.jsx)("img",{className:"img",src:j,alt:"Rick and Morty"})}),Object(d.jsxs)(l.Switch,{children:[Object(d.jsxs)(l.Route,{exact:!0,path:"/",children:[Object(d.jsx)(p,{handleFilters:function(e){"filterName"===e.key?m(e.value):"filterSpecies"===e.key?_(e.value):k(e.value)},handleForm:function(e){e.preventDefault()},filterName:u,filterSpecies:N,filterEpisodes:E}),Object(d.jsx)(f,{characters:y})]}),Object(d.jsx)(l.Route,{path:"/detail/:characterId",render:function(e){var t=parseInt(e.match.params.characterId),i=c.find((function(e){return e.id===t}));return void 0!==i?Object(d.jsx)(h,{character:i}):Object(d.jsx)("h2",{className:"CharacterNotFound",children:Object(d.jsx)(v.Link,{className:"CharacterNotFound",to:"/",children:"El personaje que busca no existe"})})}}),Object(d.jsx)(l.Route,{children:Object(d.jsx)(x,{})})]})]})};r.a.render(Object(d.jsx)(a.a,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.a4d711c9.chunk.js.map