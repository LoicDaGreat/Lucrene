import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrePageRoutingModule } from './registre-routing.module';

import { RegisterPage } from './registre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrePageRoutingModule
  ],
  declarations: [RegisterPage]
})
export class RegistrePageModule {}
