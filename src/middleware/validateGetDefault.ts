import { errorHandler } from "../extensions/errorHandler";

export async function validateGetDefault (ctx, next){

    ctx.checkQuery('name', 'name required!').notEmpty()

    let errors = await ctx.validationErrors(true);
    if (errors) {
        console.log(errors)
        throw errorHandler('ERR_REQUEST_DATA')
    }

    await next();
}
