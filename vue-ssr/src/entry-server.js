/* eslint-disable */
import { createApp } from './main'

export default context => {
    // 因为这边 router.onReady 是异步的，所以我们返回一个 Promise
    // 确保路由或组件准备就绪
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp()

        // 切换路由
        router.push(context.url)

        router.onReady(() => {
            // 获取响应路由下的组件
            const matchedComponents = router.getMatchedComponents()
            if (!matchedComponents.length) {
                return reject({ code: 404 })
            }
            Promise.all(matchedComponents.map(Component => {
                if (Component.asyncData) {
                    return Component.asyncData({
                        store,
                        route: router.currentRoute
                    })
                }
            })).then(() => {
                context.state = store.state
                resolve(app)
            }).catch(reject)
        }, reject)
    })
}



