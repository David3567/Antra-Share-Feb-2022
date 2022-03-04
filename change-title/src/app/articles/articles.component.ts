import { Component, OnInit } from '@angular/core';
import { Article } from '../interface/Article';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  title: string = 'Lorem Ipsum';
  titleColor: string = 'black';

  condition!: number;
  articles: Article[] = [
    {
      id: 1,
      title: 'What is Lorem Ipsum?',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      color: 'blue',
    },
    {
      id: 2,
      title: 'Why do we use it?',
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      color: 'black',
    },
    {
      id: 3,
      title: 'Where does it come from?',
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from section',
      color: 'red',
    },
    {
      id: 4,
      title: 'Where can I get some?',
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      color: 'green',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  onClickBtn(article:Article) {
    this.titleColor = article.color;
    this.condition = article.id;
    
  }
}
