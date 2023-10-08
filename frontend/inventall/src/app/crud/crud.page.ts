import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ItemsService } from '../services/items.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {

  newItem: any = {
    name: '',
    quantity: 0,
    entry_date: '',
    description: ''
  };

  constructor(private router: Router, private itemsService: ItemsService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  gotoHome() {
    this.router.navigateByUrl("/home");
  }

  async createNewItem() {
    try {
      await this.itemsService.createItem(this.newItem).toPromise();
      console.log('Elemento creado con éxito.');
      // Puedes redirigir a la página de inicio u otra página después de crear el elemento
      // Por ejemplo, redirigir a la página de inicio:
      this.navCtrl.navigateRoot('/home');
    } catch (error) {
      console.error('Error al crear el elemento:', error);
    }
  }
  
}
