(()=>{"use strict";var e={584:(e,t,n)=>{e.exports=n.p+"2e9dfd350faae4f6357f.jpeg"},478:(e,t,n)=>{e.exports=n.p+"f8e809b03e31373178a9.png"},462:(e,t,n)=>{e.exports=n.p+"823f2eb1ddc12626c678.jpg"}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(478);const t=t=>{const n=document.createElement("div");n.setAttribute("id","home");const r=document.querySelector("#content"),i=document.createElement("h1"),c=document.createElement("div");c.setAttribute("id","about");const o=document.createElement("h3"),a=document.createElement("p"),d=document.createElement("img");i.textContent="Come and taste our delicious african food!",o.textContent="About our restaurant!",a.textContent="Our restaurant have differents types of foods but our speciality is african so if you feel like traveling in africa without go on safari visit us!",d.src=e,r.appendChild(d),t.appendChild(i),c.appendChild(o),c.appendChild(a),r.appendChild(c),t.appendChild(n)};var r=n(462);var i=n(584);const c=document.querySelector("#content"),o=document.querySelector(".tab1"),a=document.querySelector(".tab2"),d=document.querySelector(".tab3"),s=[o,a,d];t(c),s.forEach((e=>{e.addEventListener("click",(()=>{c.innerHTML="",s.forEach((e=>{e.classList.remove("active")})),e.classList.toggle("active")}))})),o.addEventListener("click",(()=>{t(c)})),a.addEventListener("click",(()=>{(e=>{const t=document.createElement("div");t.setAttribute("id","menu");const n=document.createElement("img");n.setAttribute("id","image"),n.src=r,t.appendChild(n),e.appendChild(t)})(c)})),d.addEventListener("click",(()=>{(e=>{const t=document.createElement("div");t.setAttribute("id","contact");const n=document.createElement("div");n.setAttribute("id","details"),n.innerHTML='<ul class="list"><li>Tel: +250785022516</li><li>Email: restaurant@gmail.com</li></ul>';const r=document.createElement("img");r.src=i,t.appendChild(r),t.appendChild(n),e.appendChild(t)})(c)}))})()})();