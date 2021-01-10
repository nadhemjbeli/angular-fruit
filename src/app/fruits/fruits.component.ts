import { Component, OnInit } from '@angular/core';
import {Fruit} from '../model/fruit.model';
import {FruitService} from '../fruit.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css'],

})
export class FruitsComponent implements OnInit {
  fruits: Fruit[]; // un tableau de chînes de caractères
  private router: any;

  constructor(private fruitService: FruitService ) {
    this.fruits = fruitService.listeFruits();

    // @ts-ignore
    this.fruits = [
      {idFruit : 1, nomFruit: 'PC Asus', prixFruit : 3000.600, poidsFruit: 13.0, datePaiement : new Date('01/14/2011')},
      {idFruit : 2, nomFruit: 'Imprimante Epson', prixFruit : 450, poidsFruit: 15.0, datePaiement : new Date('12/17/2010')},
      {idFruit : 3, nomFruit: 'Tablette Samsung', prixFruit : 900.123, poidsFruit: 14.0, datePaiement: new Date('02/20/2020')}
    ];
  }
  // tslint:disable-next-line:typedef
  supprimerFruit(p: Fruit)
  {
    const conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.fruitService.supprimerFruit(p.idFruit).subscribe(() => {
        console.log("fruit supprimé");
        this.SuprimerFruitDuTableau(p);
      });
    }
    this.router.navigate(['fruits']).then(() => {
      window.location.reload();
    });
  }
  // tslint:disable-next-line:typedef
  SuprimerFruitDuTableau(fr: Fruit) {
    this.fruits.forEach((cur, index) => {
      if (fr.idFruit === cur.idFruit) {
        this.fruits.splice(index, 1);
      }
    });
  }

  ngOnInit(): void {
    this.fruitService.listeFruit().subscribe(frs => {
      console.log(frs);
      this.fruits = frs;
    });
  }

}
