import { Component, OnInit } from '@angular/core';
import { CrudService } from '../model_service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Dipendente } from '../model_service/dipendente';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private crud: CrudService,
    private router: Router
  ) {}
  id!: number;
  index: number = 0;
  errorMsg: boolean = false;
  dipendente: Dipendente = new Dipendente();

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const foundDipendente = this.crud.findId(id);
    if (foundDipendente !== null) {
      this.dipendente = foundDipendente;
    } else {
      console.log('Non trovato');
    }
  }

  submit(): void {
    this.crud.editDipendente(this.dipendente);
    this.router.navigate(['/table']);
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
