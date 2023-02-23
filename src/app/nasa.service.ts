import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nasa } from './models/nasa';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

constructor(public http : HttpClient) { }

getImageOfTheDay(): Observable<Nasa[]>{
  return this.http.get<Nasa[]>("https://api.nasa.gov/planetary/apod?api_key=9nNxnX6G69vyZfbWAd1oxuWiesZPZbeO7h2nOGAK")
}
}
