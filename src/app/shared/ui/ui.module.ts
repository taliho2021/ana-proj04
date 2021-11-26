import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { PagetitleComponent } from './loader/pagetitle/pagetitle.component';



@NgModule({
  declarations: [
    LoaderComponent,
    PagetitleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UiModule { }
