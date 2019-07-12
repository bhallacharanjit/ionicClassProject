import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Members} from '../../app/models'

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  public items;
  public form = [
    { val: 'ABC', isChecked: true , textshow:'axys'},
    { val: 'Sausage', isChecked: false , textshow:'axys1'},
    { val: 'Mushroom', isChecked: false, textshow:'axys2' },
    { val: 'Mushroom2', isChecked: false , textshow:'axys3'}
  ];
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  // public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private http: HttpClient) {
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }

    this.callservice();
  }

  checkChanged(entry) {
    console.log("Check changed");
    alert('U changed checkbox '+entry.val);
  }

  callservice() {
    var username = '';
    var password = '';
    var url = 'https://api.backendless.com/61FA8FF0-868F-3166-FFFE-A70DFE305400/8C721BCC-DB3C-8A30-FFC6-A61E45B9F200/data/UserTable?where=EmailID%3D\''+username+'\'%20and%20Password%3D\''+password+'\'';
    this.http.get(url).subscribe(data => {
      this.items = data;
      console.log(this.items);
    });
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
