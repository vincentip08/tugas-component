import { Component, OnInit } from '@angular/core';
import { GlobSerService } from '../glob-ser.service';

@Component({
  selector: 'app-hal3',
  templateUrl: './hal3.component.html',
  styleUrls: ['./hal3.component.css']
})
export class Hal3Component implements OnInit {

  
  listJur = [];
  constructor (public  variabelglobal : GlobSerService) {}

  ngOnInit() {
  }
  edit(id, a, b){
    this.listJur = this.variabelglobal.getData();
    for(var i=0;i<this.listJur.length;i++){
      if(id == this.listJur[i][0]){
        this.listJur[i][1]=a;
        this.listJur[i][2]=b;
      }
    }
  this.variabelglobal.equal(this.listJur);
  }
}