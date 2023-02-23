import { Component, OnInit } from '@angular/core';
import { Nasa } from './models/nasa';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public tabNasa: Nasa[];
  public imgOfTheDay: string;
  public test: string = "test"
  
  constructor(public nasaService : NasaService){
    this.tabNasa = []; 
    this.imgOfTheDay= "";
  }

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe(nasaJson => {
      this.tabNasa = nasaJson
    })
  }
}
