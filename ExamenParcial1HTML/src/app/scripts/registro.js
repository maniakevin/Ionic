const formaregistrate = document.getElementById('formaregistrate');

formaregistrate.addEventListener('submit',(e)=>{
    e.preventDefault();

    const correo = formaregistrate['rcorreo'].value;
    const contrasena = formaregistrate['rcontrasena'].value;

    auth.createUserWithEmailAndPassword(correo,contrasena).then( cred =>{

        return db.collection('usuarios').doc(cred.user.uid).set({
            nombre: formaregistrate['nombre'].value,
            apellido: formaregistrate['apellido'].value,
            sexo: formaregistrate['sexo'].value
        });


    }).then( ()=>{
        formaregistrate.reset();
        formaregistrate.querySelector('.error').innerHTML = '';
    }).catch( err => {
        formaregistrate.querySelector('.error').innerHTML = mensajeError(err.code);
    });


});


const salir = document.getElementById('salir');

salir.addEventListener('click', (e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
        alert("El usuario ha salido del sistema");
    });

});
