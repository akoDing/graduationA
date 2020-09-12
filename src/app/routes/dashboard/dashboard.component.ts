import { Component, OnInit } from '@angular/core';
import { SettingsService, User, _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.less'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  get user(): User {
    return this.settings.user;
  }

  constructor(private http: _HttpClient, private settings: SettingsService) {}

  ngOnInit() {}
}
