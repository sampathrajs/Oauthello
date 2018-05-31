import { Injectable } from '@angular/core';
import { TokenParams } from '../Model/TokenParams';


@Injectable()
export class CommonService {
    public setToken(auth:TokenParams):void
    {
        localStorage.setItem("Authorization",JSON.stringify(auth));
    }
    public getToken():TokenParams{
        let tokendata=JSON.parse(localStorage.getItem("Authorization"));
        return tokendata==null?null:tokendata;
    }
    
    public IsLogin:boolean=false;
    public IsUpdated:boolean=false;
    public IsAuthorized=false;    
    public APIURL='';

    nextTab(){
        console.log("Service next tab called");
        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        $($active).next().find('a[data-toggle="tab"]').click();

    }

    
}