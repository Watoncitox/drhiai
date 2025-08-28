import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-peluqueria',
  templateUrl: './peluqueria.page.html',
  styleUrls: ['./peluqueria.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PeluqueriaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
