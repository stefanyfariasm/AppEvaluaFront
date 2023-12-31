import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private URL = 'https://backend-evalua.onrender.com/eva_api'
  constructor(private http: HttpClient) { }
  getAlimentos(){
    return this.http.get<any>(this.URL+'/alimentos/')
  }
  getEstilos(){
    return this.http.get<any>(this.URL+'/estilos/')
  }
  getEvaluaciones(){
    return this.http.get<any>(this.URL+'/evaluacion/')
  }
  postEvaluaciones(token:any){
    return this.http.post<any>(this.URL + '/evaluacion/',token)
  }
}
