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

  currentFruit: Fruit = new Fruit();
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private fruitService: FruitService) { }


  ngOnInit(): void {
    this.fruitService.consulterFrui(this.activatedRoute.snapshot.params.id).
    subscribe( fr => { this.currentFruit = fr; } ) ;
  }
  // tslint:disable-next-line:typedef
  updateFruit() {
    this.fruitService.updateFruit(this.currentFruit).subscribe(fr => {
        this.router.navigate(['fruits']);
      }, (error) => { alert('Problème lors de la modification !'); }
    );
  }


}
