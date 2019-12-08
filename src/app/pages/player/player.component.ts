import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  constructor() { }

  files: Array<any> = [
    { name: "First Song", artist: "Inder" },
    { name: "Second Song", artist: "You" }
  ];
  state;
  currentFile: any = {};

  isFirstPlaying() {
    return false;
  }
  isLastPlaying() {
    return true;
  }
}