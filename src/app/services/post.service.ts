import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostById(id: string | null) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  getCommentsByPostId(postId: string | null) {
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }
}
