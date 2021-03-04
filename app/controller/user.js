'use strict';

module.exports = app => {
    class Controller extends app.Controller {
        //登录
        async login() {
            let { ctx, app } = this
            //如果给前端返回数据
            //code msg data...
            let { username, password } = ctx.request.body
            let user = await ctx.model.User.findOne({
                username,
                password
            })

            if (user) {
                let obj = {}
                obj.username = user.username
                obj.id = user._id
                // 用户存在,生成token
                const token = app.jwt.sign({
                    username:user.username,
                }, app.config.jwt.secret);
                ctx.body = {
                    code: 200,
                    msg: '登陆成功',
                    data: obj,
                    token
                }
            } else {
                ctx.body = {
                    code: 201,
                    msg: '用户名或密码不正确'
                }
            }
        }
        async register() {
            //接收前端传递的参数
            let { ctx, app } = this
            let { username } = ctx.request.body
            //查询有没有当前的信息
            let user = await ctx.model.User.findOne({
                username
            })
            if (user) {
                ctx.body = {
                    code: 201,
                    msg: '用户已存在'
                }
            } else {
                //添加
                let user = new app.model.User(ctx.request.body)
                await user.save()
                ctx.body = {
                    code: 200,
                    msg: '注册成功',
                }
            }
        }
        async user() {
            //删除
            let { id } = this.ctx.request.body
            let res = await this.ctx.model.User.findByIdAndRemove({
                _id: id
            })
            if (res) {
                this.ctx.body = {
                    code: 200,
                    msg: '删除成功'
                }
            } else {
                this.ctx.body = {
                    code: 201,
                    msg: '删除失败'
                }
            }

        }
        async getUser() {
            let users = await this.ctx.model.User.find()
            this.ctx.body = {
                data: users
            }
        }
    }
    return Controller;
};
