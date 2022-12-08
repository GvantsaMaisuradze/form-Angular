export class Cards{
    public image!:string;
    public name!:string;
    public surname!:string;
    public age!:string;

    constructor(image:any,name:any,surname:any,age:any){
        this.image = image;
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}