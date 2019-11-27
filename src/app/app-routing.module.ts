import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AproductsComponent } from './aproducts/aproducts.component';
import { SupportComponent } from './support/support.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { MainpComponent } from './mainp/mainp.component';

const routes: Routes = [
  { path: '', redirectTo: 'main',pathMatch: 'full' },
  {path:'main',component:MainpComponent},
  {path: 'products',component : AproductsComponent},
  {path: 'support',component : SupportComponent},
  {path: '**',component : ErrorpageComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
