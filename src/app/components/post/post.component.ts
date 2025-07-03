import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, PostService, Comment } from '../../services/post.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [NgFor],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  post?: Post;
  comments: Comment[] = [];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { 

  }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    console.log(`Post ID: ${postId}`);
    this.postService.getPostById(postId!!).subscribe(post => {
      this.post = post;
    });

    this.postService.getCommentsByPostId(postId!!).subscribe(comments => {
      this.comments = comments;
    });
  }

}
