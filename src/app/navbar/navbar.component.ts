import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  numpersonas: number = 0;
  constructor(
    private personasService: PersonasService
  ) { }

  ngOnInit(): void {
    this.personasService.getPersonas$().subscribe(personas => {
      this.numpersonas = personas.length;
    })
  }

}
