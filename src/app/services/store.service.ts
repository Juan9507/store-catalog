import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private REST_API_SERVER: string = "http://localhost:3000/products";

  httpOptions = {
    Headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private httpClient: HttpClient ) { }

  public getRequest(): Observable<Product[]> {
    return this.httpClient
    .get<Product[]>(this.REST_API_SERVER)
    .pipe(catchError(this.handleError<Product[]>('getRequest', [])));
  }

  public getResquestId(id:number): Observable<Product>{
    return this.httpClient
    .get<Product>(this.REST_API_SERVER + "/" + id)
    .pipe(catchError(this.handleError<Product>('getResquest')));  
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
