import { Component, OnInit } from '@angular/core';
import {ICoach} from '../shared/models/models';
import {Router} from '@angular/router';
import {ProviderService} from '../shared/services/provider.service';
import {log} from 'util';

@Component({
  selector: 'app-coachinfo',
  templateUrl: './coachinfo.component.html',
  styleUrls: ['./coachinfo.component.css']
})
export class CoachinfoComponent implements OnInit {
  currentCoach: ICoach;
  activities = [];

  constructor(private router: Router, private provider: ProviderService) { }

  ngOnInit() {
    this.currentCoach = JSON.parse(localStorage.getItem('currentCoach'));
    const act = this.currentCoach.activity;
    this.activities = act.split(';');
  }

}
