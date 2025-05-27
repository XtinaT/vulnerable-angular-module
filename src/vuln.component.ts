import { Component, Input } from '@angular/core';

@Component({
  selector: 'vuln-component',
  template: `<div [innerHTML]="unsafeHtml"></div>`
})

export class VulnComponent {
  @Input() unsafeHtml: string = '';
}