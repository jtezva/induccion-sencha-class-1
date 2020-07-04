Ext.define('InduccionApp.view.index.IndexPanel', {
    extend: 'Ext.Panel',
    xtype: 'indexpanel',

    controller: 'indexpanel',

    scrollable: true,
    title: 'Mi Panel principal',

    items: [{
        xtype: 'formpanel',
        title: 'Buscar',
        iconCls: 'x-fa fa-search',
        defaults: {
            xtype: 'textfield'
        },
        items: [{
            label: 'Sucursal',
            name: 'cdsucur'
        }, {
            label: 'Ramo',
            name: 'cdramo'
        }, {
            label: 'Póliza',
            name: 'nmpoliza'
        }],
        buttons: [{
            text: 'Buscar',
            handler: 'onBuscarClic',
            iconCls: 'x-fa fa-search'
        }, {
            text: 'Limpiar',
            handler: 'onLimpiarClic',
            iconCls: 'x-fa fa-refresh'
        }]
    }, {
        xtype: 'grid',
        title: 'Resultados de búsqueda',
        //frame: true,
        minHeight: 200,
        maxHeight: 400,
        columns: [{
            text: 'No.',
            width: 60
        }, {
            text: 'Sucursal',
            flex: 1,
            minWidth: 100,
            dataIndex: 'cdsucur'
        }, {
            text: 'Ramo',
            flex: 1,
            minWidth: 100,
            dataIndex: 'cdramo'
        }, {
            text: 'Poliza',
            flex: 1,
            minWidth: 100,
            dataIndex: 'nmpoliza'
        }, {
            text: 'Contratante',
            flex: 3,
            minWidth: 100,
            dataIndex: 'nombreContra'
        }],
        store: {
            autoLoad: false,
            model: 'InduccionApp.model.PolizaModel',
            proxy: {
                type: 'ajax',
                url: 'api/poliza/get.json',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        },
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                text: 'Agregar',
                handler: 'onAgregarClic',
                iconCls: 'x-fa fa-plus'
            }]
        }]
    }]
});