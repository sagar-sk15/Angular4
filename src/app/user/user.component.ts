import { Component, OnInit, } from '@angular/core';
import {Customer} from './../Customer';
import {GetService} from '../Services/get-service.service';

import {NgForm,
FormGroup,
FormControl,
Validators,
FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service:GetService){

  }
  ngOnInit(): void {
    this.records= [
      { CategoryID: 1,  CategoryName: "Drink", Description: "Coke,Coffee", CreatedDate: new Date("12/12/2015") },
      { CategoryID: 2,  CategoryName: "Bakery", Description: "Cake, Rum ball",CreatedDate: new Date("12/12/2017") },
      { CategoryID: 3,  CategoryName: "Brunch", Description: "Pasta", CreatedDate : new Date("12/12/2016") },
           ];

     this.sort(this.column);

     this.sports = ['Cricket','BasketBall'];

     this.service.getUsers().subscribe((jsonData) =>{
       this.jsonData = jsonData;
     });

     var _builder = new FormBuilder();
     this.formGroup = _builder.group({});
     this.formGroup.addControl('SportNameControl', new FormControl('',Validators.required));
  }

  sort(property){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };

  addSport(sport){
    this.sports.unshift(sport);
  }

  deleteSport(sport)
  {
    this.sports.splice(sport, 1);
  }

  title = 'app';
  records: Array<any>;
  isDesc: boolean = true;
  column: string = 'CreatedDate';  
  CustomerObject : Customer = new Customer();
  direction:number;
  sports:String[];
  jsonData : JsonData[];
  formGroup:FormGroup;
}


interface JsonData{
  id:number,
  name:string,
  email:string
  
  }


