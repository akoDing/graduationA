import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ListComponent } from './list/list.component';
import { MajorRoutingModule } from './Major-routing.module';

const COMPONENTS = [ListComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, MajorRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class MajorModule {}
