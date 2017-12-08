const CVdataRows=[
  {
    nombres:'valeria',
    apellidos:'meneses',
    sexo:'femenino',
    fechaNacimiento:'1993-02-18',
    direccion:'Av. morelos 12 totolandia',
    telefono: '2222222222',
    email:'val@mail.com',
    nombreInstituto:'UTTEC',
    tituloAdquirido:'biotecnologia',
    fechaInicioEdu:'2012-01-22',
    fechaTerminoEdu:'2015-10-22',
    cedula:'123456',
    puesto:'tec laboratorista',
    funciones:'extraccion de adn',
    empresa:'CIMMIT',
    fechaInicioExp:'2014-08-22',
    fechaTerminoExp:'2015-08-22',
    cursos:'hambiental, otro, otro',
    seminarios:'otro, otro, otro',
    diplomados:'ninguno',
    publicaciones:'nada',
    otros:'otro',
    idiomas:'ingles'
  },
  {
    nombres:'oscar',
    apellidos:'aguilar',
    sexo:'masculino',
    fechaNacimiento:'1990-12-22',
    direccion:'Av. morelos 12 Totolcingo',
    telefono: '5555555555',
    email:'oscar@mail.com',
    nombreInstituto:'UTTEC',
    tituloAdquirido:'administracion',
    fechaInicioEdu:'2012-01-22',
    fechaTerminoEdu:'2015-10-22',
    cedula:'123456',
    puesto:'recursos humanos',
    funciones:'reclutacion',
    empresa:'FITSA',
    fechaInicioExp:'2014-08-22',
    fechaTerminoExp:'2015-08-22',
    cursos:'admon, otro, otro',
    seminarios:'admon, otro, otro',
    diplomados:'ninguno',
    publicaciones:'nada',
    otros:'otro',
    idiomas:'ingles'
  }
];

exports.seed = function(knex, Promise) {
  return knex('curriculums')
    .del()
    .then(() => {
      return knex('curriculums')
        .insert(CVdataRows);
    });
}
