import { Component, OnInit,ViewChild, ViewEncapsulation,ElementRef } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
@Component({
  templateUrl: './pseudoaleatorio.component.html',
})
export class PseudoaleatorioComponent4 implements OnInit {


    routeItems!: MenuItem[];
    aleatorio: Number[] = [];
    loading: boolean = true;
    @ViewChild('filter') filter!: ElementRef;
  constructor() { }

  ngOnInit(): void {


    this.routeItems = [
        { label: 'Personal', routerLink: 'personal' },
        { label: 'Seat', routerLink: 'seat' },
        { label: 'Payment', routerLink: 'payment' },
        { label: 'Confirmation', routerLink: 'confirmation' },
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
