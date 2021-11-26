import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { HorizontaltopbarComponent } from './horizontaltopbar/horizontaltopbar.component';
import { LayoutsComponent } from './layouts.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { NgModule } from '@angular/core';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { VerticalComponent } from './vertical/vertical.component';

@NgModule({
  declarations: [
    LayoutsComponent,
    FooterComponent,
    HorizontalComponent,
    HorizontaltopbarComponent,
    RightsidebarComponent,
    SidebarComponent,
    TopbarComponent,
    VerticalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutsRoutingModule
  ]
})
export class LayoutsModule { }
