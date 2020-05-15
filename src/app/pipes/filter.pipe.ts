import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "../app.component";

@Pipe({
  name: 'filter',
})

export class FilterPipe implements PipeTransform {
  transform(post: Post[], Search: string, searchBtn:boolean): Post[] {
    if(!Search.trim()) {
      return post
    } else {
      return post.filter(item=>{
        if( searchBtn ){
          return item.text.toLowerCase().includes(Search.toLowerCase())
        } else {
          return item.title.toLowerCase().includes(Search.toLowerCase())
        }
      })
    }
  }
}

