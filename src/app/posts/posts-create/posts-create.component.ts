import { Component } from '@angular/core';

@Component({
  selector: 'posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent {

  NewPost = '';
  PostInput = '';

  onAddPost() {
    this.NewPost = this.PostInput;
  }
}
