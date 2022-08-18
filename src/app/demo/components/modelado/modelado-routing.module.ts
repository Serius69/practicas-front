import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'pseudoaleatorio', loadChildren: () => import('./pseudoaleatorio/pseudoaleatorio.module').then(m => m.PseudoModule) },
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
