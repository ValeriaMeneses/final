const categoryDataRows = [
  {
    categorias:'Administración'
  },
  {
    categorias:'Contabilidad'
  },
  {
    categorias:'Ingeniería'
  },
  {
    categorias:'Tecnologías de la información'
  },
  {
    categorias:'Recursos Humanos'
  },
  {
    categorias:'Ventas'
  },
  {
    categorias:'Marketing'
  },
  {
    categorias:'Producción'
  },
  {
    categorias:'Dirección General'
  }


];

exports.seed = function(knex, Promise) {
  return knex('category')
    .del()
    .then(() => {
      return knex('category')
        .insert(categoryDataRows);
    });
}
