import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '../../services/post.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts',
  imports: [NgFor, RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(
    private postService: PostService
  ) { 

  }

  ngOnInit() {
    console.log('Init Posts');
    this.postService.getAllPosts().subscribe( posts => this.posts = posts );
  }

}
