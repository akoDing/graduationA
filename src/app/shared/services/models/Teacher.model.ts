export class TeacherModel {
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

export class TeacherInputModel extends TeacherModel {}

export class TeacherOutputModel extends TeacherModel {}
