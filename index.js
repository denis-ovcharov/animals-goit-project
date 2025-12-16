import{a as l,S as d,N as u,P as f,i as p}from"./assets/vendor-BtRz4VE7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const g="https://paw-hut.b.goit.study",h=`${g}/api/feedbacks`;async function b(e=10,t=1){return(await l.get(h,{params:{page:t,limit:e}})).data}async function v(){const e=document.querySelector("#feedback");if(!e)return;const t=e.querySelector(".swiper.feedback-swiper"),o=e.querySelector(".swiper-wrapper"),a=e.querySelector(".feedback-swiper-pagination"),s=e.querySelector(".feedback-swiper-button-next"),r=e.querySelector(".feedback-swiper-button-prev"),n=e.querySelector(".loader");n.classList.remove("hideshow");try{const i=Math.floor(Math.random()*9)+1,c=(await b(5,i)).feedbacks;if(!Array.isArray(c)||c.length<3)throw new Error("Not enough feedbacks (min 3 required)");o.innerHTML=c.map(y).join(""),new d(t,{modules:[u,f],speed:1e3,slidesPerView:1,spaceBetween:16,loop:!1,resistanceRatio:.85,touchRatio:1.2,breakpoints:{768:{slidesPerView:2,spaceBetween:32},1440:{slidesPerView:2,spaceBetween:32}},pagination:{el:a,clickable:!0,dynamicBullets:!0},navigation:{nextEl:s,prevEl:r,disabledClass:"is-disabled"}})}catch(i){console.error(i),p.error({title:"Error",message:i.message,position:"topRight"})}finally{n.classList.add("hideshow")}}function y(e){const t=(e==null?void 0:e.author)??"User",o=(e==null?void 0:e.description)??"",a=m((e==null?void 0:e.rate)??0),s=Math.floor(a),r=a%1>=.5,n=`rating value-${s}${r?" half":""} star-icon`,i=Array.from({length:5}).map(()=>`
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
                <div class="${n}" aria-label="Rating: ${a} out of 5">
                    <div class="star-container">
                        ${i}
                    </div>
                </div>
                <p class="feedback-comment">${o}</p>
                <p class="feedback-author">${t}</p>
            </div>
        </div>
    `}function m(e){const t=Number(e);return Number.isFinite(t)?Math.max(0,Math.min(5,t)):0}document.addEventListener("DOMContentLoaded",v);
//# sourceMappingURL=index.js.map
