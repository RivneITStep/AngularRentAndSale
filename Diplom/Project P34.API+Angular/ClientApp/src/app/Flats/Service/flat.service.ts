import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlatModel } from '../Model/flat.model';
import { ApiResult } from '../../../../src/app/Models/result.model';
import { FlatItem } from '../Model/flat-item.model';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class FlatService {
    
    baseUrl = '/api/Flat';



    constructor(private http: HttpClient){

    }

    getEmptyFlats () {
        return this.http.get(this.baseUrl);
    }

    getSoldFlats () {
        return this.http.get(this.baseUrl + '/getSoldFlats')
    }


    getAllFlats () {
        return this.http.get(this.baseUrl + '/getAllFlats');
    }

    addFlat(FlatModel: FlatModel){
        

        const token = localStorage.getItem('token');

        const jwtToken = token.split('.')[1];
        const decodedJwtJsonData = window.atob(jwtToken);
        const decodedJwtData = JSON.parse(decodedJwtJsonData);

        FlatModel.Id = decodedJwtData.id;
        FlatModel.Sold=false;
  
        console.log(FlatModel); //Вивід в консоль, подивитись

        return this.http.post<ApiResult>('/api/flat/addflat', FlatModel);
    }



    getFlat(id: string) {
        return this.http.get(this.baseUrl + '/' + id);
    }

    editFlat(id: string, model: FlatModel): Observable<ApiResult> {
        return this.http.post<ApiResult>(this.baseUrl + '/editFlat/' + id, model);
      }














}