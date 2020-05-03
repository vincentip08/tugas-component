import { Component, OnInit } from '@angular/core';
import { GlobSerService } from '../glob-ser.service';

@Component({
  selector: 'app-hal2',
  templateUrl: './hal2.component.html',
  styleUrls: ['./hal2.component.css']
})
export class Hal2Component implements OnInit {

  listJurusan = []
  temp = []

  constructor (public  variabelglobal : GlobSerService) {}

  ngOnInit() {
    this.listJurusan = this.variabelglobal.getData();
  }

}