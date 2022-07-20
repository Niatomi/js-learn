import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Car, CarsServiceService } from '../cars-service.service';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css'],
})
export class CarPageComponent implements OnInit {
  id: string = '';
  carById: any;
  carByName: any;
  name: string = '';

  color: string = '';
  year: number = -1;
  hash: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CarsServiceService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];

    this.color = this.route.snapshot.queryParams['color'];
    this.year = this.route.snapshot.queryParams['year'];
    this.hash = this.route.snapshot.fragment;

    this.carById = this.service.getCarById(+this.id);
    this.carByName = this.service.getCarByName(this.name);

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.name = params['name'];
    });

    this.route.queryParams.subscribe((params: Params) => {
      this.color = params['color'];
      this.year = params['year'];
    });
  }

  getBackToHomePage() {
    this.router.navigate(['cars'], { relativeTo: this.route.parent });
  }
}
