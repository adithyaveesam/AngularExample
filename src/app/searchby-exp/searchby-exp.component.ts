import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchby-exp',
  templateUrl: './searchby-exp.component.html',
  styleUrls: ['./searchby-exp.component.css']
})
export class SearchbyExpComponent implements OnInit {

  experience = '2019';
  constructor() { }

  ngOnInit(): void {
  }
  candidate_data=[
    {"id": 11,"name": "Ash","department": "Finance","joining_date": '08/10/2016'},
    {"id": 12,"name": "John","department": "HR","joining_date": '11/01/2011'},
    {"id": 13, "name": "Zuri", "department": "Operations", "joining_date": '11/28/2019'},
    {"id": 14,  "name": "Vish",  "department": "Development",   "joining_date": '07/07/2017'},
    {"id": 15, "name": "Barry",  "department": "Operations", "joining_date": '08/19/2014'},
    {"id": 16,"name": "Ady",  "department": "Finance",  "joining_date": '05/10/2014'},
    {"id": 17,"name": "Gare","department": "Development",  "joining_date": '06/04/2014'},
    {"id": 18,  "name": "Hola",  "department": "Development",  "joining_date": '08/12/2010'},
    {"id": 19,  "name": "Ola",  "department": "HR",  "joining_date": '07/05/2011'},
    {"id": 20,  "name": "Kim",  "department": "Finance",  "joining_date": '10/20/2010'}]

    totalexperience(yearvalue: string){
      var year = yearvalue.substring(6,10);
      if(year!==this.experience){
        return true;
      }else{
        return false;
      }
    }
}
