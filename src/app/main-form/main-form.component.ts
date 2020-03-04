import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import {fService} from '../service'

export const dataI = {
  addressPointId: "",
  municipalityId: "",
  regionId: "",
  rvId: "",
  sequenceNumber: "",
  settlementId: "",
  regionName: "",
  municipalityName: "",
  settlementName: "",
  description: "",
}

export interface IDetail {
  addressPointId: string;
  municipalityId: string;
  regionId: string;
  rvId: string;
  sequenceNumber: string;
  settlementId: string;
  regionName: string;
  municipalityName: string;
  settlementName: string;
  description: string;
}
export interface IData {
  garageId: number;
  routes: IDetail[];
  endDateTime: any
}

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  requestForm: FormGroup;

  constructor(private fb: FormBuilder,private service:fService) { }

  getForm(data: any): FormGroup {
    data = data || {} as IData;
    return new FormGroup({
      garageId: new FormControl(data.garageId),
      routes: new FormControl(data.routes),
      endDateTime: new FormControl(data.endDateTime)
    })
  }
  ngOnInit() {
    this.service.getFullRequest(1).subscribe(data=>{
    this.requestForm = this.getForm(data);
    })
/*    let routes:any[]=[];
    routes.push({...dataI});
    this.requestForm = new FormGroup({
      garageId: new FormControl(0),
      routes: new FormControl(routes),
      endDateTime: new FormControl(0)
    })
  */}



  //  new FormControl({
  //   addressPointId: '21312313',
  //   municipalityId: 0,
  //   regionId: 0,
  //   rvId: 0,
  //   sequenceNumber: 1,
  //   settlementId: 0,
  //   regionName: 'asdf',
  //   municipalityName: 'fadsfa',
  //   settlementName: 'fasdf',
  //   description: 'fasdfas',
  // })

}