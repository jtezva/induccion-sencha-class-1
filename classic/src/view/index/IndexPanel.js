Ext.define('InduccionApp.view.index.IndexPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'indexpanel',
    //viewModel: 'indexpanelviewmodel',

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
            //allowBlank: false,
            minLength: 3,
            maxLength: 15
        },
        layout: {
            type: 'table',
            columns: 2
        },
        items: [{
            fieldLabel: 'Buscar por nombre/apellidos',
            name: 'filtro'
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
            xtype: 'actioncolumn',
            width: 60,
            items: [{
                iconCls: 'x-fa fa-pencil',
                handler: 'onEditarClic'
            }, {
                iconCls: 'x-fa fa-trash',
                handler: 'onEliminarClic'
            }]
        }, {
            text: 'Nombre',
            flex: 1,
            dataIndex: 'nombre'
        }, {
            text: 'Apellido Paterno',
            flex: 1,
            dataIndex: 'paterno'
        }, {
            text: 'Apellido Materno',
            flex: 1,
            dataIndex: 'materno'
        }, {
            xtype: 'datecolumn',
            text: 'Fecha Nacimiento',
            dataIndex: 'fechaNacimiento',
            format: 'D d M Y',
            flex: 1
        }],
        store: {
            autoLoad: false,
            model: 'InduccionApp.model.PersonaModel',
            proxy: {
                type: 'ajax',
                url: 'http://softitlan.com:8081/persona/getPersonasByFilter',
                //url: 'api/persona/get.json',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        },
        tbar: [{
            /*bind: {
                text: '{sharedField}',
            },*/
            text: 'Agregar',
            handler: 'onAgregarClic',
            iconCls: 'x-fa fa-plus'
        }]
    }]
});