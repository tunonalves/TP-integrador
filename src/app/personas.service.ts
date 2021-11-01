import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Persona{
  clientid: number;
  name: string;
  lastname: string;
  dni: number;
  email: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private personas: Persona[];
  private personas$: Subject<Persona[]>;

  constructor() { 
    this.personas = [];
    this.personas$ = new Subject();
  }

  addpersona(pPersona: Persona){
    this.personas.push(pPersona);
    this.personas$.next(this.personas);
  }

  getPersonas$(): Observable<Persona[]>{
    return this.personas$.asObservable();
  }
}
