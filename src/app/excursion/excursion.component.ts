import { Component } from '@angular/core';
import { ExcursionBodyComponent } from './excursion-body/excursion-body.component';
import { ExcursionFiltersComponent } from './excursion-filters/excursion-filters.component';
import { ExcursionSearchComponent } from './excursion-search/excursion-search.component';
import { RouterModule } from '@angular/router';
import { SortBlockExcursionComponent } from './excursion-body/sort-block-excursion/sort-block-excursion.component';

@Component({
    selector: 'app-excursion',
    standalone: true,
    imports: [ExcursionBodyComponent, ExcursionFiltersComponent, ExcursionSearchComponent, RouterModule, SortBlockExcursionComponent],
    templateUrl: './excursion.component.html',
    styleUrl: './excursion.component.css'
})
export class ExcursionComponent {

}
