import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { GraduationModule } from './Graduation/Graduation.module';

const MODULE = [GraduationModule];
const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, ...MODULE],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
  // exports: [...MODULE],
})
export class StustatusModule {}
