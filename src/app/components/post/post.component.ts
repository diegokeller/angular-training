import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post, PostService, Comment } from '../../services/post.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AddCommentComponent} from '../add-comment/add-comment.component';

@Component({
  selector: 'app-post',
  imports: [NgFor, FormsModule, NgIf, AddCommentComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  post?: Post;
  comments: Comment[] = [];
  postId?: number;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      this.isLoading = true;

      console.log('Rota mudou');
      this.postId = Number(params.get('id'));
      if (this.postId) {
        console.log('Buscand post');
        this.postService.getPostById(this.postId).subscribe(post => {
          this.post = post;
          console.log('Buscou o post');

          this.postService.getCommentsByPostId(this.postId!!).subscribe(comments => {
            this.comments = comments;
            console.log('Buscou os comentários');
            this.isLoading = false;
          });
        });
      }
    });
  }

  addComment(newComment: Comment): void {
    console.log('Adicionando comentário...', newComment);
    this.comments.unshift(newComment);
  }

  nextPost(): void {
    const nextId = this.postId!! + 1;
    this.router.navigate(['/post', nextId]);
  }

  previousPost(): void {
    const previousId = this.postId!! - 1;
    this.router.navigate(['/post', previousId]);
  }

  isFirstPost(): boolean {
    return this.postId!! === 1;
  }

  isLastPost(): boolean {
    return this.postId!! === 100;
  }
}
