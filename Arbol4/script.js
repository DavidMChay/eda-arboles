// Definir el árbol con clases para nodos
class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
        this.central = null;  // Agregamos una propiedad 'central' para los hijos del medio
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
            if (nodo.central) cola.push(nodo.central); // Agregar los hijos "centrales"
            if (nodo.derecho) cola.push(nodo.derecho);
        }
        return resultado.join(' -> ');
    }

    // Recorrido en preorden
    recorridoPreorden(nodo = this.raiz) {
        if (!nodo) return [];
        return [nodo.valor].concat(
            this.recorridoPreorden(nodo.izquierdo),
            this.recorridoPreorden(nodo.central), // Recorrido para los nodos "centrales"
            this.recorridoPreorden(nodo.derecho)
        );
    }

    // Recorrido en inorden
    recorridoInorden(nodo = this.raiz) {
        if (!nodo) return [];
        return this.recorridoInorden(nodo.izquierdo)
            .concat(nodo.valor, this.recorridoInorden(nodo.central), this.recorridoInorden(nodo.derecho));
    }

    // Recorrido en postorden
    recorridoPostorden(nodo = this.raiz) {
        if (!nodo) return [];
        return this.recorridoPostorden(nodo.izquierdo)
            .concat(this.recorridoPostorden(nodo.central), this.recorridoPostorden(nodo.derecho), nodo.valor);
    }
}

// Crear el árbol con los nodos y sus relaciones
let a = new Nodo('A');
let b = new Nodo('B');
let c = new Nodo('C');
let d = new Nodo('D');
let e = new Nodo('E');
let f = new Nodo('F');
let j = new Nodo('J');
let k = new Nodo('K');
let q = new Nodo('Q');
let r = new Nodo('R');
let g = new Nodo('G');
let h = new Nodo('H');
let i = new Nodo('I');
let l = new Nodo('L');
let m = new Nodo('M');
let n = new Nodo('N');
let ñ = new Nodo('Ñ');
let o = new Nodo('O');
let p = new Nodo('P');

a.izquierdo = b;
a.derecho = c;

b.izquierdo = d;
b.central = e;
b.derecho = f;

e.izquierdo = j;
e.derecho = k;

j.central = q;
k.central = r;

c.izquierdo = g;
c.central = h;
c.derecho = i;

g.izquierdo = l;
g.central = m;
g.derecho = n;

h.izquierdo = ñ;
h.central = o;
h.derecho = p;

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
            <div class="node">${f.valor}</div>
        </div>
        <div class="level">
            <div class="node">${j.valor}</div>
            <div class="node">${k.valor}</div>
        </div>
        <div class="level">
            <div class="node">${q.valor}</div>
            <div class="node">${r.valor}</div>
        </div>
        <div class="level">
            <div class="node">${g.valor}</div>
            <div class="node">${h.valor}</div>
            <div class="node">${i.valor}</div>
        </div>
        <div class="level">
            <div class="node">${l.valor}</div>
            <div class="node">${m.valor}</div>
            <div class="node">${n.valor}</div>
        </div>
        <div class="level">
            <div class="node">${ñ.valor}</div>
            <div class="node">${o.valor}</div>
            <div class="node">${p.valor}</div>
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
