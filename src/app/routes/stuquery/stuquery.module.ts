import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { QueryInfoModule } from './QueryInfo/QueryInfo.module';

const MODULE = [QueryInfoModule];
const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, ...MODULE],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
  // exports: [...MODULE],
})
export class StuQueryModule {}
