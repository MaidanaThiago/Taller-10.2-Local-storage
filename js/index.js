const ITEMS_KEY = "items"

const contenedor = document.getElementById("contenedor");
const input = document.getElementById("inputText");
const botonAgregar = document.getElementById("agregarElemento");
const borrarEstudiante = document.getElementById("borrarElemento");
const borrarTodo = document.getElementById("borrarTodo");
const botonOrdenar = document.getElementById("ordenarAlfa");
const filtro = document.getElementById("filtro");


let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];

botonAgregar.addEventListener("click", function () {
  localStorage.setItem("estudiantes", input.value);
});

// Borra el último estudiante ingresado
borrarEstudiante.addEventListener("click",function(){
  estudiantes.pop();
  guardar();
  renderList();
})

borrarTodo.addEventListener("click",()=>{
    localStorage.removeItem(ITEMS_KEY);
    estudiantes = [];
    contenedor.innerHTML = "";
    guardarLista();
    renderList();
});

function guardar() {
  localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
}

function renderList() {
  contenedor.innerHTML = ""; // limpiar lista visual
  estudiantes.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  contenedor.appendChild(li);
  });
}

botonAgregar.addEventListener("click", function () {
  const nombre = input.value.trim();
  if(nombre !== ""){
    estudiantes.push(nombre);
    guardar();
    renderList();
    input.value = "";
  }
});

botonOrdenar.addEventListener("click", function () {
  estudiantes.sort();
  guardar();
  renderList();
});
filtro.addEventListener("input", function () {
  const texto = filtro.value.trim().toLowerCase();
  const filtrados = estudiantes.filter(nombre =>
    nombre.toLowerCase().includes(texto)
  );
  renderList(filtrados);
});

renderList();


