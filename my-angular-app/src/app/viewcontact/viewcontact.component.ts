import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
 
import {Contact} from '../model/contact.model';

@Component({selector: 'app-viewcontact', templateUrl: './viewcontact.component.html', styleUrls: ['./viewcontact.component.css']})
export class ViewcontactComponent implements OnInit {
    @Input()
    userData ?: Contact;
    @Output()
    removeEle = new EventEmitter<any>();

    constructor() {}

    ngOnInit(): void {}

    removeContact(contact : Contact){
        this.removeEle.emit(contact);
        
    }

}
