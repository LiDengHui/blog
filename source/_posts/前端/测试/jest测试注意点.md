---
title: jest测试注意点
date: 2019-08-20 16:20:01
tags: [测试]
categories: 技术文档
---

## `module style`
```javascript
import Vue from 'vue';
import { CssModuleTestHelperMixin } from './test-helper.js';

Vue.use(CssModuleTestHelperMixin);
```

```javascript
import objProxy from 'identity-obj-proxy';

export const CssModuleTestHelperMixin = {
    install(Vue, options) {
        Vue.mixin({
            created() {
                this.$style = objProxy;
            },
        });
    },
};
```

## ES6转换配置babel

```javascript
module.exports = {
    presets: [
        '@vue/app',
        [
          '@babel/preset-env',
          { 
            targets: 
              { node: 'current' } 
          }],
    ],
};
```

