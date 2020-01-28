import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {

  homeTypeDropdownOpen = false;
  currentHomesTypeFilters = [];
  homes$ = this.dataService.homes$;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      const homeTypeFilters = params['home-type'] || [];
      const searchString = params.search || '';
      this.dataService.loadHomes(homeTypeFilters, searchString);
      this.currentHomesTypeFilters = homeTypeFilters;
    });

  }

  homeTypeFilterApplied($event){

    this.homeTypeDropdownOpen = false;
    this.router.navigate(['homes'], {queryParams: {
      'home-type': $event
    }})
  }

  searchApplied($event){
    this.router.navigate(['homes'], {queryParams: {
      'search': $event
    }})
  }

}
