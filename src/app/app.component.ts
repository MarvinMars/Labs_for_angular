import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  posts: Post[] = [
    {title:"React", text: "JavaScript-библиотека для создания пользовательских интерфейсов", id: 1},
    {title:"Angular", text: "Angular is an app-design framework and development platform for creating efficient and sophisticated single-page apps.", id: 2},
    {title:"Vue", text: "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces", id: 3},
    {title:"Node.js", text: "Node.js® — це JavaScript–оточення побудоване на JavaScript–рушієві Chrome V8.", id: 4}
  ];

  // Я поставил дефолтное значение которое будет высчитываться из количества
  // дефолтных постов, а не 1 как по заданию
  // потому что мы уже имеем 4 стандартных поста
  // и при удалении поста 1-4 будут удаляться и стандартные посты тоже
  // я решил реализовать єто сдеась а не на єтапе отправки поста что бы иметь доступ
  // что бы иметь доступ к переменной posts без прокидыкания переменных
  postID = this.posts.length + 1;

  updatePosts(event) {
    event.id = this.postID++;
    this.posts.unshift(event);
  }

  removeIdPost(id:number) {
    this.posts = this.posts.filter((item)=>item.id!=id)
  }

  searchText = '';
  searchBtn = false;

  onFilterToggle(event) {
    this.searchBtn = !this.searchBtn;
  }
  get filter()   { return this.searchBtn ? 'shortDate' : 'fullDate'; }
  onChangeSearch(event) {
    this.searchText = event
  }

}
export  interface  Post {
  title: string
  text: string
  id?: number
}
