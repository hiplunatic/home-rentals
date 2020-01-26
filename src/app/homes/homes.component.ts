import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {

  homeTypeDropdown = false;

  homes$ = this.dataService.getHomes();

  constructor(
    private dataService: DataService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  homeTypeFilterApplied($event){

    this.homeTypeDropdownOpen = false;
    this.router.navigate(['homes'], {queryParams: {
      'home-type': $event
    }})
  }

}
