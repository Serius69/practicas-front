import { Component, OnInit,ViewChild, ViewEncapsulation,ElementRef } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
@Component({
  templateUrl: './pseudoaleatorio.component.html',
})
export class PseudoaleatorioComponent3 implements OnInit {


    routeItems!: MenuItem[];
    aleatorio: Number[] = [];
    loading: boolean = true;
    @ViewChild('filter') filter!: ElementRef;
  constructor() { }

  ngOnInit(): void {



    this.routeItems = [
        { label: 'cuadrados medios', routerLink: 'pseudoaleatorio' },
        { label: 'producto medios', routerLink: 'pseudoaleatorio2' },
        { label: 'algoritmo lineal', routerLink: 'pseudoaleatorio3' },
        { label: ' algoritmo multiplicativo', routerLink: 'pseudoaleatorio4' },
    ];
  }
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
}
clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
}

}
