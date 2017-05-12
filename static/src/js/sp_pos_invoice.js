//$('button.js_invoice').click();
odoo.define('sp_pos_invoice.sp_pos_invoice', function (require) {
"use strict";
    var pos_model = require('point_of_sale.models');
    var Model = require('web.DataModel');

    pos_model.PosModel = pos_model.PosModel.extend({
        add_new_order: function(){
            var self = this;
            console.log(self);
            //this._super();
            pos_model.PosModel.__super__.add_new_order.apply(this, arguments);
            //var order = this.pos.get_order();
            var order = this.attributes.selectedOrder;
            order.set_to_invoice(true);
        }
    });
});

