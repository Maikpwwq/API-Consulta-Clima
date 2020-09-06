import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import {ApiClimaService} from '../../service/clima/api-clima.service';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomePage
  ],
  providers:  [ 
    ApiClimaService 
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ]  
})

export class HomePageModule {

}