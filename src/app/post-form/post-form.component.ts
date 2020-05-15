import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  title='';
  text = '';
  styleToggle = false;
  @Input() post: Post;
  @Output() addPostUser: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild('myInputText',{static: false}) myinputText: ElementRef;
  @ViewChild('myInputTitle',{static: false}) myinputTitle: ElementRef;

  Searching = '';

  @Input() searchBtn;
  @Output() Search = new EventEmitter<string>();

  onChangeSearch(change: string) {
    this.Search.emit(change)
  }

  @Output() FilterToggle = new EventEmitter<string>();

  onChangeFilter () {
    this.FilterToggle.emit()
  }

  constructor() {
  }

  ngOnInit(): void {

  }

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
      };
      this.addPostUser.emit(post);
      console.log('Add post: ', post);
      this.text = '';
      this.title = '';
    }
  }
  onLoadDefault () {
    this.styleToggle=!this.styleToggle;
    if(this.styleToggle) {
      this.myinputText.nativeElement.style.color = "red";
      this.myinputTitle.nativeElement.style.fontWeight = "bold"
    } else {
      this.myinputText.nativeElement.style.color = 'black';
      this.myinputTitle.nativeElement.style.fontWeight = "normal"

    }
  }
}
