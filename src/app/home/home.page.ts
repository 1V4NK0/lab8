import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [RouterLink,IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  myStatus:string = ""
  constructor(private storage:Storage) {}


  //func to retrieve status from storage
  async ionViewWillEnter() {
   await this.storage.create();
    this.myStatus = await this.storage.get("status")
  }
}
