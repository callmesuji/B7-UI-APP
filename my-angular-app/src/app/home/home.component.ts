import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Templates and Directives";
  heading = "Courses Offered";
  courses = ["HTML","CSS","AJAX","JSON","Angular"];
  imgUrl = '../../assets/types-of-data-binding.png';
  users = [ 
            {"name":"sujith","email":"sujith@gmail.com","isworking":false},
            {"name":"Mahesh","email":"mahesh@gmail.com","isworking":true},
            {"name":"suresh","email":"suresh@gmail.com","isworking":false}
  ];
  userprofile = {
    name:"sujith",
    email:"sujith@gmail.com",
    salary : 35000,
    dob : new Date(1999,4,10)

  }
  colSpan = 3;
  isActive:boolean = true;
  message = "Reading Books"
  todos : any [] = [];
  todo : string = "";



  constructor() { }

  ngOnInit(): void {
    
  }
  changeStatus(){
      this.isActive = !this.isActive;
  }
  displaytodo(){
    if(this.todo != ""){
      this.todos.push(this.todo);
      this.todo = "";
    }
  }
  removeTodo(index : number){
    this.todos.splice(index,1);

  }
   
}
