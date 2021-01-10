import { Injectable } from '@angular/core';
import { Fruit } from './model/fruit.model';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class FruitService{
  constructor(private http: HttpClient) {
  }
  apiURL = 'http://localhost:8080/fruits/api';
  fruits: Fruit[]; // un tableau de Fruit
  private fruit: Fruit;
  listeFruit(): Observable<Fruit[]>{
    return this.http.get<Fruit[]>(this.apiURL);
  }
  // constructor() {
  //   this.fruits = [
  //     { idFruit : 1, nomFruit : 'PC Asus', prixFruit : 3000.600, dateCreation: new Date('01/14/2011')},
  //   { idFruit : 2, nomFruit : 'Imprimante Epson', prixFruit : 450, dateCreation : new Date('12/17/2010')},
  //   { idFruit : 3, nomFruit : 'Tablette Samsung', prixFruit : 900.123, dateCreation : new Date('02/20/2020')}
  // ];
  // }
  listeFruits(): Fruit[] {
    return this.fruits;
  }
  // tslint:disable-next-line:typedef
  ajouterFruit( fr: Fruit): Observable<Fruit>{
    // @ts-ignore
    return this.http.post<Fruit>(this.apiURL, fr, httpOptions);

  }

  // tslint:disable-next-line:typedef
  supprimerFruit( fr: Fruit){
    // supprimer le fruit fr du tableau fruits
    const index = this.fruits.indexOf(fr, 0);
    if (index > -1) {
      this.fruits.splice(index, 1);
    }
    // ou Bien
    /* this.fruits.forEach((cur, index) => {
    if(fr.idFruit === cur.idFruit) {
    this.fruits.splice(index, 1);
    }
    }); */
  }
  consulterFrui(id: number): Fruit{
    // tslint:disable-next-line:triple-equals
    this.fruit = this.fruits.find(f => f.idFruit == id);
    return this.fruit;
  }
  // tslint:disable-next-line:typedef
  updateFruit(f: Fruit)
  {
  // console.log(p);
    this.supprimerFruit(f);
    this.ajouterFruit(f);
    this.trierFruits();

  }
  // tslint:disable-next-line:typedef
  trierFruits(){
    this.fruits = this.fruits.sort((n1, n2) => {
      if (n1.idFruit > n2.idFruit) {
        return 1;
      }
      if (n1.idFruit < n2.idFruit) {
        return -1;
      }
      return 0;
    });
  }
}


