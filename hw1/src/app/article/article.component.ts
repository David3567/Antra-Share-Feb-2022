import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  titlecolor: string = '';

  article: Article[] = [
    {
      id: 1,
      title: 'Title 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Dictum varius duis at consectetur. Dignissim sodales ut eu sem integer vitae justo eget magna. Non enim praesent elementum facilisis leo vel fringilla. Etiam sit amet nisl purus in mollis nunc sed id. Urna id volutpat lacus laoreet non curabitur. Eleifend donec pretium vulputate sapien nec. Diam volutpat commodo sed egestas egestas.',
      color: 'red'
    },
    {
      id: 2,
      title: 'Title 2',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Dictum varius duis at consectetur. Dignissim sodales ut eu sem integer vitae justo eget magna. Non enim praesent elementum facilisis leo vel fringilla. Etiam sit amet nisl purus in mollis nunc sed id. Urna id volutpat lacus laoreet non curabitur. Eleifend donec pretium vulputate sapien nec. Diam volutpat commodo sed egestas egestas.',
      color: 'blue'
    },
    {
      id: 3,
      title: 'Title 3',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Dictum varius duis at consectetur. Dignissim sodales ut eu sem integer vitae justo eget magna. Non enim praesent elementum facilisis leo vel fringilla. Etiam sit amet nisl purus in mollis nunc sed id. Urna id volutpat lacus laoreet non curabitur. Eleifend donec pretium vulputate sapien nec. Diam volutpat commodo sed egestas egestas.',
      color: 'green'
    },
    {
      id: 4,
      title: 'Title 4',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Dictum varius duis at consectetur. Dignissim sodales ut eu sem integer vitae justo eget magna. Non enim praesent elementum facilisis leo vel fringilla. Etiam sit amet nisl purus in mollis nunc sed id. Urna id volutpat lacus laoreet non curabitur. Eleifend donec pretium vulputate sapien nec. Diam volutpat commodo sed egestas egestas.',
      color: 'yellow'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  setTitleColor(color: string) {
    this.titlecolor = color;
  }

}