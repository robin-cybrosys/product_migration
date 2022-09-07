odoo.define('crm_dashboard.custom', function (require) {
    'use strict';

    var rpc = require('web.rpc');
    var manager = false;
    rpc.query({
        model: "crm.lead",
        method: "check_user_group",
    })
    .then(function (res) {
        manager = res;
    });

    $(document).on("mouseenter", ".card", function(event){
        // console.log("ON")

        rpc
        .query({
          model: "product.fetch",
          method: "check_availability",
        })
        .then(function (result) {
          if (result) {
            $("#ItemPreview").html(
              "<center>" +
                result.rec_14 +
                " RECORDS TO BE MIGRATED FROM V14" +
                " <br/>" +
                result.rec_15 +
                " DUPLICATE RECORDS EXISTS ON V15" +
                "<br/><br/></center>"
            );

            $("#ItemPreview").show();
          } else {
            $("#ItemPreview").hide();
          }
        });
    });
//    $(document).on("click", "#view_lost_dashboard", function(event){
//        $(".dashboard_main_section").css({'display':'none'});
//        $("#dashboard_sub_section").css({'display':'block'});
//    });
//    function BreadcrumbSubDash(){
//        $(".dashboard_main_section").css({'display':'block'});
//        $("#dashboard_sub_section").css({'display':'none'});
//    };
});
