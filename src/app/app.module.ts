import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';



@NgModule({
    declarations:[
        AppComponent,
        StringInterpolationComponent,
        PropertyBindingComponent,
        EventBindingComponent,
        TwowayBindingComponent,
        ProductsComponent
    ], 
    imports:[
        BrowserModule,
        FormsModule
    ],    
    bootstrap:[
        AppComponent
    ]
}) // Attribute/Annotation in OOP //Class,Members,Method Params
export class AppModule { }
