import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FruitsComponent } from './fruits/fruits.component';
import { AddFruitComponent } from './add-fruit/add-fruit.component';
import {UpdateFruitComponent} from './update-fruit/update-fruit.component';
const routes: Routes = [
{path: "fruits", component : FruitsComponent},
{path: "add-fruit", component : AddFruitComponent},
{ path: "", redirectTo: "fruits", pathMatch: "full" },
  {path: "updateFruit/:id", component: UpdateFruitComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
