window.dom = {
    create(string){
        const container = document.createElement('template')
        container.innerHTML = string.trim()
        return container.content.firstChild
    },
    after(node,node2){
        node.parentNode.insertBefore(node2,node.nextSibling)
    },
    before(node,node2){
        node.parentNode.insertBefore(node2,node)
    },
    append(parent,node){
        parent.appendChild(node)
    }
}

