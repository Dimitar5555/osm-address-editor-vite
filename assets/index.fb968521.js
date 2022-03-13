var Q=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var B=(o,e,r)=>e in o?Q(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,E=(o,e)=>{for(var r in e||(e={}))oe.call(e,r)&&B(o,r,e[r]);if(U)for(var r of U(e))se.call(e,r)&&B(o,r,e[r]);return o},J=(o,e)=>ee(o,te(e));import{j as T,r as s,d as S,o as re,p as ae,c as ne,b as ie,m as le,F as j,f as $,M as de,t as ce,a as pe,e as ue,S as ge,L as fe,N as he,G as me,g as ye,h as be,i as xe,R as ve,k as Se}from"./vendor.565c861b.js";const we=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))p(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const g of l.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&p(g)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function p(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}};we();const t=T.exports.jsx,u=T.exports.jsxs,L=T.exports.Fragment,W=()=>{const[o,e]=s.exports.useState(!1);s.exports.useEffect(()=>{e(S.exports.isLoggedIn())},[]);const r=s.exports.useCallback(()=>{(async()=>(await S.exports.login({mode:"popup",clientId:"q9sRK4UuNqv3_HLE8E7m2-wUAKS3XJSFWb9apehpAqE",scopes:["read_prefs","write_api","write_notes"],redirectUrl:window.location.href.replace(window.location.hash,"")}),e(S.exports.isLoggedIn()),window.location.reload()))()},[]),p=s.exports.useCallback(()=>{(async()=>(S.exports.logout(),e(!1)))()},[]);return t(L,{children:o?t("button",{style:{height:"44px"},className:"button py-1 px-1 border-transparent border-4 bg-gray-300 text-gray-900 hover:text-gray-500",onClick:p,children:"logout"}):t("button",{style:{height:"44px"},className:"button py-1 px-1 border-transparent border-4 bg-gray-300 text-gray-900 hover:text-gray-500",onClick:r,children:"login"})})},ke=()=>{const[o,e]=s.exports.useState(!1),[r,p]=s.exports.useState(void 0);return s.exports.useEffect(()=>{e(S.exports.isLoggedIn())},[]),s.exports.useEffect(()=>{!o||(async()=>{const i=await S.exports.getUser("me");p(i)})()},[o]),t(L,{children:r?t("img",{style:{width:"44px",height:"44px"},src:r.img.href,alt:r.display_name,title:r.display_name}):t("img",{})})},Ce=()=>{const[o,e]=s.exports.useState(!1),[r,p]=s.exports.useState(void 0);return s.exports.useEffect(()=>{e(S.exports.isLoggedIn())},[]),s.exports.useEffect(()=>{!o||(async()=>{const i=await S.exports.getUser("me");p(i)})()},[o]),u("div",{style:{zIndex:100,position:"relative",top:0,left:0,height:"44px",display:"flex",flexDirection:"row",backgroundColor:"rgba(0, 255, 255, 0.9)"},children:[u("div",{children:[t("h1",{className:"text-4xl font-bold",style:{display:"inline",margin:"0px"},children:"OSM address editor"}),r?u("span",{style:{marginLeft:"10px"},children:["Hi ",r==null?void 0:r.display_name,", You have"," ",r==null?void 0:r.changesets.count," changesets."]}):t("span",{style:{marginLeft:"10px"},children:"Please logged in as OSM user."})]}),u("div",{style:{display:"flex",flex:1,justifyContent:"end"},children:[t("div",{children:t(ke,{})}),t("div",{children:t(W,{})})]})]})},P={type:"FeatureCollection",features:[]},Ne=()=>{const[o,e]=s.exports.useState(!1);return{fetchOverpass:s.exports.useCallback(async(p,i,l)=>{var k,I;if(console.log(l),l<16)return P;let g=300;if(l>17&&(g=200),l>18&&(g=100),l>19&&(g=50),o)return P;e(!0),console.log("overpass: loading...");let f="[out:json]";f+=`[timeout:25];
`,f+='way["building"]',f+=`(around:${g},${p},${i});
`,f+="out meta geom;",console.log(f);const h=await fetch(`https://lz4.overpass-api.de/api/interpreter?data=${encodeURIComponent(f)}`,{});if(h.status!==200)return e(!1),P;const x=await h.json();console.log("overpass json elements: ",x.elements);const v=re(x);console.log("overpass osmtogeojson raw: ",v);for await(const d of v.features){if(!d.properties)continue;d.id=d.properties.id.split("/")[1];const C=(k=x.elements.filter(m=>d.id?typeof d.id=="number"?m.id===d.id:m.id===parseInt(d.id):!1))==null?void 0:k[0];if(C&&(d.properties.tags=C.tags,d.properties.nodes=C.nodes),d.geometry.type==="Polygon"){const m=ae(d.geometry.coordinates);var F=ne(m);d.properties.center=F.geometry.coordinates}const w=d.properties.uid;if(w){let m=localStorage.getItem(w+"-icon");if(m===null){const N=await S.exports.getUser(w);((I=N.img)==null?void 0:I.href)?(m=N.img.href,localStorage.setItem(w+"-icon",N.img.href)):localStorage.setItem(w+"-icon","")}d.properties.userIconHref=m||""}}return console.log("overpass osmtogeojson converted: ",v),console.log("overpass: loaded."),e(!1),v},[]),loadingOverpass:o}},K=({feature:o})=>{var r;const e=JSON.parse((r=o.properties)==null?void 0:r.center);return u(L,{children:[u("span",{className:"longitude",children:["Longitude: ",Math.round(e[0]*1e4)/1e4]}),", ",u("span",{className:"latitude",children:["Latitude: ",Math.round(e[1]*1e4)/1e4," "]})]})},X=({feature:o})=>t(L,{children:o.properties&&Object.keys(o.properties).map(e=>{var r;if(e.startsWith("addr"))return u("span",{className:e,children:[(r=o.properties)==null?void 0:r[e]," "]})})}),V={JPN:{postcodeField:{key:"addr:postcode",displayName:"\u90F5\u4FBF\u756A\u53F7",placeholder:"101-0021"},mainFields:[{key:"addr:province",displayName:"\u90FD\u9053\u5E9C\u770C",placeholder:"\u6771\u4EAC\u90FD"},{key:"addr:city",displayName:"\u5E02\u533A\u753A\u6751",placeholder:"\u5343\u4EE3\u7530\u533A"},{key:"addr:quarter",displayName:"\u5730\u540D",placeholder:"\u5916\u795E\u7530"}],detailFields:[{key:"addr:neighbourhood",displayName:"\u4E01\u76EE",placeholder:"1\u4E01\u76EE"},{key:"addr:block_number",displayName:"\u756A\u5730",placeholder:"17"},{key:"addr:housenumber",displayName:"\u53F7",placeholder:"6",prefix:"-"}]},CHN:{postcodeField:{key:"addr:postcode",displayName:"Postcode",placeholder:""},mainFields:[{key:"addr:province",displayName:"Province/Municipality/AR/SAR",placeholder:""},{key:"addr:city",displayName:"City/Prefecture/League",placeholder:""},{key:"addr:district",displayName:"District/County/Banner",placeholder:""}],detailFields:[{key:"addr:street",displayName:"Street",placeholder:""},{key:"addr:housenumber",displayName:"House number",placeholder:""}]}},Fe=()=>{const[o,e]=s.exports.useState(!1);return{detectCountry:s.exports.useCallback(async(p,i)=>{e(!0);const g=await(await fetch("https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_0_countries.geojson")).json();for(const f of g.features)if(ie([p,i],f.geometry))return console.log("country: ",f.properties),e(!1),f;e(!1)},[]),loadingCountry:o}},D=({feature:o,fieldName:e,label:r,placeholder:p})=>{var f;const[i,l]=s.exports.useState((f=o.properties)==null?void 0:f[e]);s.exports.useEffect(()=>{var h;l((h=o.properties)==null?void 0:h[e])},[o]);const g=s.exports.useCallback(h=>{l(h.currentTarget.value)},[]);return u("div",{className:"w-full md:w-1/6 py-1 px-2 mb-6 md:mb-0",children:[t("label",{className:"block tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:e,children:r||e}),t("input",{className:"appearance-none block w-full leading-tight rounded py-2 px-1 border border-gray-300 bg-gray-100 text-black placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:bg-white focus:border-gray-500",id:e,name:e,type:"text",placeholder:p,value:i,onChange:g})]})},Ie={attribution:"https://yuiseki.github.io/osm-address-editor-vite/",host:"https://yuiseki.github.io/osm-address-editor-vite/",created_by:"osm-address-editor-vite",locale:navigator.language,comment:"Update address"},Ee=({feature:o,onCancel:e,onSubmit:r})=>{var _,n,c;const{detectCountry:p,loadingCountry:i}=Fe(),l=JSON.parse((_=o.properties)==null?void 0:_.center),[g,f]=s.exports.useState(void 0),[h,x]=s.exports.useState(),[v,F]=s.exports.useState(),[k,I]=s.exports.useState(),[d,C]=s.exports.useState(o),[w,m]=s.exports.useState(!1),[N,M]=s.exports.useState(!1);s.exports.useEffect(()=>{m(S.exports.isLoggedIn())},[]),s.exports.useEffect(()=>{(async()=>{var y;const a=await p(l[0],l[1]);if(f(a),((y=a==null?void 0:a.properties)==null?void 0:y.ISO_A3)&&V[a.properties.ISO_A3]){const b=V[a.properties.ISO_A3];x(b.postcodeField),F(b.mainFields),I(b.detailFields)}})()},[o]),s.exports.useEffect(()=>{console.log(d.properties)},[d]);const R=s.exports.useCallback(async()=>{console.info("openReverseGeocoder",[l[0],l[1]]);const a=await le.openReverseGeocoder([l[0],l[1]]);console.info("openReverseGeocoder",a),C(y=>{const b={properties:E({"addr:province":a.prefecture,"addr:city":a.city},y.properties)};return E(E({},y),b)})},[]),O=s.exports.useCallback(async a=>{var q,G,H;M(!0),a.preventDefault();const y=new FormData(a.currentTarget),b=JSON.parse((q=o.properties)==null?void 0:q.tags);y.forEach((z,Z)=>{typeof z=="string"&&z.length>0&&(b[Z]=z)});const A={type:"way",id:o.id,version:(G=o.properties)==null?void 0:G.version,tags:b,nodes:JSON.parse((H=o.properties)==null?void 0:H.nodes)};console.info(JSON.stringify(A,null,2));const Y={create:[],modify:[A],delete:[]};await S.exports.uploadChangeset(Ie,Y),M(!1),window.alert(`Successfully updated OpenStreetMap!!!
 Wait a minutes to apply to the map...`),r()},[o]);return d.properties?u("div",{children:[u("div",{children:["OSM:"," ",t("a",{className:"underline text-blue-600 hover:text-blue-800 visited:text-purple-600",href:"https://www.openstreetmap.org/"+d.properties.id,target:"_blank",children:d.properties.id})," | ",t(K,{feature:d}),u("span",{children:[" | ","Address:"," ",t("span",{className:"underline",children:t(X,{feature:d})})]})]}),i?t(j,{icon:$,spin:!0}):t(L,{children:h&&v&&k?u("form",{onSubmit:O,children:[t("div",{className:"flex flex-wrap",children:t(D,{feature:d,fieldName:h.key,label:h.displayName,placeholder:h.placeholder})}),t("div",{className:"flex flex-wrap",children:v.map(a=>t(D,{feature:d,fieldName:a.key,label:a.displayName,placeholder:a.placeholder},a.key))}),t("div",{className:"flex flex-wrap",children:k.map(a=>t(D,{feature:d,fieldName:a.key,label:a.displayName,placeholder:a.placeholder},a.key))}),t("div",{className:"flex flex-wrap",children:u("div",{className:"w-full py-2 px-2 mb-6 md:mb-0",children:[t("button",{type:"button",onClick:e,className:"button rounded mr-4 py-2 px-3  bg-gray-200 text-red-600 hover:text-red-800",children:"Cancel"}),t("button",{type:"button",onClick:R,className:"button rounded mr-4 py-2 px-3 bg-green-300 text-gray-800 hover:text-white",children:"Load address from coordinates"}),t("button",{disabled:!w||N,className:"button rounded mr-2 py-2 px-3 bg-blue-300 text-gray-800 disabled:bg-blue-100 disabled:text-gray-400 hover:text-white",children:"Submit to OpenStreetMap!"}),!w&&u(L,{children:[t("span",{className:"mr-2 underline text-red-600",children:"Require logged in before you submit data to OpenStreetMap"}),t(W,{})]})]})})]}):t("div",{className:"flex flex-wrap",children:u("div",{className:"w-full mb-6 md:mb-0",children:[u("div",{className:"py-2",children:[u("p",{children:["Sorry, Address editor in this country"," ",(n=g==null?void 0:g.properties)==null?void 0:n.ABBREV," (ISO code:",(c=g==null?void 0:g.properties)==null?void 0:c.ISO_A3,") does not support yet."]}),t("p",{children:t("a",{href:"https://github.com/yuiseki/osm-address-editor-vite",target:"_blank",className:"underline text-blue-600 hover:text-blue-800 visited:text-purple-600",children:"Pull requests are welcome!"})})]}),t("button",{type:"button",onClick:e,className:"button rounded mr-4 py-2 px-3  bg-gray-200 text-red-600 hover:text-red-800",children:"Cancel"})]})})})]}):null};function Le(o,e){const[r,p]=s.exports.useState(o);return s.exports.useEffect(()=>{const i=setTimeout(()=>{p(o)},e);return()=>{clearTimeout(i)}},[o,e]),r}const Oe={version:8,sources:{"raster-tiles":{type:"raster",tiles:["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png","https://b.tile.openstreetmap.org/{z}/{x}/{y}.png","https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"],tileSize:256,attribution:"\xA9 OpenStreetMap contributors"}},layers:[{id:"osm-tiles",type:"raster",source:"raster-tiles",minzoom:0,maxzoom:20}]},Ae={id:"buildings-layer-fill",type:"fill",source:"buildings-source",paint:{"fill-color":["case",["boolean",["feature-state","select"],!1],"green",["all",["boolean",["has","addr:postcode"],!1],["boolean",["has","addr:province"],!1],["boolean",["has","addr:city"],!1],["boolean",["has","addr:quarter"],!1],["boolean",["has","addr:neighbourhood"],!1],["boolean",["has","addr:block_number"],!1],["boolean",["has","addr:housenumber"],!1]],"blue",["any",["boolean",["has","addr:postcode"],!1],["boolean",["has","addr:province"],!1],["boolean",["has","addr:city"],!1],["boolean",["has","addr:quarter"],!1],["boolean",["has","addr:neighbourhood"],!1],["boolean",["has","addr:block_number"],!1],["boolean",["has","addr:housenumber"],!1]],"yellow","red"],"fill-opacity":["case",["boolean",["feature-state","select"],!1],.8,["boolean",["feature-state","hover"],!1],.8,.4]},filter:["==","$type","Polygon"]};function Me(){const o=s.exports.useRef(null),[e,r]=s.exports.useState(),p=Le(e,1e3),i=s.exports.useRef(null),[l,g]=s.exports.useState({type:"FeatureCollection",features:[]}),[f,h]=s.exports.useState("auto"),[x,v]=s.exports.useState(),[F,k]=s.exports.useState([]),{fetchOverpass:I,loadingOverpass:d}=Ne();s.exports.useEffect(()=>{setTimeout(()=>{var n;console.log(window.location.hash),!!window.location.hash.endsWith("/0/0")&&(console.log("geolocateControlRef trigger"),(n=i.current)==null||n.trigger())},500)},[]);const C=s.exports.useCallback(n=>{const c=n.target.getCenter(),a=n.target.getZoom();r({zoom:a,latitude:c.lat,longitude:c.lng,bearing:0,pitch:0,padding:{top:0,bottom:0,left:0,right:0}})},[]),w=s.exports.useCallback(n=>{r(n.viewState)},[]),m=s.exports.useCallback(n=>{r(n.viewState)},[]);s.exports.useEffect(()=>{(async()=>{if(!p)return;const n=p,c=await I(n.latitude,n.longitude,n.zoom);g(c)})()},[p]);const N=s.exports.useCallback(n=>{var A;h("pointer");const{features:c,point:{x:a,y}}=n,b=c&&c[0];b?((A=o.current)==null||A.setFeatureState({source:"buildings-source",id:b.id},{hover:!0}),v({feature:b,x:a,y})):v(void 0)},[]),M=s.exports.useCallback(n=>{var c;h("auto"),(c=o.current)==null||c.querySourceFeatures("buildings-source").map(a=>{var y;(y=o.current)==null||y.setFeatureState({source:"buildings-source",id:a.id},{hover:!1})}),v(void 0)},[]),R=s.exports.useCallback(n=>{var a;O();const c=n.features&&n.features[0];!c||((a=o.current)==null||a.setFeatureState({source:"buildings-source",id:c.id},{select:!0}),k([c]))},[]),O=s.exports.useCallback(()=>{var n;(n=o.current)==null||n.querySourceFeatures("buildings-source").map(c=>{var a;(a=o.current)==null||a.setFeatureState({source:"buildings-source",id:c.id},{select:!1})}),k([])},[]),_=s.exports.useMemo(()=>{let n=20;return e&&(n=e.zoom<18?15:e.zoom<19?20:30),l.features.map((c,a)=>c.properties?t(de,{style:{cursor:"pointer"},longitude:c.properties.center[0],latitude:c.properties.center[1],anchor:"center",children:c.properties.userIconHref.length>0?t("img",{src:c.properties.userIconHref,style:{width:n+"px",height:n+"px"}}):t("span",{dangerouslySetInnerHTML:{__html:ce(c.properties.user||"noname",n)}})},`marker-${a}`):null)},[l,e]);return u("div",{children:[t(Ce,{}),u("div",{style:{zIndex:1,position:"absolute",top:0,left:0,height:"100vh",width:"100vw",display:"flex",flexDirection:"column"},children:[F.length>0&&t("div",{style:{zIndex:200,position:"absolute",top:"44px",left:0,width:"100vw",backgroundColor:"rgba(255, 255, 255, 0.9)"},children:t("div",{style:{padding:"10px"},children:F.map(n=>t(Ee,{feature:n,onCancel:O,onSubmit:O},n.id))})}),u(pe,J(E({ref:o},e),{onMove:w,onMoveEnd:m,onLoad:C,interactiveLayerIds:["buildings-layer-fill"],onClick:R,onMouseEnter:N,onMouseLeave:M,dragRotate:!1,boxZoom:!1,hash:!0,cursor:f,mapLib:ue,style:{width:"100%",height:"100%"},mapStyle:Oe,children:[t(ge,{id:"buildings-source",type:"geojson",data:l,children:t(fe,E({},Ae))}),t(he,{position:"top-left",style:{marginTop:"55px"},showCompass:!1}),t(me,{ref:i,position:"top-left",showUserLocation:!0,showAccuracyCircle:!1,trackUserLocation:!1,positionOptions:{enableHighAccuracy:!0},fitBoundsOptions:{zoom:17}}),t("div",{className:"fa-2xl",style:{zIndex:100,display:"flex",position:"absolute",top:"50%",left:"50%",textAlign:"center",verticalAlign:"middle"},children:!e||(e==null?void 0:e.zoom)&&e.zoom<16?t(j,{size:"2x",icon:ye}):d?t(j,{size:"2x",icon:$,spin:!0}):t(j,{size:"2x",icon:be})}),_,x&&u("div",{className:"tooltip",style:{zIndex:10,background:"rgba(255, 255, 255, 0.7)",padding:"5px",width:"250px",position:"absolute",left:x.x+5,top:x.y+5},children:[t(K,{feature:x.feature}),t("br",{}),t(X,{feature:x.feature})]})]}))]})]})}window.Buffer=xe.Buffer;ve.render(t(Se.StrictMode,{children:t(Me,{})}),document.getElementById("root"));