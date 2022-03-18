# 使用指南
## 创建一个节点
```js
dom.create(tagName)
// tagName支持HTML
```
## 把元素插入到另一个元素之后
把newNode插入到oldNode之后
```js
dom.after(oldNode,newNode)
```
## 把元素插入到另一个元素之前
把newNode插入到oldNode之后
```js
dom.before(oldNode,newNode)
```
## 新增子节点
```js
dom.append(parent,node)
```
## 新增父节点
```js
dom.wrap(node,parent)
```
