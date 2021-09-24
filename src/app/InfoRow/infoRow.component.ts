import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-row',
  templateUrl: './infoRow.component.html',
  styleUrls: ['./style.scss']
})
export class InfoRow {
  @Input() label = '';
  @Input() value: number | string = '';
}
