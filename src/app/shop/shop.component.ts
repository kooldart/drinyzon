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

	items : IItem[];

	categories : ICategory[];

	pageOptions : number[] = [
		1, 2, 3, 4
	];

	currentPages : number;

	totalItems : number = 1;

	activePage : number = 0;

	currentCat : string;

	constructor(private itemService : ItemServiceService) { }

	ChangePage(to) {
		this.activePage = to;
	}

	GetMaxPages() : number {
		return Math.ceil(this.totalItems / this.currentPages);
	}

	GetItems() : IItem[] {
		if (typeof this.items != 'undefined'){
			var elems = parseInt(this.activePage) * parseInt(this.currentPages);
			var cutOutItems = this.items.slice(elems, parseInt(elems) + parseInt(this.currentPages));
			return cutOutItems;
		}
		else return this.items;
	}

	PageSelect(pg){
		this.currentPages = pg;
		this.activePage = 0;
	}

	CatSelect(currentCat) {
		this.currentCat = currentCat;
	}

	ngOnInit(): void {
		this.itemService.GetItems().subscribe(data => (this.items = data, this.totalItems = data.length));
		this.itemService.GetCategories().subscribe(cat => (this.categories = cat, this.currentCat = cat[0].name));
		this.currentPages = this.pageOptions[0];
	}

}
