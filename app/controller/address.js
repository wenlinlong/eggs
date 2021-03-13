'use strict';

module.exports = app => {
 class Controller extends app.Controller {
 //新增地址
 async addAddress(){
    //接受参数
    let { ctx,app } = this
    let { Name,address,detailedAddress,phone,checkbox} = ctx.request.body
    //查询已存在
    let ads = await ctx.model.Address.findOne({
        Name,
        address,
        detailedAddress,
        phone,
        checkbox
    }) 
    if(ads){
        ctx.body = {
            code : 500,
            msg : '请勿重复添加'
        }
    }else{
        let ads = new app.model.Address(ctx.request.body)
        await ads.save()
        ctx.body = {
            code : 200,
            msg : '添加成功'
        }
    }
}
//获取地址
async getAddress(){
    let goods=await this.ctx.model.Address.find()
    this.ctx.body={
        data:goods
    }
}

async delAddress(){
    let { ctx,app } = this
    let { _id } = ctx.request.body
    let res= await this.ctx.model.Address.findByIdAndRemove({
        _id
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
async changeAddress(){
    let { ctx,app } = this
    let { id,Name,address,detailedAddress,phone} = ctx.request.body
    let res= await this.ctx.model.Address.findByIdAndUpdate(id,{
        Name,
        address,
        detailedAddress,
        phone
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
