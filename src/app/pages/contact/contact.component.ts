import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  i18n = inject(I18nService);
  formulario = { nombre: '', email: '', telefono: '', mensaje: '' };
  enviado = signal(false);
  enviando = signal(false);
  telefono = '+34 602 66 95 75';
  direccion = 'C. de Lavapiés, 12, Centro, 28012 Madrid';
  email = 'hola@tabernadeallado.es';

  get labels() {
    const lang = this.i18n.currentLanguage();
    if (lang === 'en') {
      return {
        title: 'Contact Us',
        subtitle: 'Have questions? Want to reserve? Write or call us',
        sendMessage: 'Send us a message',
        name: 'Name *',
        email: 'Email',
        phone: 'Phone',
        message: 'Message *',
        send: 'Send Message',
        sending: 'Sending...',
        sent: 'Message sent! We will reply shortly',
        whereWeAre: 'Where we are',
        address: 'Address',
        phoneLabel: 'Phone',
        whatsapp: 'WhatsApp',
        chatWhatsapp: 'Chat on WhatsApp', placeholder: 'How can we help you?'
      };
    }
    if (lang === 'fr') {
      return {
        title: 'Contactez-nous',
        subtitle: 'Vous avez des questions? Vous voulez réserver? Écrivez ou appelez-nous',
        sendMessage: 'Envoyez-nous un message',
        name: 'Nom *',
        email: 'Email',
        phone: 'Téléphone',
        message: 'Message *',
        send: 'Envoyer le Message',
        sending: 'Envoi en cours...',
        sent: 'Message envoyé! Nous répondrons bientôt',
        whereWeAre: 'Où nous sommes',
        address: 'Adresse',
        phoneLabel: 'Téléphone',
        whatsapp: 'WhatsApp',
        chatWhatsapp: 'Discuter sur WhatsApp', placeholder: 'Comment pouvons-nous vous aider?'
      };
    }
    // Español
    return {
      title: 'Contacto',
      subtitle: '¿Tienes preguntas? ¿Quieres reservar? Escríbenos o llámanos',
      sendMessage: 'Envíanos un mensaje',
      name: 'Nombre *',
      email: 'Email',
      phone: 'Teléfono',
      message: 'Mensaje *',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
      sent: '¡Mensaje enviado! Te respondemos en breve',
      whereWeAre: 'Dónde estamos',
      address: 'Dirección',
      phoneLabel: 'Teléfono',
      whatsapp: 'WhatsApp',
      chatWhatsapp: 'Chatear en WhatsApp', placeholder: 'En qué podemos ayudarte?'
    };
  }

  enviarMensaje() {
    if (!this.formulario.nombre || !this.formulario.mensaje) {
      alert('Por favor, completa los campos obligatorios');
      return;
    }
    this.enviando.set(true);
    setTimeout(() => {
      this.enviando.set(false);
      this.enviado.set(true);
      this.formulario = { nombre: '', email: '', telefono: '', mensaje: '' };
    }, 1500);
  }
}
