import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { NodeformComponent } from './nodeform/nodeform.component';
import { NodetableComponent } from './nodetable/nodetable.component';
import { BindingComponent } from './binding/binding.component';
import { ObservableComponent } from './observable/observable.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [
  { path:"",component:FormComponent},
  { path:"table",component:TableComponent},
  { path:"nodeForm",component:NodeformComponent},
  { path:"nodetable",component:NodetableComponent},
  { path:"binding",component:BindingComponent},
  { path:"observable", component:ObservableComponent},
  { path:"reactive", component:ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
