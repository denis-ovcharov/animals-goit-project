import axios from 'axios';
import Swal from 'sweetalert2';
import { createOrder } from './api';

const backdrop = document.querySelector('[data-modal-order-open]');
const closeBtn = document.querySelector('[data-modal-order-close]');
const form = document.querySelector('[data-modal-order-form]');

console.log({ backdrop, closeBtn, form });

let currentPetId = null;

export function openOrderModal(petId) {
  currentPetId = petId;
  backdrop.classList.add('is-open');
  document.body.classList.add('modal-open');

  window.addEventListener('keydown', onEscClose);
  backdrop.addEventListener('click', onBackdropClick);
}

export function closeOrderModal() {
  backdrop.classList.remove('is-open');
  document.body.classList.remove('modal-open');

  window.removeEventListener('keydown', onEscClose);
  backdrop.removeEventListener('click', onBackdropClick);

  form.reset();
}

closeBtn.addEventListener('click', closeOrderModal);

function onBackdropClick(e) {
  if (e.target === backdrop) closeOrderModal();
}

function onEscClose(e) {
  if (e.key === 'Escape') closeOrderModal();
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  const fd = new FormData(form);

  const name = String(fd.get('user-name') ?? '').trim();
  const phone = String(fd.get('user-phone') ?? '').trim();
  const comment = String(fd.get('user-comment') ?? '').trim();
  if (!name || !phone) {
    Swal.fire({
      icon: 'error',
      title: 'Помилка',
      text: 'Заповніть ім’я та телефон',
    });
    return;
  }

  if (!currentPetId) {
    Swal.fire({
      icon: 'error',
      title: 'Помилка',
      text: 'Не знайдено id тварини',
    });
    return;
  }

  const rawPhone = String(fd.get('user-phone') ?? '').trim();

  // remove +, spaces, (), dashes — keep only digits
  const normalizedPhone = rawPhone.replace(/\D/g, '');

  // API requires EXACTLY 12 digits
  if (!/^\d{12}$/.test(normalizedPhone)) {
    Swal.fire({
      icon: 'error',
      title: 'Невірний номер',
      text: 'Введіть номер у форматі +38 (0XX) XXX XX XX',
    });
    return;
  }

  const orderData = {
    name,
    phone: normalizedPhone,
    comment,
    animalId: currentPetId,
  };

  try {
    // ✅ axios POST /orders
    console.log('Submitting order with animalId:', currentPetId);
    await createOrder(orderData);

    // ✅ toast success
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Заявку надіслано!',
      showConfirmButton: false,
      timer: 2200,
      timerProgressBar: true,
    });

    form.reset();
    closeOrderModal();
  } catch (error) {
    const msg =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      'Не вдалося надіслати заявку';

    Swal.fire({
      icon: 'error',
      title: 'Помилка',
      text: msg,
    });
  }
});
