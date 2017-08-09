import { Component } from '@angular/core';

@Component({
  // tag que é usada para referênciar este componente no html
  selector: 'app-root',
  /* url do html que será mostrado quando este componente 
  for desenhado no browser */
  templateUrl: './app.component.html',
  /* css que será utilizado quando exibir 
  o html deste componente. Pode ser adicionado mais que um css */
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'web site institucional';
}
