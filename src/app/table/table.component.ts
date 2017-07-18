import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  //names in json object
  PersonNames : string[]= ['SREEVANI',"KRITHIKA", "HARASHA","PREM","KAVYA","MOULI","VINAY","PRIYANKA" ]
  constructor() { }

  ngOnInit() {
  }

}
