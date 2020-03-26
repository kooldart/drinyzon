import { Injectable } from '@angular/core';
import { IItem } from './item'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from './category';

@Injectable({
  providedIn: 'root'
})

export class ItemServiceService {

	GetCategories() : Observable<ICategory[]> {
		return this.http.get<ICategory[]>("../assets/JSONdata/categories.json");
	}

	GetItems() : Observable<IItem[]> {
		return this.http.get<IItem[]>("../assets/JSONdata/items.json");
	}

	constructor(private http : HttpClient) { }

}
