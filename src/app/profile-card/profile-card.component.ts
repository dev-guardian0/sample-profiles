import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  @Output() ExploreMe = new EventEmitter();
  startTadaAnimation = false;
  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.startTadaAnimation = !this.startTadaAnimation;
    }, 6000);
  }

  onExploreMeClick() {
    this.ExploreMe.emit();
  }
}
