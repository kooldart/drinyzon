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
	currentCatItems : IItem[];
	currentItemsLength : number = 0;
	categories : ICategory[];
	pageOptions : number[] = [
		1, 2, 3, 4
	];
	currentPages : number;
	activePage : number = 0;
	currentCat : string;

	constructor(private itemService : ItemServiceService) {
		this.itemService.GetItems().subscribe(data => { this.items = data; this.currentCatItems = data; this.currentItemsLength = data.length; });
		this.itemService.GetCategories().subscribe(cat => { this.categories = cat; this.currentCat = cat[0].name; });
		this.currentPages = this.pageOptions[0];
	}

	ChangePage(to) {
		this.activePage = to;
	}

	GetMaxPages() : number {
		return Math.ceil(this.currentItemsLength / this.currentPages);
	}

	GetItems() : IItem[] {
		var elems = this.activePage * this.currentPages;
		var cutOutItems = this.currentCatItems.slice(elems, elems + this.currentPages);
		return cutOutItems;
	}

	PageSelect(pg){
		this.currentPages = parseInt(pg);
		this.activePage = 0;
	}

	CatSelect(currentCat) {
		this.currentCat = currentCat;
		this.currentCatItems = this.items.filter(item => (this.currentCat == "All" || this.currentCat == item.category));
		this.currentItemsLength = this.currentCatItems.length;
	}

	ngOnInit(): void {
		}

}
