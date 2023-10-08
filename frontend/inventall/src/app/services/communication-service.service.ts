import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private itemUpdatedSubject = new Subject<void>();

  // Método para notificar que se ha actualizado un elemento
  notifyItemUpdate() {
    this.itemUpdatedSubject.next();
  }

  // Observable para escuchar las notificaciones de actualización
  itemUpdated$ = this.itemUpdatedSubject.asObservable();
}
