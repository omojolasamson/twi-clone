import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // this will represent a new post by a user
  post: any = {};
  // this will represent your default pusher presence channel
  presence_channel: any;
  // this will represent the username of the current user
  current_user;
  // this will online a list of users online
  users_online = {};
  // list of default posts
  post_list = [
    {
      'username': 'og',
      'content': 'Making money was the plan oooo'
    },
    {
      'username': 'daddywon',
      'content': 'You can catch me on the express'
    }
  ];

  constructor(public navCtrl: NavController) {
    
  }



}