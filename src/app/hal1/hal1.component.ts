import { Component, OnInit } from '@angular/core';
import { GlobSerService } from '../glob-ser.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-hal1',
  templateUrl: './hal1.component.html',
  styleUrls: ['./hal1.component.css']
})
export class Hal1Component implements OnInit {

  datadariglob : any;
  temp = [];
  id : any;

  constructor (public variabelglobal : GlobSerService) {
    this.datadariglob = this.variabelglobal.getData();
    this.id = this.variabelglobal.getID();
    console.log(this.datadariglob);
  }

  ngOnInit() {
  }
 
  submit(a, b){
    this.temp = [++this.id, a, b];
    this.variabelglobal.setData(this.temp);
  }

}