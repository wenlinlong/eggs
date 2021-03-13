'use strict';

module.exports = app => {
    class Controller extends app.Controller {

        //添加购物车
        async addCart() {
            let { ctx, app } = this
            let { id, cont } = ctx.request.body
            let goods = await ctx.model.Goodscart.findOne({
                _id: id
            })
            if (!goods) {
                let newgoods = await ctx.model.Goods.findOne({ _id: id })
                console.log(newgoods)
                let hotgoods = new ctx.model.Goodscart({
                    name: newgoods.name,
                    _id: newgoods._id,
                    img: newgoods.img,
                    price: newgoods.price,
                    promotion: newgoods.promotion,
                    classification: newgoods.classification,
                    brand: newgoods.brand,
                    hot: newgoods.hot,
                    description: newgoods.description,
                    cont: newgoods.cont

                })
                await hotgoods.save()
                ctx.body = {
                    code: 200,
                    msg: '添加成功'
                }

            } else {
                // let res= await this.ctx.model.Goods.findByIdAndUpdate(id,{
                //   cont
                // })
                // hotgoods.cont++
                ctx.body = {
                    code: 500,
                    msg: '添加成功!'
                }
            }
        }
        //获取购物车
        async getCart(){
            let goods=await this.ctx.model.Goodscart.find()
            this.ctx.body={
                data:goods
            }
        }
        //删除购物车
        async delCart(){
            let { ctx,app } = this
            let { id } = ctx.request.body
            let res= await this.ctx.model.Goodscart
            .findByIdAndRemove({
                _id:id
            })
            if(res){
                this.ctx.body={
                    code:200,
                    msg:'删除成功'
                }
            }else{
                this.ctx.body={
                    code:500,
                    msg:'删除失败'
                }
            }

        }
        //编辑购物车
        async changeCart(){
            let { ctx,app } = this
            let { id,name,img,price,promotion,classification,brand,hot,description,cont } = ctx.request.body
            let res= await this.ctx.model.Goodscart.findByIdAndUpdate(id,{
                name,
                img,
                price,
                promotion,
                classification,
                brand,
                hot,
                description,
                cont
            })
            if(res){

                this.ctx.body={
        
                    code:200,
                    msg:'修改成功'
                }
            }else{
                this.ctx.body={
                    code:500,
                    msg:'修改失败'
                }
            }

        }
    }
    return Controller;
};
