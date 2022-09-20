/**
 * 隐藏手机号中间4位
 * @params contact 手机号
 * @return 返回的隐藏的手机号
 */
export const hideContact=(contact:string)=>{
  return contact.replace(/(\d{3})(\d{4})(\d{4})/,'$1****$3')
}


