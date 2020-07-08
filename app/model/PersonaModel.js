Ext.define('InduccionApp.model.PersonaModel', {
    extend: 'Ext.data.Model',

    fields: [{
        type: 'int',
        name: 'id'
    }, 
    'nombre', 'segundoNombre', 'paterno', 'materno',
    {
        type: 'date',
        name: 'fechaNacimiento',
        dateFormat: 'Y-m-d'
    }, {
        type: 'float',
        name: 'estatura'
    }, {
        type: 'float',
        name: 'peso'
    }, {
        type: 'boolean',
        name: 'esSoltero'
    }, {
        type: 'int',
        name: 'numHijos'
    }]
});