---
title: pm2原理
tags:
  - ci
categories:
  - 技术文档
  - 前端
  - ci
date: 2020-09-13 12:28:20
---

# pm2

pm2 一个进程管理工具, 可以用它来管理 node 进程,并查看 node 进程的状态,也支持性能监控,进程守护,负载均衡等功能

# 常用命令

| 命令                          | 说明                         |
| ----------------------------- | ---------------------------- |
| pm2 start app.js              | 启动进程/应用                |
| pm2 start app.js --name wb123 | 重命名进程或应用             |
| pm2 start bin/www --watch     | 添加进程应用 watch           |
| pm2 stop www                  | 结束进程/应用                |
| pm2 stop all                  | 结束所有应用                 |
| pm2 delete www                | 删除进程/应用                |
| pm2 delete all                | 删除所有进程                 |
| pm2 list                      | 列出所有进程/应用            |
| pm2 describe www              | 查看某个进程或应用的具体情况 |
| pm2 monit                     | 查看进程或应用的资源消耗情况 |
| pm2 logs                      | 查看 pm2 日志                |
| pm2 logs wwww                 | 查看某个进程/应用的日志      |
| pm2 restart www               | 重新启动进程/应用            |
| pm2 restart all               | 重新启动所有进程             |


# 原理

