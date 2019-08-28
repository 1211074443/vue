const Router = require('koa-router');
let router = new Router();
const koaBody = require('koa-body')({
	multipart: true,  // 允许上传多个文件
});
let id=20
let data=[
        {
            name:"北京",
            sub: [
                {name: '请选择',sub:[]},
                {
                    name:'北京1',
                    sub:[{name:'请选择'},{name:'东城区'},{name:'西城区'}]
                },
                {
                    name:'北京2',
                    sub:[{name:'请选择'},{name:'南城区'},{name:'北城区'}]
                }]
        },
        {
            name:"广东",
            sub: [
                {name: '请选择',sub:[]},
                {
                    name:'广州',
                    sub:[{name:'请选择'},{name:'白云区'},{name:'越秀区'},{name:'天河区'}]
                },
                {
                    name:'深圳',
                    sub:[{name:'请选择'},{name:'南山区'},{name:'龙华区'},{name:'龙观区'}]
                },
                {
                    name:'珠海',
                    sub:[{name:'请选择'},{name:'香洲区'},{name:'斗门区'},{name:'金湾区'}]
                }]
        },
        {
            name:"江西",
            sub: [
                {name: '请选择',sub:[]},
                {
                    name:'赣州',
                    sub:[{name:'请选择'},{name:'南康'},{name:'赣县'},{name:'宁都'}]
                },
                {
                    name:'吉安',
                    sub:[{name:'请选择'},{name:'泰和县'},{name:'万安县'},{name:'永新县'},{name:'永丰县'}]
                },
                {
                    name:'南昌',
                    sub:[{name:'请选择'},{name:'进贤县'},{name:'安义县'},{name:'南昌县'}]
                }]
        },
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