import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';


@NgModule({
    declarations:[
        AppComponent,
        StringInterpolationComponent,
        PropertyBindingComponent
    ], 
    imports:[
        BrowserModule
    ],    
    bootstrap:[
        AppComponent
    ]
}) // Attribute/Annotation in OOP //Class,Members,Method Params
export class AppModule { }
