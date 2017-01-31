var count = 0; var num;
var p = document.getElementsByTagName("p")[0];
var div = document.getElementsByTagName("div")[3];
div.onclick = function(e){
	var event = e||window.event;
	var target = event.target||event.srcElement;
	if(target.value == "1"){
		target.text1();
	}else if(target.value == "3"){
		target.text3();
	}else if(target.value == "2"){
		target.text2();
	}else if(target.value == "4"){
		target.text4();
	}else if(target.value == "CE"){
		AE();
	}
	else if(target.value == "AC"){
		p.innerHTML = "0";
		count = 0;
	}

}
//数字和括号调用 
//如果显示的是0先清空在添数
//如果刚调用完等号 直接把屏幕变成自己的 
Object.prototype.text1 = function(){
	if(!count){
		if(p.innerHTML == "0"){
			p.innerHTML = "";
		}
		p.innerHTML += this.innerHTML;
	}else{
		p.innerHTML = this.innerHTML;
		count = 0;
	}
}
//=进行计算 
Object.prototype.text2 = function(){
	try{
		num = eval(p.innerHTML);
		//判断有没有小数  toFixed();必须有小数点才能用
		if(parseFloat(num) == parseInt(num)){
			p.innerHTML = num;
		}else{

			if(num == "Infinity"){
				p.innerHTML = "Infinity";
			}else{
				test5(5);
			}
		}
	}catch(e){
		p.innerHTML = "math erro";
	}
	count = 1;
}
//*/+.调用 显示的erro变成0 在添加
Object.prototype.text3 = function(){
	if(p.innerHTML =="math erro"||p.innerHTML=="Infinity"||p.innerHTML=="NaN"){
		p.innerHTML = "0";
	}
	p.innerHTML  += this.innerHTML ;
	count = 0;
}
//如果是0/erro  清空加上-  相当于负号
Object.prototype.text4 = function(){
	if(p.innerHTML == "0" || p.innerHTML== "math erro"||p.innerHTML=="Infinity"||p.innerHTML=="NaN"){
		p.innerHTML = "";
	}
	p.innerHTML += this.innerHTML;
	count = 0;
}
//保留5位小数 
function test5(i){
	if(parseFloat(num.toFixed(i)) == parseFloat(num.toFixed(i-1))){
		arguments.callee(i-1);
	}else{
		p.innerHTML = num.toFixed(i)
	}
}

//回退 去掉字符串最后一位 
//如果count = 0 刚调用完= 直接变成0
function AE(){
	if(!count){
		var str = "";
		for(var i =0; i < p.innerHTML.length - 1; i++){
			str += p.innerHTML[i];
		}
		if(str == ""){
			p.innerHTML = "0";
		}else{
			p.innerHTML = str;
		}

	}else{
		p.innerHTML = "0";
	}
	count = 0;
}


