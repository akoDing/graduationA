import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchieveInfoComponent } from './achieveInfo/achieve-info.component';
import { StuInfoComponent } from './stuInfo/stu-info.component';

const routes: Routes = [
  { path: 'stuInfo', component: StuInfoComponent, data: { title: '个人信息' } },
  { path: 'achieveInfo', component: AchieveInfoComponent, data: { title: '个人成绩' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueryInfoRoutingModule {}
