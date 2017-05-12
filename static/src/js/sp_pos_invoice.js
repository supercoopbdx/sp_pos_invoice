odoo.define('sp_pos_invoice.sp_pos_invoice', function (require) {
"use strict";

    var pos_gui = require('point_of_sale.gui');

    pos_gui.Gui = pos_gui.Gui.extend({

        // Override the default behavior
        // to force activation of invoice button
        show_screen: function(screen_name,params,refresh) {
            var self = this;
            this._super(screen_name,params,refresh);
            if (screen_name == 'payment' && !$('.js_invoice').hasClass('highlight')) {
                $('.js_invoice').click();
            }
        }
    });
});
