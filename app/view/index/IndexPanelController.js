Ext.define('InduccionApp.view.index.IndexPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.indexpanel',

    onBuscarClic: function (button) {
        console.log(arguments);
        let me = this; // controller
        let view = me.getView(); // panel
        let form = view.down(Ext.toolkit === 'classic' ? 'form' : 'formpanel'); // el primer componente que encuentres tipo form
        let values = form.getValues();
        if (Ext.toolkit === 'classic') {
            let isFormValid = form.isValid();
            if (isFormValid !== true) {
                Ext.toast('Favor de validar los datos');
            }
        } else { // modern
            if ((values.cdsucur || '').length === 0) {
                Ext.toast('Ingresar sucursal');
                return;
            } else if ((values.cdramo || '').length === 0) {
                Ext.toast('Ingresar ramo');
                return;
            } else if ((values.nmpoliza || '').length === 0) {
                Ext.toast('Ingresar Póliza');
                return;
            }
        }
        let grid = view.down('grid');
        grid.getStore().getProxy().extraParams = values;
        grid.getStore().reload();
    },

    onLimpiarClic: function (button) {
        console.log(arguments);
        alert('onLimpiarClic');
    },

    onAgregarClic: function (button) {
        console.log(arguments);
        let me = this;
        let view = me.getView();
        let w = Ext.create({
            xtype: 'personaform',
            funcion: 'insertar',
            listeners: {
                show: function (comp) {
                    Ext.toast('La ventana de formulario de persona se muestra en pantalla');
                },
                insert: function (comp) {
                    Ext.toast('El formulario ha insertado una persona');
                    view.down('grid').getStore().reload();
                } 
            }
        });
        w.show();
    },

    onEditarClic: function (view2222, rowIndex, colIndex, item, e, record) {
        console.log(arguments);
        let me = this;
        let view = me.getView();
        let w = Ext.create({
            xtype: 'personaform',
            funcion: 'update',
            persona: record,
            listeners: {
                show: function (comp) {
                    Ext.toast('La ventana de formulario de persona se muestra en pantalla');
                },
                update: function (comp) {
                    Ext.toast('El formulario ha actualizado una persona');
                    view.down('grid').getStore().reload();
                } 
            }
        });
        w.show();
    },

    onEliminarClic: function (view2222, rowIndex, colIndex, item, e, record) {
        let me = this;
        let view = me.getView();
        Ext.Ajax.request({
            url: 'http://softitlan.com:8081/persona/delete/' + record.data.id,
            method: 'GET',
            success: function (response) {
                let json = Ext.JSON.decode(response.responseText);
                if (json.success === true) {
                    Ext.toast('Eliminado correctamente!');
                    view.down('grid').getStore().reload();
                } else {
                    Ext.toast(json.message);
                }
            },
            failure: function (response) {
                console.error(response);
                Ext.toast('Error en el servicio de eliminar');
            }
        });
    }
});