import { Component, OnInit } from '@angular/core';
import {Member} from 'src/app/model/member.model'
import { MemberService } from '../shared/service/member.service';
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
 
  status : boolean = true;
  usernames : string[] = ["sujith","rajesh","mahesh","suresh","himesh"];
twoway :string = "";
  viewtype : string = "map";
  members : Member[] = [];
  constructor(private memberservice : MemberService) { }
  ngOnInit(): void {
    this.members =  this.memberservice.members;
  }
  changebtn(){
    this.status = !this.status;
  }
   

}
