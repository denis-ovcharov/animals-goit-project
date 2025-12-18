import{A as V,a as y,S as H,N as _,P as T,i as u,b as F}from"./assets/vendor-CyB7JiL4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const w=document.getElementById("mobile-menu"),W=document.getElementById("data-burger-close");W.addEventListener("click",()=>{w.classList.remove("is-open"),document.body.style.overflow="visible"});const Y=document.getElementById("data-burger-open");Y.addEventListener("click",()=>{w.classList.add("is-open"),document.body.style.overflow="hidden"});const K=document.querySelectorAll(".nav-link, .nav-btn-link");K.forEach(e=>{e.addEventListener("click",()=>{w.classList.remove("is-open"),document.body.style.overflow="visible"})});function j(){window.innerWidth>=1440&&(w.classList.remove("is-open"),document.body.style.overflow="visible")}j();window.addEventListener("resize",j);const Q=[{question:"Я мрію про пухнастика! Що мені потрібно зробити, щоб забрати хвостика додому?",answer:`
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
  `}],X=document.getElementById("faqAccordion");X.innerHTML=Q.map(e=>`
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
  `).join("");new V("#faqAccordion",{duration:300,showMultiple:!1});document.querySelectorAll(".ac-trigger").forEach(e=>{e.addEventListener("click",()=>{const t=e.parentElement.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"})});const L="https://paw-hut.b.goit.study",J=`${L}/api/animals`,Z=`${L}/api/categories`,ee=`${L}/api/orders`,te=`${L}/api/feedbacks`;async function se({page:e=1,limit:t=10,categoryId:s}){const n={page:e,limit:t};return s&&(n.categoryId=s),(await y.get(J,{params:n})).data}async function oe(){return(await y.get(Z)).data}async function ne(e){return(await y.post(ee,e)).data}async function re(e=10,t=1){return(await y.get(te,{params:{page:t,limit:e}})).data}async function ie(){const e=document.querySelector("#feedback");if(!e)return;const t=e.querySelector(".swiper.feedback-swiper"),s=e.querySelector(".swiper-wrapper"),n=e.querySelector(".feedback-swiper-pagination"),o=e.querySelector(".feedback-swiper-button-next"),r=e.querySelector(".feedback-swiper-button-prev");e.querySelector(".loader");try{const i=Math.floor(Math.random()*9)+1,l=(await re(5,i)).feedbacks;if(!Array.isArray(l)||l.length<3)throw new Error("Not enough feedbacks (min 3 required)");s.innerHTML=l.map(ae).join(""),new H(t,{modules:[_,T],speed:1e3,slidesPerView:1,spaceBetween:16,loop:!1,resistanceRatio:.85,touchRatio:1.2,breakpoints:{768:{slidesPerView:2,spaceBetween:32},1440:{slidesPerView:2,spaceBetween:32}},pagination:{el:n,clickable:!0,dynamicBullets:!0},navigation:{nextEl:o,prevEl:r,disabledClass:"is-disabled"}})}catch(i){console.error(i),u.error({title:"Error",message:i.message,position:"topRight"})}}function ae(e){const t=(e==null?void 0:e.author)??"User",s=(e==null?void 0:e.description)??"",n=le((e==null?void 0:e.rate)??0),o=Math.floor(n),r=n%1>=.5,i=`rating value-${o}${r?" half":""} star-icon`,c=Array.from({length:5}).map(()=>`
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
                <div class="${i}" aria-label="Rating: ${n} out of 5">
                    <div class="star-container">
                        ${c}
                    </div>
                </div>
                <p class="feedback-comment">${s}</p>
                <p class="feedback-author">${t}</p>
            </div>
        </div>
    `}function le(e){const t=Number(e);return Number.isFinite(t)?Math.max(0,Math.min(5,t)):0}const k=document.querySelector(".scroll-top"),ce=300;window.addEventListener("scroll",()=>{window.scrollY>ce?k.classList.add("is-on"):k.classList.remove("is-on")});k.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});function de(){const e=document.querySelector("#about-us");if(!e)return;const t=e.querySelector(".swiper.mySwiper"),s=e.querySelector(".swiper-button-next"),n=e.querySelector(".swiper-button-prev"),o=e.querySelector(".swiper-pagination");new H(t,{modules:[_,T],cssMode:!1,navigation:{nextEl:s,prevEl:n},pagination:{el:o,clickable:!0,dynamicBullets:!1},mousewheel:!0,keyboard:!0,speed:1e3,parallax:!0})}const N="/animals-goit-project/assets/sprite-BFbGGHrj.svg";let p=null;function ue(e){p=F.create(`
   <div class="pet-modal">
    <button class="pet-modal-close" type="button">
        <svg class="icon-close-btn" width="18" height="18">
          <use href="${N}#icon-close-btn"></use>
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
  `,{onShow:t=>{const s=document.querySelector(".basicLightbox .pet-modal");s&&(s.style.overflow="auto"),document.body.style.overflow="hidden",t.element().querySelector(".pet-modal-close").addEventListener("click",()=>t.close()),t.element().querySelector(".pet-modal-btn").addEventListener("click",()=>t.close()),document.addEventListener("keydown",P)},onClose:()=>{document.body.style.overflow="visible",document.removeEventListener("keydown",P)}}),p.show()}function P(e){e.key==="Escape"&&p.close()}function pe(e){let t=e.replace(/\D/g,"");return t.length===10&&t.startsWith("0")&&(t="38"+t),t}function me(e){const t=F.create(`
    <div class="modal-order">
      <button class="modal-order-close-btn" type="button" aria-label="Close">
        <svg class="modal-order-icon" width="8" height="8">
          <use href="${N}#icon-close-btn"></use>
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
    `,{onShow:s=>{document.body.style.overflow="hidden";const n=s.element(),o=n.querySelector(".modal-order-close-btn"),r=n.querySelector("[data-modal-order-form]"),i=n.querySelector("#user-name"),c=n.querySelector("#user-phone"),l=n.querySelector("#user-comment"),h=n.querySelector(".form-submit-btn");o.addEventListener("click",()=>s.close());const g=m=>{m.key==="Escape"&&s.close()};document.addEventListener("keydown",g),s._onEscClose=g,r.addEventListener("submit",async m=>{var C,R,A;m.preventDefault();const q=i.value.trim(),B=pe(c.value),S=l.value.trim();if(!e){u.error({message:"Не обрано тварину",position:"topRight"});return}if(!q||q.length>32){u.error({message:"Імʼя обовʼязкове (до 32 символів)",position:"topRight"}),i.focus();return}if(!/^[0-9]{12}$/.test(B)){u.error({message:"Телефон має містити 12 цифр (приклад: 380955559922)",position:"topRight"}),c.focus();return}if(S&&S.length>500){u.error({message:"Коментар не може перевищувати 500 символів",position:"topRight"}),l.focus();return}const G={name:q,phone:B,animalId:e,comment:S||void 0};try{h.disabled=!0,$(),await ne(G),u.success({title:"Успішно",message:"Заявку відправлено",position:"topRight"}),s.close()}catch(d){console.error(((C=d==null?void 0:d.response)==null?void 0:C.data)||d.message),u.error({title:"Помилка",message:((A=(R=d==null?void 0:d.response)==null?void 0:R.data)==null?void 0:A.message)||"Не вдалося відправити заявку",position:"topRight"})}finally{M(),h.disabled=!1}})},onClose:s=>{document.body.style.overflow="visible",M(),s!=null&&s._onEscClose&&document.removeEventListener("keydown",s._onEscClose)}});p==null||p.close(),$(),t.show()}//!=============================================================
let f=1,O=1,v=8,U="",x=[];//!=============================================================
async function fe(){const e=await oe(),t=["Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"],s=[...e].sort((n,o)=>{const r=t.indexOf(n.name),i=t.indexOf(o.name);return r===-1?1:i===-1?-1:r-i});ve(s),await E()}//!=============================================================
const a={petsFilters:document.querySelector(".pets-filters"),petsList:document.querySelector(".pets-list"),loadMoreBtn:document.querySelector(".load-more"),loaderPetsList:document.querySelector(".loader")};//!=============================================================
function ve(e){const s=[{name:"Всі",_id:""},...e].map(o=>`<li class="pets-filters-item"><button class="pets-filters-btn" data-category-id="${o._id}">${o.name}</button></li>`).join("");a.petsFilters.innerHTML=s;const n=document.querySelector(".pets-filters-btn");n&&n.classList.add("pets-filters-btn-active")}//!=============================================================
function he(e){const t=e.map(({_id:s,name:n,image:o,species:r,age:i,gender:c,shortDescription:l,categories:h})=>{const g=h.map(m=>`<p class="pet-category">${m.name}</p>`).join("");return`
        <li class="pet-card">
          <img class="pet-img" src="${o}" alt="${n}" />
          <div class="pet-info">
            <p class="pet-type">${r}</p>
            <h3 class="pet-name">${n}</h3>
            <div class="pet-categories">${g}</div>
            <ul class="pet-meta">
              <li>${i}</li>
              <li>${c}</li>
            </ul>
            <p class="pet-descr">${l}</p>
            <button class="pet-details-btn" data-id="${s}">
              Дізнатись більше
            </button>
          </div>
        </li>
      `}).join("");a.petsList.insertAdjacentHTML("beforeend",t)}//!===============================================================================
async function E(){$();try{const{animals:e,totalItems:t}=await se({page:f,limit:v,categoryId:U});if(x.push(...e),e.length===0){b();return}he(e),O=Math.ceil(t/v),f<O?ge():b(),f++}catch(e){console.error("API error:",e)}finally{M()}}//!===============================================================================
function $(){document.body.style.overflowX="hidden",a.loaderPetsList.classList.remove("visually-hidden")}//!===============================================================================
function M(){a.loaderPetsList.classList.add("visually-hidden")}//!===============================================================================
function ge(){a.loadMoreBtn.classList.remove("visually-hidden")}//!===============================================================================
function b(){a.loadMoreBtn.classList.add("visually-hidden")}//!===============================================================================
a.loadMoreBtn.addEventListener("click",async()=>{b(),await E(),be()});//!===============================================================================
function be(){const e=document.querySelector(".pet-card");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t,left:0,behavior:"smooth"})}//!===============================================================================
a.petsFilters.addEventListener("click",e=>{b();const t=e.target.closest(".pets-filters-btn");t&&(document.querySelectorAll(".pets-filters-btn").forEach(s=>s.classList.remove("pets-filters-btn-active")),t.classList.add("pets-filters-btn-active"),U=t.dataset.categoryId||"",f=1,a.petsList.innerHTML="",E())});//!=================================================================================
document.addEventListener("click",e=>{const t=e.target.closest(".pet-modal-btn");t&&me(t.dataset.animalId)});//!======================================================================================
document.addEventListener("click",e=>{if(e.target.classList.contains("pet-details-btn")){const t=e.target.dataset.id,s=x.find(n=>n._id===t);if(!s)return;ue(s)}});//!=======================================================================================
const D=window.matchMedia("(min-width: 1440px)");let I=!1;function z(e){const t=e.matches?9:8;if(!I){I=!0,v=t;return}v!==t&&(v=t,f=1,x=[],a.petsList.innerHTML="",E())}D.addEventListener("change",z);z(D);document.addEventListener("DOMContentLoaded",ie);document.addEventListener("DOMContentLoaded",de);document.addEventListener("DOMContentLoaded",fe);
//# sourceMappingURL=index.js.map
