# K6 Load Testing

## About
This is the minimal script to K6 load testing.
| VUs  | Duration |
|------|----------|
| 1500 | 10m     |
## Requirements
- NodeJS v12 LTS
- K6 CLI
## How To Run

- Make sure you had clone this repo
- Edit `API_URI` & `token` variable from `script.js` file according to your API URI & user token.
- Open your terminal in this project and run 
  ```
  k6 run script.js
  ```
## Ramping Profile
![Ramping Profile K6](https://trello-attachments.s3.amazonaws.com/5eac4b63b4f64964e27790e1/562x132/81321ecbd7180a7f101bddb86878f64a/image.png "Ramping Profile K6")

[Ramping profile (What is ramping?)](https://k6.io/docs/test-types/introduction) 

You can change `Ramping Profile` on `script.js` and change `stages` in variable `options`, lists avaiable:
  - Load _(Default)_
  - Soak
  - Spike
  - Stress
  