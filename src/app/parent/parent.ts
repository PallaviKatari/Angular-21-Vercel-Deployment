import { Component } from '@angular/core';
import { Child } from '../child/child';
import { Message } from '../services/message';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {

  messageToChild: string = 'Hello from Parent Component!';

  receivedMessageFromChild: string = '';

  handleMessageFromChild(message: string): void { // Hello from Child Component!
    this.receivedMessageFromChild = message;
  }
  
}
