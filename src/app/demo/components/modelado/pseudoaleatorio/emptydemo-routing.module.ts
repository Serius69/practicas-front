import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PseudoaleatorioComponent } from './pseudoaleatorio.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: PseudoaleatorioComponent }
    ])],
    exports: [RouterModule]
})
export class EmptyDemoRoutingModule { }
