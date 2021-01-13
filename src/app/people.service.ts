import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
persons = []
  constructor() { }

  addPerson(person: Object) {
    this.persons.push(person);
  }

  removePerson(index: number) {
    this.persons.splice(index, 1);
  }
}
