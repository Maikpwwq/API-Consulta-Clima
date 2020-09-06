import { Component, AfterViewInit } from '@angular/core';
import { ApiClimaService } from '../../service/clima/api-clima.service';

import {DataClima} from '../clima.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {

  constructor(private servicioConsultaClima: ApiClimaService) { 

  };
  ngAfterViewInit(){};

  listaDataClima : DataClima[];

  bogotaHoy: any;
  bogotaProximosDias: any;
  actualParis: any;  

  /* Uso del consumo del clima */
  ngOnInit() {
    this.getDataClima();
  };  

  /* Definicion del consumo del clima */
  getDataClima(): void {
    /* *ngFor="let actual of bogotaHoy" */    
    this.servicioConsultaClima.getClimaBogotaHoy () 
    .subscribe(bogotaHoy => {                
      this.bogotaHoy = bogotaHoy,
      console.log( "Ciudad:", bogotaHoy ),
      console.log( "?q=Paris, FR main.temp_min"),
      console.log( "main.temp_max")
    });
    /* *ngFor="let pronostico of ProximosDias" */    
    this.servicioConsultaClima.getClimaProximoBogota () 
      .subscribe(bogotaProximosDias => {   
        this.bogotaProximosDias = bogotaProximosDias,             
        console.log( "Ciudad:", bogotaProximosDias ),
        console.log( "?q=Paris, FR main.temp_min"),
        console.log( "main.temp_max")
      })
    /* *ngFor="let colaboradores of actualParis" */    
    this.servicioConsultaClima.getClimaParisFrancia()
      .subscribe(actualParis => {
        this.actualParis = actualParis,
        console.log( "Ciudad:", actualParis ),
        console.log( "?q=Paris, FR main.temp_min"),
        console.log( "main.temp_max")
      })
  }    
}