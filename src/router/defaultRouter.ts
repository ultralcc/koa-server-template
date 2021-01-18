import * as Router from 'koa-router';

import { validateGetDefault } from '../middleware/validateGetDefault';
import { getDefault } from '../controller/getDefault';

export default class DefaultRouter {
    router: Router
    constructor(prifix: string){
        this.router = new Router({prefix: prifix})
        this.setRoutes()
    }

    setRoutes(){
        this.router.get('/',
            validateGetDefault,
            getDefault
        )
    }
}