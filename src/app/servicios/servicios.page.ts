import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonIcon } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { IonButton,IonButtons } from '@ionic/angular/standalone';



@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButton,    
    IonButtons, // <-- agrega aquí IonButton
    CommonModule,
    FormsModule
  ]
})


export class ServiciosPage {

  constructor(private alertCtrl: AlertController) {}

  async agendar() {
    const alert = await this.alertCtrl.create({
      header: 'Agendar Hora',
      message: 'Aquí podrías redirigir al formulario de reservas.',
      buttons: ['OK'],
    });
    await alert.present();
  }
  

}
