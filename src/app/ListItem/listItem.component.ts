import { Component, Input } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './listItem.component.html',
  styleUrls: ['./styles.scss'],
})
export class ListItemComponent {
  @Input() data: any;
  @Input() lined: any;
  @Input() onItemClick = () => null;
  @Input() onCloseClick = () => null;
}
