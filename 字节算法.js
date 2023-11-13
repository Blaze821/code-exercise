
//手写instanceof
function myInstanceof(left, right){
    let leftValue = left.__proto__
    let rightValue = right.prototype
    while(true){
        if(leftValue === rightValue){
            return true
        }
        if(leftValue === null){
            return false
        }
        leftValue = leftValue.__proto__
    }
}
// 手写promise
function MyPromise(executor) {
    const PENDING = 'pending';
    const FULFILLED = 'fulfilled';
    const REJECTED = 'rejected';

    let self = this;
    self.state = PENDING;
  
    function resolve(value) {
      if (self.state === PENDING) {
        self.state = FULFILLED;
      }
    }
  
    function reject(reason) {
      if (self.state === PENDING) {
        self.state = REJECTED;
      }
    }
  
    try {
      executor(resolve, reject);
    } catch (reason) {
      reject(reason);
    }
  }
// 手写promise.all
function myAll(arr){
    if(!Array.isArray(arr)){
        return
    }
    let index = 0
    let result = []
    return new Promise((reslove, rejects) => {
        for (let i = 0; i<arr.length; i++){
            arr[i].then((res) => {
                result.push(res);
                index++;
                if(index === arr.length){
                    reslove(result)
                }
            }).catch((res) => {
                rejects(res)
            })

        }
    })
}
// 手写bind
Function.prototype.Mybind = function(obj){
    let scope = this
    let arr = Array.prototype.slice.call(arguments, 1)
    return function(){
        let sArr = Array.prototype.slice.call(arguments,1)
        scope.apply(obj, arr.concat(sArr))
    }
}

// 手写防抖（以最后一次为基准）
function deb(fn, await){
    let timer = null
    return (...args) => {
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, ...args)
            timer = null
        }, await);
    }
}
// 手写节流（以第一次为基准）
function thr(fn, await){
    let flags = false
    return function(...args){ //作用域2
        if(!flags){
            flags = true
            setTimeout(() => {
                flags = false
                fn.apply(this, ...args)  //箭头函数中的this为作用域2的this
            }, await);
        }
    }
}
//递归遍历深克隆对象
function foo2(obj){
    let obj1 = JSON.parse(JSON.stringify(obj))
    return obj
}

function foo(obj){
    let newObj = Object.create(null)

    for (let key in obj){
        if(typeof obj[key] =='Object'){
            arguments.callee(obj[key])
        }else{
            newObj[key] = obj[key]
        }
    }
    return newObj
}

//快速排序
function foo(arr){
    if(arr.length<=1){
        return arr
    }
    let defIndex = Math.floor(arr.length/2)
    let def = arr.splice(defIndex, 1)[0]
    let left = []
    let right = []
    for(let i = 0; i<arr.length; i++){
        if(def>arr[i]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
           
        }
    }
    return foo(left).concat([def], foo(right))
}

// 寻找第k大大数字
// 基于快排算法
function searchK(arr,low, high, key) {
    if (low > high){
     return -1;
    }
    var mid = parseInt((high + low) / 2);
    if(arr[mid] == key){
     return mid;
    }else if (arr[mid] > key){
     high = mid - 1;
     return searchK(arr, low, high, key);
    }else if (arr[mid] < key){
     low = mid + 1;
     return searchK(arr, low, high, key);
    }
};

//js遍历二叉树 非递归 深度
function dfs(tree){
    let result = []
    let stack = []
    stack.push(tree)
    while(stack.length){
        let node = stack.pop()
        result.push(node.value)
       if(node.right){
           stack.push(node.right.value)  // 先压右子树
       }
       if(node.left){
           stack.push(node.left.value)
       }
    }
    return result
}

// 广度 层序遍历
function BFS(node) {  
    var result = []; 

    if (node != null) {  
        var queue = [];  
        queue.unshift(node); 

        while (queue.length != 0) {  
            var item = queue.shift();  
            result.push(item);  
            var children = item.children;  
            for (var i = 0; i < children.length; i++)  
                queue.push(children[i]);  
        }  
    }  
    return result;  
}

// 获取树的深度
function handleGetTreeDeep(fileHeader) {
    let deep = 0;
    fileHeader.forEach((item) => {
      if (item.children) {
        deep = Math.max(deep, handleGetTreeDeep(item.children) + 1);
      } else {
        deep = Math.max(deep, 1);  
      }
    });
    return deep;
}

// 斐波那契数
function foo3(n){
   if(n<=2){
       return 1
   }else{
       return arguments.callee(n-1)+arguments.callee(n-2)
   }
}

//手写promise all
function foo(arr){
    let result = []
    let index = 0
    new Promise((reslove, reject) => {
        for (let i = 0; i<arr.length; i++){
            arr[i].then((res) => {
                result.push(res)
                index ++
                if(index = i){
                    reslove(result)
                }
            }).catch((res) => {
                reject(res)
            })
        }
    })
}

//手写bind
Function.prototype.myBind = function(obj){
    let scope = this
    let arr = Array.prototype.slice.call(arguments, 1)
    return function(){
        let arr2 = Array.prototype.slice.call(arguments, 1)

        scope.apply(obj, arr.concat(arr2))
    }
}

// 数组拍平
function arrFor(arr){
    if(!Array.isArray(arr)){
        return 
    }
    let result = []
    for(let i = 0; i<arr.length; i++){
        if(arr[i] instanceof Array){
            result = result.concat(arrFor(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result
}
function foo(arr){
    if(!Array.isArray(arr)) return 
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? foo(cur) : cur)
    }, [])
}

// 约瑟夫问题（自杀问题）
function foo(m, k){
    let arr = []
    for(let i =1; i<=m; i++){
        arr.push(i)
    }
    let flag = 0
    while(arr.length>1){
        let arrLen = arr.length 
        let num = 0
        for(let i=0; i<arrLen; i++){
            flag++;
            if(flag == k){
                arr.splice(i-num, 1)
                flag=0;
                num++
            }
        } 
    }
    return arr[0]
}

// js每个数组元素右侧第一个比当前数大的数的下标
function fuc(nums){
    const stack = [ [0, nums[0]] ];
    const res = Array(nums.length).fill(-1)

    for(let i =1; i<nums.length; i++){
        while(stack.length && nums[i] > stack[stack.length -1][1]){
            res[stack[stack.length - 1][0]] = i
            
            stack.pop()
        }
        stack.push([i, nums[i]])
    }

    return res
}

//返回出现最多的标签
function findMaxTag() {
    let tags = document.getElementsByTagName('*')
    let obj = {}
    let maxTag = ''
    let maxNum = 0
    for (const item of tags) {
      let tagName = item.tagName
      if (!obj[tagName]) {
        obj[tagName] = 1
      } else {
        obj[tagName]++

        if (obj[tagName] > maxNum) {
          maxTag = tagName
          maxNum = obj[tagName]
        }
      }
    }
    return maxTag
}

// 实现模版字符传对象
function getTemplate( pattern , data ){
    let str = ""
    let stack = []
    for( let key of pattern ){
        if( key === "{" ){
            stack.push( str )
            str = ""
        }else if( key === "}" ){
            const _data = stack.pop()
            const result = data[str]
            str = _data + result
        }else if( key === "$" ){
            continue
        }else{
            str += key 
        }
    }
    return str
}
getTemplate("${name} is  ${age} years old",{name:"Jim",age:20})
getTemplate('asdd ${tgy}  has ${gender}',{tgy:'tgy',gender:'man'})

// sort 冒泡排序
function mySort(arr){
    for(let i = 0; i<arr.length-1; i++){
        for(let j = 0; j<arr.length; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

// 柯里化!!!!!
function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };
    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}
function p(){
    let args = [...arguments];
    let adder = function(){
        args = args.concat([...arguments])
    }
    adder.toString = function(){
        return args.reduce((a,b)=>{
            return a+b
        })
    }
    return adder;
}
// 使用reudce模拟map
Array.prototype._map = function(fn, callbackThis) {
    // 最终返回的新数组
    let res = [];
    // 定义回调函数的执行环境
    // call第一个参数传入null，则 this指向全局对象，同 map的规则
    let CBThis = callbackThis || null;
    this.reduce((brfore, after, idx, arr) => {
        // 传入map回调函数拥有的参数
        // 把每一项的执行结果push进res中
        res.push(fn.call(CBThis, after, idx, arr));
    }, null);
    return res;
};

//模拟new操作
function myNew(){
    const obj = Object.create(null)
    // 获取构造函数
    const _constructor = Array.prototype.shift.call(arguments)
    // 为对象指向构造函数原型
    obj.__proto__ = _constructor.prototype
    _constructor.apply(obj, arguments)
    return obj
}

//输入：[['a','b'],['n','m'],['0','1']]
//输出：['an0','an1','am0','am1','bn0','bn1','bm0','bm1'] 
let arr1 = [['a','b'],['n','m'],['0','1']]
let result =  arr1.reduce((pre, cur) => {
    let list = []
    for(let i = 0;i<pre.length;i++){
        for(let j = 0;j<cur.length;j++){
            list.push(pre[i]+cur[j])
        }
    }
    return list

})

// 比较版本号
function compare(str1, str2) {
    let arr1 = str1.split('.');
    let arr2 = str2.split('.');

    let len1 = arr1.length;
    let len2 = arr2.length;
    let maxlen = Math.max(len1, len2);
  
    if(len1 < maxlen) { 
        for(let i = 0; i < maxlen - len1; i++) {
            arr1.push(0);
        }
    }else {
        for(let i = 0; i < maxlen - len2; i++) {
            arr2.push(0);
        }
    }
   
    for(let i = 0; i < maxlen; i++) {
        let num1 = parseInt(arr1[i]);
        let num2 = parseInt(arr2[i]);
    
        if(num1 > num2) {
            return 1;
        }else if(num1 < num2) {
            return -1;
        }
    }
    return 0;
}

// 返回最长字串
var lengthOfLongestSubstring1 = function(s) {
    let arr = [];
    let maxStr = '';
    for(let item of s){
        if(arr.includes(item)){
            arr = [];
        }
        arr.push(item);
        maxStr = arr.join('').length > maxStr.length ? arr.join('') : maxStr;
    }
    return  maxStr
};

// 格式转换
const data = [
    { id: 35, parentId: 30, text: "三级菜单-35" },
    { id: 10, parentId: 0, text: "一级菜单-1" }, 
    { id: 20, parentId: 0, text: "一级菜单-2" },
    { id: 30, parentId: 20, text: "二级菜单-3" },
    { id: 25, parentId: 30, text: "三级菜单-25" },
];
function conver (data){
    let result = [... data]
    result.sort((a, b) => a.parentId - b.parentId)
    
    function haveParent(ele1, ele2){
        if(ele1.parentId === ele2.id){
            ele2.children = ele2.children || []
            if(ele2.children.indexOf({...ele1}<0)){
                ele2.children.push({...ele1})
            }
            return true
        }
        return false
    }
    for(let i =result.length-1; i>=0; i--){
        for(let j=i-1; j>=0; j--){
            if(haveParent(result[i], result[j])){
                result.splice(i, 1)
                break
            }
        }
    }
    return result
}

// 两个有序数组的合并去重复
function merge(arr1, arr2) {
    const resultArr = [];
    while(arr1.length >0 && arr2.length>0) {
        if( arr1[0] < arr2[0]){
            if(resultArr.indexOf(arr1[0]) == -1){
               
                resultArr.push(arr1.shift()) 
            }else arr1.shift()
        }else{
            if(resultArr.indexOf(arr2[0]) == -1){
                
                resultArr.push(arr2.shift())
            }else arr2.shift()
        }
    }
    return resultArr.concat(arr1, arr2);
 }
 
//千分，;
function formateNumber(integer) {
    var p = integer;
    var width = 1000;
    var odds = [];

    while(p > 0) {
        odds.push(p % width);
        p = parseInt(p / width);
    }
    return odds.reverse().join(',')
}

// 手写promisify函数
function promisify(fn) {
    return function (...args) {
        return new Promise(function (resolve, reject) {
            args.push(function (err, ...arg) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(...arg);
            });

            fn.apply(null, args);
        });
    }
}

// 实现trim   
function trim(str)  {
    let arr = str.split('');
    let i = 0;
    while (arr[i] === ' ') {
        arr.shift();
    }
    i = arr.length - 1;
    while (arr[i] === ' ') {
        arr.pop();
        i--;
    }
    return arr.join('');
}
// 正则
function trim(str) {
    return str.replace(/(^[\s]+)|([\s]+$)/g, '');
}
// 子数组的最大累加和（动态规划）
var maxSubArray = function(nums) {

    let pre=0
    let max=nums[0]

    nums.forEach((num)=>{

        pre=Math.max(num,pre+num)

        max=Math.max(max,pre)

    })

    return max

};

//链表删除第K个节点
var getKthFromEnd = function(head, k) {
    let fast = head;
    let low = head;
    let n = 0;
    while(fast) {
        fast = fast.next;
        if(n >= k) {
            low = low.next;
        }
        n++;
    }
    return low;
};

// 反转链表
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

// 手写实现发布订阅模式
class EventEmitter {
    constructor() {
      // 事件对象，存放订阅的名字和事件  如:  { click: [ handle1, handle2 ]  }
      this.events = {}
    }
    // 订阅事件的方法
    on(eventName, callback) {
      if (!this.events[eventName]) {
        // 一个名字可以订阅多个事件函数
        this.events[eventName] = [callback]
      } else {
        // 存在则push到指定数组的尾部保存
        this.events[eventName].push(callback)
      }
    }
    // 触发事件的方法
    emit(eventName, ...rest) {
      // 遍历执行所有订阅的事件
      this.events[eventName] &&
        this.events[eventName].forEach(f => f.apply(this, rest))
    }
    // 移除订阅事件
    remove(eventName, callback) {
      if (this.events[eventName]) {
        this.events[eventName] = this.events[eventName].filter(f => f != callback)
      }
    }
    // 只执行一次订阅的事件，然后移除
     once(eventName, callback) {
      // 绑定的时fn, 执行的时候会触发fn函数
      const fn = (...rest) => {
        callback.apply(this, rest) // fn函数中调用原有的callback
        this.remove(eventName, fn) // 删除fn, 再次执行的时候之后执行一次
      }
      this.on(eventName, fn)
    }
}

//  手写岛屿问题
   function dfs(grid, i, j){
  // 把当前项变为0, 防止重新查找
  grid[i][j] = 0     
  // 当前项 上下左右检查
  if(grid[i - 1] && grid[i - 1][j] == 1) dfs(grid, i - 1, j)  // 上
  if(grid[i + 1] && grid[i + 1][j] == 1) dfs(grid, i + 1, j)  // 下
  if(grid[i][j - 1] && grid[i][j - 1] == 1) dfs(grid, i, j - 1)  // 左
  if(grid[i][j + 1] && grid[i][j + 1] == 1) dfs(grid, i, j + 1)  // 右
}
var numIslands = function(grid) {
  if(grid.length < 1) return 0 
  let islands = 0
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
      if(grid[i][j] == 1){
        islands++             // 岛屿加1
        dfs(grid, i, j)       // 寻找与当前项相邻的 1 并把它们变成0
      }
    }
  }
  return islands
};

//repeat
function repeat(func, times, wait){
    let index = 0;
    let timer = null;
    return function (...args){
        timer = setInterval(() => {
            index++;
            func.call(this, ...args)
            if(index === times){
                 clearInterval(timer)
               }
        },wait)
        
    }
}

// 字符传转驼峰
function tranformStr1(str){
    var strArr=str.split('_');
    for(var i=1;i<strArr.length;i++){
        strArr[i]=strArr[i].charAt(0).toUpperCase()+strArr[i].substring(1);
    }
    return strArr.join('');
}
console.log(tranformStr1('zhang_san'))

//手写分饼干
function main(){
    //胃口值数组
    let g = [5, 10, 2, 9, 15, 9];
    //饼干尺寸值数组
    let s = [6, 1, 20, 3, 8];
    let max = getMax(g, s);

    function getMax(g,s){
        //两个数组都从小到大排序
        g.sort();
        s.sort();
        //代表第几个孩子得到满足
        let child = 0,
        //代表当前是第几个饼干
            cookie = 0;
        //当孩子的胃口被满足，孩子的索引加1，无论孩子的胃口是否被满足，饼干的索引都加1
        //如此一直用后面的大饼干来满足当前孩子的胃口
        while(child < g.length && cookie < s.length){
            if(g[child] <= s[cookie]){
                child++;
            }
            cookie++;
        }
        //满足胃口的孩子数量，即为最大值
        return child;
    }
  
}

// 实现异步调度器
class Scheduler {
    constructor(limit) {
        this.limit = limit
        this.number = 0
        this.queue = []
    }
  
    addTask(timeout, str) {
        this.queue.push([timeout, str])
    }
  
    start() {
        if (this.number < this.limit&&this.queue.length) {
            var [timeout, str] = this.queue.shift()
            this.number++
            setTimeout(() => {
                console.log(str)
                this.number--
                this.start()
            }, timeout * 1000);

            this.start()
        }
    }
  }
const scheduler = new Scheduler(2)
scheduler.addTask(1, '1');   // 1s后输出’1'
scheduler.addTask(2, '2');  // 2s后输出’2'
scheduler.addTask(1, '3');  // 2s后输出’3'
scheduler.addTask(1, '4');  // 3s后输出’4'
scheduler.start();

//手写路径和
var pathSum = function(root, sum) {
    // 思路一：递归实现
    if (!root) return []

    const res = [], calcSum = a => a.reduce((p, c) => p + c)

    const DFS = (node, prev) => {
        if (!node.left && !node.right && calcSum(prev) === sum) res.push(prev)

        node.left && DFS(node.left, [...prev, node.left.val])
        node.right && DFS(node.right, [...prev, node.right.val])
    }

    DFS(root, [root.val])

    return res

    // 思路人：stack 栈实现
    // if (!root) return []

    // const res = [], calcSum = a => a.reduce((p, c) => p + c), stack = [[root, [root.val]]]

    // while (stack.length) {
    //     const [node, prev] = stack.pop()

    //     if (!node.left && !node.right && calcSum(prev) === sum) res.push(prev)
        
    //     node.right && stack.push([ node.right, [...prev, node.right.val] ])
    //     node.left && stack.push([ node.left, [...prev, node.left.val] ])
        
    // }
    
    // return res

};

// 手写JSON.stringify（）
function myStringIfy(jsonobj) {
    var result = '', curVal;
    if(jsonobj == null){
        return String(jsonobj)
    }
    // 基本数据类型
    switch(typeof jsonobj){
        case 'number':
        case 'boolean':
            return String(jsonobj);
        case 'string':
            return '' + jsonobj + '';
        case 'undefined':
        case 'function':
            return undefined;
    }
    // 引用数据类型
    switch (Object.prototype.toString.call(jsonobj)) {
        case '[object Array]':
            for(var i =0; i<jsonobj.length; i++){
                curVal = JSON.myStringIfy(jsonobj[i]);
                result += curVal
            }
            return result
        case '[object Object]':
            for (i in jsonobj) {
                if (jsonobj.hasOwnProperty(i)) {
                    curVal = JSON.stringify(jsonobj[i]);
                    if (curVal !== undefined) {
                        result += '"' + i + '":' + curVal + ',';
                    }
                }
            }
            return result
        case '[object String]':
            return '"' + jsonobj.toString() + '"';
        case '[object Number]':
        case '[object Boolean]':
            return jsonobj.toString();
    }

}

//手写实现axios类
class myAxios{
    constructor(){

    }
    request(config){
        return new Promise((reslove, reject) => {
            const {url,method, data} = config;
            const xhr = new XMLHttpRequest();

            xhr.open(method, url, true);
            xhr.responseType = 'json'
            xhr.onreadystatechange = () => {
              if(xhr.readyState ==4){
                  if(xhr.status >=200 && xhr.status<300){
                      reslove(xhr.responseText)
                  }else{
                      reject(xhr.status)
                  }
              }
            }
            if (data) {
                body = JSON.stringify(data)
            }
            xhr.send(body)
        })
    }
}
//依次在Axios.prototype添加对应的方法
const methodsArr = ['get', 'post']
methodsArr.forEach(meth => {
    myAxios.prototype[meth] = function(){
        if(meth === 'get'){
            return this.request({
                method: meth,
                url: arguments[0],
                ...arguments[1]
            })
        }else{
            return this.request({
                method:meth,
                url:arguments[0],
                data:arguments[1],
                ...arguments[2]
            })
        }
    }
})
//myAxios.prototype上的方法搬运到request
const utils = {
    extend(a,b, context) {
      for(let key in b) {
        if (b.hasOwnProperty(key)) {
          if (typeof b[key] === 'function') {
            a[key] = b[key].bind(context);
          } else {
            a[key] = b[key]
          }
        }
        
      }
    }
  }
function createAxios() {
    let axios = new myAxios();
    let req = axios.request.bind(axios);
    utils.extend(req, myAxios.prototype, axios)
    return req;
}

//转换数字
function revert(num) {
    let numbers = ['零', '一','二','三','四','五','六','七','八', '九'];
    let counts = ['十', '百','千','万'];
    let arr = [];
    while (num) {
        arr.push(num % 10);
        num = Math.floor(num / 10);
    }
    let res = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== 0) {
            if (arr[i + 1] === 0) {
                res += numbers[0];
            }
            res += numbers[arr[i]];
            if (i >= 1) {
                res += counts[i - 1];
            }
        }
    }
    return res;
}

//queue
class Queue {
    constructor() {
        this.queue = [];
        this.timer = null;
        this.pro = Promise.resolve();
    }
    task(time, fn) {
        this.queue.push([time, fn]);
        return this;
    };
    start () {
        this.queue.forEach((item) => {
            this.pro = this.pro.then(() => {
                return new Promise((resolve, reject) => {
                    this.timer = setTimeout(() => {
                        resolve(item[1]());
                    }, item[0]);
                });
            });
        });
    };
    stop() {
        this.pro = Promise.reject();
        clearTimeout(this.timer);
    }
}

