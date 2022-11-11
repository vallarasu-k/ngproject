import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class ServeService {   
//  private datacommunication = new Subject <string>();
//  datacommunication$ = this.datacommunication.asObservable();
private dataToCart=new Subject <number>();

private popup = new Subject <any>();
    popup$=this.popup.asObservable();
    
 
    dataToCart$=this.dataToCart.asObservable();

  constructor() { }
  
  // changedataCommonvalue(name1:string){
  //   this.datacommunication.next (name1);
  // }

  fncart(num1:number){
    this.dataToCart.next (num1);
  }
  
  fnpopup(){
    this.popup.next(true);
  }    

}
