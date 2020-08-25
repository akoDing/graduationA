import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ListComponent } from './list/list.component';
import { TeacherRoutingModule } from './Teacher-routing.module';

const COMPONENTS = [ListComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, TeacherRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class TeacherModule {}
