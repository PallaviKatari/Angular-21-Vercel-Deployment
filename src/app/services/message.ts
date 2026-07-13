import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Message {
  private messageSource = new Subject<string>();
  public message$ = this.messageSource.asObservable();

  sendMessage(message: string) {
    this.messageSource.next(message);
  }

  promiseFunction(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Promise resolved after 2 seconds');
      }, 2000);
    });
  }

  observableFunction = new Observable<string>((observer) => {
    setTimeout(() => {
      observer.next('Observable emitted after 2 seconds');
      observer.complete();
      observer.error('Observable error after 2 seconds');
    }, 2000);
  });
}
