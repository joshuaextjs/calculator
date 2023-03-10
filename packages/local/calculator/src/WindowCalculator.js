Ext.define('calculator.WindowCalculator', {
    extend: 'Ext.window.Window',

    /* Marks these are required classes to be to loaded before loading this view */
    requires: [
        'calculator.WindowCalculatorController',
        'calculator.WindowCalculatorModel'
    ],


    controller: 'windowcalculatorcontroller',

    /* View model of the view */
    viewModel: {
        type: 'windowcalculatormodel'
    },

    resizable: false,
    layout: {
        type: 'table',
        columns: 4
    },

    /* Defaults properties to be used for the child items. Any child can override it */
    autoShow: true,
    defaultType: 'button',
    defaults: {
        width: 50,
        height: 50,
        cls: 'btn',
        handler: 'onClickNumber'
    },

    /* I’m using the header config of the Ext.window.Window to display the result in calculator. Using this header you can move the floating calculator around within the browser */
    header: {
        items: [
            {
                xtype: 'displayfield',
                colspan: 4,
                width: 200,
                cls: 'display',
                bind: {
                    value: '{display}'
                },
                height: 60,
                padding: 0

            }]
    },
    items: [
        {
            text: 'C',
            colspan: 2,
            width: 100,
            cls: 'btn-green',
            handler: 'onClickClear'
        },
        {
            text: '+/-',
            cls: 'btn-green',
            handler: 'onClickChangeSign'
        },
        {
            text: '&divide;',
            cls: 'btn-orange',
            handler: 'onClickOp'
        },
        {
            text: '7'
        },
        {
            text: '8'
        },
        {
            text: '9'
        },
        {
            text: '&times;',
            cls: 'btn-orange',
            handler: 'onClickOp'
        },
        {
            text: '4'
        },
        {
            text: '5'
        },
        {
            text: '6'
        },
        {
            text: '-',
            cls: 'btn-orange',
            handler: 'onClickOp'
        },
        {
            text: '1'
        },
        {
            text: '2'
        },
        {
            text: '3'
        },
        {
            text: '+',
            cls: 'btn-orange',
            handler: 'onClickOp'
        },
        {
            text: '0',
            width: 100,
            colspan: 2
        },
        {
            text: '.',
            handler: 'onClickDot'
        },
        {
            text: 'OK',
            cls: 'btn-orange',
            handler: 'onClickOK'
        }
    ]
});