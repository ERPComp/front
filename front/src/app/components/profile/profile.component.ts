import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  onChangeClick() {
    this.router.navigate (['change-profile']);
    // const {userId} = this.route.snapshot.params;
    // this.ngRedux.dispatch(fetchProfileAction(userId));
  }
}
