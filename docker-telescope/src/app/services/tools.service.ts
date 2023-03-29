import {Injectable} from '@angular/core';
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private toastController: ToastController) {
  }

  cleanName(name: string) {
    return name.replace('/', '')
  }

  async presentToast(message: string, color: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark', icon: string | null) {
    if (icon === null) {
      switch (color) {
        case "warning":
          icon = 'warning-outline'
          break
        case "danger":
          icon = 'close-circle'
          break
        default :
          icon = ''
      }
    }

    const toast = await this.toastController.create({
      message: message,
      color: color,
      icon: icon,
      duration: 3000,
      position: 'bottom'
    });

    await toast.present();
  }


}
