import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArbolComponent } from './arbol/arbol.component';
import { ArrastreComponent } from './arrastre/arrastre.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ElementosComponent } from './elementos/elementos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'tabla',
    component: ElementosComponent
  },
  {
    path: 'arbol',
    component: ArbolComponent
  },
  {
    path: 'arrastre',
    component: ArrastreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
