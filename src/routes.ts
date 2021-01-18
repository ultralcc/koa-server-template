import * as combineRouters from 'koa-combine-routers'
import DefaultRouter from './router/defaultRouter';

const router = combineRouters(
    new DefaultRouter('/').router
)

export default router