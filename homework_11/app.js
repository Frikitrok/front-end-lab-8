var rootNode = document.getElementById("root");
var treeView;

function createTree(arr, parrent, display) {
    arr.forEach((el, ind, arr) => {
        let div = fastCreateElement('div', '', '');
        div.style.display = display;     
        div.setAttribute("onClick", 'changeShow(event, this)');     
        if(el.folder == true) {
            var icon = fastCreateElement('i', 'material-icons', 'folder');
        } else {
            var icon = fastCreateElement('i', 'material-icons', 'local_movies');
        }
        div.appendChild(icon);
        let title = fastCreateElement('span', 'folder-text', el.title);
        div.appendChild(title);
        if(el.folder == true) {
            div.className = "folder";
            if(el.children) {
                createTree(el.children, div, 'none');
            }
        } else {
            div.className = "movie";
        }
        parrent.appendChild(div);
    });
}

function fastCreateElement(tag, className, innerHtml) {
    let element = document.createElement(tag);
    element.className = className;
    element.innerHTML = innerHtml;
    return element;
}


function changeShow(event, el) {
    
    let childs = el.childNodes;
    childs.forEach(element => {
        if(element.tagName == 'I') {   
            console.log(element.className);
            if(element.innerHTML != 'local_movies') {
                if(element.innerHTML == 'folder') {
                    element.innerHTML = 'folder_open';
                } else if(element.innerHTML = 'folder_open') {
                    element.innerHTML = 'folder';
                }
            }  
        }
        if(element.tagName == 'DIV') {
            if(element.style.display == 'block') {
                element.style.display = 'none';
            } else {
                element.style.display = 'block';
            }
        }
    }); 
    event.stopPropagation();
}


createTree(structure, rootNode, 'block');
// Your code goes here

//rootNode.appendChild(treeView);