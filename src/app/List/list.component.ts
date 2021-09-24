import { Component, ComponentFactoryResolver, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Item } from '../domain';
import { ListItemDirective } from './list.directive';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() items: Item[] = [];
  @Output() onItemClick = new EventEmitter();
  @Output() onCloseClick = new EventEmitter();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  @ViewChild(ListItemDirective, { static: true }) listItemDirective!: ListItemDirective;

  renderItemComponents() {
    const viewContainerRef = this.listItemDirective.viewContainerRef;

    viewContainerRef.clear();

    this.items.forEach(({ component, data, id, done }) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

      const componentRef = viewContainerRef.createComponent(componentFactory);

      componentRef.instance.data = data;
      componentRef.instance.lined = done;
      componentRef.instance.onItemClick = () => this.onItemClick.emit(id);
      componentRef.instance.onCloseClick = () => this.onCloseClick.emit(id);
    });
  }

  ngOnInit(): void {
    this.renderItemComponents();
  }

  ngOnChanges() {
    this.renderItemComponents();
  }
}
