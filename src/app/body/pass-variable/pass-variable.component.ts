import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pass-variable',
  templateUrl: './pass-variable.component.html',
  styleUrls: ['./pass-variable.component.css']
})
export class PassVariableComponent {
  @Input() passedFromBody!: string;
}
