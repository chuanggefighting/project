'use strict';

const path = require('path');

module.exports = {
  loadRouter() {
    // 加载 Egg.js 应用工程目录的路由
    this.loadFile(path.join(this.options.baseDir, 'app/router.js'));
  },
};

