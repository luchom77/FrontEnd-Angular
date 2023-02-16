import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css'],
})
export class AppMenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initMenu();
  }

  private initMenu(): void {
    const $btnMenu = document.querySelector('.menu-btn') as HTMLElement;
    const $menu = document.querySelector('.menu') as HTMLElement;

    $btnMenu.addEventListener('click', (e) => {
      $btnMenu.firstElementChild!.classList.toggle('none');
      $btnMenu.lastElementChild!.classList.toggle('none');
      $menu.classList.toggle('is-active');
    });

    /* para cerrar el menú al clickear */
    document.addEventListener('click', (e) => {
      if (!(e.target as HTMLElement).matches('.menu a')) {
        $btnMenu.firstElementChild!.classList.remove('none');
        $btnMenu.lastElementChild!.classList.add('none');
        $menu.classList.remove('is-active');
      }
    });
  }
}
