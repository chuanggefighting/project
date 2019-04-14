'use strict';
const controller = {

  page: {
    async index(ctx) {
      ctx.body = 'This is index page!';
    },

    async hello(ctx) {
      ctx.body = 'This is hello page!';
    },
  },
  
  api: {
    async index(ctx) {    // GET 请求的 /posts
      ctx.body = {
        action: 'index',
      };
    },

    async new(ctx) {      // GET 请求的 /posts/new
      ctx.body = {
        action: 'new',
      };
    },

    async show(ctx) {     // GET 请求的 /posts/:id
      ctx.body = {
        action: 'show',
      };
    },

    async edit(ctx) {    // GET 请求的 /posts/:id/edit 
      ctx.body = {
        action: 'edit',
      };
    },

    async create(ctx) {   // POST 请求的 /posts
      ctx.body = {
        action: 'create',
      };
    },

    async update(ctx) {   // PATCH 请求的 /posts/:id
      ctx.body = {
        action: 'update',
      };
    },

    async destroy(ctx) {   // DELETE 请求的 /posts/:id
      ctx.body = {
        action: 'destroy',
      };
    },

  },

};

module.exports = app => {

  const router = app.router;

  router.get('/', controller.page.index);
  router.get('/hello', controller.page.hello);

  // 实现 RESTFul：router.resources('routerName', 'pathMatch', controller)
  router.resources('posts', '/api/posts', controller.api);
  
};



