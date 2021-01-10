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
    return this.http.post<Fruit>(this.apiURL, fr, httpOptions);
  }

  // tslint:disable-next-line:typedef
  supprimerFruit(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterFrui(id: number): Observable<Fruit> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Fruit>(url);
  }

  // tslint:disable-next-line:typedef
  updateFruit(fr: Fruit): Observable<Fruit>
  {
    return this.http.put<Fruit>(this.apiURL, fr, httpOptions);
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


