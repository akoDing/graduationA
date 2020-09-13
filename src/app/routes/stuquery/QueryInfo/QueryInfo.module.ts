import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { AchieveInfoComponent } from './achieveInfo/achieve-info.component';
import { QueryInfoRoutingModule } from './QueryInfo-routing.module';
import { StuInfoComponent } from './stuInfo/stu-info.component';

const COMPONENTS = [StuInfoComponent, AchieveInfoComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, QueryInfoRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class QueryInfoModule {}
