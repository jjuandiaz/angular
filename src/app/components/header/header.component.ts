import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login_auth/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titulo: String = "Mi banco - Nueva Transferencia";

  constructor( private router:Router , private  loginService : LoginService) { }

  ngOnInit(): void {
  }
  navegarPagina(pagina:String): void{
   this.router.navigate([pagina])
  }

  isAuthtenticado() {
    return this.loginService.isAuth();
  }
  salir() {
    this.loginService.logout();
  }
}
