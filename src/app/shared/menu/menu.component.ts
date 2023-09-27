import { Component } from '@angular/core';
interface menu {
  texto: string;
  ruta: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class MenuComponent {
  menuItems: menu[] = [
    {
      ruta: '/tasks/list',
      texto: 'Lista de tareas',
    },
    {
      ruta: '/tasks/add',
      texto: 'Agregar nueva',
    },
  ];
}
