import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyDemoRoutingModule } from './emptydemo-routing.module';
import { PseudoaleatorioComponent } from './pseudoaleatorio.component';
import { PseudoaleatorioComponent2 } from './pseudoaleatorio2.component';
import { PseudoaleatorioComponent3 } from './pseudoaleatorio3.component';
import { PseudoaleatorioComponent4 } from './pseudoaleatorio4.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenubarModule } from 'primeng/menubar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TabMenuModule } from 'primeng/tabmenu';
import { ContextMenuModule } from 'primeng/contextmenu';
import { StepsModule } from 'primeng/steps';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    imports: [
        CommonModule,
        MenuModule,
        MegaMenuModule,
        PanelMenuModule,
        MenubarModule,
        BreadcrumbModule,
        InputTextModule,
        TieredMenuModule,
        TabMenuModule,
        ContextMenuModule,
        StepsModule,
        EmptyDemoRoutingModule,
        RouterModule.forChild([
            {
                path: '', component: PseudoaleatorioComponent, children: [
                    { path: '', redirectTo: 'pseudoaleatorio', pathMatch: 'full' },
                    { path: 'pseudoaleatorio', component: PseudoaleatorioComponent },
                    { path: 'pseudoaleatorio2', component: PseudoaleatorioComponent2 },
                    { path: 'pseudoaleatorio3', component: PseudoaleatorioComponent3 },
                    { path: 'pseudoaleatorio4', component: PseudoaleatorioComponent4 }
                ]
            }
        ])
    ],
    declarations: [PseudoaleatorioComponent,
        PseudoaleatorioComponent2,
        PseudoaleatorioComponent3,
        PseudoaleatorioComponent4
    ],
    exports: [RouterModule]
})
export class PseudoModule  { }
