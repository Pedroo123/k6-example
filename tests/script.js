import { check, sleep } from 'k6';
import http from 'k6/http';

/**
 * Running using the RAMP feature for the VUs
 * This means that when the test reaches the determined timestamp, 
 * it will increase, or decrease the number of the VUs.
 */

export const options = {
    stages = [
        {duration: '30s', target: 20},
        {duration: '1m30s', target: 10},
        {duration: '20s', target: 0}
    ],
};

/**
 * Working with some assertions
 */
export default function () {
  const response = http.get('https://test.k6.io');
  check(response, {
    'status was 200': (res) => {res.status === 200}
  });
  sleep(1);
}