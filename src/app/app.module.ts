import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { TableComponent } from './table/table.component';
import { InsertComponent } from './insert/insert.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CrudService } from './model_service/crud.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent, EditComponent, TableComponent, InsertComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right', // Posizione del messaggio Toastr
      preventDuplicates: true, // Impedisci la duplicazione dei messaggi
      closeButton: false, // Mostra il pulsante di chiusura
      progressBar: false, // Mostra la barra di avanzamento
      timeOut: 5000, // Durata in millisecondi
    }),
  ],
  providers: [CrudService],
  bootstrap: [AppComponent],
})
export class AppModule {}
