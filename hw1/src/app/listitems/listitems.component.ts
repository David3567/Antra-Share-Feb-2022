import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from '../interfaces/list.model';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.css'],
})
export class ListitemsComponent implements OnInit {
  @Output() colorEmiter = new EventEmitter();

  selected: Number = 0;

  listitems: Item[] = [
    {
      id: 1,
      color: "blue",
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      id: 2,
      color: "black",
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
    {
      id: 3,
      color: "red",
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
    },
    {
      id: 4,
      color: "green",
      title: 'eum et est occaecati',
      body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  selectitem(id: Number) {
    console.log("listitems selected item id is " + id);
    this.selected = id;
    this.colorEmiter.emit(this.listitems[+id - 1].color)
  }

}
