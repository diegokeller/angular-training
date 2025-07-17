import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Comment } from '../../services/post.service';

@Component({
  selector: 'app-add-comment',
  imports: [
    FormsModule
  ],
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.css'
})
export class AddCommentComponent {

  newComment: Comment = {} as Comment;

  @Output()
  newCommentAdded: EventEmitter<Comment> = new EventEmitter<Comment>();

  addComment(): void {
    console.log('Componente filho - Clicou para adicionar comentário');
    this.newCommentAdded.emit(this.newComment);
    console.log('Componente filho - Terminou de emitir');
    this.newComment = {} as Comment;
  }

}
