import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent } from './insert/insert.component';
import { TableComponent } from './table/table.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: InsertComponent },
  { path: 'insert', component: InsertComponent },
  { path: 'table', component: TableComponent },
  { path: 'edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
