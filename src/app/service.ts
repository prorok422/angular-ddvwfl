import { Injectable } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs'
import { switchMap, map, tap } from 'rxjs/operators'

@Injectable()
export class fService {

  getFullRequest(id): Observable<any> {
    return this.getRequest(id).pipe(
      switchMap((request: any) => {
        //here you has the request. We create an array of observables
        return forkJoin(
          request.requestVehicles.map(
            (r: any) => this.getAddressPoint(r))).pipe(map((res: any[]) => {
              res.forEach((x: any, index: number) => {
                x.sequenceNumber = index
              })
              return {
                statusId: request.statusID,
                routes: res
              }
            })
            )
      }))
 }

  getRequest(id: any) {
    return of({ statusID: 1, requestVehicles: [1, 2] })
  }
  getAddressPoint(id: number) {
    if (id == 1)
      return of({
        addressPointId: "adress",
        municipalityId: "municipallyty",
        regionId: "regionId",
        rvId: "rvId",
        settlementId: "settlementId",
        regionName: "regionName",
        municipalityName: "municipalityName",
        settlementName: "settlementName",
        description: "description",
      })
    if (id == 2)
      return of({
        addressPointId: "another adress",
        municipalityId: "another municipallyty",
        regionId: "another regionId",
        rvId: "another rvId",
        settlementId: "another settlementId",
        regionName: "another regionName",
        municipalityName: "another municipalityName",
        settlementName: "another settlementName",
        description: "another description",
      })
  }
}
