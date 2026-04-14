import { inject, Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CrimeModel } from "../models/crime.model";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CrimeService {

  private http = inject(HttpClient);

  crimes = signal<CrimeModel[]>([]);

  private baseUrl = environment.baseApiUrl;


  getAllCrimes() {
    this.http.get<CrimeModel[]>(this.baseUrl).subscribe(data => {
      this.crimes.set(data); // 🔥 mise à jour auto UI
    });
  }

  addCrime(crime: CrimeModel) {
    return this.http.post(this.baseUrl, crime).subscribe(() => {
      this.getAllCrimes(); // refresh
    });
  }

  getCrime(id: string): any
  {
    return this.http.get<CrimeModel[]>(this.baseUrl + '/' + id);
  }

  createCrime(crimes: any): any
  {
    return this.http.post<CrimeModel[]>(this.baseUrl, crimes, {responseType: 'text' as 'json'});
  }

  updateCrime(crime: CrimeModel, id: string): any
  {
    return this.http.put<CrimeModel[]>(this.baseUrl + '/' + id, crime);
  }

  deleteCrime(id: string): any
  {
    return this.http.delete<CrimeModel[]>(this.baseUrl + '/' + id);
  }
  getCrimeById(id: number): any
  {
    return this.http.get<CrimeModel[]>(this.baseUrl + '/' + id);
   }

}