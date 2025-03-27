import { HomeComponent } from 'src/Components/Homecomponent/Home.component';
import { DeleteComponent } from './../Components/Delete/Delete.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from 'src/Components/Add/Add.component';
import { EditComponent } from 'src/Components/Edit/Edit.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"Home",component:HomeComponent},
  {path:"Add",component:AddComponent},
  {path:"Delete/:pid",component:DeleteComponent},
  {path:"Edit/:pid",component:EditComponent},

  {path:"",redirectTo:"/Home",pathMatch:"full"},
  {path:"**",redirectTo:"/Home",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
