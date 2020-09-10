import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

interface CourseSelect {
  lesson: string;
  name: string;
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

  CourseSelect: CourseSelect = {
    lesson: undefined,
    name: undefined,
    date: undefined,
    memo: undefined,
  };

  constructor(private http: HttpClient, private msg: NzMessageService) {}

  listOfData: CourseSelect[] = [
    {
      lesson: '高数A',
      name: '徐浩',
      date: new Date(),
      memo: '高数A高数A高数A高数A',
    },
    {
      lesson: 'JAVA',
      name: '张清',
      date: new Date(),
      memo: '高数A高数A高数A高数A',
    },
    {
      lesson: '视觉艺术',
      name: '	张楠',
      date: new Date(),
      memo: '高数A高数A高数A高数A',
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
    this.listOfData = this.listOfData.filter((d) => d.lesson !== item.lesson);
  }

  add(e: MouseEvent): void {
    e.preventDefault();
    this.isEdit = false;
    this.drawerTitle = '添加选课';
    this.CourseSelect = {
      lesson: undefined,
      name: undefined,
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
    this.drawerTitle = '修改选课';
    this.CourseSelect = { ...data };
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
