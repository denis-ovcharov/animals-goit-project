import{a as p,S as l,N as d,P as u,i as f}from"./assets/vendor-BtRz4VE7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const g="https://paw-hut.b.goit.study",h=`${g}/api/feedbacks`;async function b(e=10,s=1){return(await p.get(h,{params:{page:s,limit:e}})).data}async function y(){const e=document.querySelector("#feedback");if(!e)return;const s=e.querySelector(".swiper.feedback-swiper"),o=e.querySelector(".swiper-wrapper"),n=e.querySelector(".feedback-swiper-pagination"),t=e.querySelector(".feedback-swiper-button-next"),r=e.querySelector(".feedback-swiper-button-prev"),a=e.querySelector(".loader");a.classList.remove("hideshow");try{const i=Math.floor(Math.random()*9)+1,c=(await b(5,i)).feedbacks;if(!Array.isArray(c)||c.length<3)throw new Error("Not enough feedbacks (min 3 required)");o.innerHTML=c.map(v).join(""),new l(s,{modules:[d,u],speed:1e3,slidesPerView:1,spaceBetween:16,loop:!1,resistanceRatio:.85,touchRatio:1.2,breakpoints:{768:{slidesPerView:2,spaceBetween:32},1440:{slidesPerView:2,spaceBetween:32}},pagination:{el:n,clickable:!0,dynamicBullets:!0},navigation:{nextEl:t,prevEl:r,disabledClass:"is-disabled"}})}catch(i){console.error(i),f.error({title:"Error",message:i.message,position:"topRight"})}finally{a.classList.add("hideshow")}}function v(e){const s=(e==null?void 0:e.author)??"User",o=(e==null?void 0:e.description)??"",n=w((e==null?void 0:e.rate)??0),t=Math.floor(n),r=n%1>=.5,a=`rating value-${t}${r?" half":""} star-icon`,i=Array.from({length:5}).map(()=>`
        <div class="star">
            <svg class="star-empty" aria-hidden="true">
                <use href="./img/star-rating.icons.svg#star-empty"></use>
            </svg>
            <svg class="star-half" aria-hidden="true">
                <use href="./img/star-rating.icons.svg#star-half"></use>
            </svg>
            <svg class="star-filled" aria-hidden="true">
                <use href="./img/star-rating.icons.svg#star-filled"></use>
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
                <p class="feedback-author">${s}</p>
            </div>
        </div>
    `}function w(e){const s=Number(e);return Number.isFinite(s)?Math.max(0,Math.min(5,s)):0}function m(){const e=document.querySelector("#about-us");if(!e)return;const s=e.querySelector(".swiper.mySwiper"),o=e.querySelector(".swiper-button-next"),n=e.querySelector(".swiper-button-prev"),t=e.querySelector(".swiper-pagination");new l(s,{modules:[d,u],cssMode:!0,navigation:{nextEl:o,prevEl:n},pagination:{el:t,clickable:!0},mousewheel:!0,keyboard:!0})}document.addEventListener("DOMContentLoaded",y);document.addEventListener("DOMContentLoaded",m);
//# sourceMappingURL=index.js.map
