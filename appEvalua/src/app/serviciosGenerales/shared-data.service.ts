import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  
  
  public data1:any[]=[]
  public titulo: string | undefined;
  public estilo: string | undefined;
  constructor() { }
  
}
