import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
  }
sendbackHome() {
  this.router.navigate(['']);
}
}
