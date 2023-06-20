import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //private URL = 'http://localhost:3000/profile';
  private URL = 'https://service-name-pbqg.onrender.com/profile'

  constructor(private http: HttpClient) {}

  updateImg(user:any){
    return this.http.post<any>(this.URL + '/imagesrc',user)
    .pipe(
      map((resp: any) => {
        console.log(resp);
        return resp;
      })
    );
  }

  deleteImg(user:any){
    return this.http.post<any>(this.URL + '/deleteimagesrc',user)
    .pipe(
      map((resp: any) => {
        localStorage.setItem("imgurl",'/assets/Img/UserIcon.png')
        console.log(resp);
        return resp;
      })
    );
  }

  guardarAjustes(user: any){
    return this.http.post<any>(this.URL + '/updatedata',user)
  }

}
