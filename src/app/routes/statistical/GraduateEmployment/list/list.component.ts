import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { G2BarData } from '@delon/chart/bar';
import { NzMessageService } from 'ng-zorro-antd/message';

import { Chart } from '@antv/g2';

interface GraduateEmployment {
  depart: string;
  major: string;
  line1: string;
  line2: string;
  lineA: string;
  lineB: string;
}

@Component({
  selector: 'app-list',
  styleUrls: ['./list.component.less'],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit, AfterViewInit {
  loading: boolean;
  expandForm = true;
  visible = false;
  isEdit = false;
  drawerTitle = '';

  GraduateEmployment: GraduateEmployment = {
    depart: undefined,
    major: undefined,
    line1: undefined,
    line2: undefined,
    lineA: undefined,
    lineB: undefined,
  };

  constructor(private http: HttpClient, private msg: NzMessageService) {}

  listOfData: GraduateEmployment[] = [
    {
      depart: '文学院',
      major: '文学',
      line1: '85.2%',
      line2: '84%',
      lineA: '96.2%',
      lineB: '94%',
    },
    {
      depart: '理学院',
      major: '理学',
      line1: '92%',
      line2: '91.3%',
      lineA: '94.2%',
      lineB: '97%',
    },
    {
      depart: '计算机系',
      major: '艺术学',
      line1: '96%',
      line2: '95.8%',
      lineA: '93.2%',
      lineB: '95%',
    },
  ];

  ngOnInit() {}

  ngAfterViewInit() {
    this.chartDataDepart();
    this.chartDataMajor();
  }

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

  add(e: MouseEvent): void {
    e.preventDefault();
    this.isEdit = false;
    this.drawerTitle = '添加专业';
    this.GraduateEmployment = {
      depart: undefined,
      major: undefined,
      line1: undefined,
      line2: undefined,
      lineA: undefined,
      lineB: undefined,
    };

    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  modify(data) {
    this.isEdit = true;
    this.drawerTitle = '修改专业';
    this.GraduateEmployment = { ...data };
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

  chartDataDepart() {
    const data = [
      { name: '毕业率', 学院: '文学院', 利率: 18.9 },
      { name: '毕业率', 学院: '理学院', 利率: 28.8 },
      { name: '毕业率', 学院: '法学院', 利率: 39.3 },
      { name: '毕业率', 学院: '英语系', 利率: 81.4 },
      { name: '毕业率', 学院: '计算机系', 利率: 47 },
      { name: '毕业率', 学院: '管理学院', 利率: 20.3 },
      { name: '毕业率', 学院: '音乐学院', 利率: 24 },
      { name: '毕业率', 学院: '电影学院', 利率: 35.6 },
      { name: '就业率', 学院: '文学院', 利率: 12.4 },
      { name: '就业率', 学院: '理学院', 利率: 23.2 },
      { name: '就业率', 学院: '法学院', 利率: 34.5 },
      { name: '就业率', 学院: '英语系', 利率: 99.7 },
      { name: '就业率', 学院: '计算机系', 利率: 52.6 },
      { name: '就业率', 学院: '管理学院', 利率: 35.5 },
      { name: '就业率', 学院: '音乐学院', 利率: 37.4 },
      { name: '就业率', 学院: '电影学院', 利率: 42.4 },
    ];

    const chart = new Chart({
      container: 'containerDepart',
      autoFit: true,
      height: 300,
    });

    chart.data(data);
    chart.scale('利率', {
      nice: true,
    });
    chart.tooltip({
      showMarkers: false,
      shared: true,
    });

    chart.axis('利率', {
      label: {
        formatter: (val) => {
          return +val + '%';
        },
      },
    });

    chart
      .interval()
      .position('学院*利率')
      .color('name', (val) => {
        if (val === '毕业率') {
          return '#ff4d4f';
        }
        return '#2194ff';
      })
      .adjust([
        {
          type: 'dodge',
          marginRatio: 0,
        },
      ]);

    chart.interaction('element-highlight-by-x');

    chart.render();
  }

  chartDataMajor() {
    const data = [
      { name: '毕业率', 学院: '文学', 利率: 98.9 },
      { name: '毕业率', 学院: '理学', 利率: 88.8 },
      { name: '毕业率', 学院: '法学', 利率: 89.3 },
      { name: '毕业率', 学院: '艺术学', 利率: 81.4 },
      { name: '毕业率', 学院: '工学', 利率: 90 },
      { name: '毕业率', 学院: '哲学', 利率: 94.3 },
      { name: '毕业率', 学院: '管理学', 利率: 94 },
      { name: '毕业率', 学院: '经济学', 利率: 95.6 },
      { name: '就业率', 学院: '文学', 利率: 82.4 },
      { name: '就业率', 学院: '理学', 利率: 73.2 },
      { name: '就业率', 学院: '法学', 利率: 84.5 },
      { name: '就业率', 学院: '艺术学', 利率: 92.7 },
      { name: '就业率', 学院: '工学', 利率: 82.6 },
      { name: '就业率', 学院: '哲学', 利率: 95.5 },
      { name: '就业率', 学院: '管理学', 利率: 77.4 },
      { name: '就业率', 学院: '经济学', 利率: 92.4 },
    ];

    const chart = new Chart({
      container: 'containerMajor',
      autoFit: true,
      height: 300,
    });

    chart.data(data);
    chart.scale('利率', {
      nice: true,
    });
    chart.tooltip({
      showMarkers: false,
      shared: true,
    });

    chart.axis('利率', {
      label: {
        formatter: (val) => {
          return +val + '%';
        },
      },
    });

    chart
      .interval()
      .position('学院*利率')
      .color('name', (val) => {
        if (val === '毕业率') {
          return '#ff4d4f';
        }
        return '#2194ff';
      })
      .adjust([
        {
          type: 'dodge',
          marginRatio: 0,
        },
      ]);

    chart.interaction('element-highlight-by-x');

    chart.render();
  }
}
