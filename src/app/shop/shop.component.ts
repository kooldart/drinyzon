import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../item-service.service';
import { IItem } from '../item';
import { ICategory } from '../category';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private itemService : ItemServiceService) { }

	items : IItem[];

	categories : ICategory[];

	ngOnInit(): void {
		this.itemService.GetItems().subscribe(data => this.items = data);
		this.itemService.GetCategories().subscribe(cat => this.categories = cat);
	}

}
