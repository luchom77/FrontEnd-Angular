import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css'],
})

export class AppMenuComponent implements OnInit {

  ngOnInit(): void {
    const $botonmenu = document.querySelector(".carta-boton") as HTMLElement;
    const $menu = document.querySelector(".carta") as HTMLElement;

    $botonmenu.addEventListener("click", (e) => {
      $botonmenu.firstElementChild!.classList.toggle("none");
      $botonmenu.lastElementChild!.classList.toggle("none");
      $menu.classList.toggle("is-active");
    });

    document.addEventListener("click", (e) => {
      if (!(e.target as Element).matches(".carta a")) return;

      $botonmenu.firstElementChild!.classList.remove("none");
      $botonmenu.lastElementChild!.classList.add("none");
      $menu.classList.remove("is-active");
    });
  }

}







