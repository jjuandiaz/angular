import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DestinatarioComponent } from './components/destinatario/destinatario.component'; 
import { HistorialComponent } from './components/historial/historial.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginGuardian } from './components/login/login-guardian.service';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  
    {path: 'destinatario', component: DestinatarioComponent, canActivate:[LoginGuardian]},
    {path: 'transferencia', component: TransferenciaComponent, canActivate:[LoginGuardian]},
    {path: 'historial', component: HistorialComponent, canActivate:[LoginGuardian]},
    {path: 'login', component: LoginComponent},
    {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
