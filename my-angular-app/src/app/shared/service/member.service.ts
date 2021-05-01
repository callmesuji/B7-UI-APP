import { Injectable } from '@angular/core';
import { Member } from 'src/app/model/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
members : Member[]= [];
  constructor() {
    this.members = [
      {"name":"sujith","card":"gold"},
      {"name":"rajesh","card":"titanium"},
      {"name":"mahesh","card":"silver"},
      {"name":"suresh","card":"platinum"},
      {"name":"rupesh","card":"diamond"},
    ]
   }
}
