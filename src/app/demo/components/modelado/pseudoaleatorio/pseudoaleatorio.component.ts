import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  templateUrl: './pseudoaleatorio.component.html',
})
export class PseudoaleatorioComponent implements OnInit {


    routeItems!: MenuItem[];

  constructor() { }

  ngOnInit(): void {


    this.routeItems = [
        { label: 'cuadrados medios', routerLink: 'pseudoaleatorio' },
        { label: 'producto medios', routerLink: 'pseudoaleatorio' },
        { label: 'algoritmo lineal', routerLink: 'pseudoaleatorio' },
        { label: ' algoritmo multiplicativo', routerLink: 'pseudoaleatorio' },
    ];
  }

}
