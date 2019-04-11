// @ts-ignore
import request from '@/utils/request';
import { stringify } from 'qs';

export async function query(params) {
  return request(`/api/chapter?${stringify(params)}`);
}

export async function login(params) {
  return request('/user/login', {
    method: 'POST',
    body: params,
  });
}

export async function logout() {
  return request('/user/logout');
}
