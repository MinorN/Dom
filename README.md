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
