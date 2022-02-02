# Nodebench

  

**Nodebench is simple tool to evaluate the performance of a system running Node.js.**

***Note*** : for now, this evaluation is single threaded  (done on a single CPU core).

### How to run

Simply run in a terminal :

  

    npx @fbouchez/nodebench

  

### How it work

The benchmark process consists of simulating an HTTP server on port 8088 and run a maximum amount of requests within 10 seconds. The score you get is the number of request per seconds.

  

### Some benchmark results

| Server | Score (request/sec) | Node version |
|--|--|--|
| [AWS EC2 T4g.medium](https://aws.amazon.com/fr/ec2/instance-types/t4/) | 3192 | v12.22.7 arm64 |
| [AWS EC2 T2.medium](https://aws.amazon.com/fr/ec2/instance-types/t2/) | 2444 | v12.22.7 x64 |
