---
title: Vue端口不固定
date: 2019-08-20 10:01:37
tags:
---

1. 下载 旧版 portfinder 

> yarn add portfinder@1.0.21 --dec

2. 指定cli依赖版本

在packagejson.json中添加

```json
"resolutions": {
  "@vue/cli-service/portfinder": "1.0.21"
}
```

3. 用`yarm`运行，其他无效