import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css']
})
export class ExternalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.clear();
    localStorage.setItem('gymClicked', 'false');
  }

}
