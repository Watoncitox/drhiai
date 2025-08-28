import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
  IonicModule
  ],
})
export class HomePage {

    servicios = [
    {
      titulo: 'Peluquería',
      descripcion: 'Cortes, coloración y peinados con estilo.',
      //imagen: '/assets/imagenes/servicios/pelo.jpg'
    },
    {
      titulo: 'Masoterapia',
      descripcion: 'Masajes relajantes y terapéuticos para tu bienestar.',
      //imagen: '/assets/imagenes/servicios/masaje.jpg'
    },
    {
      titulo: 'Uñas',
      descripcion: 'Manicure, pedicure y diseños modernos.',
      //imagen: '/assets/imagenes/servicios/unhas.jpg'
    },
    {
      titulo: 'Cuidados Faciales',
      descripcion: 'Tratamientos faciales para una piel saludable y radiante.',
      //imagen: '/assets/imagenes/servicios/facial.jpg'
    }
  ];

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
