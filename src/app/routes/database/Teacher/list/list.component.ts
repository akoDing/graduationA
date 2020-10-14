import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TeacherService } from 'src/app/shared/services/apis/Teacher.service';

interface Teacher {
  id: string;
  name: string;
  gender: number;
  birthday: Date;
  education: number;
  phone: number;
  title: string;
  post: string;
  department: string;
  password: number;
  pid?: string;
}

@Component({
  selector: 'app-list',
  styleUrls: ['./list.component.less'],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  loading = true;
  expandForm = true;
  visible = false;
  isEdit = false;
  drawerTitle = '';

  Teacher: Teacher = {
    department: undefined,
    education: undefined,
    gender: undefined,
    id: undefined,
    birthday: undefined,
    name: undefined,
    password: undefined,
    phone: undefined,
    pid: undefined,
    post: undefined,
    title: undefined,
  };

  constructor(private http: _HttpClient, private msg: NzMessageService, private teacherService: TeacherService) {}

  listOfData: Teacher[] = [
    {
      id: '20200001001',
      name: '王淑芳',
      gender: 2,
      birthday: new Date(),
      education: 2,
      phone: 13761588784,
      pid: '000000000000000000',
      title: '高级',
      post: '院（系）教务人员',
      department: '理学院',
      password: 123456,
    },
    {
      id: '20200001002',
      name: '李帅',
      gender: 1,
      birthday: new Date(),
      education: 3,
      phone: 13774888784,
      pid: '111111111111111111',
      title: '副高级',
      post: '教师',
      department: '文学院',
      password: 123456,
    },
    {
      id: '20200001003',
      name: '王男',
      gender: 2,
      birthday: new Date(),
      education: 1,
      phone: 13760088784,
      pid: '222222222222222222',
      title: '中级',
      post: '教师',
      department: '马克思学院',
      password: 123456,
    },
  ];

  ngOnInit() {
    this._getListTeacher();
  }

  reset(e: MouseEvent) {
    e.preventDefault();
  }

  select() {
    this._getListTeacher();
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
    this.drawerTitle = '添加教师';
    this.Teacher = {
      department: undefined,
      education: undefined,
      gender: undefined,
      id: undefined,
      birthday: undefined,
      name: undefined,
      password: undefined,
      phone: undefined,
      pid: undefined,
      post: undefined,
      title: undefined,
    };

    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  modify(data) {
    this.isEdit = true;
    this.drawerTitle = '修改教师';
    this.Teacher = { ...data };
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

  _getListTeacher() {
    this.loading = true;
    this.teacherService.ListTeacher().subscribe((res) => {
      this.listOfData = res;
      this.loading = false;
    });
  }
}
