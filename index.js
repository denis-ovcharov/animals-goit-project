import{A as R,a as h,S as q,N as S,P as k,i as H,b as $}from"./assets/vendor-CyB7JiL4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const m=document.getElementById("mobile-menu"),I=document.getElementById("data-burger-close");I.addEventListener("click",()=>{m.classList.remove("is-open"),document.body.style.overflow="visible"});const T=document.getElementById("data-burger-open");T.addEventListener("click",()=>{m.classList.add("is-open"),document.body.style.overflow="hidden"});const F=document.querySelectorAll(".nav-link, .nav-btn-link");F.forEach(e=>{e.addEventListener("click",()=>{m.classList.remove("is-open"),document.body.style.overflow="visible"})});function M(){window.innerWidth>=1440&&(m.classList.remove("is-open"),document.body.style.overflow="visible")}M();window.addEventListener("resize",M);const N=[{question:"Я мрію про пухнастика! Що мені потрібно зробити, щоб забрати хвостика додому?",answer:`
    <p>Це чудово, що ви готові подарувати дім одному з наших підопічних! Ми дуже раді будемо вам у цьому допомогти. Процес «усиновлення» у нас простий та зрозумілий:</p>
    <ol class="no-bullets">
      <li> Оберіть друга: Придивіться до наших хвостиків у розділі «Знайди друга».</li>
      <li> Залиште заявку: Натисніть кнопку «Взяти додому» та заповніть коротку анкету.</li>
      <li> Поговоріть з куратором: Волонтер зателефонує вам та відповість на всі питання.</li>
      <li> Приїжджайте знайомитись: Ми домовимось про зустріч у притулку.</li>
      <li> Дорога додому:Після підписання договору ваш новий друг поїде додому.</li>
   </ol>
  `},{question:"Як мені найкраще підготувати свій дім та родину до появи хвостика?",answer:`
    <p>Чудове питання, яке показує вашу турботу! Переїзд — це завжди невеликий стрес для тваринки, але правильна підготовка зробить цей процес легким і радісним. Ось кілька порад:</p>
    <ul>
      <li>  Безпечний простір: Переконайтесь, що на вікнах є сітки, а дроти та побутова хімія сховані.</li>
      <li> Підготуйте Особисті речі: Підготуйте для хвостика дві мисочки (для їжі та води), лежанку чи будиночок, лоток з наповнювачем для котика або повідець і нашийник для собачки.</li>
      <li> Сімейна розмова: Обговоріть з рідними майбутні обов'язки. Важливо, щоб усі були готові до появи нового мешканця.</li>
      <li> Терпіння та любов:Дайте тваринці час, щоб звикнути. Не квапте її, будьте поруч, розмовляйте лагідним голосом — і ваша любов творитиме дива!</li>
    </ul>
  `},{question:"Чи можу я бути впевненим, що тваринка здорова? Розкажіть про щеплення.",answer:`
    <p>Так, звісно. Здоров'я наших підопічних — наш головний пріоритет. Кожна тваринка, яка потрапляє до нас, проходить повний огляд у ветеринара. Ми гарантуємо, що:</p>
    <ul>
      <li>Усі хвостики оброблені від бліх та глистів.</li>
      <li>Усі вакциновані комплексною вакциною за віком.</li>
      <li>Дорослі тварини (зазвичай від 6-8 місяців) стерилізовані/кастровані.</li>
      <li>Разом із тваринкою ви обов'язково отримаєте її ветеринарний паспорт з усіма відмітками.</li>
      <li>Якщо у когось є особливі потреби у догляді чи харчуванні, ми чесно і детально про це розповімо.</li>
    </ul>
  `},{question:"Я дуже хочу допомогти, але поки не готовий до адопції. Чим я можу підтримати «Хатинку лапок»?",answer:`
    <p>Дякуємо вам за велике серце та бажання допомогти! Кожна допомога для нас безцінна. Навіть якщо ви не можете взяти тваринку, ви можете стати її янголом-охоронцем. Ось як:</p>
    <ul>
      <li>Допомогти фінансово: Ваша пожертва піде на корм, ліки, оплату комунальних послуг та зарплату персоналу.</li>
      <li>Стати волонтером: Нам завжди потрібні люблячі руки для прогулянок з собачками, прибирання та, найголовніше, для спілкування з тваринками.</li>
      <li>Подарувати необхідне: Ми завжди раді кормам, лікам, наповнювачам для лотків, іграшкам, теплим ковдрам.</li>
      <li>Допомогти інформаційно: Найпростіший, але дуже дієвий спосіб — розповідати про нас у соцмережах. Можливо, саме ваш репост допоможе комусь знайти свою долю!</li>
    </ul>
  `},{question:"Мені сподобалась одна з ваших тваринок на сайті. Чи можу я приїхати, щоб познайомитися з нею особисто?",answer:`
    <p>Авжеж! Ми віримо, що справжня магія стається лише при особистій зустрічі. Щоб знайомство було комфортним і для вас, і для тваринки, ми просимо вас спочатку заповнити онлайн-заявку на нашому сайті.</p>
    <p>Після цього з вами зв'яжеться куратор тваринки, щоб домовитись про зручний час для вашого візиту. Такий підхід дозволяє нам приділити вам максимум уваги та уникнути зайвого стресу для наших підопічних. З нетерпінням чекаємо на знайомство!</p>
  `}],_=document.getElementById("faqAccordion");_.innerHTML=N.map(e=>`
    <div class="ac">
      <h3 class="ac-header">
        <button type="button" class="ac-trigger">
          <span>${e.question}</span>
          <svg class="faq__icon" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"/>
          </svg>
        </button>
      </h3>
      <div class="ac-panel">
        <div class="ac-text">${e.answer}</div>
      </div>
    </div>
  `).join("");new R("#faqAccordion",{duration:300,showMultiple:!1});document.querySelectorAll(".ac-trigger").forEach(e=>{e.addEventListener("click",()=>{const t=e.parentElement.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"})});const g="https://paw-hut.b.goit.study",j=`${g}/api/animals`,U=`${g}/api/categories`,D=`${g}/api/feedbacks`;async function z({page:e=1,limit:t=10,categoryId:n}){const o={page:e,limit:t};return n&&(o.categoryId=n),(await h.get(j,{params:o})).data}async function V(){return(await h.get(U)).data}async function W(e=10,t=1){return(await h.get(D,{params:{page:t,limit:e}})).data}async function Y(){const e=document.querySelector("#feedback");if(!e)return;const t=e.querySelector(".swiper.feedback-swiper"),n=e.querySelector(".swiper-wrapper"),o=e.querySelector(".feedback-swiper-pagination"),s=e.querySelector(".feedback-swiper-button-next"),i=e.querySelector(".feedback-swiper-button-prev");e.querySelector(".loader");try{const r=Math.floor(Math.random()*9)+1,l=(await W(5,r)).feedbacks;if(!Array.isArray(l)||l.length<3)throw new Error("Not enough feedbacks (min 3 required)");n.innerHTML=l.map(G).join(""),new q(t,{modules:[S,k],speed:1e3,slidesPerView:1,spaceBetween:16,loop:!1,resistanceRatio:.85,touchRatio:1.2,breakpoints:{768:{slidesPerView:2,spaceBetween:32},1440:{slidesPerView:2,spaceBetween:32}},pagination:{el:o,clickable:!0,dynamicBullets:!0},navigation:{nextEl:s,prevEl:i,disabledClass:"is-disabled"}})}catch(r){console.error(r),H.error({title:"Error",message:r.message,position:"topRight"})}}function G(e){const t=(e==null?void 0:e.author)??"User",n=(e==null?void 0:e.description)??"",o=K((e==null?void 0:e.rate)??0),s=Math.floor(o),i=o%1>=.5,r=`rating value-${s}${i?" half":""} star-icon`,u=Array.from({length:5}).map(()=>`
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
                <div class="${r}" aria-label="Rating: ${o} out of 5">
                    <div class="star-container">
                        ${u}
                    </div>
                </div>
                <p class="feedback-comment">${n}</p>
                <p class="feedback-author">${t}</p>
            </div>
        </div>
    `}function K(e){const t=Number(e);return Number.isFinite(t)?Math.max(0,Math.min(5,t)):0}const b=document.querySelector(".scroll-top"),Q=300;window.addEventListener("scroll",()=>{window.scrollY>Q?b.classList.add("is-on"):b.classList.remove("is-on")});b.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});function X(){const e=document.querySelector("#about-us");if(!e)return;const t=e.querySelector(".swiper.mySwiper"),n=e.querySelector(".swiper-button-next"),o=e.querySelector(".swiper-button-prev"),s=e.querySelector(".swiper-pagination");new q(t,{modules:[S,k],cssMode:!1,navigation:{nextEl:n,prevEl:o},pagination:{el:s,clickable:!0,dynamicBullets:!1},mousewheel:!0,keyboard:!0,speed:1e3,parallax:!0})}let c=null;function J(e){c=$.create(`
      <div class="pet-modal">
        <button class="modal-close-btn">
          <svg class="icon-close-btn" width="18" height="18">
            <use href="../img/sprite.svg#icon-close-btn"></use>
          </svg>
        </button>
        <img class="pet-modal-img"src="${e.image}" alt="${e.name}">
        <p class="pet-modal-species">${e.species}</p>
        <h3 class="pet-modal-title">${e.name}</h3>
        <div class="pet-info-wrap">
          <p class="pet-modal-age">${e.age}</p>
          <p class="pet-modal-gender">${e.gender}</p>
        </div>
        <ul class="pet-info-list">
          <li>
            <h3 class="pet-info-title">Опис:</h3>
            <p class="pet-modal-info">${e.description}</p>
          </li>
          <li><h3 class="pet-info-title">Здоров'я:</h3>
            <p class="pet-modal-info">${e.healthStatus}</p>
          </li>
          <li>
            <h3 class="pet-info-title">Поведінка:</h3>
            <p class="pet-modal-info">${e.behavior}</p>
          </li>
        </ul>
        <button class="pet-modal-btn">Взяти додому</button>
      </div>
    `,{onShow:t=>{document.body.style.overflow="hidden",t.element().querySelector(".modal-close-btn").addEventListener("click",()=>t.close())},onClose:t=>{document.body.style.overflow="visible",L()}}),w(),c.show()}function Z(){const e=new $.create(`
  <div class="modal-order">
    <button class="modal-order-close-btn" data-modal-order-close>
      <svg class="modal-order-icon" width="8" height="8">
        <use href="./img/sprite.svg#icon-close-btn"></use>
      </svg>
    </button>
    <h2 class="modal-order-title">
      Залишіть <br />
      заявку на <br />
      знайомство
    </h2>
    <form class="modal-order-form" data-modal-order-form>
      <div class="form-field-wrapper">
        <label class="form-field-label" for="username">Ім’я*</label>
        <div>
          <input
            class="form-field-text-input"
            name="user-name"
            id="user-name"
            type="text"
            placeholder="Андрій"
            required
          />
        </div>
      </div>
      <div class="form-field-wrapper">
        <label class="form-field-label" for="field-number">Телефон*</label>
        <div class="form-field-input-wrapper">
          <input
            class="form-field-text-input"
            name="user-phone"
            id="user-phone"
            type="tel"
            placeholder="+38 (095) 555 99 22"
            required
          />
        </div>
      </div>
        <div class="form-field-comment-wrapper">
          <label class="form-field-label" for="user-comment">Коментар</label>
          <textarea
            class="form-field-textarea"
            name="user-comment"
            id="user-comment"
            placeholder="Напишіть ваш коментар"
          ></textarea>
        </div>
        <button class="form-submit-btn" type="submit">Надіслати</button>
        </form>
  </div>
   `,{onShow:t=>{document.body.style.overflow="hidden",t.element().querySelector(".modal-order-close-btn").addEventListener("click",()=>t.close())},onClose:t=>{document.body.style.overflow="visible",L()}});c==null||c.close(),w(),e.show()}//!=============================================================
let d=1,E=1,p=8,x="",y=[];//!=============================================================
async function ee(){const e=await V(),t=["Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"],n=[...e].sort((o,s)=>{const i=t.indexOf(o.name),r=t.indexOf(s.name);return i===-1?1:r===-1?-1:i-r});te(n),await v()}//!=============================================================
const a={petsFilters:document.querySelector(".pets-filters"),petsList:document.querySelector(".pets-list"),loadMoreBtn:document.querySelector(".load-more"),loaderPetsList:document.querySelector(".loader")};//!=============================================================
function te(e){const n=[{name:"Всі",_id:""},...e].map(s=>`<li class="pets-filters-item"><button class="pets-filters-btn" data-category-id="${s._id}">${s.name}</button></li>`).join("");a.petsFilters.innerHTML=n;const o=document.querySelector(".pets-filters-btn");o&&o.classList.add("pets-filters-btn-active")}//!=============================================================
function se(e){const t=e.map(({_id:n,name:o,image:s,species:i,age:r,gender:u,shortDescription:l,categories:C})=>{const P=C.map(O=>`<p class="pet-category">${O.name}</p>`).join("");return`
        <li class="pet-card">
          <img class="pet-img" src="${s}" alt="${o}" />
          <div class="pet-info">
            <p class="pet-type">${i}</p>
            <h3 class="pet-name">${o}</h3>
            <div class="pet-categories">${P}</div>
            <ul class="pet-meta">
              <li>${r}</li>
              <li>${u}</li>
            </ul>
            <p class="pet-descr">${l}</p>
            <button class="pet-details-btn" data-id="${n}">
              Дізнатись більше
            </button>
          </div>
        </li>
      `}).join("");a.petsList.insertAdjacentHTML("beforeend",t)}//!===============================================================================
async function v(){w();try{const{animals:e,totalItems:t}=await z({page:d,limit:p,categoryId:x});if(y.push(...e),e.length===0){f();return}se(e),E=Math.ceil(t/p),d<E?oe():f(),d++}catch(e){console.error("API error:",e)}finally{L()}}//!===============================================================================
function w(){document.body.style.overflowX="hidden",a.loaderPetsList.classList.remove("visually-hidden")}//!===============================================================================
function L(){a.loaderPetsList.classList.add("visually-hidden")}//!===============================================================================
function oe(){a.loadMoreBtn.classList.remove("visually-hidden")}//!===============================================================================
function f(){a.loadMoreBtn.classList.add("visually-hidden")}//!===============================================================================
a.loadMoreBtn.addEventListener("click",async()=>{f(),await v(),ne()});//!===============================================================================
function ne(){const e=document.querySelector(".pet-card");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t,left:0,behavior:"smooth"})}//!===============================================================================
a.petsFilters.addEventListener("click",e=>{f();const t=e.target.closest(".pets-filters-btn");t&&(document.querySelectorAll(".pets-filters-btn").forEach(n=>n.classList.remove("pets-filters-btn-active")),t.classList.add("pets-filters-btn-active"),x=t.dataset.categoryId||"",d=1,a.petsList.innerHTML="",v())});//!=================================================================================
document.addEventListener("click",e=>{e.target.classList.contains("pet-modal-btn")&&Z()});//!======================================================================================
document.addEventListener("click",e=>{if(e.target.classList.contains("pet-details-btn")){const t=e.target.dataset.id,n=y.find(o=>o._id===t);if(!n)return;J(n)}});//!=======================================================================================
const B=window.matchMedia("(min-width: 1440px)");function A(e){const t=e.matches?9:8;p!==t&&(p=t,d=1,y=[],a.petsList.innerHTML="",v())}B.addEventListener("change",A);A(B);document.addEventListener("DOMContentLoaded",Y);document.addEventListener("DOMContentLoaded",X);document.addEventListener("DOMContentLoaded",ee);
//# sourceMappingURL=index.js.map
