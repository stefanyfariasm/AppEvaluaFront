import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //private URL = 'http://localhost:3000/login'
  private URL = 'https://service-name-pbqg.onrender.com/login'

  constructor(private http: HttpClient) {}

  logoogle(token:any){
    return this.http.post<any>(this.URL + '/logoogle',token)
    .pipe(
      map((resp: any) => {
        localStorage.setItem("usuario",resp.data.nombres)
        localStorage.setItem("apellido",resp.data.apellidos)
        localStorage.setItem("correo",resp.data.correo)
        localStorage.setItem("celular","")
        localStorage.setItem("accountName", resp.data.accountName)
        localStorage.setItem("profileName", resp.data.profileName)
        if(resp.data.url_foto === null){
          localStorage.setItem("imgurl",'/assets/Img/UserIcon.png')
        }else{
          localStorage.setItem("imgurl",resp.data.url_foto)
        }
        return resp;
      })
    )
  }

  logIn(user:any){
    return this.http.post<any>(this.URL + '/login',user)
    .pipe(
      map((resp: any) => {
        // localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("usuario",resp.data.nombres)
        localStorage.setItem("apellido",resp.data.apellidos)
        localStorage.setItem("correo",resp.data.email)
        localStorage.setItem("celular",resp.data.telefono)
        localStorage.setItem("accountName", resp.data.accountName)
        localStorage.setItem("profileName", resp.data.profileName)
        if(resp.data.url_foto === null){
          localStorage.setItem("imgurl",'/assets/Img/UserIcon.png')
        }else{
          localStorage.setItem("imgurl",resp.data.url_foto)
        }
        return resp;
      })
    );
  }

  verification_code(user:any){
    return this.http.post<any>(this.URL + '/verification-code', user)
  }

  newPassword(user:any){
    return this.http.post<any>(this.URL + '/newpass', user)
    .pipe(
      map((resp: any) => {
        localStorage.clear()
        console.log(localStorage)
        console.log(localStorage.length)
        return resp;
      })
    );
  }

  resetPassword(user:any){
    return this.http.post<any>(this.URL + '/reset',user)
    .pipe(
      map((resp: any) => {
        localStorage.setItem("email",resp.data.email)
        return resp;
      })
    );
  }

  getUserAuth(data: any) {
    return this.http.post(environment.api + '/users/type_user', data)
  }

  signUp(user:any){
    return this.http.post<any>(this.URL + '/signup',user)
  }

  logout(){
    return this.http.get<any>(this.URL + '/logout')
    .pipe(
      map((resp: any) => {
        console.log(resp)
        localStorage.removeItem("usuario")
        // localStorage.removeItem("user")
        return resp;
      })
    );
  }
}
