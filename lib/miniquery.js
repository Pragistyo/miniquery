class SweetSelector {
    static select(inp) {
        if(inp == '#eyed') {
             return '<div id="eyed">eyed</div>'
        }
        else if(inp == '.klass') {
            return ['<div class="klass">klass</div>']
        }
        else if(inp == 'a') {
            return ['<a href="#hello">Click Me</a>']
        }
    }
}
class DOM {
    static hide(elm) {
        let arr = document.querySelectorAll(elm)
        arr.forEach(i => {
            i.style.visibility = "hidden"
        })
    }
    static show(elm) {
        let arr = document.querySelectorAll(elm)
        arr.forEach(i => {
            i.style.visibility = "visible"
        })
    }
    static addClass(elm,val) {
        let el = document.querySelector(elm)
        el.classList.add(val)
    }
    static removeClass(elm,val) {
        let el = document.querySelector(elm)
        el.classList.remove(val)
    }
}
class EventDispatcher {
    static on(elm,btn,func) {
        document.querySelector(elm).addEventListener('click', func);
    }
}
class AjaxWrapper {
    static request(obj) {
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", obj.success);
        oReq.addEventListener("error", obj.fail);
        oReq.open(obj.type, obj.url);
        oReq.send();
    }
}
class Miniquery {
    static miniquery() {

    }
    static hide() {

    }
    static hide() {
        
    }
}