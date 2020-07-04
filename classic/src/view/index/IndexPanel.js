Ext.define('InduccionApp.view.index.IndexPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'indexpanel',
    viewModel: 'indexpanelviewmodel',

    controller: 'indexpanel',

    scrollable: true,
    title: 'Mi Panel principal',

    frame: true,
    bodyPadding: '20 0 0 20',
    defaults: {
        style: 'margin: 0 20px 20px 0'
    },

    items: [{
        xtype: 'form',
        title: 'Buscar',
        iconCls: 'x-fa fa-search',
        bodyPadding: '20 0 0 20',
        style: 'margin: 0 20px 20px 0',
        frame: true,
        defaults: {
            xtype: 'textfield',
            style: 'margin: 0 20px 20px 0',
            allowBlank: false,
            minLength: 3,
            maxLength: 15
        },
        layout: {
            type: 'table',
            columns: 2
        },
        items: [{
            fieldLabel: 'Sucursal',
            name: 'cdsucur',
            bind: {
                value: '{sharedField}'
            }
        }, {
            fieldLabel: 'Ramo',
            name: 'cdramo'
        }, {
            fieldLabel: 'Póliza',
            name: 'nmpoliza'
        }, {
            fieldLabel: 'binding value...',
            bind: {
                value: '{sharedField}'
            }
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
        frame: true,
        columns: [{
            text: 'No.',
            width: 60
        }, {
            text: 'Sucursal',
            flex: 1,
            dataIndex: 'cdsucur'
        }, {
            text: 'Ramo',
            flex: 1,
            dataIndex: 'cdramo'
        }, {
            text: 'Poliza',
            flex: 1,
            dataIndex: 'nmpoliza'
        }, {
            text: 'Contratante',
            flex: 3,
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
        tbar: [{
            bind: {
                text: '{sharedField}',
            },
            handler: 'onAgregarClic',
            iconCls: 'x-fa fa-plus'
        }]
    }]
});