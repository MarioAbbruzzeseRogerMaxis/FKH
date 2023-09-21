import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Dipendente } from './dipendente';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  dipendenti: Dipendente[] = [];
  currentId!: number;
  constructor(private toastr: ToastrService) {}

  addToastr(type: string, msg: string, title: string): void {
    if (type === 'success') {
      this.toastr.success(msg, title);
    } else if (type === 'info') {
      this.toastr.info(msg, title);
    } else {
      this.toastr.warning(msg, title);
    }
  }

  editDipendente(edited: Dipendente): void {
    let id = edited.id;
    const index = this.dipendenti.findIndex((d) => d.id === id);
    if (index !== -1) {
      this.dipendenti[index] = edited;
      this.addToastr(
        'success',
        'dipendente modificato correttamente',
        'ottimo'
      );
    } else {
      this.addToastr('error', 'dipendente non trovato', 'errore');
    }
  }
  getId(): number {
    let id = 0;
    if (this.dipendenti.length === 0) {
      id = 1;
    } else if (this.dipendenti.length == 1) {
      id = this.dipendenti[0].id + 1;
    } else {
      this.dipendenti.sort((a, b) => b.id - a.id);
      id = this.dipendenti[0].id + 1;
    }
    return id;
  }

  findId(id: string | null): Dipendente | null {
    if (id === null) {
      return null;
    }
    const parseId = parseInt(id, 10);
    const dipendente = this.dipendenti.find((d) => d.id === parseId);
    return dipendente || null;
  }

  addDipendente(dipendente: any) {
    dipendente.id = this.getId();
    this.dipendenti.push(dipendente);
  }

  getDipendente(): any[] {
    return this.dipendenti;
  }

  deleteDipendente(index: number): void {
    this.dipendenti.splice(index, 1);
  }
}
