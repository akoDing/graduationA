import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ACLService } from '@delon/acl';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { ALAIN_I18N_TOKEN, MenuService, SettingsService, TitleService } from '@delon/theme';
import { TranslateService } from '@ngx-translate/core';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { I18NService } from '../i18n/i18n.service';

import { NzIconService } from 'ng-zorro-antd/icon';
import { ICONS } from '../../../style-icons';
import { ICONS_AUTO } from '../../../style-icons-auto';

/**
 * Used for application startup
 * Generally used to get the basic data of the application, like: Menu Data, User Data, etc.
 */
@Injectable()
export class StartupService {
  constructor(
    iconSrv: NzIconService,
    private menuService: MenuService,
    private translate: TranslateService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private settingService: SettingsService,
    private aclService: ACLService,
    private titleService: TitleService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private httpClient: HttpClient,
    private injector: Injector,
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
  }

  private viaHttp(resolve: any, reject: any) {
    zip(this.httpClient.get(`assets/tmp/i18n/${this.i18n.defaultLang}.json`), this.httpClient.get('assets/tmp/app-data.json'))
      .pipe(
        catchError((res) => {
          console.warn(`StartupService.load: Network request failed`, res);
          resolve(null);
          return [];
        }),
      )
      .subscribe(
        ([langData, appData]) => {
          // Setting language data
          this.translate.setTranslation(this.i18n.defaultLang, langData);
          this.translate.setDefaultLang(this.i18n.defaultLang);

          // Application data
          const res: any = appData;
          // Application information: including site name, description, year
          this.settingService.setApp(res.app);
          // User information: including name, avatar, email address
          this.settingService.setUser(res.user);
          // ACL: Set the permissions to full, https://ng-alain.com/acl/getting-started
          this.aclService.setFull(true);
          // Menu data, https://ng-alain.com/theme/menu
          this.menuService.add(res.menu);
          // Can be set page suffix title, https://ng-alain.com/theme/title
          this.titleService.suffix = res.app.name;
        },
        () => {},
        () => {
          resolve(null);
        },
      );
  }

  private viaMockI18n(resolve: any, reject: any) {
    this.httpClient.get(`assets/tmp/i18n/${this.i18n.defaultLang}.json`).subscribe((langData) => {
      this.translate.setTranslation(this.i18n.defaultLang, langData);
      this.translate.setDefaultLang(this.i18n.defaultLang);

      this.viaMock(resolve, reject);
    });
  }

  private viaMock(resolve: any, reject: any) {
    // const tokenData = this.tokenService.get();
    // if (!tokenData.token) {
    //   this.injector.get(Router).navigateByUrl('/passport/login');
    //   resolve({});
    //   return;
    // }
    // mock
    const app: any = {
      name: `ng-alain`,
      description: `Ng-zorro admin panel front-end framework`,
    };
    const user: any = {
      name: 'Admin',
      avatar: './assets/tmp/img/avatar.jpg',
      email: 'cipchk@qq.com',
      token: '123456789',
    };
    // Application information: including site name, description, year
    this.settingService.setApp(app);
    // User information: including name, avatar, email address
    // this.settingService.setUser(user);
    // ACL: Set the permissions to full, https://ng-alain.com/acl/getting-started
    this.aclService.setFull(true);
    // Menu data, https://ng-alain.com/theme/menu
    this.menuService.add([
      {
        text: '主菜单',
        group: true,
        children: [
          {
            text: '首页',
            link: '/dashboard',
            icon: { type: 'icon', value: 'book' },
          },
          {
            text: '系统管理',
            icon: { type: 'icon', value: 'global' },
            children: [
              {
                text: '教师管理',
                link: '/database/teacher',
              },
              {
                text: '学生管理',
                link: '/database/student',
              },
            ],
          },
          {
            text: '教务管理',
            icon: { type: 'icon', value: 'scan' },
            children: [
              {
                text: '学年学期管理',
                link: '/educational/cms',
              },
              {
                text: '专业管理',
                link: '/educational/major',
              },
              {
                text: '班级管理',
                link: '/educational/table',
              },
              {
                text: '教学任务管理',
                link: '/educational/table',
              },
              {
                text: '任课管理',
                link: '/educational/courseTeach',
              },
              {
                text: '课程管理',
                link: '/educational/table',
              },
            ],
          },
          {
            text: '教学管理',
            icon: { type: 'icon', value: 'team' },
            children: [
              {
                text: '选课管理',
                link: '/teach/courseSelection',
              },
              {
                text: '成绩管理',
                link: '/dashboard/table',
              },
            ],
          },
          {
            text: '学籍管理',
            icon: { type: 'icon', value: 'message' },
            children: [
              {
                text: '奖惩管理',
                link: '/dashboard/cms',
              },
              {
                text: '异动管理',
                link: '/dashboard/table',
              },
              {
                text: '毕业生管理',
                link: '/stustatus/graduation',
              },
            ],
          },
          {
            text: '信息、统计管理',
            icon: { type: 'icon', value: 'appstore' },
            children: [
              {
                text: '学籍统计报表',
                link: '/dashboard/cms',
              },
              {
                text: '毕业率就业率报表',
                link: '/dashboard/table',
              },
            ],
          },
        ],
      },
    ]);
    // Can be set page suffix title, https://ng-alain.com/theme/title
    this.titleService.suffix = app.name;

    resolve({});
  }

  load(): Promise<any> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve, reject) => {
      // http
      // this.viaHttp(resolve, reject);
      // mock：请勿在生产环境中这么使用，viaMock 单纯只是为了模拟一些数据使脚手架一开始能正常运行
      this.viaMockI18n(resolve, reject);
    });
  }
}
