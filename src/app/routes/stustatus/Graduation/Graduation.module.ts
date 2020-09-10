import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { GraduationRoutingModule } from './Graduation-routing.module';
import { ListComponent } from './list/list.component';

const COMPONENTS = [ListComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, GraduationRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class GraduationModule {}
