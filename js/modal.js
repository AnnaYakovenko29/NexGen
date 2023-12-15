  (() => {
    const refs = {
      openFirstModalBtn: document.querySelector("[data-open-first-modal]"),
      openSecondModalBtn: document.querySelector("[data-open-second-modal]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      firstModal: document.querySelector("[data-first-modal]"),
      secondModal: document.querySelector("[data-second-modal]"),
    };

    refs.openFirstModalBtn.addEventListener("click", openFirstModal);
    refs.openSecondModalBtn.addEventListener("click", openSecondModal);
    refs.closeModalBtn.addEventListener("click", closeModals);

    function openFirstModal() {
      refs.firstModal.classList.remove("is-hidden");
    }

    function openSecondModal() {
      refs.firstModal.classList.add("is-hidden");
      refs.secondModal.classList.remove("is-hidden");
    }

    function closeModals() {
      refs.firstModal.classList.add("is-hidden");
      refs.secondModal.classList.add("is-hidden");
    }
  })();