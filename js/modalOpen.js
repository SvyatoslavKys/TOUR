(()=> {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };
    refs.openModalBtn.addEventListener("click", ToggleModal);
    refs.closeModalBtn.addEventListener("click", ToggleModal);

    function ToggleModal () {
        refs.modal.classList.toggle("is-hidden");
    }
    })();