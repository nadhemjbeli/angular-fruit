import { Component, OnInit } from '@angular/core';
import {Fruit} from '../model/fruit.model';
import {FruitService} from '../fruit.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-fruit',
  templateUrl: './add-fruit.component.html',
  styleUrls: ['./add-fruit.component.css']
})
export class AddFruitComponent implements OnInit {
  newFruit = new Fruit();

  constructor(private fruitService: FruitService, private router: Router) { }
  // tslint:disable-next-line:typedef
  addFruit(){
    this.fruitService.ajouterFruit(this.newFruit)
      .subscribe(fr => {
        console.log(fr);
      });
    this.router.navigate(['fruits']);
  }
  ngOnInit(): void {
  }


}
