import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RatingModule} from 'primeng/rating';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
    declarations:[
        AppComponent,
        StringInterpolationComponent,
        PropertyBindingComponent,
        EventBindingComponent,
        TwowayBindingComponent,
        ProductsComponent,
        ProductThumbnailComponent,
        HeaderComponent
    ], 
    imports:[
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RatingModule
    ],    
    bootstrap:[
        AppComponent
    ]
}) // Attribute/Annotation in OOP //Class,Members,Method Params
export class AppModule { }
