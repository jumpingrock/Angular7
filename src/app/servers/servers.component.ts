import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = 'Testserver';
  serverCreationStatus = 'No server was created!';
  serverCreated = false;
  constructor() {

    setTimeout(() => {
      this.allowNewServer = false;
    },2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = (this.serverName + ' is created!');
  }
  onUpdateServerName (event) {
    this.serverName = event.target.value;
    console.log(this.serverName);
  }
}
