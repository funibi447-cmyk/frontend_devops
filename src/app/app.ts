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
  saveStatus = '';
  loadDataResult = '';

  constructor(private http: HttpClient) {}

  sendData() {
    this.http.post('http://localhost:5000/api/save', this.inputText,
      { responseType: 'json' })
      .subscribe({
        next: () => {
          this.saveStatus = 'Сохранено!';
          this.inputText = '';
        },
        error: () => this.saveStatus = 'Ошибка отправки'
      });
  }

  loadData() {
    this.http.get<{ data: string }>('http://localhost:5000/api/load')
      .subscribe({
        next: (res) => this.loadDataResult = res.data,
        error: () => this.loadDataResult = 'Ошибка загрузки'
      });
  }
}