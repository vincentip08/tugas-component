import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(private router : Router){}

  hal1(){
    this.router.navigate(['/hal1']);
  }
  hal2(){
    this.router.navigate(['/hal2']);
  }
  hal3(){
    this.router.navigate(['/hal3']);
  }
}
