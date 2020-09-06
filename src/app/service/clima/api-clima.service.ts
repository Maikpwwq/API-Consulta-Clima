import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'; 
import { Observable, of } from 'rxjs';
import { DataClima } from '../../component/clima.model'

@Injectable({
  providedIn: 'root'
})

export class ApiClimaService {

  constructor(private http: HttpClient) {}

  DataClima:[];

  /* URL openweather API */
  readonly APIUrl = "http://api.openweathermap.org/data/2.5";  

  /* ClimaBogotaHoy */
  /* .map((res:Response) => res.json().response); */
  getClimaBogotaHoy(): Observable<DataClima[]> {
    let parametro1 = new HttpParams().set('units',"metric",)
    return this.http.get<DataClima[]>(this.APIUrl+"/weather?id=3688689&appid=11231a9c5429e560aa5ec57293d42589",{params:parametro1});            
  }     
  
  /*ClimaProximoBogota*/
  getClimaProximoBogota(): Observable<DataClima[]> {
    return this.http.get<DataClima[]>(this.APIUrl+"/forecast/daily?id=3688689&appid=11231a9c5429e560aa5ec57293d42589&cnt=3&units=metric&lang=es");
  }     
  
  /*ClimaParisFrancia*/
  getClimaParisFrancia(): Observable<DataClima[]> {
    return this.http.get<DataClima[]>(this.APIUrl+"/weather?id=2988507&appid=11231a9c5429e560aa5ec57293d42589&units=metric&lang=es");
  } 
}
