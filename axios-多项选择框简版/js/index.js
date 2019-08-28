window.onload = function(){
    new Vue({
        el:'#app',
        data:{
            items:[],
            selectItems:[],
            selected:'selected'
        },
        methods:{
           addItem(item){
            //    console.log(item);
               item.state=true;
                //id去重
                // for(let i=0;i<this.selectItems.length;i++){
                //     if(item.id == this.selectItems[i].id){
                //         return
                //     }
                // }
                //     this.selectItems.push(item);
                this.selectItems.push(item);
                this.selectItems = [...new Set(this.selectItems)];
           } ,
           delItem:function(index){
               this.selectItems.splice(index,1);
           }
        },
        created(){
            this.instance = axios.create({
                baseURL:'http://localhost:3332/api',
                timeout:5000
            })
            this.instance.get('/contactList')
            .then(res=>{
                console.log(res)
                this.items =res.data.data;
            }).catch(err=>{
                console.log(err)
                vant.Toast('请求失败，请稍后重试')
            })
        }
    })
}