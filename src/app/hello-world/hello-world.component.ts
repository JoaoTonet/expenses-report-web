import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent {
    constructor() {}

    text = "Hello World!"
    isDisabled = false;

    changeColor() : void {
      this.text = "Talvez no futuro..."
      this.isDisabled = true;
    }
}
