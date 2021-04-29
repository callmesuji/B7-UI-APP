import {Component, OnInit} from '@angular/core';
import {Contact} from '../model/contact.model';

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css']})
export class HomeComponent implements OnInit {

    title = "Templates and Directives";
    heading = "Courses Offered";
    courses = [
        "HTML",
        "CSS",
        "AJAX",
        "JSON",
        "Angular"
    ];
    imgUrl = '../../assets/types-of-data-binding.png';
    users = [
        {
            "name": "sujith",
            "email": "sujith@gmail.com",
            "isworking": false
        }, {
            "name": "Mahesh",
            "email": "mahesh@gmail.com",
            "isworking": true
        }, {
            "name": "suresh",
            "email": "suresh@gmail.com",
            "isworking": false
        }
    ];
    userprofile = {
        name: "sujith",
        email: "sujith@gmail.com",
        salary: 35000,
        dob: new Date(1999, 4, 10),
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
    colSpan = 3;
    isActive : boolean = true;
    message = "Reading Books";
    todos : any[] = [];
    todo : string = "";
    contacts : Contact[] = [
        {
            "name": "sujith",
            "email": "sujith@gmail.com",
            "mobile": "7989787426",
            dob: new Date(1999, 6, 10)
        }, {
            "name": "mahesh",
            "email": "mahesh@gmail.com",
            "mobile": "788095562",
            dob: new Date(1998, 7, 20)
        }, {
            "name": "rajesh",
            "email": "rajesh@gmail.com",
            "mobile": "9486549872",
            dob: new Date(1998, 4, 6)
        }, {
            "name": "suresh",
            "email": "sureshh@gmail.com",
            "mobile": "8879845234",
            dob: new Date(1997, 12, 24)
        },

    ]

    constructor() {}

    ngOnInit(): void {}
    changeStatus() {
        this.isActive = !this.isActive;
    }
    displaytodo() {
        if (this.todo != "") {
            this.todos.push(this.todo);
            this.todo = "";
        }
    }
    removeTodo(index : number) {
        this.todos.splice(index, 1);
    }
    deleteContact(contact : Contact){
        this.contacts  = this.contacts.filter(c=>c.name !== contact.name);
        
    }
   

}
