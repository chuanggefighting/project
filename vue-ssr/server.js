const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const KoaRuoter = require('koa-router')
const serve = require('koa-static')
const { createBundleRenderer } = require('vue-server-renderer')
const LRU = require('lru-cache')

const resolve = file => path.resolve(__dirname, file)
const app = new Koa()
const router = new KoaRuoter()


const renderer = createBundleRenderer(require('./dist/vue-ssr-server-bundle.json'), {
    template: fs.readFileSync(resolve('./index.template.html'), 'utf-8'),
    clientManifest: require('./dist/vue-ssr-client-manifest.json'),
    basedir: resolve('./dist'),
    runInNewContext: false,
    cache: LRU({
        max: 1000,
        maxAge: 1000 * 60 * 15
    }),
})


app.use(serve(path.join(__dirname, '/dist')));

// router.get('/api/info', async ctx => {
//     ctx.status = 200;
//     // ctx.body = {code:0, data:'This"s my mv info'}
//     console.log(33333333333333333)
//     console.log(ctx)
// });
router.get('/api/info', ctx => {
    ctx.body = 'this is you'
});
router.get('*',  async (ctx) => {
    // 渲染上下文
    const context = {
      url: ctx.url,
      title: 'Vue-SSR Demo',
    }
   
    // 设置网页内容类型
    ctx.set('Content-Type', 'text/html')
   
    try {
        const html = await renderer.renderToString(context)
        ctx.status = 200
        ctx.body = html
    } catch (err) {
        // 当执行到reject可以自定义 例：reject({ code: 404, msg: 'Page Not Found' })
        if (err.code) {
            ctx.status = err.code
            ctx.body = err.msg
        } else {
            // 发生未知错误
            ctx.status = 500
            ctx.body = 'Internal Server Error'
        }
    }
})
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log(`server started at localhost:3000`)
})


