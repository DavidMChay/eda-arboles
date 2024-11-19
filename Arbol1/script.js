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
let h = new Nodo('h');
let i = new Nodo('i');
let m = new Nodo('m');
let e = new Nodo('e');
let a = new Nodo('a');
h.izquierdo = i;
h.derecho = m;
i.izquierdo = e;
m.izquierdo = a;
let arbol = new Arbol(h);

// Función para mostrar el árbol visualmente
function mostrarArbol() {
    $('#arbol').html(`
        <div class="node">${h.valor}</div><br>
        <div style="display: flex; justify-content: center; margin-top: 10px;">
            <div class="node">${i.valor}</div>
            <div class="node">${m.valor}</div>
        </div><br>
        <div style="display: flex; justify-content: center; margin-top: 10px;">
            <div class="node">${e.valor}</div>
            <div class="node">${a.valor}</div>
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
