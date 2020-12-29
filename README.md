# K6 Load Testing

  

## About

This is the minimal script to K6 load testing.

| VUs | Duration |
|------|----------|
| 200 | 5m |


# K6 Installation
refer to: https://k6.io/docs/getting-started/installation

### Linux

#### [](https://k6.io/docs/getting-started/installation#debian-ubuntu)Debian/Ubuntu

    $ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61
    $ echo "deb https://dl.bintray.com/loadimpact/deb stable main" | sudo tee -a /etc/apt/sources.list
    $ sudo apt-get update
    $ sudo apt-get install k6
 #### If you are behind a firewall or proxy

There have been reports of users being unable to download the key from Ubuntu's key-server using  apt-key  command due to firewalls or proxies blocking their requests. If you experience this issue, you may try this alternative approach instead:

    $ wget -q -O - https://bintray.com/user/downloadSubjectPublicKey?username=bintray | sudo apt-key add -

### Windows (MSI installer)

Download the k6 installer from  [here](https://dl.bintray.com/loadimpact/windows/k6-v0.29.0-amd64.msi)

### Mac (brew)

    $ brew install k6
### Docker

    $ docker pull loadimpact/k6


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