import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { AchievementRoutingModule } from './Achievement-routing.module';
import { ListComponent } from './list/list.component';

const COMPONENTS = [ListComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, AchievementRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class AchievementModule {}
