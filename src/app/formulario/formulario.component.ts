import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private personasService: PersonasService
  ) {
    this.formulario = new FormGroup({
      clientid : new FormControl(),
      name: new FormControl(),
      lastname: new FormControl(),
      dni: new FormControl(),
      email: new FormControl(),
      address: new FormControl()
    });
   }

  ngOnInit(): void {

  }
  onSubmit(){
    this.personasService.addpersona(this.formulario.value);
  }
}
