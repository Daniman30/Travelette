import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PackageBodyComponent } from './package-body/package-body.component';
import { PackageFiltersComponent } from './package-filters/package-filters.component';
import { PackageSearchComponent } from './package-search/package-search.component';
import { SortBlockPackageComponent } from './package-body/sort-block-package/sort-block-package.component';

@Component({
    selector: 'app-package',
    standalone: true,
    imports: [RouterModule, PackageBodyComponent, PackageFiltersComponent, PackageSearchComponent, SortBlockPackageComponent],
    templateUrl: './package.component.html',
    styleUrl: './package.component.css'
})
export class PackageComponent {

}
