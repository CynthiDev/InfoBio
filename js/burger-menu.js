function burger() {    //la funsion se ejecuta cuando yo lo llamo                              //dentro de los parentesis va un parametro que esun elementro que necesito indicar para aplicar la funcion, si no hay quedan vacios                                                             
    var btnmain = document.getElementById('btn-principal')  // 1  aqui seleccionamos el nodo que queremos modificar
    if(btnmain.style.display == 'block')
        { btnmain.style.display = 'none' }     //2   modificamos el display con el valor none
    else{
        btnmain.style.display = 'block' }
}


function plegado() {                                                            
    var btnmain = document.getElementById('btn-principal')
    if(screen.width <= 599) btnmain.style.display = 'none' 
}

// 3 es necesario detallar un evento  en HTML para saber cuando se va a ejecutar la funcion
 //las funciones sirven para que no se ejecunten al inicio


