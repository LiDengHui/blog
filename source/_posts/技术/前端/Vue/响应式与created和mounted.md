---
title: 响应式与created和mounted
tags:
  - vue
categories:
  - 技术文档
  - 前端
  - vue
date: 2020-08-12 22:57:59
---

# Code
```vue
<template>
    <div>{{ a.b }}</div>
</template>
<script>
export default {
    data() {
        return {
            a: {},
        };
    },
    created() {
        this.a.b ={
          c:1
        };
    },
    mounted() {
        this.a.b = 2;
    },
};
</script>
<style>
</style>
```
# 答案一:1

# 解析


1. Vue无法检测property的添加或移除.由于Vue会初始化实例时对property执行getter/setter转化,所以property必须在data对象上存在才能让Vue将它转换成响应式的.所以this.a.b中的b是非响应式的
2. 又因为在created视图未渲染时直接对对象a的属性b赋值data 里面的值会改变的,但是在mounted里面更新this.a.bde值的时候,是非响应式的,所以视图不会更新

# 答案二:2

# 解析

1. Vue3 使用Proxy代理数据,虽然监听不了孙子节点,但是,在读取子节点的时候使用`懒代理`的方式监听值的变化,从而可以检测到b的新增,就是b之后还有数据,同样也会监听到
