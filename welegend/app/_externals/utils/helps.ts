import { RuleObject } from 'antd/es/form';

export const phoneValidator = (_: RuleObject, value: string) => {
  // This regular expression checks for a 10-digit phone number
  const phoneRegex = /^[0-9]{10}$/;
  if (!value || phoneRegex.test(value)) {
    return Promise.resolve();
  }
  return Promise.reject('Số điện thoại của bạn chưa hợp lệ');
};
