import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { EmployeeComponent } from './employee/employee.component';
import { VideogameComponent } from './videogame/videogame.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    EmployeeComponent,
    VideogameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
