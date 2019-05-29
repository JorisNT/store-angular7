import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Mode } from 'src/app/models/mode';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.css']
})
export class ModeComponent implements OnInit, OnDestroy {
  modes: Mode[] = [];
  selectedMode: Mode;
  sub: Subscription;

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.initModes();
  }

  handleChangeMode(event) {
    this.auth.changeStatus(event.value as Mode);
  }

  private initModes() {
    this.modes = Object.values(Mode);
    this.sub = this.auth.status().subscribe(mode => {
      this.selectedMode = mode;
      if (this.selectedMode === Mode.Anonymous) this.router.navigate(['/']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
