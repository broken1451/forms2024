import { Component } from '@angular/core';
import { Navbar } from '../../interfaces/navBar.interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {



  public reactiveMenu: Navbar[] = [
    {
      title: 'Basicos',
      route: '/reactive/basic'
    },
    {
      title: 'Dynamic',
      route: '/reactive/dynamic'
    },
    {
      title: 'Switches',
      route: '/reactive/switches'
    }
  ];

  public authMenu: Navbar[] = [
    {
      title: 'Registro',
      route: '/auth/sign-up'
    }
  ];

}
