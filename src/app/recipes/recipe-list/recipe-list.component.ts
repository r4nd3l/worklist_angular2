import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 'http://images-gmi-pmc.edge-generalmills.com/a4708fe0-a9c7-4e27-9f30-417a60b59708.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
