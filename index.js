import{a as f,S as d,N as u,P as p,i as g}from"./assets/vendor-BtRz4VE7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const l=document.getElementById("mobile-menu"),m=document.getElementById("data-burger-close");m.addEventListener("click",()=>{l.classList.remove("is-open")});const h=document.getElementById("data-burger-open");h.addEventListener("click",()=>{l.classList.add("is-open")});const y=document.querySelectorAll(".nav-link");y.forEach(e=>{e.addEventListener("click",()=>{l.classList.remove("is-open")})});const b="https://paw-hut.b.goit.study",v=`${b}/api/feedbacks`;async function w(e=10,r=1){return(await f.get(v,{params:{page:r,limit:e}})).data}async function L(){const e=document.querySelector("#feedback");if(!e)return;const r=e.querySelector(".swiper.feedback-swiper"),o=e.querySelector(".swiper-wrapper"),n=e.querySelector(".feedback-swiper-pagination"),t=e.querySelector(".feedback-swiper-button-next"),s=e.querySelector(".feedback-swiper-button-prev"),a=e.querySelector(".loader");a.classList.remove("hideshow");try{const i=Math.floor(Math.random()*9)+1,c=(await w(5,i)).feedbacks;if(!Array.isArray(c)||c.length<3)throw new Error("Not enough feedbacks (min 3 required)");o.innerHTML=c.map(S).join(""),new d(r,{modules:[u,p],speed:1e3,slidesPerView:1,spaceBetween:16,loop:!1,resistanceRatio:.85,touchRatio:1.2,breakpoints:{768:{slidesPerView:2,spaceBetween:32},1440:{slidesPerView:2,spaceBetween:32}},pagination:{el:n,clickable:!0,dynamicBullets:!0},navigation:{nextEl:t,prevEl:s,disabledClass:"is-disabled"}})}catch(i){console.error(i),g.error({title:"Error",message:i.message,position:"topRight"})}finally{a.classList.add("hideshow")}}function S(e){const r=(e==null?void 0:e.author)??"User",o=(e==null?void 0:e.description)??"",n=k((e==null?void 0:e.rate)??0),t=Math.floor(n),s=n%1>=.5,a=`rating value-${t}${s?" half":""} star-icon`,i=Array.from({length:5}).map(()=>`
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
                        ${i}
                    </div>
                </div>
                <p class="feedback-comment">${o}</p>
                <p class="feedback-author">${r}</p>
            </div>
        </div>
    `}function k(e){const r=Number(e);return Number.isFinite(r)?Math.max(0,Math.min(5,r)):0}function E(){const e=document.querySelector("#about-us");if(!e)return;const r=e.querySelector(".swiper.mySwiper"),o=e.querySelector(".swiper-button-next"),n=e.querySelector(".swiper-button-prev"),t=e.querySelector(".swiper-pagination");new d(r,{modules:[u,p],cssMode:!0,navigation:{nextEl:o,prevEl:n},pagination:{el:t,clickable:!0},mousewheel:!0,keyboard:!0})}document.addEventListener("DOMContentLoaded",L);document.addEventListener("DOMContentLoaded",E);
//# sourceMappingURL=index.js.map
