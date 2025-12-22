import{A as K,a as q,S as F,N as W,P as j,i as p,b as N}from"./assets/vendor-CyB7JiL4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const H=document.getElementById("mobile-menu"),X=document.getElementById("data-burger-close"),J=document.getElementById("data-burger-open"),U=document.querySelector(".mobile-menu");function D(e){e.key==="Escape"&&H.classList.contains("is-open")&&R()}function V(e){e.target.closest("a")&&R()}function R(){H.classList.remove("is-open"),document.body.style.overflow="visible",document.removeEventListener("keydown",D),U.removeEventListener("click",V)}function Q(){H.classList.add("is-open"),document.body.style.overflow="hidden",document.addEventListener("keydown",D),U.addEventListener("click",V)}X.addEventListener("click",R);J.addEventListener("click",Q);const Z=[{question:"Я мрію про пухнастика! Що мені потрібно зробити, щоб забрати хвостика додому?",answer:`
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
  `}],ee=document.getElementById("faqAccordion");ee.innerHTML=Z.map(e=>`
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
  `).join("");new K("#faqAccordion",{duration:300,showMultiple:!1});document.querySelectorAll(".ac-trigger").forEach(e=>{e.addEventListener("click",()=>{const t=e.parentElement.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"})});const S="https://paw-hut.b.goit.study",te=`${S}/api/animals`,se=`${S}/api/categories`,oe=`${S}/api/orders`,ne=`${S}/api/feedbacks`;async function ie({page:e=1,limit:t=10,categoryId:s}){const o={page:e,limit:t};return s&&(o.categoryId=s),(await q.get(te,{params:o})).data}async function re(){return(await q.get(se)).data}async function ae(e){return(await q.post(oe,e)).data}async function le(e=10,t=1){return(await q.get(ne,{params:{page:t,limit:e}})).data}async function ce(){const e=document.querySelector("#feedback");if(!e)return;const t=e.querySelector(".swiper.feedback-swiper"),s=e.querySelector(".swiper-wrapper"),o=e.querySelector(".feedback-swiper-pagination"),n=e.querySelector(".feedback-swiper-button-next"),i=e.querySelector(".feedback-swiper-button-prev");e.querySelector(".loader");try{const l=Math.floor(Math.random()*9)+1,u=(await le(5,l)).feedbacks;if(!Array.isArray(u)||u.length<3)throw new Error("Not enough feedbacks (min 3 required)");s.innerHTML=u.map(de).join(""),new F(t,{modules:[W,j],speed:1e3,slidesPerView:1,spaceBetween:16,loop:!1,resistanceRatio:.85,touchRatio:1.2,breakpoints:{768:{slidesPerView:2,spaceBetween:32},1440:{slidesPerView:2,spaceBetween:32}},pagination:{el:o,clickable:!0,dynamicBullets:!0},navigation:{nextEl:n,prevEl:i,disabledClass:"is-disabled"}})}catch(l){console.error(l),p.error({title:"Error",message:l.message,position:"topRight"})}}function de(e){const t=(e==null?void 0:e.author)??"User",s=(e==null?void 0:e.description)??"",o=ue((e==null?void 0:e.rate)??0),n=Math.floor(o),i=o%1>=.5,l=`rating value-${n}${i?" half":""} star-icon`,f=Array.from({length:5}).map(()=>`
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
                <div class="${l}">
                    <div class="star-container">
                        ${f}
                    </div>
                </div>
                <p class="feedback-comment">${s}</p>
                <p class="feedback-author">${t}</p>
            </div>
        </div>
    `}function ue(e){const t=Number(e);return Number.isFinite(t)?Math.max(0,Math.min(5,t)):0}const x=document.querySelector(".scroll-top"),pe=300;window.addEventListener("scroll",()=>{window.scrollY>pe?x.classList.add("is-on"):x.classList.remove("is-on")});x.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});function fe(){const e=document.querySelector("#about-us");if(!e)return;const t=e.querySelector(".swiper.mySwiper"),s=e.querySelector(".swiper-button-next"),o=e.querySelector(".swiper-button-prev"),n=e.querySelector(".swiper-pagination");new F(t,{modules:[W,j],cssMode:!1,navigation:{nextEl:s,prevEl:o},pagination:{el:n,clickable:!0,dynamicBullets:!1},mousewheel:!0,keyboard:!0,speed:1e3,parallax:!0})}const E="/animals-goit-project/assets/sprite-BFbGGHrj.svg";let h=null;function me(e){h=N.create(`
   <div class="pet-modal">
    <button class="pet-modal-close" type="button">
        <svg class="icon-close-btn" width="18" height="18">
          <use href="${E}#icon-close-btn"></use>
        </svg>
      </button>
    <img
      class="pet-modal-image"
      src="${e.image}"
      alt="${e.name}"
    />

    <div class="information">
      <div class="pet-type-modal">${e.species}</div>
      <h3 class="pet-name-modal">${e.name}</h3>
      <div class="pet-meta-modal">
       <span>${e.age}</span>
       <span>${e.gender}</span>
     </div>

      <div class="description">
        <h3 class="pet-section">Опис:</h3>
        <p class="pet-description">${e.description}</p>
      </div>

      <div class="health">
        <h3 class="pet-section">Здоровʼя:</h3>
        <p class="pet-description">${e.healthStatus}</p>
      </div>

      <div class="behavior">
        <h3 class="pet-section">Поведінка:</h3>
        <p class="pet-description">${e.behavior}</p>
      </div>

      <button class="pet-modal-btn" data-animal-id="${e._id}">Взяти додому</button>
    </div>
  `,{onShow:t=>{const s=document.querySelector(".basicLightbox .pet-modal");s&&(s.style.overflow="auto"),document.body.style.overflow="hidden",t.element().querySelector(".pet-modal-close").addEventListener("click",()=>t.close()),t.element().querySelector(".pet-modal-btn").addEventListener("click",()=>t.close()),document.addEventListener("keydown",I)},onClose:()=>{document.body.style.overflow="visible",document.removeEventListener("keydown",I)}}),h.show()}function I(e){e.key==="Escape"&&h.close()}function ge(e){let t=e.replace(/\D/g,"");return t.length===10&&t.startsWith("0")&&(t="38"+t),t}function he(e){const t=N.create(`
    <div class="modal-order">
      <button class="modal-order-close-btn" type="button" aria-label="Close">
        <svg class="modal-order-icon" width="8" height="8">
          <use href="${E}#icon-close-btn"></use>
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
    `,{onShow:s=>{document.body.style.overflow="hidden";const o=s.element(),n=o.querySelector(".modal-order-close-btn"),i=o.querySelector("[data-modal-order-form]"),l=o.querySelector("#user-name"),f=o.querySelector("#user-phone"),u=o.querySelector("#user-comment"),w=o.querySelector(".form-submit-btn");n.addEventListener("click",()=>s.close());const L=b=>{b.key==="Escape"&&s.close()};document.addEventListener("keydown",L),s._onEscClose=L,i.addEventListener("submit",async b=>{var A,P,O;b.preventDefault();const v=l.value.trim(),T=ge(f.value),M=u.value.trim();if(!e){p.error({message:"Не обрано тварину",position:"topRight"});return}if(!v||v.length>32){p.error({message:"Імʼя обовʼязкове (до 32 символів)",position:"topRight"}),l.focus();return}if(!/^[0-9]{12}$/.test(T)){p.error({message:"Телефон має містити 12 цифр (приклад: 380955559922)",position:"topRight"}),f.focus();return}if(M&&M.length>500){p.error({message:"Коментар не може перевищувати 500 символів",position:"topRight"}),u.focus();return}const Y={name:v,phone:T,animalId:e,comment:M||void 0};try{w.disabled=!0,B(),await ae(Y),p.success({title:"Успішно",message:"Заявку відправлено",position:"topRight"}),s.close()}catch(m){console.error(((A=m==null?void 0:m.response)==null?void 0:A.data)||m.message),p.error({title:"Помилка",message:((O=(P=m==null?void 0:m.response)==null?void 0:P.data)==null?void 0:O.message)||"Не вдалося відправити заявку",position:"topRight"})}finally{C(),w.disabled=!1}})},onClose:s=>{document.body.style.overflow="visible",C(),s!=null&&s._onEscClose&&document.removeEventListener("keydown",s._onEscClose)}});h==null||h.close(),B(),t.show()}//!=============================================================
let r=1,c=1,g=8,z="",y=[];//!=============================================================
async function be(){const e=await re(),t=["Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"],s=[...e].sort((o,n)=>{const i=t.indexOf(o.name),l=t.indexOf(n.name);return i===-1?1:l===-1?-1:i-l});ve(s),window.innerWidth>=1440?g=9:g=8,await d()}//!=============================================================
const a={petsFilters:document.querySelector(".pets-filters"),petsList:document.querySelector(".pets-list"),loadMoreBtn:document.querySelector(".load-more"),loaderPetsList:document.querySelector(".loader"),pagination:document.querySelector(".pagination")};//!=============================================================
function ve(e){const s=[{name:"Всі",_id:""},...e].map(n=>`<li class="pets-filters-item"><button class="pets-filters-btn" data-category-id="${n._id}">${n.name}</button></li>`).join("");a.petsFilters.innerHTML=s;const o=document.querySelector(".pets-filters-btn");o&&o.classList.add("pets-filters-btn-active")}//!=============================================================
function ye(e,{append:t=!0}={}){const s=e.map(({_id:o,name:n,image:i,species:l,age:f,gender:u,shortDescription:w,categories:L})=>{const b=L.map(v=>`<p class="pet-category">${v.name}</p>`).join("");return`
        <li class="pet-card">
          <img class="pet-img" src="${i}" alt="${n}" />
          <div class="pet-info">
            <p class="pet-type">${l}</p>
            <h3 class="pet-name">${n}</h3>
            <div class="pet-categories">${b}</div>
            <ul class="pet-meta">
              <li>${f}</li>
              <li>${u}</li>
            </ul>
            <p class="pet-descr">${w}</p>
            <button class="pet-details-btn" data-id="${o}">Дізнатись більше</button>
          </div>
        </li>
      `}).join("");t||(a.petsList.innerHTML=""),a.petsList.insertAdjacentHTML("beforeend",s),t?y.push(...e):y=e}//!===============================================================================
async function d({reset:e=!1}={}){B();try{const{animals:t,totalItems:s}=await ie({page:r,limit:g,categoryId:z}),o=!e&&window.innerWidth<768;ye(t,{append:o}),c=Math.ceil(s/g),window.innerWidth<768?(r<c?G():(p.error({message:"Список тварин закінчився =(",position:"topRight"}),k()),e||r++,a.pagination.innerHTML=""):(k(),we())}catch(t){console.error("API error:",t)}finally{C()}}//!===============================================================================
function we(){if(c<=1||window.innerWidth<768){a.pagination.innerHTML="";return}a.pagination.innerHTML="";const e=document.createElement("button");e.classList.add("pagination-arrow"),e.innerHTML=`
    <svg class="pagination-arrow-img" width="16" height="16">
      <use href="${E}#icon-left"></use>
    </svg>
  `,e.disabled=r===1,e.disabled&&e.classList.add("btn-is-disabled"),e.addEventListener("click",()=>{r--,d({reset:!0}),$()}),a.pagination.appendChild(e);const t=[];if(c<=7)for(let o=1;o<=c;o++)t.push(o);else r<=3?t.push(1,2,3,4,"...",c):r>=c-2?t.push(1,"...",c-3,c-2,c-1,c):t.push(1,"...",r-1,r,r+1,"...",c);t.forEach(o=>{const n=document.createElement("button");n.classList.add("pagination-btn"),n.textContent=o,o===r&&n.classList.add("pagination-btn-active"),o!=="..."?n.addEventListener("click",()=>{r!==o&&(r=o,d({reset:!0}),$())}):(n.disabled=!0,n.classList.add("pagination-dots")),a.pagination.appendChild(n)});const s=document.createElement("button");s.classList.add("pagination-arrow"),s.innerHTML=`
    <svg class="pagination-arrow-img" width="16" height="16">
      <use href="${E}#icon-right"></use>
    </svg>
  `,s.disabled=r===c,s.disabled&&s.classList.add("btn-is-disabled"),s.addEventListener("click",()=>{r++,d({reset:!0}),$()}),a.pagination.appendChild(s)}//!===============================================================================
function $(){document.querySelector("#pets-list").scrollIntoView({behavior:"smooth",block:"start"})}//!===============================================================================
function Le(){const e=document.querySelector(".pet-card");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t,left:0,behavior:"smooth"})}//!===============================================================================
function B(){document.body.style.overflowX="hidden",a.loaderPetsList.classList.remove("visually-hidden")}//!===============================================================================
function C(){a.loaderPetsList.classList.add("visually-hidden")}//!===============================================================================
function G(){a.loadMoreBtn.classList.remove("visually-hidden")}//!===============================================================================
function k(){a.loadMoreBtn.classList.add("visually-hidden")}//!===============================================================================
a.loadMoreBtn.addEventListener("click",async()=>{k(),await d(),Le()});//!===============================================================================
a.petsFilters.addEventListener("click",e=>{const t=e.target.closest(".pets-filters-btn");t&&(document.querySelectorAll(".pets-filters-btn").forEach(s=>s.classList.remove("pets-filters-btn-active")),t.classList.add("pets-filters-btn-active"),z=t.dataset.categoryId||"",r=1,a.petsList.innerHTML="",d({reset:!0}))});//!=================================================================================
document.addEventListener("click",e=>{const t=e.target.closest(".pet-modal-btn");t&&he(t.dataset.animalId)});//!======================================================================================
document.addEventListener("click",e=>{if(e.target.classList.contains("pet-details-btn")){const t=e.target.dataset.id,s=y.find(o=>o._id===t);if(!s)return;me(s)}});//!=======================================================================================
let _=window.innerWidth<768?"mobile":window.innerWidth<1440?"tablet":"desktop";window.addEventListener("resize",()=>{const e=window.innerWidth<768?"mobile":window.innerWidth<1440?"tablet":"desktop";if(e!==_){if(_=e,e==="mobile"){g=8,a.pagination.innerHTML="",r=1,d({reset:!0}),r++,r<=c?G():k();return}if(e==="tablet"){g=8,r=1,y=[],a.petsList.innerHTML="",d({reset:!0});return}e==="desktop"&&(g=9,r=1,y=[],a.petsList.innerHTML="",d({reset:!0}))}});document.addEventListener("DOMContentLoaded",ce);document.addEventListener("DOMContentLoaded",fe);document.addEventListener("DOMContentLoaded",be);
//# sourceMappingURL=index.js.map
