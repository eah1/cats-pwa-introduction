import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatsComponent} from "./components/cats/cats.component";
import {CatComponent} from "./components/cat/cat.component";

const routes: Routes = [
  { path: '', component: CatsComponent},
  { path: 'cats/:id', component: CatComponent},
  { path: '**', component: CatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
