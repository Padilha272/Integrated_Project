import { HttpClient } from '@angular/common/http';

export class MeuServico {
  constructor(private http: HttpClient) {}

  fetchData() {
    this.http.get('http://localhost:8080').subscribe((data) => {
      // Manipule os dados recebidos do backend aqui.
    });
  }
}