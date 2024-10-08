import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FentyService {
    ApiKey = "d92f9f1d23msh9b2df169d0bb826p11b38djsnef384c25eb46"
    ApiUrl_1 = "https://sneakers-releases-calendar.p.rapidapi.com/browse/group_id/sneakers?page=1&num_results_per_page=24&sort_by=relevance&sort_order=descending=1';"


    constructor(public http: HttpClient){}
    //1//
    GetProductsUrl_1(): Observable<any> {
      const headers = new HttpHeaders()
      .set('x-rapidapi-key', this.ApiKey)
      .set('x-rapidapi-host', 'sneakers-releases-calendar.p.rapidapi.com')

      return this.http.get(this.ApiUrl_1, {headers}).pipe(
        map(response => response)
      )
    }

    //2//
    ApiUrl_2 = "https://the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com/search?query=Adidas%20Forum/10"
    GetProductsUrl_2(): Observable<any> {
      const headers = new HttpHeaders()
      .set('x-rapidapi-key', this.ApiKey)
      .set('x-rapidapi-host', 'the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com')

      return this.http.get(this.ApiUrl_2, {headers}).pipe(
        map(response => response)
      )
    }
    //3//
    ApiUrl_3 = "https://the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com/search?query=Adidas%20Forum/15"
    GetProductsUrl_3(): Observable<any> {
      const headers = new HttpHeaders()
      .set('x-rapidapi-key', this.ApiKey)
      .set('x-rapidapi-host', 'the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com')

      return this.http.get(this.ApiUrl_3, {headers}).pipe(
        map(response => response)
      )
    }

    //4//
    ApiUrl_4 = "https://the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com/search?query=Adidas%20Forum/20"
    GetProductsUrl_4(): Observable<any> {
      const headers = new HttpHeaders()
      .set('x-rapidapi-key', this.ApiKey)
      .set('x-rapidapi-host', 'the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com')

      return this.http.get(this.ApiUrl_3, {headers}).pipe(
        map(response => response)
      )
    }
}
