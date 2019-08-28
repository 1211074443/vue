const Router = require('koa-router');
let router = new Router();
const koaBody = require('koa-body')({
	multipart: true,  // 允许上传多个文件
});
let id=20
let data=[
		{name:'北京市',id:1,state:false},
		{name:'上海市',id:2,state:false},
		{name:'吉安市',id:3,state:false},
		{name:'天津市',id:4,state:false},
		{name:'南昌市',id:5,state:false},
		{name:'赣州市',id:6,state:false},
		{name:'深圳市',id:7,state:false},
		{name:'合肥市',id:8,state:false},
		{name:'广州市',id:9,state:false},
		{name:'珠海市',id:10,state:false},
		{name:'汕头市',id:11,state:false},
		{name:'宜春市',id:12,state:false},
		{name:'安徽市',id:13,state:false},
		{name:'南通市',id:14,state:false},
		{name:'太原市',id:15,state:false},
		{name:'扬州市',id:16,state:false},
		{name:'大庆市',id:17,state:false},
		{name:'上饶市',id:18,state:false},
		{name:'九江市',id:19,state:false},
		{name:'鹰潭市',id:20,state:false},
		data1=[
			{
				"name":"张一4",
				"tel":15170850101
			},
			{
				"name":"张二",
				"tel":15170850102
			}
		]
];
router.get('/contactList', async (ctx) => {
	ctx.body = {
		code: 200,
		data: data,
	}
});
function getQueryVariable(url,variable)
{
	var query = url.split('?')[1];
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if(pair[0] == variable){return pair[1];}
	}
	return(false);
}
//form-data
router.post('/contact/new/form', koaBody, async (ctx) => {
	let newData = ctx.request.body
	console.log(newData)
	id++
	newData.id = id
	data.push(newData)
	ctx.body = {
		code: 200,
		data: newData
	}
});
router.post('/contact/new/json', async (ctx) => {
	let newData = ctx.request.body
	console.log(newData)
	id++
	newData.id = id
	data.push(newData)
	ctx.body = {
		code: 200,
		data: newData
	}
});
router.put('/contact/edit', async (ctx) => {
	let newData = ctx.request.body
	console.log(newData)
	data.map((item, index) => {
		if (item.id == newData.id) {
			data[index] = newData
		}
	})
	console.log(data)
	ctx.body = {
		code: 200,
		data: newData
	}
});
router.patch('/contact/edit', async (ctx) => {
	let newData = ctx.request.body
	console.log(newData)
	data.map((item, index) => {
		if (item.id == newData.id) {
			data[index] = newData
		}
	})
	console.log(data)
	ctx.body = {
		code: 200,
		data: newData
	}
});
router.del('/contact', async (ctx) => {
	let id =getQueryVariable(ctx.request.url,'id')
	data = data.filter(item => item.id != id)
	console.log(id)
	ctx.body = {
		code: 200,
		message: '删除成功'
	}
});
router.get('/longtime', async (ctx) => {
	let query = ()=>{
		return new Promise((resolve,reject)=>{
			setTimeout(function () {
				resolve('请求成功');
			},5000)
		})
	}
	let result = await query();
		ctx.body = {
			code: 200,
			message: result
		}
});
module.exports = router;