import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

interface Achievement {
  id: string;
  stuName: string;
  className: string;
  score: number;
  temp: string;
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

  Achievement: Achievement = {
    id: undefined,
    stuName: undefined,
    className: undefined,
    score: undefined,
    temp: undefined,
  };

  constructor(private http: HttpClient, private msg: NzMessageService) {}

  listOfData: Achievement[] = [
    {
      id: '0101',
      stuName: '王浩',
      className: '多媒体技术',
      score: 59,
      temp: '不及格',
    },
    {
      id: '0101',
      stuName: '刘美',
      className: '摄影',
      score: 60,
      temp: '及格',
    },
    {
      id: '0101',
      stuName: '王思',
      className: '体育（B）',
      score: 79,
      temp: '及格',
    },
    {
      id: '0101',
      stuName: '罗嘉良',
      className: '高数（A）',
      score: 80,
      temp: '良好',
    },
    {
      id: '0101',
      stuName: '丁宁',
      className: '书法',
      score: 89,
      temp: '良好',
    },
    {
      id: '0101',
      stuName: '善雄',
      className: 'JAVA',
      score: 90,
      temp: '优秀',
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
    this.drawerTitle = '添加专业';
    this.Achievement = {
      id: undefined,
      stuName: undefined,
      className: undefined,
      score: undefined,
      temp: undefined,
    };

    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  modify(data) {
    this.isEdit = true;
    this.drawerTitle = '修改专业';
    this.Achievement = { ...data };
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
