import http from 'k6/http';
import { check } from 'k6';

const API_URI = 'YOUR_API_URI'

export let options = {
  vus: 1500,
  duration: '10m'
}
export default function () {
  let responses = http.batch([
    ['POST', `${API_URI}/login`, {
      email: 'tovamirvan@gmail.com',
      password: 'google098'
    }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }],
    ['POST', `${API_URI}/register`, {
      avatar: 'https://www.foothillscluboftucson.org/wp-content/uploads/guy-welsh-451x532.jpg',
      name: 'Avocado User',
      balance: 0,
      email: `${Math.random().toString(36).substring(7)}@gmail.com`,
      password: 'google098'
    }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }],
    ['POST', `${API_URI}/checkout`, null, {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjA3OTE2Mjg0fQ.HtvcQiAQjEyxmyjG0kvK0fUdg0RKT8m4AD0dvIQmPt8'
      }
    }],
    ['GET', `${API_URI}/checkout`, null, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjA3OTE2Mjg0fQ.HtvcQiAQjEyxmyjG0kvK0fUdg0RKT8m4AD0dvIQmPt8'
        }
      }],
    ['GET', `${API_URI}/flash_sale`, null],
    ['GET', `${API_URI}/products/2`, null],
    ['POST', `${API_URI}/products`, {
      name: "Prodak Produk",
      price: 32900,
      quantity: 100
    }],
    ['GET', `${API_URI}/products`, null],
    ['GET', `${API_URI}/carts`, {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjA3OTE2Mjg0fQ.HtvcQiAQjEyxmyjG0kvK0fUdg0RKT8m4AD0dvIQmPt8'
      }
    }],
    ['GET', `${API_URI}/profile/`, null, {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjA3OTE2Mjg0fQ.HtvcQiAQjEyxmyjG0kvK0fUdg0RKT8m4AD0dvIQmPt8'
      }
    }],
  ]);
  check(responses[0], {
    'main page status was 200': (res) => res.status === 200,
  });
}