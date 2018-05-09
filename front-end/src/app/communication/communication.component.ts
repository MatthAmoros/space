import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service'

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  constructor(public communicationService:CommunicationService) { }

  ngOnInit() {
  }

}
