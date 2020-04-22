import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-hal1',
  templateUrl: './hal1.component.html',
  styleUrls: ['./hal1.component.css']
})
export class Hal1Component implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  listJurusan = []
  temp = []
  submit(a, b){
    this.temp = [a, b]
    this.listJurusan.push(this.temp);
    this.router.navigate(['/hal2', this.listJurusan])
  }

}