import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FentyService {
    ApiKey = "d92f9f1d23msh9b2df169d0bb826p11b38djsnef384c25eb46"
    ApiUrl = "https://shoes-collections.p.rapidapi.com/shoes"


    constructor(public http: HttpClient){}

    getproducts(): Observable<any> {
      const headers = new HttpHeaders()
      .set('x-rapidapi-key', this.ApiKey)
      .set('x-rapidapi-host', 'shoes-collections.p.rapidapi.com')

      return this.http.get(this.ApiUrl, {headers}).pipe(
        map(response => response)
      )
    }
}
