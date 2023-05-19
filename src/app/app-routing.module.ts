import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina3Component } from './pagina3/pagina3.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { SiginComponent } from './auth/sigin/sigin.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'pagina1',
    pathMatch: 'full' 
  },
  {
    path: "login",
    component: SiginComponent
  },
  {
    path: "pagina1",
    component: Pagina1Component,
    pathMatch: 'full'
  },
  {
    path: "pagina2",
    component: Pagina2Component
  },
  {
    path: "pagina3",
    component: Pagina3Component
  },
  {
    path: "**",
    component: ErrorpageComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
