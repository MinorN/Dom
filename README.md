# 使用指南
## 新增节点
### 创建一个节点
```js
dom.create(tagName)
// tagName支持HTML
```
### 把元素插入到另一个元素之后
把newNode插入到oldNode之后
```js
dom.after(oldNode,newNode)
```
### 把元素插入到另一个元素之前
把newNode插入到oldNode之后
```js
dom.before(oldNode,newNode)
```
### 新增子节点
```js
dom.append(parent,node)
```
### 新增父节点
```js
dom.wrap(node,parent)
```
## 删除节点
### 删除一个节点
```js
dom.remove(node)
// 同时你能得到删除节点
```
### 清空一个节点的所有子节点
```js
dom.empty(node)
// 同时你能得到被删除节点的一个数组
```
## 修改节点
### 读写属性
```js
don.attr(node,name,value)
// 其中 value 是可选的
// 当选中 value 时，表示想写入内容
// 当没选中 value 时，会返回 node 中为 name 的值
```
### 读写文本内容
```js
dom.text(node,string)
// string 是可选的
// 当选中是表示写入文本内容
// 当没选中时，表示读文本内容
```
### 读写html
```js
dom.html(node,string)
// string 是可选的
// 当选中是表示写入html
// 当没选中时，表示读html
```
### 修改style
```js
dom.style(node,name,value)
// 其中node为必选项
// 当总共传入两个参数时，表示读取style属性，例如：dom.style(div,'color')
// 当传入三个参数，且后两个属性为字符串时，表示写入style属性，例如：dom.style(div,'color','red')
// 当第二个参数为Object时，表示写入style属性，例如：dom.style(div,{color:‘red’})
```
### 增加、修改、删除class
```js
// 增加class
dom.class.add(node,className)
// 删除class
dom.class.remove(node,className)
// 是否含有className,返回布尔值
dom.class.has(node,className)
```