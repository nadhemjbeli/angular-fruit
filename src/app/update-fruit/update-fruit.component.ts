import { Component, OnInit } from '@angular/core';
import {Fruit} from '../model/fruit.model';
import {ActivatedRoute, Router} from '@angular/router';
import {FruitService} from '../fruit.service';

@Component({
  selector: 'app-update-fruit',
  templateUrl: './update-fruit.component.html',
  styles: [
  ]
})
export class UpdateFruitComponent implements OnInit {

  currentFruit = new Fruit();
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private fruitService: FruitService) { }


  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
    this.currentFruit = this.fruitService.consulterFrui(this.activatedRoute.snapshot.params.id);
    console.log(this.currentFruit);
  }
  // tslint:disable-next-line:typedef
  updateFruit()
  {
    // console.log(this.currentFruit);
    this.fruitService.updateFruit(this.currentFruit);
    this.router.navigate(['fruits']);

  }

}
