

//SERVICIO
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { LoginGuardian } from './components/login/login-guardian.service';
import { LoginService } from './services/login_auth/login.service';
import { BancoService } from './services/banco/banco.service';


//MODULO


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// COMPONENTES
import { AppComponent } from './app.component';
import { ListaDetalleComponent } from './components/transferencia/lista-detalle/lista-detalle.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { DestinatarioComponent } from './components/destinatario/destinatario.component';
import { HistorialComponent } from './components/historial/historial.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

//CONFIG
import { firebaseConfig } from '../environments/firebase.config';

@NgModule({
  declarations: [
    AppComponent,
    DestinatarioComponent,
    TransferenciaComponent,
    HistorialComponent,
    HeaderComponent,
    LoginComponent,
    ErrorComponent,
    ListaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule
 
  ],
  providers: [LoginService, BancoService, LoginGuardian ,  {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
