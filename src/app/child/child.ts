import { Component , Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  // Input property to receive data from the parent component
  @Input() messageFromParent: string = '';

  // Output property to send data to the parent component
  @Output() messageToParent: EventEmitter<string> = new EventEmitter<string>();
  
  // Method to send a message to the parent component
  sendMessageToParent(): void {
    const message = 'Hello from Child Component!';
    this.messageToParent.emit(message);
  }
}
