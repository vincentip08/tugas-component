import { Injectable } from '@angular/core';

@Injectable()
export class GlobSerService {

  private listJurusan = [];
  private id = 0;
  public getData() {
    return this.listJurusan;
  }

  public setData(databaru) {
    this.listJurusan.push(databaru); 
  }

  public getID(){
    return this.id;
  }

  public equal(data){
    this.listJurusan = data;
  }
  constructor() { }

}