import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  inputText = '';
  status = '';

  constructor(private http: HttpClient) {}

  sendData() {
    this.http.post('http://localhost:5000/api/save', this.inputText,
      { responseType: 'json' })
      .subscribe({
        next: () => this.status = 'Сохранено!',
        error: () => this.status = 'Ошибка отправки'
      });
  }
}