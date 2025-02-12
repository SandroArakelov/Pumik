import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FentyService {
    // ApiKey = "d92f9f1d23msh9b2df169d0bb826p11b38djsnef384c25eb46"
    // ApiUrl_1 = "https://shoes-collections.p.rapidapi.com/shoes"

    ApiKey = "f-9104e522e0b0154580e303d940bb462e"


    constructor(public http: HttpClient){}
    // //1//
    // GetProductsUrl_1(): Observable<any> {
    //   const headers = new HttpHeaders()
    //   .set('x-rapidapi-key', this.ApiKey)
    //   .set('x-rapidapi-host', 'shoes-collections.p.rapidapi.com')

    //   return this.http.get(this.ApiUrl_1, {headers}).pipe(
    //     map(response => response)
    //   )
    // }

    //2//
    ApiUrl_2 = "https://api.sneakersapi.dev/api/v3/stockx/products"
    GetProductsUrl_2(): Observable<any> {
      const headers = new HttpHeaders()
      .set('x-rapidapi-key', this.ApiKey)
      .set('x-rapidapi-host', 'api.sneakersapi.dev')
      

      return this.http.get(this.ApiUrl_2, {headers}).pipe(
        map(response => response)
      )
    }

    // //3//
    // ApiUrl_3 = "https://stadium-goods-api.p.rapidapi.com/products?page=1"
    // GetProductsUrl_3(): Observable<any> {
    //   const headers = new HttpHeaders()
    //   .set('x-rapidapi-key', this.ApiKey)
    //   .set('x-rapidapi-host', 'the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com')

    //   return this.http.get(this.ApiUrl_3, {headers}).pipe(
    //     map(response => response)
    //   )
    // }

    // //4//
    // ApiUrl_4 = "https://the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com/search?query=Adidas%20Forum/20"
    // GetProductsUrl_4(): Observable<any> {
    //   const headers = new HttpHeaders()
    //   .set('x-rapidapi-key', this.ApiKey)
    //   .set('x-rapidapi-host', 'the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com')

    //   return this.http.get(this.ApiUrl_3, {headers}).pipe(
    //     map(response => response)
    //   )
    //}
}
