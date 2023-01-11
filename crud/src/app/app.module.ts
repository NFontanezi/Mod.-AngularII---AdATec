import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { NotFoundComponent } from './users/components/not-found/not-found.component';
import { CreateUsersComponent } from './users/components/create-users/create-users.component';
import { ListComponent } from './users/components/list/list.component';
import {MatCardModule} from '@angular/material/card';
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from 'ngx-mask'


const material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NotFoundComponent,
    CreateUsersComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxMaskPipe,
    NgxMaskDirective,
    material

  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
