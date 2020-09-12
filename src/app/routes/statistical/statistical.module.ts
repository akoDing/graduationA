import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { GraduateEmploymentModule } from './GraduateEmployment/GraduateEmployment.module';

const MODULE = [GraduateEmploymentModule];
const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, ...MODULE],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
  // exports: [...MODULE],
})
export class StatisticalModule {}
