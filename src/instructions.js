

class Instructions {

    constructor(modal, openBtn, closeBtn) {
        this.openBtn = openBtn;
        this.closeBtn = closeBtn;
        this.modal = modal;
        this.openBtn.addEventListener("click", this.openModal.bind(this));
        this.closeBtn.addEventListener("click", this.closeModal.bind(this));
    }

    openModal(e) {
        e.preventDefault();
        this.modal.style.display = "flex";
        this.openBtn.style.display = "none";
    }

    closeModal(e) {
        e.preventDefault();
        this.modal.style.display = "none";
        this.openBtn.style.display = "flex";
    }
};

export default Instructions;
