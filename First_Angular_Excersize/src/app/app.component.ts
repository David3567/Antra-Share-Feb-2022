import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "First_Angular_Excersize";

  titleColor = 'red';

  newsList: any = [
    {
      id: 0,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      location: "MADISON. WI",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta ab nam consequatur accusamus asperiores officiis qui aliquid quod error non a ipsum porro voluptatibus, hic natus placeat quia amet! Impedit dolor eum quasi velit? Explicabo, suscipit eaque quod eos ipsam, excepturi provident animi iste fugiat, unde sapiente. Id, nemo!",
      color: "blue",
      hasBoxShadow: false
    },
    {
      id: 1,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      location: "MADISON. WI",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta ab nam consequatur accusamus asperiores officiis qui aliquid quod error non a ipsum porro voluptatibus, hic natus placeat quia amet! Impedit dolor eum quasi velit? Explicabo, suscipit eaque quod eos ipsam, excepturi provident animi iste fugiat, unde sapiente. Id, nemo!",
      color: "black",
      hasBoxShadow: false
    },
    {
      id: 2,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      location: "MADISON. WI",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta ab nam consequatur accusamus asperiores officiis qui aliquid quod error non a ipsum porro voluptatibus, hic natus placeat quia amet! Impedit dolor eum quasi velit? Explicabo, suscipit eaque quod eos ipsam, excepturi provident animi iste fugiat, unde sapiente. Id, nemo!",
      color: "red",
      hasBoxShadow: false
    },
    {
      id: 3,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      location: "MADISON. WI",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta ab nam consequatur accusamus asperiores officiis qui aliquid quod error non a ipsum porro voluptatibus, hic natus placeat quia amet! Impedit dolor eum quasi velit? Explicabo, suscipit eaque quod eos ipsam, excepturi provident animi iste fugiat, unde sapiente. Id, nemo!",
      color: "green",
      hasBoxShadow: false
    },
  ];

  setColor(index: number) {
    this.titleColor = this.newsList.filter((topic) => topic.id === index)[0].color;

    this.newsList = this.newsList.map((topic) => {
      if (topic.id === index) {
        topic.hasBoxShadow = !topic.hasBoxShadow;
      } else {
        topic.hasBoxShadow = false;
      }
      return topic;
    });
  }
}
