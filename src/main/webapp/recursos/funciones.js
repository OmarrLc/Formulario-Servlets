const validarForma = (forma) => {
    var usuario = forma.usuario;
    if(usuario.value == ""){
            alert("Debe proporcionar un nombre de usuario");
            usuario.focus();
            usuario.select();
            return false;
    }
    
    var password = forma.password;
    if(password.value == ""){
            alert("Debe proporcionar una contraseña");
            password.focus();
            password.select();
            return false;
    }
    
    var tecnologias = forma.tecnologia;
    var checkSeleccionado = false;
    for(var i = 0; i<tecnologias.length; i++){
        if(tecnologias[i].checked){
            checkSeleccionado = true;
        }
    }
    if(!checkSeleccionado){
            alert("Debe seleccionar una Tecnologia");
            return false;
    }
    
    var genero = forma.genero;
    var radioSeleccionado = false;
    
    for(var i = 0; i<genero.length; i++){
        if(genero[i].checked){
            radioSeleccionado = true;
        }
    }
    if(!radioSeleccionado){
        alert("Debe seleccionar un Genero");
        return false;
    }
    
    var ocupacion = forma.ocupacion;
    if(ocupacion.value == ""){
        alert("Debe seleccionar una ocupacion");
        return false;
    }
    
    alert("Formulario Valido");
    return true;
}
