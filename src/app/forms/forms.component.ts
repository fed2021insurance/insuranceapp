import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  reportCarForm: FormGroup;
  reportPersonnelForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.reportCarForm = new FormGroup({
      "userData": new FormGroup({
        "mechDam": new FormControl(null),
        "bodyDam": new FormControl(null)
      }),
    
      "moreCarDam": new FormArray([])
    
    })

    this.reportPersonnelForm = new FormGroup({
      "userPersonnelData": new FormGroup({
        "name": new FormControl(null),
        "injuries": new FormControl(null)
      }),
    
      "morePersonnelInj": new FormArray([])
    
    })

  }

  onAddCar(){
    const control = new FormControl(null);
    (<FormArray>this.reportCarForm.get('moreCarDam')).push(control)
  }

  onAddPerson(){
    const control = new FormControl(null);
    (<FormArray>this.reportPersonnelForm.get('morePersonnelInj')).push(control)
  }

}

