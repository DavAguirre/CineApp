import { Component, OnInit } from '@angular/core';
import { MovieServService } from '../../services/movie-serv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})

export class MoviePage implements OnInit {

  content: any = null;

  constructor(private movieService: MovieServService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.details(id).subscribe(result => this.content = result);

  }

}