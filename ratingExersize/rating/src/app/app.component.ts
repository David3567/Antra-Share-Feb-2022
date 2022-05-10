import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rating';
  posts = [{
    "name": "Tonya Donke",
    "content": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "rate": 2
  }, {
    "name": "Melanie Shorten",
    "content": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "rate": 4
  }, {
    "name": "Christophe Cherrington",
    "content": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    "rate": 2
  }, {
    "name": "Rennie Lansdowne",
    "content": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    "rate": 4
  }, {
    "name": "Whittaker McKerrow",
    "content": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "rate": 4
  }];
  update: boolean = true;

  averageRating: number = this.posts.reduce((a,b)=> (a + b.rate),0)/this.posts.filter((post)=>post.rate>0).length;;

  ngOnInit() {
  }

  updateAverageRating() {
    this.averageRating = this.posts.reduce((a,b)=> (a + b.rate),0)/this.posts.filter((post)=>post.rate>0).length;
    
    return this.averageRating;
  }

  getAverageRating() {
    return Math.floor(this.averageRating);
  }

  updateRates(e) {
    this.posts[e.index].rate = e.rate;
    this.toggle();
  }
  
  toggle() {
    this.update = !this.update;
    setTimeout(()=>{this.update = !this.update},0);
  }
}
