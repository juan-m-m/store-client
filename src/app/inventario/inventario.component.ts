import {Component, Inject, OnInit} from '@angular/core';
import {Item} from '../shared/item';
import {ItemService} from '../services/item.service';
import {Category} from '../shared/Category';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {
  items: Item[];
  categories: Category[];

  constructor(private itemService: ItemService, private categoryService: CategoryService,
              @Inject('BaseURL') private BaseURL) {
  }

  ngOnInit(): void {
    this.categoryService.getCategorys().subscribe(categories => {
      this.categories = categories;
      console.log(categories);
    });
    this.itemService.getItemsInstances().subscribe(items => {
      this.items = items;
      console.log(items);
    });
  }
}
