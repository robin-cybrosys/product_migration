odoo.define("product_migration.product_fetch", function (require) {
  "use strict";
  var core = require("web.core");
  var Widget = require("web.Widget");
  var SystrayMenu = require("web.SystrayMenu");
  var rpc = require("web.rpc");
  var _t = core._t;
  var QWeb = core.qweb;
  var QRWidget = Widget.extend({
    template: "MigrateSystray",
    events: {
      //           "click": "on_click",
      //           "click #qr_clear": "fn_clear",
      "click #product_fetch": "fn_fetch",
    },
    start: function () {
      this.$("#alert").hide();
      this.$("#ItemPreview").hide();
    },
    on_click: function (event) {
      if ($(event.target).is("i") === false) {
        event.stopPropagation();
      }
    },
    fn_fetch: function () {
      rpc
        .query({
          model: "product.fetch",
          method: "migrate_btn",
        })
        .then(function (result) {
          if (result) {
            $("#ItemPreview").html(
              "<center>" +
                " RECORDS FROM V14 : " +result.rec_14 +
                " <br/>" +
                " EXISTING RECORDS ON V15 : " +result.rec_15 +
                "<br/><br/><h6> MIGRATION COMPLETED! </h6></center>"
            );

            $("#ItemPreview").show();
          } else {
            $("#ItemPreview").hide();
          }
        });
    },

  });
  SystrayMenu.Items.push(QRWidget);
  return {
    QRWidget: QRWidget,
  };
});
