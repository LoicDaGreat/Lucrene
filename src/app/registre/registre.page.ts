import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';  // Importez le service d'authentification
import { AlertController } from '@ionic/angular';  // Pour afficher des alertes

@Component({
  selector: 'app-register',
  templateUrl: './registre.page.html',
  styleUrls: ['./registre.page.scss'],
})
export class RegisterPage {
  registerData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService,  // Injectez le service d'authentification
    private alertController: AlertController  // Injectez AlertController
  ) {};

  async onRegister() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Erreur',
        message: 'Les mots de passe ne correspondent pas.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.authService.register(this.registerData).subscribe(
      async (response) => {
        const alert = await this.alertController.create({
          header: 'Succès',
          message: 'Inscription réussie.',
          buttons: ['OK']
        });
        await alert.present();
        this.router.navigate(['/login']);
      },
      async (error) => {
        const alert = await this.alertController.create({
          header: 'Erreur',
          message: error.error.message || 'Une erreur est survenue. Veuillez réessayer.',
          buttons: ['OK']
        });
        await alert.present();
      }
    );
  }
}
