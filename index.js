import{a as f,S as h,N as L,P as w,i as q}from"./assets/vendor-BtRz4VE7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const m=document.getElementById("mobile-menu"),$=document.getElementById("data-burger-close");$.addEventListener("click",()=>{m.classList.remove("is-open"),document.body.style.overflow="visible"});const P=document.getElementById("data-burger-open");P.addEventListener("click",()=>{m.classList.add("is-open"),document.body.style.overflow="hidden"});const A=document.querySelectorAll(".nav-link");A.forEach(e=>{e.addEventListener("click",()=>{m.classList.remove("is-open"),document.body.style.overflow="visible"})});const g="https://paw-hut.b.goit.study",C=`${g}/api/animals`,O=`${g}/api/categories`,x=`${g}/api/feedbacks`;async function R({page:e=1,limit:t=10,categoryId:r}){const n={page:e,limit:t};return r&&(n.categoryId=r),(await f.get(C,{params:n})).data}async function I(){return(await f.get(O)).data}async function F(e=10,t=1){return(await f.get(x,{params:{page:t,limit:e}})).data}async function T(){const e=document.querySelector("#feedback");if(!e)return;const t=e.querySelector(".swiper.feedback-swiper"),r=e.querySelector(".swiper-wrapper"),n=e.querySelector(".feedback-swiper-pagination"),s=e.querySelector(".feedback-swiper-button-next"),o=e.querySelector(".feedback-swiper-button-prev");e.querySelector(".loader");try{const a=Math.floor(Math.random()*9)+1,c=(await F(5,a)).feedbacks;if(!Array.isArray(c)||c.length<3)throw new Error("Not enough feedbacks (min 3 required)");r.innerHTML=c.map(N).join(""),new h(t,{modules:[L,w],speed:1e3,slidesPerView:1,spaceBetween:16,loop:!1,resistanceRatio:.85,touchRatio:1.2,breakpoints:{768:{slidesPerView:2,spaceBetween:32},1440:{slidesPerView:2,spaceBetween:32}},pagination:{el:n,clickable:!0,dynamicBullets:!0},navigation:{nextEl:s,prevEl:o,disabledClass:"is-disabled"}})}catch(a){console.error(a),q.error({title:"Error",message:a.message,position:"topRight"})}}function N(e){const t=(e==null?void 0:e.author)??"User",r=(e==null?void 0:e.description)??"",n=H((e==null?void 0:e.rate)??0),s=Math.floor(n),o=n%1>=.5,a=`rating value-${s}${o?" half":""} star-icon`,l=Array.from({length:5}).map(()=>`
        <div class="star">
            <svg class="star-empty" aria-hidden="true">
                <use href="#star-empty"></use>
            </svg>
            <svg class="star-half" aria-hidden="true">
                <use href="#star-half"></use>
            </svg>
            <svg class="star-filled" aria-hidden="true">
                <use href="#star-filled"></use>
            </svg>
        </div>`).join("");return`
        <div class="swiper-slide">
            <div class="feedback-card">
                <div class="${a}" aria-label="Rating: ${n} out of 5">
                    <div class="star-container">
                        ${l}
                    </div>
                </div>
                <p class="feedback-comment">${r}</p>
                <p class="feedback-author">${t}</p>
            </div>
        </div>
    `}function H(e){const t=Number(e);return Number.isFinite(t)?Math.max(0,Math.min(5,t)):0}const p=document.querySelector(".scroll-top"),j=300;window.addEventListener("scroll",()=>{window.scrollY>j?p.classList.add("is-on"):p.classList.remove("is-on")});p.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});function U(){const e=document.querySelector("#about-us");if(!e)return;const t=e.querySelector(".swiper.mySwiper"),r=e.querySelector(".swiper-button-next"),n=e.querySelector(".swiper-button-prev"),s=e.querySelector(".swiper-pagination");new h(t,{modules:[L,w],cssMode:!1,navigation:{nextEl:r,prevEl:n},pagination:{el:s,clickable:!0,dynamicBullets:!1},mousewheel:!0,keyboard:!0,speed:1e3,parallax:!0})}//!=============================================================
let d=1,v=1,b=8,E="",S=[];//!=============================================================
async function _(){const e=await I(),t=["Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"],r=[...e].sort((n,s)=>{const o=t.indexOf(n.name),a=t.indexOf(s.name);return o===-1?1:a===-1?-1:o-a});D(r),await y()}//!=============================================================
const i={petsFilters:document.querySelector(".pets-filters"),petsList:document.querySelector(".pets-list"),loadMoreBtn:document.querySelector(".load-more"),loaderPetsList:document.querySelector(".loader")};//!=============================================================
function D(e){const r=[{name:"Всі",_id:""},...e].map(s=>`<li class="pets-filters-item"><button class="pets-filters-btn" data-category-id="${s._id}">${s.name}</button></li>`).join("");i.petsFilters.innerHTML=r;const n=document.querySelector(".pets-filters-btn");n&&n.classList.add("pets-filters-btn-active")}//!=============================================================
function V(e){const t=e.map(({_id:r,name:n,image:s,species:o,age:a,gender:l,shortDescription:c,categories:k})=>{const B=k.map(M=>`<p class="pet-category">${M.name}</p>`).join("");return`
        <li class="pet-card">
          <img class="pet-img" src="${s}" alt="${n}" />
          <div class="pet-info">
            <p class="pet-type">${o}</p>
            <h3 class="pet-name">${n}</h3>
            <div class="pet-categories">${B}</div>
            <ul class="pet-meta">
              <li>${a}</li>
              <li>${l}</li>
            </ul>
            <p class="pet-descr">${c}</p>
            <button class="pet-details-btn" data-id="${r}">
              Дізнатись більше
            </button>
          </div>
        </li>
      `}).join("");i.petsList.insertAdjacentHTML("beforeend",t)}//!===============================================================================
async function y(){Y();try{const{animals:e,totalItems:t}=await R({page:d,limit:b,categoryId:E});if(S.push(...e),e.length===0){u();return}V(e),v=Math.ceil(t/b),d<v?G():u(),d++}catch(e){console.error("API error:",e)}finally{z()}}//!===============================================================================
function Y(){document.body.style.overflowX="hidden",i.loaderPetsList.classList.remove("visually-hidden")}//!===============================================================================
function z(){i.loaderPetsList.classList.add("visually-hidden")}//!===============================================================================
function G(){i.loadMoreBtn.classList.remove("visually-hidden")}//!===============================================================================
function u(){i.loadMoreBtn.classList.add("visually-hidden")}//!===============================================================================
i.loadMoreBtn.addEventListener("click",async()=>{u(),await y(),K()});//!===============================================================================
function K(){const e=document.querySelector(".pet-card");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,left:0,behavior:"smooth"})}//!===============================================================================
i.petsFilters.addEventListener("click",e=>{u();const t=e.target.closest(".pets-filters-btn");t&&(document.querySelectorAll(".pets-filters-btn").forEach(r=>r.classList.remove("pets-filters-btn-active")),t.classList.add("pets-filters-btn-active"),E=t.dataset.categoryId||"",d=1,i.petsList.innerHTML="",y())});//!=================================================================================
document.addEventListener("click",e=>{e.target.classList.contains("pet-modal-btn")&&openModalOrder()});//!======================================================================================
document.addEventListener("click",e=>{if(e.target.classList.contains("pet-details-btn")){const t=e.target.dataset.id,r=S.find(n=>n._id===t);if(!r)return;openPetModal(r)}});//!=======================================================================================
document.addEventListener("DOMContentLoaded",T);document.addEventListener("DOMContentLoaded",U);document.addEventListener("DOMContentLoaded",_);
//# sourceMappingURL=index.js.map
