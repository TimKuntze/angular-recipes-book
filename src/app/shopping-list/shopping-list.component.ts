import { Component, OnInit } from '@angular/core';
import { Ingedient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingedients: Ingedient[] = [
    new Ingedient ('Apples', 5),
    new Ingedient ('Tomatoes', 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
