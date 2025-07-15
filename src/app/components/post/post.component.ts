import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, PostService, Comment } from '../../services/post.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  imports: [NgFor, FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  post?: Post;
  comments: Comment[] = [];

  newComment: Comment = {} as Comment;

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

  addComment(): void {
    console.log('Adding comment...', this.newComment);
    this.comments.unshift(this.newComment);
    this.newComment = {} as Comment;
  }
}
