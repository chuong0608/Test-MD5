import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FindAllComponent} from "./student/find-all/find-all.component";
import {CreateComponent} from "./student/create/create.component";
import {EditComponent} from "./student/edit/edit.component";
import {DetailComponent} from "./student/detail/detail.component";

const routes: Routes = [
  {
    path:'',
    component:FindAllComponent
  },
  {
    path:'create',
    component:CreateComponent
  },
  {
    path:'edit/:id',
    component:EditComponent
  },
  {
    path:'student-detail/:id',
    component:DetailComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
