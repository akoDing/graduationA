import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CourseTeachRoutingModule } from './CourseTeach-routing.module';
import { ListComponent } from './list/list.component';

const COMPONENTS = [ListComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, CourseTeachRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class CourseTeachModule {}
