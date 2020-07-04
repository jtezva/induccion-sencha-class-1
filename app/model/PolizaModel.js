Ext.define('InduccionApp.model.PolizaModel', {
    extend: 'Ext.data.Model',

    fields: [{
        type: 'int',
        name: 'cdsucur'
    }, {
        type: 'int',
        name: 'cdramo'
    }, {
        type: 'string',
        name: 'nmpoliza'
    }, {
        type: 'string',
        name: 'nombreContra'
    }]
});
