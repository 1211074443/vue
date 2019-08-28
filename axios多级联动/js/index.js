window.onload = function(){
    new Vue({
        el:'#app',
        data:{
            prov:'',
            city:'',
            district:'',
            arr:[],
            cityArr:[],
            districtArr:[]
        },
        methods:{
            updateCity: function(){
                var that = this;
                that.arr.forEach(function(item,i){
                    if(item.name === that.prov){
                        that.cityArr = item.sub;
                        console.log(that.cityArr);
                    }
                })
                this.city =this.cityArr.length>0 ?this.cityArr[1].name :"";
            },
            updateDistrict : function(){
                var that = this;
                that.cityArr.forEach(function(item,i){
                    if(item.name === that.city){
                        that.districtArr = item.sub;
                        console.log(that.city);
                    }
                })
                this.district =this.districtArr.length>0 ?this.districtArr[1].name :"";
            }

        },
        created(){
            axios.get('http://localhost:3330/api/contactList')
            .then(res=>{
                console.log(res);
                this.arr =res.data.data;
            }).catch(err=>{
                console.log(err)
                vant.Toast('请求失败，请稍后重试')
            })
        },
        mounted(){
            this.updateCity();
            this.updateDistrict();
        }
    })
}

