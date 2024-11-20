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
        return [nodo.valor].concat(
            this.recorridoPreorden(nodo.izquierdo),
            this.recorridoPreorden(nodo.derecho)
        );
    }

    // Recorrido en inorden
    recorridoInorden(nodo = this.raiz) {
        if (!nodo) return [];
        return this.recorridoInorden(nodo.izquierdo)
            .concat(nodo.valor, this.recorridoInorden(nodo.derecho));
    }

    // Recorrido en postorden
    recorridoPostorden(nodo = this.raiz) {
        if (!nodo) return [];
        return this.recorridoPostorden(nodo.izquierdo)
            .concat(this.recorridoPostorden(nodo.derecho), nodo.valor);
    }
}

// Crear el árbol con los nodos y sus relaciones
let a = new Nodo('A');
let b = new Nodo('B');
let c = new Nodo('C');
let d = new Nodo('D');
let e = new Nodo('E');
let f = new Nodo('F');
let g = new Nodo('G');
let h = new Nodo('H');
let i = new Nodo('I');
let j = new Nodo('J');
let k = new Nodo('K');
let l = new Nodo('L');
let m = new Nodo('M');
let n = new Nodo('N');
let o = new Nodo('O');
let x = new Nodo('X');
let y = new Nodo('Y');

a.izquierdo = b;
a.derecho = c;

b.izquierdo = d;
b.derecho = e;

d.izquierdo = h;
d.derecho = i;

e.izquierdo = j;
e.derecho = k;

c.izquierdo = f;
c.derecho = g;

f.izquierdo = l;
f.derecho = m;

g.izquierdo = n;
g.derecho = o;

o.izquierdo = x;
x.derecho = y;

let arbol = new Arbol(a);

// Función para mostrar el árbol visualmente
function mostrarArbol() {
    $('#arbol').html(`
        <div class="level">
            <div class="node">${a.valor}</div>
        </div>
        <div class="level">
            <div class="node">${b.valor}</div>
            <div class="node">${c.valor}</div>
        </div>
        <div class="level">
            <div class="node">${d.valor}</div>
            <div class="node">${e.valor}</div>
        </div>
        <div class="level">
            <div class="node">${f.valor}</div>
            <div class="node">${g.valor}</div>
        </div>
        <div class="level">
            <div class="node">${h.valor}</div>
            <div class="node">${i.valor}</div>
        </div>
        <div class="level">
            <div class="node">${j.valor}</div>
            <div class="node">${k.valor}</div>
        </div>
        <div class="level">
            <div class="node">${l.valor}</div>
            <div class="node">${m.valor}</div>
        </div>
        <div class="level">
            <div class="node">${n.valor}</div>
            <div class="node">${o.valor}</div>
        </div>
        <div class="level">
            <div class="node">${x.valor}</div>
        </div>
        <div class="level">
            <div class="node">${y.valor}</div>
        </div>
    `);
}

// Función para manejar la selección del recorrido
$('#startButton').on('click', function() {
    let tipoRecorrido = $('#recorridoSelect').val();
    let resultado;

    // Asegurarse de realizar el recorrido seleccionado
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

    // Asegurarse de limpiar el campo de resultados antes de mostrar el nuevo recorrido
    $('#resultado').text(resultado);
});

// Mostrar el árbol visualmente
mostrarArbol();
