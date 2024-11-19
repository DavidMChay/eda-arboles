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

// Crear un árbol específico
let f = new Nodo('F');
let b = new Nodo('B');
let g = new Nodo('G');
let a = new Nodo('A');
let d = new Nodo('D');
let i = new Nodo('I');
let c = new Nodo('C');
let e = new Nodo('E');
let h = new Nodo('H');
f.izquierdo = b;
f.derecho = g;
b.izquierdo = a;
b.derecho = d;
g.izquierdo = c;
g.derecho = i;
d.izquierdo = e;
i.izquierdo = h;

let arbol = new Arbol(f);

// Función para mostrar el árbol visualmente
function mostrarArbol() {
    $('#arbol').html(`
        <div class="node">${f.valor}</div><br>
        <div style="display: flex; justify-content: center; margin-top: 10px;">
            <div class="node">${b.valor}</div>
            <div class="node">${g.valor}</div>
        </div><br>
        <div style="display: flex; justify-content: center; margin-top: 10px;">
            <div class="node">${a.valor}</div>
            <div class="node">${d.valor}</div>
        </div><br>
        <div style="display: flex; justify-content: center; margin-top: 10px;">
            <div class="node">${c.valor}</div>
            <div class="node">${i.valor}</div>
        </div><br>
        <div style="display: flex; justify-content: center; margin-top: 10px;">
            <div class="node">${e.valor}</div>
            <div class="node">${h.valor}</div>
        </div><br>
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