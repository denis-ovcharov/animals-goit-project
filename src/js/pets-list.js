import axios from 'axios';

async function initHomePage() {
  updateLimit();
  const categories = await getCategories();
  renderCategoryList(categories);
  const { animals } = await getAnimals();
  renderAnimalsList(animals);
  loadAnimals(true);
}

document.addEventListener(`DOMContentLoaded`, initHomePage);

const URL = 'https://paw-hut.b.goit.study';

const animalsURL = `${URL}/api/animals`;
const categoriesURL = `${URL}/api/categories`;

async function getCategories() {
  const response = await axios.get(categoriesURL);
  return response.data;
}

const refs = {
  categoriesList: document.querySelector(`.pets-filters`),
  animalsList: document.querySelector(`.pets-list`),
  loadMoreBtn: document.querySelector('.load-more'),
  loader: document.querySelector('.loader'),
};

let currentCategory = '';
let page = 1;
let LIMIT = 9;

function updateLimit() {
  if (window.innerWidth >= 1440) {
    LIMIT = 9; // desktop
  } else {
    LIMIT = 8; // tablet + mobile
  }
}

window.addEventListener('resize', () => {
  const prevLimit = LIMIT;
  updateLimit();

  if (prevLimit !== LIMIT) {
    // якщо потрібно перезавантажити список
    page = 1;
    refs.animalsList.innerHTML = '';
    loadAnimals(true);
  }
});

async function loadAnimals(reset = false) {
  if (reset) {
    page = 1;
    refs.animalsList.innerHTML = '';
    refs.loadMoreBtn.classList.add(`hidden`);
  }

  showLoader();

  try {
    const data = await getAnimals({
      page,
      limit: LIMIT,
      categoryId: currentCategory,
    });

    renderAnimalsList(data.animals);

    if (data.animals.length === LIMIT) {
      refs.loadMoreBtn.classList.remove('hidden');
    } else {
      refs.loadMoreBtn.classList.add('hidden');
    }

    page++;
  } catch (error) {
    console.error(error);
  } finally {
    hideLoader();
  }
}

// Розмітка Фільтрів

function renderCategoryList(categories) {
  const allCategories = [{ _id: ``, name: `Всі` }, ...categories];

  const murkup = allCategories
    .map(
      category => `
    <li class="categories__item">
    <button class="categories__btn" type="button" data-category="${category._id}">${category.name}</button>
    </li>
    `
    )
    .join(``);
  refs.categoriesList.innerHTML = murkup;

  const firstBtn = refs.categoriesList.querySelector('.categories__btn');
  if (firstBtn) firstBtn.classList.add('active');
}

async function getAnimals({ page = 1, limit = 8, categoryId } = {}) {
  const params = { page, limit };
  if (categoryId) {
    params.categoryId = categoryId;
    // Если категория выбрана, добавь ее в запрос, если нет, то не добавляй ее вообще.
    // Потому что, нет категории "ВСЕ"
  }
  const response = await axios.get(animalsURL, { params });
  return response.data;
  // При вызове передаете в аргументах первой порции карточек page, limit, а для фильтра categoryId
}

// Розмітка галереї

export function renderAnimalsList(animals) {
  const murkup = animals
    .map(
      ({ image, name, species, categories, age, gender, description, id }) => `
              <li class="pet-card">
            <img src="${image}" alt="${name}" />
            <div class="pet-info">
              <p class="pet-type">${species}</p>
              <p class="pet-name">${name}</p>
              <ul class="categories-list">
              ${categories
                .map(
                  cat => `
                    <li class="categories-item">
                      <span class="categories-descr">${cat.name}</span>
                    </li>`
                )
                .join('')}
            </ul>

              <ul class="pet-meta">
                <li class="pet-age">${age}</li>
                <li class="pet-gender">${gender}</li>
              </ul>
              <p class="pet-description">${description}</p>
              <button class="details-btn" data-id="${id}">
                Дізнатись більше
              </button>
            </div>
          </li>`
    )
    .join(``);
  refs.animalsList.insertAdjacentHTML(`beforeend`, murkup);
}

function showLoader() {
  refs.loader.classList.remove('hidden');
}

function hideLoader() {
  refs.loader.classList.add('hidden');
}

function showLoadMoreButton() {
  refs.loadMoreBtn.classList.remove('hidden');
}

function hideLoadMoreButton() {
  refs.loadMoreBtn.classList.add('hidden');
}

// EVENTS
refs.categoriesList.addEventListener('click', e => {
  const btn = e.target.closest('.categories__btn');
  if (!btn) return;

  if (btn.classList.contains('active')) return;

  document
    .querySelectorAll('.categories__btn')
    .forEach(b => b.classList.remove('active'));

  btn.classList.add('active');

  currentCategory = btn.dataset.category || '';
  loadAnimals(true);
});

refs.loadMoreBtn.addEventListener('click', () => loadAnimals());
