window.dom = {
    // 增
    create(string) {
        const container = document.createElement('template')
        container.innerHTML = string.trim()
        return container.content.firstChild
    },
    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling)
    },
    before(node, node2) {
        node.parentNode.insertBefore(node2, node)
    },
    append(parent, node) {
        parent.appendChild(node)
    },
    wrap(node, parent) {
        dom.before(node, parent)
        dom.append(parent, node)
    },
    // 删
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },
    empty(node) {
        const {childNodes} = node.childNodes
        const array = []
        let {firstChild} = node
        while ((firstChild)) {
            array.push(dom.remove(node.firstChild))
            firstChild = node.firstChild
        }
        return array
    },
    // 改
    attr(node, name, value) {
        if (arguments.length === 3) {
            node.attributes(name, value)
        }else if (arguments.length ===2){
            return node.getAttribute(name)
        }
    },
    text(node,string){
        if(arguments.length ===2){
            node.innerText = string
        }else if (arguments.length ===1){
            return node.innerText
        }
    },
    html(node,string){
        if(arguments.length ===2){
            node.innerHTML = string
        }else if (arguments.length ===1){
            return node.innerHTML
        }
    },
    style(node,name,value){
        if(arguments.length ===3 ){
            //dom.style(div,'color','red')
            node.style[name] = value
        }else if (arguments.length===2){
            if(typeof  name === "string"){
                //dom.style(div,'color')
                return node.style[name]
            }else if(name instanceof Object){
                for(let key in name){
                    node.style[key] = name[key]
                }
            }
        }
    },
    class:{
        add(node,className){
            node.classList.add(className)
        },
        remove(node,className){
            node.classList.remove(className)
        },
        has(node,className){
            return node.classList.contains(className)
        }
    },
}

