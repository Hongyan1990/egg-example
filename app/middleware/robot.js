module.exports = (options, app) => {
  return async function robotMiddleware(ctx, next) {
    const source = ctx.get('user-agent') || '';
    const match = options.ua.some(v => v.test(source));
    if(match) {
      ctx.status = 403;
      ctx.message = 'go away robot'
    } else {
      await next()
    }
  }
}