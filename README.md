# K6 Load Testing

## About
This is the minimal script to K6 load testing.
| VUs  | Duration |
|------|----------|
| 1500 | 5m     |
## Requirements
- NodeJS v12 LTS
- K6 CLI
## How To Run

- Make sure you had clone this repo
- Edit `API_URI` variable from `script.js` file according to your API URI.
- Open your terminal in this project and run 
  ```
  k6 run script.js
  ```