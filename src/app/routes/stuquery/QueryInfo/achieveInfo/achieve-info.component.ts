import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-achieve-info',
  styleUrls: ['./achieve-info.component.less'],
  templateUrl: './achieve-info.component.html',
})
export class AchieveInfoComponent implements OnInit, AfterViewInit {
  loading: boolean;
  expandForm = true;
  visible = false;
  isEdit = false;
  drawerTitle = '';

  constructor(private http: HttpClient, private msg: NzMessageService) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  reset(e: MouseEvent) {
    e.preventDefault();
  }

  select() {
    this.msg.info('搜索表单');
  }

  cancel(): void {
    /* this.msg.info('click cancel'); */
  }

  confirm(item): void {
    this.msg.info('click confirm');
    console.log(item);
    // 删除数据
    // this.listOfData = this.listOfData.filter((d) => d.id !== item.id);
  }

  close(): void {
    this.visible = false;
  }

  submit() {}

  edit() {}
}
