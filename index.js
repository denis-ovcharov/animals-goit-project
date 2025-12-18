import{A as U,a as L,S as O,N as I,P as H,i as u,b as _}from"./assets/vendor-CyB7JiL4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const E=document.getElementById("mobile-menu"),z=document.getElementById("data-burger-close");z.addEventListener("click",()=>{E.classList.remove("is-open"),document.body.style.overflow="visible"});const V=document.getElementById("data-burger-open");V.addEventListener("click",()=>{E.classList.add("is-open"),document.body.style.overflow="hidden"});const W=document.querySelectorAll(".nav-link, .nav-btn-link");W.forEach(e=>{e.addEventListener("click",()=>{E.classList.remove("is-open"),document.body.style.overflow="visible"})});function T(){window.innerWidth>=1440&&(E.classList.remove("is-open"),document.body.style.overflow="visible")}T();window.addEventListener("resize",T);const Y=[{question:"Я мрію про пухнастика! Що мені потрібно зробити, щоб забрати хвостика додому?",answer:`
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
  `}],G=document.getElementById("faqAccordion");G.innerHTML=Y.map(e=>`
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
  `).join("");new U("#faqAccordion",{duration:300,showMultiple:!1});document.querySelectorAll(".ac-trigger").forEach(e=>{e.addEventListener("click",()=>{const t=e.parentElement.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"})});const q="https://paw-hut.b.goit.study",K=`${q}/api/animals`,Q=`${q}/api/categories`,X=`${q}/api/orders`,J=`${q}/api/feedbacks`;async function Z({page:e=1,limit:t=10,categoryId:s}){const n={page:e,limit:t};return s&&(n.categoryId=s),(await L.get(K,{params:n})).data}async function ee(){return(await L.get(Q)).data}async function te(e){return(await L.post(X,e)).data}async function se(e=10,t=1){return(await L.get(J,{params:{page:t,limit:e}})).data}async function oe(){const e=document.querySelector("#feedback");if(!e)return;const t=e.querySelector(".swiper.feedback-swiper"),s=e.querySelector(".swiper-wrapper"),n=e.querySelector(".feedback-swiper-pagination"),o=e.querySelector(".feedback-swiper-button-next"),i=e.querySelector(".feedback-swiper-button-prev");e.querySelector(".loader");try{const r=Math.floor(Math.random()*9)+1,l=(await se(5,r)).feedbacks;if(!Array.isArray(l)||l.length<3)throw new Error("Not enough feedbacks (min 3 required)");s.innerHTML=l.map(ne).join(""),new O(t,{modules:[I,H],speed:1e3,slidesPerView:1,spaceBetween:16,loop:!1,resistanceRatio:.85,touchRatio:1.2,breakpoints:{768:{slidesPerView:2,spaceBetween:32},1440:{slidesPerView:2,spaceBetween:32}},pagination:{el:n,clickable:!0,dynamicBullets:!0},navigation:{nextEl:o,prevEl:i,disabledClass:"is-disabled"}})}catch(r){console.error(r),u.error({title:"Error",message:r.message,position:"topRight"})}}function ne(e){const t=(e==null?void 0:e.author)??"User",s=(e==null?void 0:e.description)??"",n=ie((e==null?void 0:e.rate)??0),o=Math.floor(n),i=n%1>=.5,r=`rating value-${o}${i?" half":""} star-icon`,c=Array.from({length:5}).map(()=>`
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
                <div class="${r}" aria-label="Rating: ${n} out of 5">
                    <div class="star-container">
                        ${c}
                    </div>
                </div>
                <p class="feedback-comment">${s}</p>
                <p class="feedback-author">${t}</p>
            </div>
        </div>
    `}function ie(e){const t=Number(e);return Number.isFinite(t)?Math.max(0,Math.min(5,t)):0}const M=document.querySelector(".scroll-top"),re=300;window.addEventListener("scroll",()=>{window.scrollY>re?M.classList.add("is-on"):M.classList.remove("is-on")});M.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});function ae(){const e=document.querySelector("#about-us");if(!e)return;const t=e.querySelector(".swiper.mySwiper"),s=e.querySelector(".swiper-button-next"),n=e.querySelector(".swiper-button-prev"),o=e.querySelector(".swiper-pagination");new O(t,{modules:[I,H],cssMode:!1,navigation:{nextEl:s,prevEl:n},pagination:{el:o,clickable:!0,dynamicBullets:!1},mousewheel:!0,keyboard:!0,speed:1e3,parallax:!0})}let m=null;function le(e){m=_.create(`
      <div class="pet-modal">
        <button class="modal-close-btn">
          <svg class="icon-close-btn" width="18" height="18">
            <use href="/animals-goit-project/img/sprite.svg#icon-close-btn"></use>
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
        <button class="pet-modal-btn"  data-animal-id="${e._id}">Взяти додому</button>
      </div>
    `,{onShow:t=>{document.body.style.overflow="hidden",t.element().querySelector(".modal-close-btn").addEventListener("click",()=>t.close())},onClose:t=>{document.body.style.overflow="visible",y()}}),b(),m.show()}function ce(e){let t=e.replace(/\D/g,"");return t.length===10&&t.startsWith("0")&&(t="38"+t),t}function de(e){const t=_.create(`
    <div class="modal-order">
      <button class="modal-order-close-btn" type="button" aria-label="Close">
        <svg class="modal-order-icon" width="8" height="8">
          <use href="./img/sprite.svg#icon-close-btn"></use>
        </svg>
      </button>

      <h2 class="modal-order-title">Залишіть заявку на знайомство</h2>

      <form class="modal-order-form" data-modal-order-form novalidate>
        <div class="form-field-wrapper">
          <label class="form-field-label" for="user-name">Ім’я*</label>
          <input
            class="form-field-text-input"
            id="user-name"
            type="text"
            placeholder="Андрій"
            required
          />
        </div>

        <div class="form-field-wrapper">
          <label class="form-field-label" for="user-phone">Телефон*</label>
          <input
            class="form-field-text-input"
            id="user-phone"
            type="tel"
            inputmode="numeric"
            autocomplete="tel"
            placeholder="+38 (095) 555 99 22"
            required
          />
        </div>

        <div class="form-field-wrapper">
          <label class="form-field-label" for="user-comment">Коментар</label>
          <textarea
            class="form-field-textarea"
            id="user-comment"
            placeholder="Напишіть ваш коментар"
          ></textarea>
        </div>

        <button class="form-submit-btn" type="submit">Надіслати</button>
      </form>
    </div>
    `,{onShow:s=>{document.body.style.overflow="hidden";const n=s.element(),o=n.querySelector(".modal-order-close-btn"),i=n.querySelector("[data-modal-order-form]"),r=n.querySelector("#user-name"),c=n.querySelector("#user-phone"),l=n.querySelector("#user-comment"),g=n.querySelector(".form-submit-btn");o.addEventListener("click",()=>s.close());const h=p=>{p.key==="Escape"&&s.close()};document.addEventListener("keydown",h),s._onEscClose=h,i.addEventListener("submit",async p=>{var C,R,A;p.preventDefault();const k=r.value.trim(),B=ce(c.value),$=l.value.trim();if(!e){u.error({message:"Не обрано тварину",position:"topRight"});return}if(!k||k.length>32){u.error({message:"Імʼя обовʼязкове (до 32 символів)",position:"topRight"}),r.focus();return}if(!/^[0-9]{12}$/.test(B)){u.error({message:"Телефон має містити 12 цифр (приклад: 380955559922)",position:"topRight"}),c.focus();return}if($&&$.length>500){u.error({message:"Коментар не може перевищувати 500 символів",position:"topRight"}),l.focus();return}const D={name:k,phone:B,animalId:e,comment:$||void 0};try{g.disabled=!0,b(),await te(D),u.success({title:"Успішно",message:"Заявку відправлено",position:"topRight"}),s.close()}catch(d){console.error(((C=d==null?void 0:d.response)==null?void 0:C.data)||d.message),u.error({title:"Помилка",message:((A=(R=d==null?void 0:d.response)==null?void 0:R.data)==null?void 0:A.message)||"Не вдалося відправити заявку",position:"topRight"})}finally{y(),g.disabled=!1}})},onClose:s=>{document.body.style.overflow="visible",y(),s!=null&&s._onEscClose&&document.removeEventListener("keydown",s._onEscClose)}});m==null||m.close(),b(),t.show()}//!=============================================================
let f=1,P=1,v=8,F="",x=[];//!=============================================================
async function ue(){const e=await ee(),t=["Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"],s=[...e].sort((n,o)=>{const i=t.indexOf(n.name),r=t.indexOf(o.name);return i===-1?1:r===-1?-1:i-r});pe(s),await S()}//!=============================================================
const a={petsFilters:document.querySelector(".pets-filters"),petsList:document.querySelector(".pets-list"),loadMoreBtn:document.querySelector(".load-more"),loaderPetsList:document.querySelector(".loader")};//!=============================================================
function pe(e){const s=[{name:"Всі",_id:""},...e].map(o=>`<li class="pets-filters-item"><button class="pets-filters-btn" data-category-id="${o._id}">${o.name}</button></li>`).join("");a.petsFilters.innerHTML=s;const n=document.querySelector(".pets-filters-btn");n&&n.classList.add("pets-filters-btn-active")}//!=============================================================
function me(e){const t=e.map(({_id:s,name:n,image:o,species:i,age:r,gender:c,shortDescription:l,categories:g})=>{const h=g.map(p=>`<p class="pet-category">${p.name}</p>`).join("");return`
        <li class="pet-card">
          <img class="pet-img" src="${o}" alt="${n}" />
          <div class="pet-info">
            <p class="pet-type">${i}</p>
            <h3 class="pet-name">${n}</h3>
            <div class="pet-categories">${h}</div>
            <ul class="pet-meta">
              <li>${r}</li>
              <li>${c}</li>
            </ul>
            <p class="pet-descr">${l}</p>
            <button class="pet-details-btn" data-id="${s}">
              Дізнатись більше
            </button>
          </div>
        </li>
      `}).join("");a.petsList.insertAdjacentHTML("beforeend",t)}//!===============================================================================
async function S(){b();try{const{animals:e,totalItems:t}=await Z({page:f,limit:v,categoryId:F});if(x.push(...e),e.length===0){w();return}me(e),P=Math.ceil(t/v),f<P?fe():w(),f++}catch(e){console.error("API error:",e)}finally{y()}}//!===============================================================================
function b(){document.body.style.overflowX="hidden",a.loaderPetsList.classList.remove("visually-hidden")}//!===============================================================================
function y(){a.loaderPetsList.classList.add("visually-hidden")}//!===============================================================================
function fe(){a.loadMoreBtn.classList.remove("visually-hidden")}//!===============================================================================
function w(){a.loadMoreBtn.classList.add("visually-hidden")}//!===============================================================================
a.loadMoreBtn.addEventListener("click",async()=>{w(),await S(),ge()});//!===============================================================================
function ge(){const e=document.querySelector(".pet-card");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t,left:0,behavior:"smooth"})}//!===============================================================================
a.petsFilters.addEventListener("click",e=>{w();const t=e.target.closest(".pets-filters-btn");t&&(document.querySelectorAll(".pets-filters-btn").forEach(s=>s.classList.remove("pets-filters-btn-active")),t.classList.add("pets-filters-btn-active"),F=t.dataset.categoryId||"",f=1,a.petsList.innerHTML="",S())});//!=================================================================================
document.addEventListener("click",e=>{const t=e.target.closest(".pet-modal-btn");t&&de(t.dataset.animalId)});//!======================================================================================
document.addEventListener("click",e=>{if(e.target.classList.contains("pet-details-btn")){const t=e.target.dataset.id,s=x.find(n=>n._id===t);if(!s)return;le(s)}});//!=======================================================================================
const j=window.matchMedia("(min-width: 1440px)");function N(e){const t=e.matches?9:8;v!==t&&(v=t,f=1,x=[],a.petsList.innerHTML="",S())}j.addEventListener("change",N);N(j);document.addEventListener("DOMContentLoaded",oe);document.addEventListener("DOMContentLoaded",ae);document.addEventListener("DOMContentLoaded",ue);
//# sourceMappingURL=index.js.map
