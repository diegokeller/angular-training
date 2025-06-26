import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  post?: Post;

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
  }

}
