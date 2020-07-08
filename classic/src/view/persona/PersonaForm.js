Ext.define('InduccionApp.view.persona.PersonaForm', {
    extend: 'Ext.window.Window',
    xtype: 'personaform',

    controller: 'personaform',

    title: 'Formulario de persona',
    modal: true,
    //width: 800,
    maxWidth: 800,
    maxHeight: 600,
    scrollable: true,

    config: {
        funcion: null,
        persona: null
    },

    //override
    initComponent: function () {
        this.callParent();
        let me = this;
        if (me.getFuncion() === 'update') {
            me.down('form').loadRecord(me.getPersona());
        }
        me.setTitle('Formulario de persona (' + this.getFuncion() + ')');
    },

    items: [{
        xtype: 'form',
        bodyPadding: '20 0 0 20',
        layout: {
            type: 'table',
            columns: 2
        },
        defaults: {
            xtype: 'textfield',
            allowBlank: false,
            style: 'margin: 0 20px 20px 0'
        },
        items: [{
            fieldLabel: 'Nombre',
            name: 'nombre'
        }, {
            fieldLabel: 'Segundo Nombre',
            name: 'segundoNombre'
        }, {
            fieldLabel: 'Apellido Paterno',
            name: 'paterno'
        }, {
            fieldLabel: 'Apellido Materno',
            name: 'materno'
        }, {
            xtype: 'datefield',
            fieldLabel: 'Fecha de Nacimiento',
            name: 'fechaNacimiento',
            format: 'Y-m-d' // en ICE d/m/Y
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Estatura',
            name: 'estatura',
            allowDecimals: true,
            decimalPrecision: 2
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Peso',
            name: 'peso',
            allowDecimals: true,
            decimalPrecision: 2
        }, {
            xtype: 'checkbox',
            inputValue: 1,
            uncheckedValue: 0,
            fieldLabel: 'Es solter@',
            name: 'esSoltero'
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Num. Hijos',
            name: 'numHijos'
        }]
    }],

    buttons: [{
        text: 'Guardar',
        iconCls: 'x-fa fa-save',
        handler: 'onGuardarClic'
    }]
});