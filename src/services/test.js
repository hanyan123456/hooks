/*
 * @Author: 寒嫣
 * @Descripttion: 
 * @LastEditTime: 2020-11-10 15:19:57
 */
import request from '@/utils/request';

export async function queryTest(params) {
  return request('/api/test', {
      
    params,
  });
}