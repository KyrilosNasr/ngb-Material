import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatInputModule
  ],
  exports:[InputComponent]
})
export class InputModule { }
