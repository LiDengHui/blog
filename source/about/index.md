---
title: carefree
date: 2020-09-01 23:45:42
layout: about
---

# carefree
现代前端原理解析联系


# 如何检测文件变化

vite使用`chokidar`

```js
    const chokidar = require("chokidar");
    const log = console.log.bind(console);

    chokidar
        .watch("./src")
        .on("all", (event, path) => {
            console.log(event, path);
        })
        .on("change", (path) => log(`File ${path} has been changed`))
        .on("unlink", (path) => log(`File ${path} has been removed`))
        .on("error", (error) => log(`Watcher error: ${error}`))
        .on("ready", () => log("Initial scan complete. Ready for changes"))
        .on("raw", (event, path, details) => {
            log("Raw event info:", event, path, details);
        });
```
# 文件如何从src到dist目录


