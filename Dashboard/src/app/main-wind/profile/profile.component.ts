import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/compat/storage"
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  nombre = localStorage.getItem('usuario');
  apellido = localStorage.getItem('apellido');
  correo = localStorage.getItem('correo');
  celular = localStorage.getItem('celular');
  //this.imgsrc = localStorage.getItem('imgurl') ;
  imgsrc = localStorage.getItem('imgurl');
  accountName = localStorage.getItem('accountName');
  profileName = localStorage.getItem('profileName');
  usuario = {
    email: this.correo,
    accountname: this.accountName,
    profilename: this.profileName,
    correo: this.correo,
    nombre:this.nombre,
    apellido:this.apellido,
    celular:this.celular,
    actualpassword:null,
    newpassword: null
  }

  constructor(private fireStorage:AngularFireStorage, private profileservice: ProfileService){}
  
  delete() {
    if(this.imgsrc == '/assets/Img/UserIcon.png'){
      console.log("No existe imagen")
    }
    else{
      var data ={
        correo: this.correo,
        url_foto: this.imgsrc
      }
      this.fireStorage.storage.refFromURL(this.imgsrc || '').delete()
      this.profileservice.deleteImg(data)
      .subscribe(
        res=>{
          localStorage.setItem('imgurl','/assets/Img/UserIcon.png')
          console.log(res.post)
        },
        err =>console.log(err)
      )
      window.location.reload()
    }
  }

  async onFileChange(event:any){
    const file = event.target.files[0]
    if(file){
      const path = `${this.correo}/${file.name}`
      const uploadTask =await this.fireStorage.upload(path,file)
      const url = await uploadTask.ref.getDownloadURL()
      var data ={correo: this.correo, url_foto: url}
      this.profileservice.updateImg(data)
      .subscribe(
        res=>{console.log(res.post)},
        err =>console.log(err)
      )
      console.log(url)
      localStorage.setItem('imgurl',url)
      window.location.reload()
    }
  }

  guardarAjustes(){
    console.log(this.usuario)
    this.profileservice.guardarAjustes(this.usuario)
    .subscribe(
      res=>{console.log(res)
      localStorage.removeItem("accountName")
      localStorage.removeItem("profileName")
      localStorage.setItem("accountName",res.data.account_name)
      localStorage.setItem("profileName", res.data.profile_name)},
      err =>console.log(err)
    )
  }

  ngOnInit(): void {}


}
