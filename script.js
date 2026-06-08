(function () {
  const $ = (sel) => document.querySelector(sel);

 
  const toggleBtn = $(".nav-toggle");
  const menu = $("#nav-menu");

  if (toggleBtn && menu) {
    toggleBtn.addEventListener("click", () => {
      const isVisible = menu.getAttribute("data-visible") === "true";
      menu.setAttribute("data-visible", String(!isVisible));
      toggleBtn.setAttribute("aria-expanded", String(!isVisible));
    });

    document.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      if (!menu.contains(target) && target !== toggleBtn) {
        menu.setAttribute("data-visible", "false");
        toggleBtn.setAttribute("aria-expanded", "false");
      }
    });

    
    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        menu.setAttribute("data-visible", "false");
        toggleBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

 
  window.handleSubmit = function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const status = $("#form-status");

    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

   
    if (status) {
      status.textContent = `Thanks, ${data.name}! Your message is ready to send (connect backend later).`;
    }

    form.reset();
    return false;
  };
})();

