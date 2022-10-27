import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  url: string = ""

  constructor(private storage:Storage) { }

  public actualizarImagen($event: any, name: string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, 'imagen/' + name)
    uploadBytes(imgRef, file)
      .then(response => {this.getImage(name)})
      .catch(error => console.log(error));
  }


  getImage(name : string){
    const imgRef = ref(this.storage, 'imagen')
    list(imgRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log( 'la URL es ' + this.url);
      }
    }) 
    .catch(error => console.log(error));
  }

}
