/**
 * This view is an example list of people.
 */
Ext.define('app.view.main.List', {
    extend: 'Ext.grid.Panel',

    xtype: 'mainlist',

    requires:["calculator.WindowCalculator"],

    title: 'Enter a number',

    columns: [
        { text: 'Number',  dataIndex: 'number' , flex: 1}
    ],

    initComponent: function (){
        Ext.apply( this,{
            store : Ext.create("Ext.data.Store"),
            tbar : [{
                iconCls:'fas fa-hashtag',
                text:"Please enter a number",
                scope: this,
                handler: this.onEnterNumber
            }]
        });
        this.callParent();
    },

    onEnterNumber: function (){
        Ext.create("calculator.WindowCalculator", {
            listeners:{
                scope: this,
                oknumber: function (popupw,ctr,number){
                    this.store.add({
                        number: number
                    });
                    popupw.close();
                }
            }
        });
    }
});
