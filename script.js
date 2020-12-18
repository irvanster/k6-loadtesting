import http from 'k6/http';
import { check } from 'k6';

const API_URI = 'YOUR_API_URI'
const token = 'YOUR_USER_TOKEN'

//Ramping Profile
const Load = [
  { duration: "2m", target: 1500 },
  { duration: "6m", target: 1500 },
  { duration: "2m", target: 0 },
]
const Soak = [
  { duration: "1m", target: 1500 },
  { duration: "8m", target: 1500 },
  { duration: "1m", target: 0 },
]
const Spike = [
  { duration: "1m15s", target: 250 },
  { duration: "1m15s", target: 250 },
  { duration: "1m15s", target: 1500 },
  { duration: "5m", target: 1500 },
  { duration: "1m15s", target: 0 },
]
const Stress = [
  { duration: "2m", target: 750 },
  { duration: "2m", target: 750 },
  { duration: "2m", target: 1500 },
  { duration: "2m", target: 1500 },
  { duration: "2m", target: 0 },
]

//End Ramping Profile
export let options = {
  stages: Load,
}

export default function () {
  let responses = http.batch([
    ['POST', `${API_URI}/login`, {
      email: 'tovamirvan@gmail.com',
      password: 'google098'
    }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }],
    ['POST', `${API_URI}/forgot_password`, {
      email: 'tovamirvan@gmail.com',
    }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }],
    ['POST', `${API_URI}/register`, {
      name: 'Avocado User',
      email: `avocadouser@gmail.com`,
      password: 'google098'
    }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }],

    ['GET', `${API_URI}/carts/60`, null, {
      headers: {
        'Authorization': token
      }
    }],
    ['GET', `${API_URI}/carts`, null, {
      headers: {
        'Authorization': token
      }
    }],

    ['GET', `${API_URI}/checkout`, null, {
      headers: {
        'Authorization': token
      }
    }],
    ['POST', `${API_URI}/checkout`, null, {
      headers: {
        'Authorization': token
      }
    }],

    ['GET', `${API_URI}/invoices`, null, {
      headers: {
        'Authorization': token
      }
    }],
    ['GET', `${API_URI}/invoices/1`, null, {
      headers: {
        'Authorization': token
      }
    }],

    ['GET', `${API_URI}/products`, null],
    ['GET', `${API_URI}/products/60`, null],
    // ['POST', `${API_URI}/products`, {
    //   name: "Prodak Produk",
    //   price: 32900,
    //   quantity: 100
    // }],
    
    ['GET', `${API_URI}/profile/`, null, {
      headers: {
        'Authorization': token
      }
    }],
    // ['PATCH', `${API_URI}/profile/`, {
    //   name: 'Tova Maukemana Sih',
    // }, {
    //     headers: {
    //       'Authorization': token
    //     }
    //   }],

    ['POST', `${API_URI}/addresses/`, {
      name: 'Rumah',
      address: 'jl. Banjiran, Warungasem, Batang',
      recipient: 'Irvan',
      phone: '08224927912'
    }, {
        headers: {
          'Authorization': token
        }
      }],
    ['GET', `${API_URI}/addresses/`, null, {
      headers: {
        'Authorization': token
      }
    }],
    ['PATCH', `${API_URI}/addresses/9`, {
      recipient: 'Tova'
    }, {
        headers: {
          'Authorization': token
        }
      }],
    ['GET', `${API_URI}/addresses/9/set_primary`, null, {
      headers: {
        'Authorization': token
      }
    }],
  ]);
  check(responses[0], {
    'main page status was 200': (res) => res.status === 200,
  });
}