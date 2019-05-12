import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProviderService} from '../shared/services/provider.service';
import {ICoach} from '../shared/models/models';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {
  coaches: ICoach[] = [];
  constructor(private router: Router, private provider: ProviderService) { }

  ngOnInit() {
    this.provider.getCoaches(JSON.parse(localStorage.getItem('currentGym'))).then(res => {
      this.coaches = res;
      // this.router.navigateByUrl('coach');
    });
  }
  // getCoaches() {
  //   this.provider.getCoaches(this.provider.curGym).then(res => {
  //     this.coaches = res;
  //     // this.router.navigateByUrl('coach');
  //   });
  // }
}
