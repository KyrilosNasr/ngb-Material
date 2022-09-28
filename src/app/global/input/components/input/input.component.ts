import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR ,FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit {
  form!: FormGroup;
  disabled = false;
  matcher = new MyErrorStateMatcher();
  constructor(private _fb: FormBuilder) { }

  onChange = (_: any) => {};
  onTouch = () => {};

  writeValue(value: string | number): void {
    if (value) {
      this.f["input"].patchValue(value)
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  handleOnChange() {
    this.onChange(this.form.controls['email'].value);
    this.onTouch()
  }
  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this._fb.group({
      email: [null, [Validators.required , Validators.email]],
      password: [null, [Validators.required , Validators.minLength(8)]],
    })
  }

  get f() {
    return this.form.controls
  }

  login(){
    console.log(this.f);

  }
}
