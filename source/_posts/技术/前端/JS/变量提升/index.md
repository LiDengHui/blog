---
title: 变量提升
date: 2017-06-15 15:01:54
tags: [javascript]
---

# 函数或变量在声明时，存在变量提升。变量声明优先与函数声明

      function example() {
          console.dir(named);

          named();

          superPower();

          var named = function superPower() {
              console.dir(123);
          }
      }


# 申明和声明的区别：

申明：说服对方
声明：公开告知


