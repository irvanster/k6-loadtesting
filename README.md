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