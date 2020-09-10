import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CourseSelectionModule } from './CourseSelection/CourseSelection.module';

const MODULE = [CourseSelectionModule];
const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, ...MODULE],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
  // exports: [...MODULE],
})
export class TeachModule {}
