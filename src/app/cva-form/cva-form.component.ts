import { Component, forwardRef } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormGroup, FormControl, NG_VALUE_ACCESSOR, NgControl, NgForm } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import {dataI} from '../main-form/main-form.component'

@Component({
  selector: 'app-cva-form',
  templateUrl: './cva-form.component.html',
  styleUrls: ['./cva-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CvaFormComponent)
    }
  ]
})
export class CvaFormComponent implements ControlValueAccessor {

  regions: [];
  municipalities: [];
  settlements: [];
  addresses: [];

  color = 'accent';
  checked = false;

  constructor() { }

form:FormGroup
  changed() {} // change to station

  onTouched: () => void = () => { };
  onChanged: (any) => void = () => { };

  writeValue(v: any) {
    this.form=new FormGroup({});
    Object.keys(dataI).forEach(x=>{
      this.form.addControl(x,new FormControl())
    })

    this.form.setValue(v, { emitEvent: false });
    this.form.valueChanges.subscribe(res=>{
       if (this.onChanged)
        this.onChanged(this.form.value)
    })
  }

  registerOnChange(fn: (v: any) => void) {
    this.onChanged=fn;
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.form.disable() : this.form.enable();
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  
}