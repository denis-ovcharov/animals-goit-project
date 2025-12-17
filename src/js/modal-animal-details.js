function openPetModal(animal) {
  document.body.classList.add('modal-open');

  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';

  const modal = document.createElement('div');
  modal.className = 'pet-modal';

  modal.innerHTML = `
<button class="pet-modal-close" type="button">
        <svg width="14" height="14">
          <use href="../img/sprite.svg#icon-close-btn"></use>
        </svg>
      </button>
    <img
      class="pet-modal-image"
      src="${animal.image}"
      alt="${animal.name}"
      loading="lazy"
    />

    <div class="information">
      <div class="pet-type">${animal.species}</div>
      <h2 class="pet-name">${animal.name}</h2>
      <div class="pet-meta">
       <span>${animal.age}</span>
       <span>${animal.gender}</span>
     </div>

      <div class="description">
        <h3 class="pet-section">Опис:</h3>
        <p class="pet-description">${animal.description}</p>
      </div>

      <div class="health">
        <h3 class="pet-section">Здоровʼя:</h3>
        <p class="pet-description">${animal.healthStatus}</p>
      </div>

      <div class="behavior">
        <h3 class="pet-section">Поведінка:</h3>
        <p class="pet-description">${animal.behavior}</p>
      </div>

      <button class="pet-modal-btn" id="adoptBtn">Взяти додому</button>
    </div>
  `;

  backdrop.appendChild(modal);
  document.body.appendChild(backdrop);

  function closeModal() {
    document.body.classList.remove('modal-open');
    backdrop.remove();
    document.removeEventListener('keydown', onEsc);
  }

  function onEsc(e) {
    if (e.key === 'Escape') closeModal();
  }

  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) closeModal();
  });

  modal
    .querySelector('.pet-modal__close')
    .addEventListener('click', closeModal);
  modal.querySelector('#adoptBtn').addEventListener('click', closeModal);

  document.addEventListener('keydown', onEsc);
}
