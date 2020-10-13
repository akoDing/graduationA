import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { SharedModule } from '@shared';
import { Observable } from 'rxjs';
import { TeacherOutputModel } from '../models/Teacher.model';

@Injectable({
  providedIn: SharedModule,
})
export class TeacherService {
  constructor(private http: _HttpClient) {}

  ListTeacher(): Observable<Array<TeacherOutputModel>> {
    return this.http.get('teacher/list');
  }
}
