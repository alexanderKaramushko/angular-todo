import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { InfoRow } from './InfoRow/infoRow.component';
import { ListComponent } from './List/list.component';
import { ListItemDirective } from './List/list.directive';
import { ListItemComponent } from './ListItem/listItem.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoRow,
    ListComponent,
    ListItemComponent,
    ListItemDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
