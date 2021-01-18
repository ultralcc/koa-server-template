import { sayHi } from '../service/default';

export async function getDefault (ctx) {

    const { name } = ctx.request.query
    ctx.body = sayHi(name)
}
