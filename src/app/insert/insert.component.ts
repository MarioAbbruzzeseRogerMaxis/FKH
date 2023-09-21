import { ToastrService } from 'ngx-toastr';
import { CrudService } from '../model_service/crud.service';
import { Dipendente } from './../model_service/dipendente';
import { Component } from '@angular/core';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css'],
})
export class InsertComponent {
  constructor(private crud: CrudService) {}
  dipendente: Dipendente = new Dipendente();
  errorMsg: boolean = false;

  insert(dipendente: any) {
    if (this.isValidInsert()) {
      this.crud.addDipendente(dipendente);
      this.errorMsg = false;
      this.crud.addToastr(
        'success',
        'Dipendente aggiunto con successo',
        'Ottimo!'
      );
      this.dipendente = new Dipendente();
      console.log(dipendente);
    } else if (!this.isValidInsert()) {
      this.errorMsg = true;
    }
  }

  isValidInsert(): boolean {
    return !!(
      this.dipendente.name &&
      this.dipendente.surname &&
      this.dipendente.sex &&
      this.dipendente.date &&
      this.dipendente.salary
    );
  }
}
