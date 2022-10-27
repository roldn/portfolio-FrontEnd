export class Proyecto {
    id? : number;
    titulo : string;
    descripcionP : string;
    urlProyecto: string;
    imgProyecto: string;

    constructor(title: string, descripcionP: string, urlProyecto: string, imgProyecto: string){  
        this.titulo = title;
        this.descripcionP = descripcionP;
        this.urlProyecto = urlProyecto;
        this.imgProyecto = imgProyecto;
    } 
}