import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { MajorModule } from './Major/Major.module';

const MODULE = [MajorModule];
const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, ...MODULE],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
  // exports: [...MODULE],
})
export class EducationalModule {}
