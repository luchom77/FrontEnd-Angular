import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './app-contact.component.html',
  styleUrls: ['./app-contact.component.css'],
})
export class AppContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.handleFormSubmit();
  }

  handleFormSubmit(): void {
    ((d: Document) => {
      const $form = d.querySelector<HTMLFormElement>('.contact-form'),
        $loader = d.querySelector<HTMLDivElement>('.contact-form-loader'),
        $response = d.querySelector<HTMLDivElement>('.contact.form-response');

      if (!$form) {
        console.error('No se pudo encontrar el formulario');
        return;
      }
      if (!$response) {
        console.error('No se pudo encontrar el elemento de respuesta');
        return;
      }

      $form.addEventListener('submit', (e) => {
        e.preventDefault();
        $loader?.classList.remove('none'); // Agrega el operador de coalescencia nula para verificar si $loader es nulo
        fetch('http://formsubmit.co/ajax/luchomooreventi@yahoo.com', {
          method: 'POST',
          body: new FormData(e.target),
        })
          .then((res) => (res.ok ? res.json() : Promise.reject(res)))
          .then((json) => {
            console.log(json);
            $loader?.classList.add('none'); // Agrega el operador de coalescencia nula para verificar si $loader es nulo
            location.hash = '#gracias';
            $form.reset();
          })
          .catch((err) => {
            console.log(err);
            let message =
              err.statusText || 'Ocurrio un erro al enviar, intenta nuevamente';
            $response.querySelector(
              'h3'
            )!.innerHTML = `Error ${err.status}: ${message}`;
            $loader?.classList.add('none'); // Agrega el operador de coalescencia nula para verificar si $loader es nulo
          })
          .finally(() => {
            $loader?.classList.add('none'); // Agrega el operador de coalescencia nula para verificar si $loader es nulo
            setTimeout(() => {
              location.hash = '#close';
            }, 3000);
          });
      });
    })(document);
  }
}
