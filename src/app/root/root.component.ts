import { Component, OnInit } from '@angular/core';
import {
  AngularFireDatabase,
  SnapshotAction,
} from '@angular/fire/compat/database';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

export interface Item {
  key: string;
  email: string;
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class RootComponent implements OnInit {
  email = '' as string;
  password = '' as string;

  formNewName = '' as string;
  formNewAge = '' as string;

  listRef: any;
  list: Observable<Item[]>;

  constructor(public auth: AuthService, private database: AngularFireDatabase) {
    this.listRef = database.list('list');
    this.list = this.listRef
      .snapshotChanges()
      .pipe(
        map((changes: SnapshotAction<Item>[]) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }

  ngOnInit() {}

  addItem() {
    this.listRef.push({
      name: this.formNewName,
      age: this.formNewAge,
      email: this.auth.user.email,
    });
    this.formNewName = '';
    this.formNewAge = '';
  }

  deleteItem(key: string) {
    this.listRef.remove(key);
  }
}
