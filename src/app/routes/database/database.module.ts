import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { StudentModule } from './Student/Student.module';
import { TeacherModule } from './Teacher/Teacher.module';

const MODULE = [TeacherModule, StudentModule];
const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, ...MODULE],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
  // exports: [...MODULE],
})
export class DatabaseModule {}
