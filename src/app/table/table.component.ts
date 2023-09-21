import { Component, OnInit } from '@angular/core';
import { CrudService } from '../model_service/crud.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private crud: CrudService) {}
  dipendenti: any[] = [];

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.dipendenti = this.crud.getDipendente();
  }

  deleteSingle(index: number): void {
    this.crud.deleteDipendente(index);
  }
}
