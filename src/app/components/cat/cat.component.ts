import { Component, OnInit } from '@angular/core';
import {CatsService} from "../../services/cats.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Cat} from "../../model/cat.interface";

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  cat!: Cat

  constructor(
    private catsService: CatsService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const identifier = this.activateRoute.snapshot.paramMap.get('id');
    // @ts-ignore
    this.catsService.getCatById(identifier).subscribe((cat) => {
      if (!cat){
        return this.router.navigateByUrl('/');
      }

      this.cat = cat[0];
    })
  }
}
