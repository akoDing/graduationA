import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

interface Major {
  id: string;
  name: string;
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

  Major: Major = {
    id: undefined,
    name: undefined,
    memo: undefined,
  };

  constructor(private http: HttpClient, private msg: NzMessageService) {}

  listOfData: Major[] = [
    {
      id: '0101',
      name: '哲学',
      memo: '哲学(英文：Philosophy，希腊语：Φιλοσοφία)是对基本和普遍之问题的研究的学科，是关于世界观的理论体系。',
    },
    {
      id: '0201',
      name: '经济学',
      memo: '经济学是研究人类社会在各个发展阶段上的各种经济活动和各种相应的经济关系及其运行、发展的规律的学科。',
    },
    {
      id: '0301',
      name: '法学',
      memo: '法学，又称法律科学，是以法律、法律现象以及其规律性为研究内容的科学，它是研究与法相关问题的专门学问。',
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
    this.Major = {
      id: undefined,
      name: undefined,
      memo: undefined,
    };

    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  modify(data) {
    this.isEdit = true;
    this.drawerTitle = '修改专业';
    this.Major = { ...data };
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
