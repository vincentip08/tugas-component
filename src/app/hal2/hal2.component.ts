import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hal2',
  templateUrl: './hal2.component.html',
  styleUrls: ['./hal2.component.css']
})
export class Hal2Component implements OnInit {

  constructor(private route : ActivatedRoute) { }
  listJurusan = []
  temp = []
  ngOnInit() {
    let jur = this.route.snapshot.paramMap.get('jurusan');
    let jelas = this.route.snapshot.paramMap.get('penjelasan');
    this.temp=[jur, jelas];
    this.listJurusan.push(this.temp);
  }

}