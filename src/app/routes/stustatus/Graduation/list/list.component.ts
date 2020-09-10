import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

interface Graduation {
  id: string;
  company: string;
  stuname: string;
  status: string;
  date: Date;
  memo: string;
}

@Component({
  selector: 'app-list',
  styleUrls: ['./list.component.less'],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  loading: boolean;
  expandForm = true;
  visible = false;
  isEdit = false;
  drawerTitle = '';

  Graduation: Graduation = {
    id: undefined,
    company: undefined,
    stuname: undefined,
    status: undefined,
    date: undefined,
    memo: undefined,
  };

  constructor(private http: HttpClient, private msg: NzMessageService) {}

  listOfData: Graduation[] = [
    {
      id: '1',
      company: 'XX信息工程有限公司',
      stuname: '王浩',
      status: '毕业',
      date: new Date(),
      memo: 'XX信息工程有限公司 优秀学生 准时毕业',
    },
    {
      id: '2',
      company: 'XX贸易有限公司',
      stuname: '张小杰',
      status: '休学',
      date: new Date(),
      memo: '',
    },
    {
      id: '3',
      company: 'XX旅游公司',
      stuname: '李冰',
      status: '毕业',
      date: new Date(),
      memo: 'XX旅游公司 优秀学生 准时毕业',
    },
  ];

  ngOnInit() {}

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
    this.listOfData = this.listOfData.filter((d) => d.id !== item.id);
  }

  add(e: MouseEvent): void {
    e.preventDefault();
    this.isEdit = false;
    this.drawerTitle = '添加毕业信息';
    this.Graduation = {
      id: undefined,
      company: undefined,
      stuname: undefined,
      status: undefined,
      date: undefined,
      memo: undefined,
    };

    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  modify(data) {
    this.isEdit = true;
    this.drawerTitle = '修改毕业信息';
    this.Graduation = { ...data };
    this.visible = true;
  }

  submit() {}
  createUser(info: any, valid: boolean, form) {
    console.log(valid);
    console.log(info);
    console.log(form);
    // tslint:disable-next-line: forin
    for (const i in form.controls) {
      form.controls[i].markAsDirty();
      form.controls[i].updateValueAndValidity();
    }
    if (valid) {
      this.listOfData = [...this.listOfData, info];
      this.visible = false;
      this.msg.success('添加成功');
    }
  }

  edit() {}
}
