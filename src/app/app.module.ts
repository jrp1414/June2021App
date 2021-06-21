import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


@NgModule({
    declarations:[
        AppComponent
    ], 
    imports:[
        BrowserModule
    ],    
    bootstrap:[
        AppComponent
    ]
}) // Attribute/Annotation in OOP //Class,Members,Method Params
export class AppModule { }
