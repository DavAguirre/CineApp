import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieServService } from '../../services/movie-serv.service';
import { movieInterface } from '../../movie.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  results: Observable<movieInterface>;
  results2: Observable<movieInterface>;
  term: string = '';
  type: string = '';
  content: any = null;

  constructor(private movieService: MovieServService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.details(id).subscribe(result => this.content = result);
  }

  searchChanged(e): void {

    this.results = this.movieService.search(this.term, this.type);
    
  }

}