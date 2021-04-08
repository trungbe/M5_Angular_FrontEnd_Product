import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { HackernewComponent } from './hackernew/hackernew.component';
import { CountDownComponent } from './count-down/count-down.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorPickerComponent,
    HackernewComponent,
    CountDownComponent,
    ToDoListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
