import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

interface Student {
  id: string;
  department: string;
  class: string;
  major: string;
  name: string;
  gender: number;
  birthday: Date;
  education: number;
  phone: number;
  password: number;
  pid: string;
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

  Student: Student = {
    id: undefined,
    department: undefined,
    class: undefined,
    major: undefined,
    name: undefined,
    gender: undefined,
    birthday: undefined,
    education: undefined,
    phone: undefined,
    password: undefined,
    pid: undefined,
  };

  constructor(private http: HttpClient, private msg: NzMessageService) {}

  listOfData: Student[] = [
    {
      id: '20200010101001',
      department: '计算机系',
      class: '20JSJ',
      major: '计算机科学与技术',
      name: '徐浩',
      gender: 1,
      birthday: new Date(),
      education: 2,
      phone: 13761588784,
      pid: '000000000000000000',
      password: 123456,
    },
    {
      id: '20200010101002',
      department: '文学院',
      class: '20wx',
      major: '文学',
      name: '张清',
      gender: 2,
      birthday: new Date(),
      education: 2,
      phone: 13761588700,
      pid: '000000000000000000',
      password: 123456,
    },
    {
      id: '20200010101003',
      department: '计算机系',
      class: '20RJGC',
      major: '软件工程',
      name: '张楠',
      gender: 1,
      birthday: new Date(),
      education: 2,
      phone: 10001588700,
      pid: '000000000000000000',
      password: 123456,
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
    this.drawerTitle = '添加学生';
    this.Student = {
      id: undefined,
      department: undefined,
      class: undefined,
      major: undefined,
      name: undefined,
      gender: undefined,
      birthday: undefined,
      education: undefined,
      phone: undefined,
      password: undefined,
      pid: undefined,
    };

    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  modify(data) {
    this.isEdit = true;
    this.drawerTitle = '修改学生';
    this.Student = { ...data };
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
