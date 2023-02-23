import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { imgOfTheDay } from './models/nasa';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

constructor(public http : HttpClient) { }

getImageOfTheDay(): Observable<imgOfTheDay>{
  return this.http.get<imgOfTheDay>("https://api.nasa.gov/planetary/apod?api_key=9nNxnX6G69vyZfbWAd1oxuWiesZPZbeO7h2nOGAK")
}
}
