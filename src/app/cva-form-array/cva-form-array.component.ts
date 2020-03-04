import { Component, forwardRef,OnInit } from '@angular/core';
import { FormBuilder, FormArray, ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, FormGroup } from '@angular/forms';
import {dataI} from '../main-form/main-form.component'

@Component({
  selector: 'app-cva-form-array',
  templateUrl: './cva-form-array.component.html',
  styleUrls: ['./cva-form-array.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CvaFormArrayComponent)
    }
  ]
})
export class CvaFormArrayComponent implements ControlValueAccessor {

form:FormArray
onTouched: () => void = () => {};
onChange: any;


  writeValue(v: any) {
    this.form=new FormArray([]);
    for (let value of v)
        this.form.push(new FormControl(value))

    this.form.valueChanges.subscribe(res=>
    {
      if (this.onChange)
        this.onChange(this.form.value)
    })
  }

  registerOnChange(fn: (v: any) => void) {
    this.onChange=fn;
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.form.disable() : this.form.enable();
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

   addRoutes() {
    const group=new FormGroup({});
    Object.keys(dataI).forEach(x=>{
      group.addControl(x,new FormControl())
    })
    this.form.push(new FormControl({...dataI}))
  }

  deleteRoute(routeIndex: number) {
    this.form.removeAt(routeIndex);
  }

}