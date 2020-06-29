const Controller = require('egg').Controller

class ListController extends Controller {
  async list() {
    const page = this.ctx.query.page || 1;
    const dataList = await this.ctx.service.news.list(page);
    const data = {list : dataList}
    await this.ctx.render('news/list.tpl', data)
  }
}

module.exports = ListController
