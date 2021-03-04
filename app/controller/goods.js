'use strict';

module.exports = app => {
    class Controller extends app.Controller {
        //详情
        async getMore(){
            let {ctx} = this
            let {id} =ctx.request.body
            let goods = await ctx.model.Goods.findOne({
                _id : id
            })
            ctx.body = {
                code : 200,
                data : goods
            }
        }
        //新增
        async addGoods (){
            //接受参数
            let { ctx,app } = this
            let { name } = ctx.request.body
            //查询已存在
            let goods = await ctx.model.Goods.findOne({
                name
            })
            if(goods){
                ctx.body = {
                    code : 500,
                    msg : '请勿重复添加'
                }
            }else{
                let goods = new app.model.Goods(ctx.request.body)
                await goods.save()
                ctx.body = {
                    code : 200,
                    msg : '添加成功'
                }
            }
        }


        async getGoods(){
            let goods=await this.ctx.model.Goods.find()
            this.ctx.body={
                data:goods
            }
        }

        async delGoods(){
            let { ctx,app } = this
            let { id } = ctx.request.body
            let res= await this.ctx.model.Goods.findByIdAndRemove({
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
        async changeGoods(){
            let { ctx,app } = this
            let { id,name,price,cont } = ctx.request.body
            let res= await this.ctx.model.Goods.findByIdAndUpdate(id,{
               name:name,
            //    brand:brand,
            //    img:img,
               price:price,
            //    promotion:promotion,
            //    classification:classification,
            //    hot:hot,
            //    description:description,
               cont:cont
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
        async getBanners(){
            let { ctx } = this
            let banners=[
                { 
                    name:"雅兰仕艾草暖贴60片盒装",
                    url:'https://img14.360buyimg.com/n0/jfs/t1/170980/9/5880/131792/601f40f3E37f86d27/a7e824b3ca530902.jpg'
                },
                {
                    name:"北极绒电热水袋",
                    url:'https://img14.360buyimg.com/n0/jfs/t1/134590/13/7964/93438/5f439226E913d0598/7c18c775f7d23e50.jpg'
                },
                {
                    name:"三星W21 5G",
                    url:'https://img14.360buyimg.com/n0/jfs/t1/162293/25/7439/71676/6033ab01E38e4cf59/41a3669c052b02e1.jpg'
                },
                {
                    name:"水洗棉床上四件套",
                    url:'https://img14.360buyimg.com/n0/jfs/t1/156549/2/10874/346964/6034f453E147d5e79/dd2008fb86ff9438.jpg'
                },
                {
                    name:"MSito高品质T恤男",
                    url:'https://img14.360buyimg.com/n0/jfs/t1/144233/6/12924/344516/5fa1133aE15b1b585/7de1b6d11f1317cc.jpg'
                }
            ]
            ctx.body = {
                code: 200,
                msg: '获取成功',
                banners: banners
            }
        }
        //搜索
        async findGoods (){
            //接受参数
            let { ctx,app } = this
            let { name } = ctx.query
            //查询已存在
            let goods = await ctx.model.Goods.findOne({
                name:name
            })
            console.log(name);
            if(goods){
                ctx.body = {
                    code : 200,
                    msg : '查找商品成功',
                    data:goods
                }
            }else{
                // let goods = new app.model.Goods(ctx.request.body)
                // await goods.save()
                ctx.body = {
                    code : 500,
                    msg : '未找到相关商品'
                }
            }
        }

      
    }
    return Controller;
};
