import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import {IonButton,IonRadioGroup,IonRadio, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonButton,IonRadioGroup,IonRadio,IonItem, IonLabel, IonList,IonButtons, IonBackButton,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class StatusPage implements OnInit {
  myStatus:String = "";

  constructor(private storage:Storage, private router:Router) { }

  async onSave(){
    console.log(this.myStatus)
    await this.storage.create()
    this.router.navigate(['/home'])
    await this.storage.set("status", this.myStatus)
  }

  async ionViewWillEnter() {
    await this.storage.create();
     this.myStatus = await this.storage.get("status")
   }

  ngOnInit() {
  }

}
