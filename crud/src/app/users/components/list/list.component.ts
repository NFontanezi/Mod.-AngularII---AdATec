import { Component } from '@angular/core';
import { User } from '../../Models/user.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public users: User[] = JSON.parse(localStorage.getItem('USERS')|| '[]') //tem q converter para string e caso encontre nulo, traz array vazio

}
