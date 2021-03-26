
import { post } from './httputil';

export async function getHomeInfo(data) {
  const res = await post('/getHomeInfo', data);
  return res;
}