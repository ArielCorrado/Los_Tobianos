const formHTML = (nombre, apellido, telefono, email, mensaje) => {
    
    return `
           
        <strong>Nombre</strong> <br>
        <p class='input' name='firstname' type='text'> ${nombre} </p> <br>
        <strong>Apellido</strong> <br>
        <p class='input' name='firstname' type='text'> ${apellido} </p> <br>
        <strong>Teléfono</strong> <br>
        <p class='input' name='firstname' type='text'> ${telefono} </p> <br>
        <strong>e-mail</strong> <br>
        <p class='input' name='firstname' type='text'> ${email} </p> <br>
        <strong>Mensaje</strong> <br>
        <p class='input' name='firstname' type='text'> ${mensaje} </p> <br>        

    `
}

export default formHTML;