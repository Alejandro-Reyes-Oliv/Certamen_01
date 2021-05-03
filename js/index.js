tinymce.init({
    selector: '#detCrimen-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
});
  
  const reos = [];
  const cargarTabla = ()=>{
    let tbody = document.querySelector("#tbody-tabla");
    tbody.innerHTML = "";
    for( let i=0; i< reos.length; ++i){
        let r = reos[i];
        let tr = document.createElement("tr");
        let tdNombre= document.createElement("td");
        let tdApellido = document.createElement("td")
        let tdDetalle= document.createElement("td");
        let tdCiudad= document.createElement("td");
        let tdGravedad = document.createElement("td");

        tdNombre.innerText = (r.nombre);
        tdApellido.innerText = (r.apellido);
        
        let gravedad= document.createElement("i");
        
        if(r.gravedad <= 3){
            gravedad.classList.add("fas", "fa-burn", "text-danger", "fa-3x");
        }else if(r.gravedad >= 4 && r.gravedad <= 6){
            gravedad.classList.add("fas", "fa-user-times", "text-warning", "fa-3x");
        }else if(r.gravedad >= 7 && r.gravedad <= 15){
            gravedad.classList.add("fas", "fa-user-alt-slash", "text-secondary", "fa-3x");
        }else if(r.gravedad > 15){
            gravedad.classList.add("fas", "fa-skull-crossbones", "text-dark", "fa-3x");
        }
        tdGravedad.classList.add("text-center");
        tdGravedad.appendChild(gravedad);
        
        tdDetalle.innerHTML = r.detalle;
        tdCiudad.innerHTML = r.ciudad;


        tr.appendChild(tdNombre);
        tr.appendChild(tdDetalle);
        tr.appendChild(tdCiudad);
        tr.appendChild(tdGravedad);

        tbody.appendChild(tr);
    }
  };

document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let apellido = document.querySelector("#apellido-txt").value;
    let detalle = tinymce.get("detCrimen-txt").getContent();
    let ciudad = document.querySelector("#ciudad-select").value;
    let gravedad = document.querySelector("#cantCrimen-num").value;
    //console.log(gravedad);
    let reo = {};
    reo.nombre = nombre + " " + apellido;
    reo.detalle= detalle;
    reo.ciudad = ciudad;
    reo.gravedad = gravedad;
    reos.push(reo);
    cargarTabla();
    
    Swal.fire("Resultado exitoso!", "Registro de criminal realizado", "info");
});

//Intento de hacer el select
const ciudades = [];
  const cargarSelect = ()=>{
    let tbody = document.querySelector("#tbody-select");
    tbody.innerHTML="";
    for (let i=0; i<ciudades.length; i++);
        let c = ciudades[i];
        let option = document.createElement("option");
        let slCiudad = document.createElement("option");

        let ciudad = document.createElement("i");

        if(c.ciudad == "1"){
            ciudad.classList.add("Viña del mar");
        }else if(c.ciudad == "2"){
            ciudad.classList.add("Quilpué");
        }else if(c.ciudad == "3"){
            ciudad.classList.add("Santiago");
        }else if(ciudad == "4"){
            ciudad.classList.add("Otro que no sea Santiago");
        }
        
        
        
        
         


        option.appendChild(slCiudad);

        tbody.appendChild(option);
  }



document.querySelector("#ciudad-select").addEventListener("click", ()=>{
    let ciudad ={};
    ciudad.ciudad = ciudad;
    ciudades.push(ciudad);
    cargarSelect;

});
//No sirve... :c