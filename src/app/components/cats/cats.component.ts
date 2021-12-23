import { Component, OnInit } from '@angular/core';
import {CatsService} from "../../services/cats.service";
import {Cat} from "../../model/cat.interface";

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  cats: Cat[] = []
  loaded!: boolean;

  constructor(private catsService: CatsService) {
    this.loaded = true;
  }

  ngOnInit(): void {
    this.catsService.getAllCats().subscribe((cats) => {
      this.cats = cats
      this.loaded = false;
    });
  }

}
