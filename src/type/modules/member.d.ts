// 用户登录数据返回的类型
export interface Profile {
  id: string;
  account: string;
  mobile: string;
  token: string;
  avatar: string;
  nickname: string;
  gender: string;
  birthday: string;
  cityCode: string;
  provinceCode: string;
  profession: string;
}

// 获取短信验证码的
export type MobileCodeType= 'register' | 'login'
