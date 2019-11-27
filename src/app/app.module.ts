import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {environment} from '../environments/environment'; 
import { AppComponent } from './app.component';
import { NavbComponent } from './navb/navb.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MainpComponent } from './mainp/mainp.component';
import { AproductsComponent } from './aproducts/aproducts.component';
import { AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FireauthService } from './fireauth.service';
import { ProductsService } from './products.service';

import { from } from 'rxjs';
import { SupportComponent } from './support/support.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbComponent,
    FooterComponent,
    MainpComponent,
    AproductsComponent,
    SupportComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [FireauthService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
