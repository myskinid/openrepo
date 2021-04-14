jQuery(document).ready((function(t){t.formUtils.addValidator({name:"valid_phone",validatorFunction:function(a,n,e,i,o){return t(n).intlTelInput("isValidNumber")},errorMessage:"Please enter a valid phone number.",errorMessageKey:"badPhone"}),t("#phone_selector").intlTelInput({nationalMode:!0}),t("#phone_selector").on("keyup change",(function(){var a=t("#phone_selector").intlTelInput("getNumber");a&&t("#phone").val(a)})),t('#signup input[name="email"]').bind("blur",(function(){t(this).parent().addClass("validating-server-side"),t(this).addClass("validating-server-side");var n=window.startbooking.api_url+"api/v1/users/check",e=t(this),i=t(this).val();a(n,e,i,(function(a){e.removeClass("validating-server-side"),e.parent().removeClass("validating-server-side"),"error"===a.message&&(e.parent().removeClass("has-success"),e.removeClass("valid"),e.parent().addClass("has-error"),displayContainer=t("<span></span>"),displayContainer.addClass("help-block form-error").appendTo(e.parent()),displayContainer.html(a.data)),"success"===a.message&&(e.parent().addClass("has-success"),e.addClass("valid"),e.parent().removeClass("has-error"),t(".help-block").hide())}))}));var a=function(a,n,e,i){var o=n.valAttr("req-params")||n.data("validation-req-params")||{},s=n.valAttr("param-name")||n.attr("name"),r=function(t,a){a(t)};if(!s)throw new Error("Missing input name used for http requests made by server validator");o||(o={}),"string"==typeof o&&(o=t.parseJSON(o)),o[s]=e,t.ajaxSetup({headers:{"X-CSRF-TOKEN":t('#register_user > input[type="hidden"]').val()}}),t.ajax({url:a,type:"POST",cache:!1,data:o,dataType:"json",error:function(t){return r({valid:!1,message:"Connection failed with status: "+t.statusText},i),!1},success:function(t){r(t,i)}})};t("#signup").submit((function(a){a.preventDefault(),t('#signup button[type="submit"]').addClass("loading"),t('#signup button[type="submit"]').html("Loading..."),t('#signup button[type="submit"]').prop("disabled",!0);var n={action:"cbsb_app_signup",first_name:t("#signup input[name=first_name]").val(),last_name:t("#signup input[name=last_name]").val(),email:t("#signup input[name=email]").val(),phone:t("#signup input[name=phone]").val(),password:t("#signup input[name=password]").val()};t.post(ajaxurl,n,(function(a){a.reload?window.setTimeout((function(){window.location=a.page}),1e3):(t.each(a.errors,(function(a,n){var e=t("#signup input[name="+a+"]").parent();e.addClass("has-error"),displayContainer=t("<span></span>"),displayContainer.addClass("help-block form-error").appendTo(e),displayContainer.html(n)})),t('#signup button[type="submit"]').removeClass("loading"),t('#signup button[type="submit"]').html("Continue to next step &rarr;"),t('#signup button[type="submit"]').prop("disabled",!1))}))})),t("#connect").submit((function(a){a.preventDefault(),t('#connect button[type="submit"]').addClass("loading"),t('#connect button[type="submit"]').html("Loading..."),t('#connect button[type="submit"]').prop("disabled",!0);var n={action:"cbsb_app_connect_account",email:t("#connect input[name=email]").val(),password:t("#connect input[name=password]").val()};t.post(ajaxurl,n,(function(a){a.reload?window.setTimeout((function(){window.location.href=window.startbooking.wp_admin_url+"admin.php?page=cbsb-dashboard"}),1e3):(t.each(a.errors,(function(a,n){var e=t("#connect input[name="+a+"]").parent();e.addClass("has-error"),displayContainer=t("<span></span>"),displayContainer.addClass("help-block form-error").appendTo(e),displayContainer.html(n)})),t('#connect button[type="submit"]').removeClass("loading"),t('#connect button[type="submit"]').html("Connect with Start Booking"),t('#connect button[type="submit"]').prop("disabled",!1))}))})),t("#set_plan").submit((function(a){a.preventDefault(),t('#set_plan button[type="submit"]').addClass("loading"),t('#set_plan button[type="submit"]').html("Loading..."),t('#set_plan button[type="submit"]').prop("disabled",!0);var n=t("#set_plan input[name=plan]").val(),e=t("#set_plan input[name=onboard_id]").val();if("free"==n){var i={action:"cbsb_app_set_plan_free",timezone:Intl.DateTimeFormat().resolvedOptions().timeZone};t.post(ajaxurl,i,(function(t){t.page&&window.setTimeout((function(){window.location=t.page}),1e3)}))}else{var o=t("#set_plan input[name=term]").val();if("annual"==o)var s="annual";if("month"==o)s="month";i={action:"cbsb_app_plan",plan:n,term:s};var r=window.startbooking.app_url+"payment?utm_source=plugin&utm_medium=signup&utm_content=pricing",p=t('<form action="'+r+'" method="POST"><input type="text" name="plan" value="'+n+'" /><input type="text" name="term" value="'+s+'" /><input type="text" name="onboard_id" value="'+e+'" /><input type="text" name="redirect_url" value="'+window.startbooking.wp_admin_url+'" /></form>');t("body").append(p),p.submit()}})),t("#account").submit((function(a){a.preventDefault(),t('#account button[type="submit"]').addClass("loading"),t('#account button[type="submit"]').html("Loading..."),t('#account button[type="submit"]').prop("disabled",!0);var n={action:"cbsb_app_create_account",account_name:t("#account input[name=account_name]").val(),street:t("#account input[name=street]").val(),city:t("#account input[name=city]").val(),state:t("#account input[name=state]").val(),zip:t("#account input[name=zip]").val(),country:t("#account input[name=country]").val(),timezone:Intl.DateTimeFormat().resolvedOptions().timeZone};t.post(ajaxurl,n,(function(a){!function(a,n="info",e=4){t("body").append('<div class="notification-message">'+a+'<a href="#" class="close"><i class="icon-close"></i></a></div>'),t(".notification-message").fadeIn(),window.setTimeout((function(){t(".notification-message").fadeOut(),t(".notification-message").remove()}),1e3*e)}(a.message,a.status,5),a.reload?window.setTimeout((function(){window.location=a.page}),1e3):(t.each(a.errors,(function(a,n){var e=t("#account input[name="+a+"]").parent();e.addClass("has-error"),displayContainer=t("<span></span>"),displayContainer.addClass("help-block form-error").appendTo(e),displayContainer.html(n)})),t('#account button[type="submit"]').removeClass("loading"),t('#account button[type="submit"]').html("Complete and get started &rarr;"),t('#account button[type="submit"]').prop("disabled",!1))}))}))}));
