//原始类型
let bool:boolean=true
let num:number | null | undefined=123
let str:string="abc"
// str=123


//数组
let arr1:number[]=[1,2,3]
let arr2: Array<number | string | boolean> = [1, 2, 3, '4', true]//多种类型用竖线隔开
//元组
let tuple:[number,string]=[0,'1']//限制了数组的类型和个数  可以添加 但是不能访问 实际开发中强烈不推荐使用
//函数
let add=(x:number,y:number) :number=>x+y //函数要加上类型注解 还可以加返回值
let compute:(x:number,y:number) => number
compute=(x,y)=>x+y

//对象
let obj:{x:number,y:number}={x:1,y:2}
obj.x=3
//symbol  具有唯一的值
let s1:symbol= Symbol()
let s2= Symbol()
console.log(s1===s2);
//undefind null
let un:undefined=undefined
let nu:null=null
num =undefined
num= null
//void是一种操作符让任何类型返回undefind  undefind在js中不是保留关键字 
let noRetuan = ()=>{}
//any类型可以任意赋值 不是特殊情况不建议使用any类型
let x
x=1
x=[]
x=()=>{}
//never  永远不会有返回值的类型
let error=()=>{
  throw new Error('error')

}
let endless=()=>{
  while(true){}
}


