const alumnos = [
    {
        legajo:234,
        usuario:'dvillegas',
        password: '1234abc',
        telefonos:{
            celular:2994444555,
            fijo:2994773245
        } 
    },
    {
        legajo:544,
        usuario:'santiago',
        password: '321cba',
        telefonos:{
            celular:2995111555,
            fijo:299455666245
        } 
    },
]
alumnos.forEach(Element => {console.log(element.usuario)
});