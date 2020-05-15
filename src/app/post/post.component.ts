import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  constructor() { }

  ngOnInit(): void {
  }
  @Output() postid: EventEmitter<number> = new EventEmitter<number>();
  removePost() {
    this.postid.emit(this.post.id)
  }

}
