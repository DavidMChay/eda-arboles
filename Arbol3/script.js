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
let root = new Nodo(55);
let n1 = new Nodo(53);
let n2 = new Nodo(59);
let n3 = new Nodo(48);
let n4 = new Nodo(54);
let n5 = new Nodo(56);
let n6 = new Nodo(63);
let n7 = new Nodo(51);
let n8 = new Nodo(57);
let n9 = new Nodo(61);
let n10 = new Nodo(70);

root.izquierdo = n1;
root.derecho = n2;
n1.izquierdo = n3;
n1.derecho = n4;
n2.izquierdo = n5;
n2.derecho = n6;
n3.derecho = n7;
n5.derecho = n8;
n6.izquierdo = n9;
n6.derecho = n10;

let arbol = new Arbol(root);

// Función para mostrar el árbol visualmente
function mostrarArbol() {
    $('#arbol').html(`
        <div class="level">
            <div class="node">${root.valor}</div>
        </div>
        <div class="level">
            <div class="node">${n1.valor}</div>
            <div class="node">${n2.valor}</div>
        </div>
        <div class="level">
            <div class="node">${n3.valor}</div>
            <div class="node">${n4.valor}</div>
        </div>
        <div class="level">
            <div class="node">${n5.valor}</div>
            <div class="node">${n6.valor}</div>
        </div>
        <div class="level">
            <div class="node">${n7.valor}</div>
            <div class="node">${n8.valor}</div>
        </div>
        <div class="level">
            <div class="node">${n9.valor}</div>
            <div class="node">${n10.valor}</div>
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
