import { Component } from "@angular/core";

@Component({
    selector:"app-si",
    templateUrl:"./string-interpolation.component.html"    
})
export class StringInterpolationComponent{

    constructor() {
        this.person1 = new Person();
        this.person1.fName="Amol";
        this.person1.lName = "Pathak";
    }
    num1=10;
    name:string="Ram";
    isAdult:boolean=true;
    num2:number =20;
    fName:string="Ram";
    lName:string="Sharma";
    person1:Person;

    getFullName(){
        return this.fName+" "+this.lName;
    }
}


class Person{
    fName:string="";
    lName:string="";
}