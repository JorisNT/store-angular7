import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAdmin$: Observable<boolean>;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.isAdmin$ = this.auth.isAdmin();
  }

}
