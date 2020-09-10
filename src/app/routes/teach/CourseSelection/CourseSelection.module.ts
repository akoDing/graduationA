import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CourseSelectionRoutingModule } from './CourseSelection-routing.module';
import { ListComponent } from './list/list.component';

const COMPONENTS = [ListComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, CourseSelectionRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class CourseSelectionModule {}
