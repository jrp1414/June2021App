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
import { ShortenPipe } from './shared/pipe/shorten.pipe';
import { FilterPipe } from './shared/pipe/filter.pipe';
import { BasicHighlightDirective } from './shared/directives/basic-highlight.directive';
import { BetterHighlightDirective } from './shared/directives/better-highlight.directive';
import { Logger } from './shared/services/logger.service';
import { ProductService } from './shared/services/product.service';
import { TempProductsComponent } from './temp-products/temp-products.component';



@NgModule({
    declarations:[
        AppComponent,
        StringInterpolationComponent,
        PropertyBindingComponent,
        EventBindingComponent,
        TwowayBindingComponent,
        ProductsComponent,
        ProductThumbnailComponent,
        HeaderComponent,
        ShortenPipe,
        FilterPipe,
        BasicHighlightDirective,
        BetterHighlightDirective,
        TempProductsComponent
    ], 
    imports:[
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RatingModule
    ],
    providers:[
        Logger
        // ProductService
    ],    
    bootstrap:[
        AppComponent
    ]
}) // Attribute/Annotation in OOP //Class,Members,Method Params
export class AppModule { }
