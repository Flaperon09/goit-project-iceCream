(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),

    openModalBtn_tablet: document.querySelector("[data-modal-open-tablet]"),

    openModalBtnIngr1: document.querySelector("[data-modal-open-ingr1]"),
    openModalBtnIngr2: document.querySelector("[data-modal-open-ingr2]"),
    openModalBtnIngr3: document.querySelector("[data-modal-open-ingr3]"),
    closeModalBtnIngr: document.querySelector("[data-modal-close-ingr]"),
    modalIngr: document.querySelector("[data-modal-ingr]"),

    openModalBtnMore: document.querySelector("[data-modal-open-more]"),
    closeModalBtnMore: document.querySelector("[data-modal-close-more]"),
    modalMore: document.querySelector("[data-modal-more]"),

    openModalBtnLocation: document.querySelector("[data-modal-open-location]"),
    closeModalBtnLocation: document.querySelector("[data-modal-close-location]"),
    modalLocation: document.querySelector("[data-modal-location]"),

    openModalBtnFranchise: document.querySelector("[data-modal-open-franchise]"),
    closeModalBtnFranchise: document.querySelector("[data-modal-close-franchise]"),
    modalFranchise: document.querySelector("[data-modal-franchise]"),

  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  refs.openModalBtn_tablet.addEventListener("click", toggleModal);

  refs.openModalBtnIngr1.addEventListener("click", toggleModalIngr);
  refs.openModalBtnIngr2.addEventListener("click", toggleModalIngr);
  refs.openModalBtnIngr3.addEventListener("click", toggleModalIngr);
  refs.closeModalBtnIngr.addEventListener("click", toggleModalIngr);

  refs.openModalBtnMore.addEventListener("click", toggleModalMore);
  refs.closeModalBtnMore.addEventListener("click", toggleModalMore);

  refs.openModalBtnLocation.addEventListener("click", toggleModalLocation);
  refs.closeModalBtnLocation.addEventListener("click", toggleModalLocation);

  refs.openModalBtnFranchise.addEventListener("click", toggleModalFranchise);
  refs.closeModalBtnFranchise.addEventListener("click", toggleModalFranchise);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  };

  function toggleModalIngr() {
    document.body.classList.toggle("modal-open");
    refs.modalIngr.classList.toggle("is-hidden");
  }

  function toggleModalMore() {
    document.body.classList.toggle("modal-open");
    refs.modalMore.classList.toggle("is-hidden");
  }

  function toggleModalLocation() {
    document.body.classList.toggle("modal-open");
    refs.modalLocation.classList.toggle("is-hidden");
  }

  function toggleModalFranchise() {
    document.body.classList.toggle("modal-open");
    refs.modalFranchise.classList.toggle("is-hidden");
  }
})();