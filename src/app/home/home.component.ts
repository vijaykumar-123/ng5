import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an Item';
  goalText: string;
  goals = [];
  constructor() { }

  ngOnInit() { // intiated when component itself loads
    this.itemCount = this.goals.length; // dynamic value for itemCount
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }

}
