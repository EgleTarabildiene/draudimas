import { Component } from '@angular/core';
import { FilterOwnersComponent } from './filter-owners/filter-owners.component';
import { TableOwnersComponent } from './table-owners/table-owners.component';

@Component({
  selector: 'app-list-owners',
  standalone: true,
  imports: [FilterOwnersComponent, TableOwnersComponent],
  templateUrl: './list-owners.component.html',
  styleUrl: './list-owners.component.css'
})
export class ListOwnersComponent {

}
