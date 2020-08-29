import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Observable } from 'rxjs';
import { Post } from '../shared/interfaces';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PostGrid {
  position: number;
  title: string;
  author: string;
  date: Date;
  action: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  //posts$: Observable<Post[]>;
  displayedColumns: string[] = ['position', 'title', 'author', 'date', 'action'];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  posts: Post[];
  DataSource = new MatTableDataSource<Post>();


  constructor(private postService: PostService) { }

  ngOnInit() {
    // this.posts$ =
    this.postService.getAll().subscribe(res => {
      console.log('Result: ', res);
      console.log('paginator:', this.paginator);
      this.posts = res;
      this.DataSource = new MatTableDataSource<Post>(this.posts);
      this.DataSource.paginator = this.paginator;
      console.log('DataSource:', this.DataSource);
    });
  }

  ngAfterViewInit() {
    this.DataSource.paginator = this.paginator;
  }


}
