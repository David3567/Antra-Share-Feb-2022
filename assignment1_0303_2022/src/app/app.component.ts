import { Content } from './interfaces/content.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'assignment1_0303_2022 yoo';
  color = 'black';

  contents: Content[] = [
    {
      userId: 1,
      id: 1,
      title: 'Card1',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus ex, eos amet, accusantium distinctio sunt quibusdam nemo cupiditate porro repudiandae tempora eius suscipit esse ratione perspiciatis temporibus, dolorem delectus odit nam officiis voluptatibus odio illo! Explicabo exercitationem suscipit iure iusto provident. Pariatur fugiat quod eius! Perferendis ipsam sequi qui doloremque?',
      color: 'blue',
    },
    {
      userId: 1,
      id: 2,
      title: 'Card2',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus ex, eos amet, accusantium distinctio sunt quibusdam nemo cupiditate porro repudiandae tempora eius suscipit esse ratione perspiciatis temporibus, dolorem delectus odit nam officiis voluptatibus odio illo! Explicabo exercitationem suscipit iure iusto provident. Pariatur fugiat quod eius! Perferendis ipsam sequi qui doloremque?',
      color: 'black',
    },
    {
      userId: 1,
      id: 3,
      title: 'Card3',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus ex, eos amet, accusantium distinctio sunt quibusdam nemo cupiditate porro repudiandae tempora eius suscipit esse ratione perspiciatis temporibus, dolorem delectus odit nam officiis voluptatibus odio illo! Explicabo exercitationem suscipit iure iusto provident. Pariatur fugiat quod eius! Perferendis ipsam sequi qui doloremque?',
      color: 'red',
    },
    {
      userId: 1,
      id: 4,
      title: 'Card4',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus ex, eos amet, accusantium distinctio sunt quibusdam nemo cupiditate porro repudiandae tempora eius suscipit esse ratione perspiciatis temporibus, dolorem delectus odit nam officiis voluptatibus odio illo! Explicabo exercitationem suscipit iure iusto provident. Pariatur fugiat quod eius! Perferendis ipsam sequi qui doloremque?',
      color: 'green',
    },
  ];

  changeColorBtn(color: string) {
    console.log('This is: ', color);
    this.color = color;
  }
}
