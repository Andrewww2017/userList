import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  login!: string;
  pass!: string;
  email!: string;
  editIndex!: number;
  isEdit = false;
  arrUsers: Array<IUser> = []

  constructor() { }

  ngOnInit(): void {
  }

  addButton(): void {
    if (this.login && this.pass && this.email) {
      let person = new User(this.login, this.pass, this.email);
      this.arrUsers.push(person);
      this.login = '';
      this.pass = '';
      this.email = '';
    }
  }
  saveButton(): void {
    this.arrUsers[this.editIndex].login = this.login;
    this.arrUsers[this.editIndex].email = this.email;
    this.arrUsers[this.editIndex].password = this.pass;
    this.login = '';
    this.email = '';
    this.pass = '';
    this.isEdit = false;
  }
  editBtn(index: number): void {
    this.login = this.arrUsers[index].login;
    this.email = this.arrUsers[index].email;
    this.pass = this.arrUsers[index].password;
    this.editIndex = index;
    this.isEdit = true;
  }

  
  deleteBtn(index: number): void {
    this.arrUsers.splice(index, 1);
  }
}



export interface IUser {
  login: string;
  password: string;
  email: string;
}

export class User implements IUser {
  constructor(
    public login: string,
    public password: string,
    public email: string
  ) { }
}