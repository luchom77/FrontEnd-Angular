/* ***** menu ***** */

/* para que se abra el menú al clickear en la hamburguesa*/

((d) => {
  const $botonmenu = d.querySelector(".carta-boton"),
    $menu = d.querySelector(".carta");

  $botonmenu.addEventListener("click", (e) => {
    $botonmenu.firstElementChild.classList.toggle("none");
    $botonmenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  /* para cerrar el menú al clickear */
  d.addEventListener("click", (e) => {
    if (!e.target.matches(".carta a")) return false;

    $botonmenu.firstElementChild.classList.remove("none");
    $botonmenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

/* **** Contact Form **** */

((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact.form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/luchomooreventi@yahoo.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        $loader.classList.add("none");
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrio un erro al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}: ${message}`;
        $loader.classList.add("none");
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);
