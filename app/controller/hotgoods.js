'use strict';

module.exports = app => {
    class Controller extends app.Controller {
        //添加
        async addHotgoods(){
            let{ctx,app}=this
            let { id } = ctx.request.body
            let goods = await ctx.model.Hotgoods.findOne({
                _id:id
            })
            if(goods){
                ctx.body = {
                    code : 500,
                    msg : '请勿重复添加'
                }
            }else{
                let newgoods = await ctx.model.Goods.findOne({_id : id})
                console.log(newgoods)
                let hotgoods = new ctx.model.Hotgoods({
                    name : newgoods.name,
                    _id : newgoods._id,
                    img : newgoods.img,
                    price : newgoods.price,
                    promotion : newgoods.promotion,
                    classification : newgoods.classification,
                    brand : newgoods.brand,
                    hot : newgoods.hot,
                    description : newgoods.description,
                    cont : newgoods.cont

                })
                await hotgoods.save()
                ctx.body = {
                    code : 200,
                    msg : '添加成功'
                }
            }
        }

        async getHotgoods(){
            let goods=await this.ctx.model.Hotgoods.find()
            this.ctx.body={
                data:goods
            }
        }

        async delHotgoods(){
            let { ctx,app } = this
            let { id } = ctx.request.body
            let res= await this.ctx.model.Hotgoods
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


      
    }
    return Controller;
};
