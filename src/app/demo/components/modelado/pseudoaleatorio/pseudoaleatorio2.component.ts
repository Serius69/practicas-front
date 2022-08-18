import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  templateUrl: './pseudoaleatorio.component.html',
})
export class PseudoaleatorioComponent2 implements OnInit {


    routeItems!: MenuItem[];

  constructor() { }

  ngOnInit(): void {


    this.routeItems = [
        { label: 'Personal', routerLink: 'personal' },
        { label: 'Seat', routerLink: 'seat' },
        { label: 'Payment', routerLink: 'payment' },
        { label: 'Confirmation', routerLink: 'confirmation' },
    ];
  }

}
