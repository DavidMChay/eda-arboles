// Definir el árbol con clases para nodos
class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}

class Arbol {
    constructor(raiz) {
        this.raiz = raiz;
    }

    // Recorrido en amplitud (BFS)
    recorridoAmplitud() {
        let resultado = [];
        let cola = [this.raiz];
        while (cola.length > 0) {
            let nodo = cola.shift();
            resultado.push(nodo.valor);
            if (nodo.izquierdo) cola.push(nodo.izquierdo);
            if (nodo.derecho) cola.push(nodo.derecho);
        }
        return resultado.join(' -> ');
    }

    // Recorrido en preorden
    recorridoPreorden(nodo = this.raiz) {
        if (!nodo) return [];
        return [nodo.valor].concat(this.recorridoPreorden(nodo.izquierdo), this.recorridoPreorden(nodo.derecho));
    }

    // Recorrido en inorden
    recorridoInorden(nodo = this.raiz) {
        if (!nodo) return [];
        return this.recorridoInorden(nodo.izquierdo).concat(nodo.valor, this.recorridoInorden(nodo.derecho));
    }

    // Recorrido en postorden
    recorridoPostorden(nodo = this.raiz) {
        if (!nodo) return [];
        return this.recorridoPostorden(nodo.izquierdo).concat(this.recorridoPostorden(nodo.derecho), nodo.valor);
    }
}

// Crear el árbol con los nodos y sus relaciones
let f = new Nodo('55');
let b = new Nodo('53');
let g = new Nodo('59');
let a = new Nodo('48');
let d = new Nodo('54');
let c = new Nodo('51');
let e = new Nodo('56');
let i = new Nodo('63');
let h = new Nodo('57');
let j = new Nodo('61');
let k = new Nodo('70');

f.izquierdo = b;
f.derecho = g;

b.izquierdo = a;
b.derecho = d;

a.derecho = c;

g.izquierdo = e;
g.derecho = i;

e.derecho = h;

i.izquierdo = j;
i.derecho = k;

let arbol = new Arbol(f);

// Función para mostrar el árbol visualmente
function mostrarArbol() {
    $('#arbol').html(`
        <div class="level">
            <div class="node">${f.valor}</div>
        </div>
        <div class="level">
            <div class="node">${b.valor}</div>
            <div class="node">${g.valor}</div>
        </div>
        <div class="level">
            <div class="node">${a.valor}</div>
            <div class="node">${d.valor}</div>
        </div>
        <div class="level">
            <div class="node">${c.valor}</div>
        </div>
        <div class="level">
            <div class="node">${e.valor}</div>
            <div class="node">${i.valor}</div>
        </div>
        <div class="level">
            <div class="node">${h.valor}</div>
            <div class="node">${j.valor}</div>
            <div class="node">${k.valor}</div>
        </div>
    `);
}

// Función para manejar la selección del recorrido
$('#startButton').on('click', function() {
    let tipoRecorrido = $('#recorridoSelect').val();
    let resultado;

    switch (tipoRecorrido) {
        case 'bfs':
            resultado = arbol.recorridoAmplitud();
            break;
        case 'preorder':
            resultado = arbol.recorridoPreorden().join(' -> ');
            break;
        case 'inorder':
            resultado = arbol.recorridoInorden().join(' -> ');
            break;
        case 'postorder':
            resultado = arbol.recorridoPostorden().join(' -> ');
            break;
        default:
            resultado = 'Selección no válida';
    }

    $('#resultado').text(resultado);
});

// Mostrar el árbol visualmente
mostrarArbol();
