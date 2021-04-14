/** File generated by Grunt -- do not modify
 *  JQUERY-FORM-VALIDATOR
 *
 *  @version 2.3.26
 *  @website http://formvalidator.net/
 *  @author Victor Jonsson, http://victorjonsson.se
 *  @license MIT
 */
!function(e,t){"function"==typeof define&&define.amd?define(["jquery"],(function(e){return t(e)})):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(0,(function(e){!function(e,t){"use strict";e.fn.validateForm=function(t,a){return e.formUtils.warn("Use of deprecated function $.validateForm, use $.isValid instead"),this.isValid(t,a,!0)},e(window).on("validatorsLoaded formValidationSetup",(function(t,a,r){a||(a=e("form")),function(t){t&&"custom"===t.errorMessagePosition&&"function"==typeof t.errorMessageCustom&&(e.formUtils.warn("Use of deprecated function errorMessageCustom, use config.submitErrorMessageCallback instead"),t.submitErrorMessageCallback=function(e,a){t.errorMessageCustom(e,t.language.errorTitle,a,t)})}(r),function(t){if(t.errorMessagePosition&&"object"==typeof t.errorMessagePosition){e.formUtils.warn("Deprecated use of config parameter errorMessagePosition, use config.submitErrorMessageCallback instead");var a=t.errorMessagePosition;t.errorMessagePosition="top",t.submitErrorMessageCallback=function(){return a}}}(r),function(t){var a=t.find("[data-validation-if-checked]");a.length&&e.formUtils.warn('Detected use of attribute "data-validation-if-checked" which is deprecated. Use "data-validation-depends-on" provided by module "logic"'),a.on("beforeValidation",(function(){var a=e(this),r=a.valAttr("if-checked"),n=e('input[name="'+r+'"]',t),i=n.is(":checked"),o=(e.formUtils.getValue(n)||"").toString(),s=a.valAttr("if-checked-value");(!i||s&&s!==o)&&a.valAttr("skipped",!0)}))}(a)}))}(e),function(e){"use strict";var t={resolveErrorMessage:function(e,t,a,r,n){var i=r.validationErrorMsgAttribute+"-"+a.replace("validate_",""),o=e.attr(i);return o||((o=e.attr(r.validationErrorMsgAttribute))||((o="function"!=typeof t.errorMessageKey?n[t.errorMessageKey]:n[t.errorMessageKey(r)])||(o=t.errorMessage))),o},getParentContainer:function(t){if(t.valAttr("error-msg-container"))return e(t.valAttr("error-msg-container"));var a=t.parent();if(!a.hasClass("form-group")&&!a.closest("form").hasClass("form-horizontal")){var r=a.closest(".form-group");if(r.length)return r.eq(0)}return a},applyInputErrorStyling:function(e,t){e.addClass(t.errorElementClass).removeClass("valid"),this.getParentContainer(e).addClass(t.inputParentClassOnError).removeClass(t.inputParentClassOnSuccess),""!==t.borderColorOnError&&e.css("border-color",t.borderColorOnError)},applyInputSuccessStyling:function(e,t){e.addClass("valid"),this.getParentContainer(e).addClass(t.inputParentClassOnSuccess)},removeInputStylingAndMessage:function(e,a){e.removeClass("valid").removeClass(a.errorElementClass).css("border-color","");var r=t.getParentContainer(e);if(r.removeClass(a.inputParentClassOnError).removeClass(a.inputParentClassOnSuccess),"function"==typeof a.inlineErrorMessageCallback){var n=a.inlineErrorMessageCallback(e,!1,a);n&&n.html("")}else r.find("."+a.errorMessageClass).remove()},removeAllMessagesAndStyling:function(a,r){if("function"==typeof r.submitErrorMessageCallback){var n=r.submitErrorMessageCallback(a,r);n&&n.html("")}else a.find("."+r.errorMessageClass+".alert").remove();a.find("."+r.errorElementClass+",.valid").each((function(){t.removeInputStylingAndMessage(e(this),r)}))},setInlineMessage:function(t,a,r){this.applyInputErrorStyling(t,r);var n,i=document.getElementById(t.attr("name")+"_err_msg"),o=!1,s=function(r){e.formUtils.$win.trigger("validationErrorDisplay",[t,r]),r.html(a)},l=function(){var i=!1;o.find("."+r.errorMessageClass).each((function(){return this.inputReferer===t[0]?(i=e(this),!1):void 0})),i?a?s(i):i.remove():""!==a&&(n=e('<div class="'+r.errorMessageClass+' alert"></div>'),s(n),n[0].inputReferer=t[0],o.prepend(n))};if(i)e.formUtils.warn("Using deprecated element reference "+i.id),o=e(i),l();else if("function"==typeof r.inlineErrorMessageCallback){if(!(o=r.inlineErrorMessageCallback(t,a,r)))return;l()}else{var d=this.getParentContainer(t);0===(n=d.find("."+r.errorMessageClass+".help-block")).length&&(n=e("<span></span>").addClass("help-block").addClass(r.errorMessageClass)).appendTo(d),s(n)}},setMessageInTopOfForm:function(t,a,r,n){var i='<div class="{errorMessageClass} alert alert-danger"><strong>{errorTitle}</strong><ul>{fields}</ul></div>',o=!1;if("function"!=typeof r.submitErrorMessageCallback||(o=r.submitErrorMessageCallback(t,a,r))){var s={errorTitle:n.errorTitle,fields:"",errorMessageClass:r.errorMessageClass};e.each(a,(function(e,t){s.fields+="<li>"+t+"</li>"})),e.each(s,(function(e,t){i=i.replace("{"+e+"}",t)})),o?o.html(i):t.children().eq(0).before(e(i))}}};e.formUtils=e.extend(e.formUtils||{},{dialogs:t})}(e),function(e,t,a){"use strict";var r=0;e.fn.validateOnBlur=function(t,a){var r=this,n=this.find("*[data-validation]");return n.each((function(){var n=e(this);if(n.is("[type=radio]")){var i=r.find('[type=radio][name="'+n.attr("name")+'"]');i.bind("blur.validation",(function(){n.validateInputOnBlur(t,a,!0,"blur")})),a.validateCheckboxRadioOnClick&&i.bind("click.validation",(function(){n.validateInputOnBlur(t,a,!0,"click")}))}})),n.bind("blur.validation",(function(){e(this).validateInputOnBlur(t,a,!0,"blur")})),a.validateCheckboxRadioOnClick&&this.find("input[type=checkbox][data-validation],input[type=radio][data-validation]").bind("click.validation",(function(){e(this).validateInputOnBlur(t,a,!0,"click")})),this},e.fn.validateOnEvent=function(t,a){return("FORM"===this[0].nodeName?this.find("*[data-validation-event]"):this).each((function(){var r=e(this),n=r.valAttr("event");n&&r.unbind(n+".validation").bind(n+".validation",(function(r){9!==(r||{}).keyCode&&e(this).validateInputOnBlur(t,a,!0,n)}))})),this},e.fn.showHelpOnFocus=function(t){return t||(t="data-validation-help"),this.find(".has-help-txt").valAttr("has-keyup-event",!1).removeClass("has-help-txt"),this.find("textarea,input").each((function(){var a=e(this),n="jquery_form_help_"+ ++r,i=a.attr(t);i&&a.addClass("has-help-txt").unbind("focus.help").bind("focus.help",(function(){var t=a.parent().find("."+n);0===t.length&&(t=e("<span />").addClass(n).addClass("help").addClass("help-block").text(i).hide(),a.after(t)),t.fadeIn()})).unbind("blur.help").bind("blur.help",(function(){e(this).parent().find("."+n).fadeOut("slow")}))})),this},e.fn.validate=function(t,a,r){var n=e.extend({},e.formUtils.LANG,r||{});this.each((function(){var r=e(this),i=r.closest("form").get(0).validationConfig||{};r.one("validation",(function(e,a){"function"==typeof t&&t(a,this,e)})),r.validateInputOnBlur(n,e.extend({},i,a||{}),!0)}))},e.fn.willPostponeValidation=function(){return(this.valAttr("suggestion-nr")||this.valAttr("postpone")||this.hasClass("hasDatepicker"))&&!t.postponedValidation},e.fn.validateInputOnBlur=function(a,r,n,i){if(e.formUtils.eventType=i,this.willPostponeValidation()){var o=this,s=this.valAttr("postpone")||200;return t.postponedValidation=function(){o.validateInputOnBlur(a,r,n,i),t.postponedValidation=!1},setTimeout((function(){t.postponedValidation&&t.postponedValidation()}),s),this}a=e.extend({},e.formUtils.LANG,a||{}),e.formUtils.dialogs.removeInputStylingAndMessage(this,r);var l=this,d=l.closest("form"),u=e.formUtils.validateInput(l,a,r,d,i);return n&&l.unbind("keyup.validation"),u.shouldChangeDisplay&&(u.isValid?e.formUtils.dialogs.applyInputSuccessStyling(l,r):e.formUtils.dialogs.setInlineMessage(l,u.errorMsg,r)),!u.isValid&&n&&l.bind("keyup.validation",(function(t){9!==t.keyCode&&e(this).validateInputOnBlur(a,r,!1,"keyup")})),this},e.fn.valAttr=function(e,t){return undefined===t?this.attr("data-validation-"+e):!1===t||null===t?this.removeAttr("data-validation-"+e):(e=e.length>0?"-"+e:"",this.attr("data-validation"+e,t))},e.fn.isValid=function(t,a,r){if(e.formUtils.isLoadingModules){var n=this;return setTimeout((function(){n.isValid(t,a,r)}),200),null}a=e.extend({},e.formUtils.defaultConfig(),a||{}),t=e.extend({},e.formUtils.LANG,t||{}),r=!1!==r,e.formUtils.errorDisplayPreventedWhenHalted&&(delete e.formUtils.errorDisplayPreventedWhenHalted,r=!1),e.formUtils.isValidatingEntireForm=!0,e.formUtils.haltValidation=!1;var i=function(t,n){e.inArray(t,s)<0&&s.push(t),l.push(n),n.attr("current-error",t),r&&e.formUtils.dialogs.applyInputErrorStyling(n,a)},o=[],s=[],l=[],d=this;if(r&&e.formUtils.dialogs.removeAllMessagesAndStyling(d,a),d.find("input,textarea,select").filter(':not([type="submit"],[type="button"])').each((function(){var r=e(this),n=r.attr("type"),s="radio"===n||"checkbox"===n,l=r.attr("name");if(!function(t,r){return"submit"===r||"button"===r||"reset"===r||e.inArray(t,a.ignore||[])>-1}(l,n)&&(!s||e.inArray(l,o)<0)){s&&o.push(l);var u=e.formUtils.validateInput(r,t,a,d,"submit");u.isValid?u.isValid&&u.shouldChangeDisplay&&(r.valAttr("current-error",!1),e.formUtils.dialogs.applyInputSuccessStyling(r,a)):i(u.errorMsg,r)}})),"function"==typeof a.onValidate){var u=a.onValidate(d);e.isArray(u)?e.each(u,(function(e,t){i(t.message,t.element)})):u&&u.element&&u.message&&i(u.message,u.element)}return e.formUtils.isValidatingEntireForm=!1,!e.formUtils.haltValidation&&l.length>0?(r&&("top"===a.errorMessagePosition?e.formUtils.dialogs.setMessageInTopOfForm(d,s,a,t):e.each(l,(function(t,r){e.formUtils.dialogs.setInlineMessage(r,r.attr("current-error"),a)})),a.scrollToTopOnError&&e.formUtils.$win.scrollTop(d.offset().top-20)),!1):(!r&&e.formUtils.haltValidation&&(e.formUtils.errorDisplayPreventedWhenHalted=!0),!e.formUtils.haltValidation)},e.fn.restrictLength=function(t){return new e.formUtils.lengthRestriction(this,t),this},e.fn.addSuggestions=function(t){var a=!1;return this.find("input").each((function(){var r=e(this);(a=e.split(r.attr("data-suggestions"))).length>0&&!r.hasClass("has-suggestions")&&(e.formUtils.suggest(r,a,t),r.addClass("has-suggestions"))})),this}}(e,window),function(e){"use strict";e.formUtils=e.extend(e.formUtils||{},{isLoadingModules:!1,loadedModules:{},loadModules:function(t,a,r){if(e.formUtils.isLoadingModules)setTimeout((function(){e.formUtils.loadModules(t,a,r)}),10);else{var n=!1,i=function(t,a){var i=e.split(t),o=i.length,s=function(){0===--o&&(e.formUtils.isLoadingModules=!1,r&&n&&"function"==typeof r&&r())};o>0&&(e.formUtils.isLoadingModules=!0);var l="?_="+(new Date).getTime(),d=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.each(i,(function(t,r){if(0===(r=e.trim(r)).length)s();else{var i=a+r+(".js"===r.slice(-3)?"":".js"),o=document.createElement("SCRIPT");i in e.formUtils.loadedModules?s():(e.formUtils.loadedModules[i]=1,n=!0,o.type="text/javascript",o.onload=s,o.src=i+(".dev.js"===i.slice(-7)?l:""),o.onerror=function(){e.formUtils.warn("Unable to load form validation module "+i)},o.onreadystatechange=function(){"complete"!==this.readyState&&"loaded"!==this.readyState||(s(),this.onload=null,this.onreadystatechange=null)},d.appendChild(o))}}))};if(a)i(t,a);else{var o=function(){var a=!1;return e('script[src*="form-validator"]').each((function(){return"/"===(a=this.src.substr(0,this.src.lastIndexOf("/"))+"/")&&(a=""),!1})),!1!==a&&(i(t,a),!0)};o()||e(o)}}}})}(e),function(e){"use strict";e.split=function(t,a){if("function"!=typeof a){if(!t)return[];var r=[];return e.each(t.split(a||/[,|\-\s]\s*/g),(function(t,a){(a=e.trim(a)).length&&r.push(a)})),r}t&&e.each(t.split(/[,|\-\s]\s*/g),(function(t,r){return(r=e.trim(r)).length?a(r,t):void 0}))},e.validate=function(t){var a=e.extend(e.formUtils.defaultConfig(),{form:"form",validateOnEvent:!1,validateOnBlur:!0,validateCheckboxRadioOnClick:!0,showHelpOnFocus:!0,addSuggestions:!0,modules:"",onModulesLoaded:null,language:!1,onSuccess:!1,onError:!1,onElementValidate:!1});if((t=e.extend(a,t||{})).lang&&"en"!==t.lang){var r="lang/"+t.lang+".js";t.modules+=t.modules.length?","+r:r}e(t.form).each((function(a,r){r.validationConfig=t;var n=e(r);n.trigger("formValidationSetup",[n,t]),n.find(".has-help-txt").unbind("focus.validation").unbind("blur.validation"),n.removeClass("has-validation-callback").unbind("submit.validation").unbind("reset.validation").find("input[data-validation],textarea[data-validation]").unbind("blur.validation"),n.bind("submit.validation",(function(a){var r=e(this),n=function(){return a.stopImmediatePropagation(),!1};if(e.formUtils.haltValidation)return n();if(e.formUtils.isLoadingModules)return setTimeout((function(){r.trigger("submit.validation")}),200),n();var i=r.isValid(t.language,t);return e.formUtils.haltValidation?n():i&&"function"==typeof t.onSuccess?!1===t.onSuccess(r)?n():void 0:i||"function"!=typeof t.onError?!!i||n():(t.onError(r),n())})).bind("reset.validation",(function(){e.formUtils.dialogs.removeAllMessagesAndStyling(n,t)})).addClass("has-validation-callback"),t.showHelpOnFocus&&n.showHelpOnFocus(),t.addSuggestions&&n.addSuggestions(),t.validateOnBlur&&(n.validateOnBlur(t.language,t),n.bind("html5ValidationAttrsFound",(function(){n.validateOnBlur(t.language,t)}))),t.validateOnEvent&&n.validateOnEvent(t.language,t)})),""!==t.modules&&e.formUtils.loadModules(t.modules,!1,(function(){"function"==typeof t.onModulesLoaded&&t.onModulesLoaded();var a="string"==typeof t.form?e(t.form):t.form;e.formUtils.$win.trigger("validatorsLoaded",[a,t])}))}}(e),function(e,t){"use strict";var a=e(t);e.formUtils=e.extend(e.formUtils||{},{$win:a,defaultConfig:function(){return{ignore:[],errorElementClass:"error",borderColorOnError:"#b94a48",errorMessageClass:"form-error",validationRuleAttribute:"data-validation",validationErrorMsgAttribute:"data-validation-error-msg",errorMessagePosition:"inline",errorMessageTemplate:{container:'<div class="{errorMessageClass} alert alert-danger">{messages}</div>',messages:"<strong>{errorTitle}</strong><ul>{fields}</ul>",field:"<li>{msg}</li>"},scrollToTopOnError:!0,dateFormat:"yyyy-mm-dd",addValidClassOnAll:!1,decimalSeparator:".",inputParentClassOnError:"has-error",inputParentClassOnSuccess:"has-success",validateHiddenInputs:!1,inlineErrorMessageCallback:!1,submitErrorMessageCallback:!1}},validators:{},_events:{load:[],valid:[],invalid:[]},haltValidation:!1,isValidatingEntireForm:!1,addValidator:function(e){var t=0===e.name.indexOf("validate_")?e.name:"validate_"+e.name;void 0===e.validateOnKeyUp&&(e.validateOnKeyUp=!0),this.validators[t]=e},warn:function(e){"console"in t?"function"==typeof t.console.warn?t.console.warn(e):"function"==typeof t.console.log&&t.console.log(e):alert(e)},getValue:function(e,t){var a=t?t.find(e):e;if(a.length>0){var r=a.eq(0).attr("type");return"radio"===r||"checkbox"===r?a.filter(":checked").val():a.val()}return!1},validateInput:function(t,a,r,n,i){r=r||e.formUtils.defaultConfig(),a=a||e.formUtils.LANG;var o=this.getValue(t);t.valAttr("skipped",!1).one("beforeValidation",(function(){(t.attr("disabled")||!t.is(":visible")&&!r.validateHiddenInputs)&&t.valAttr("skipped",1)})).trigger("beforeValidation",[o,r,a]);var s="true"===t.valAttr("optional"),l=!o&&s,d=t.attr(r.validationRuleAttribute),u=!0,c="",f={isValid:!0,shouldChangeDisplay:!0,errorMsg:""};if(!d||l||t.valAttr("skipped"))return f.shouldChangeDisplay=r.addValidClassOnAll,f;var g=t.valAttr("ignore");return g&&e.each(g.split(""),(function(e,t){o=o.replace(new RegExp("\\"+t),"")})),e.split(d,(function(s){0!==s.indexOf("validate_")&&(s="validate_"+s);var l=e.formUtils.validators[s];if(!l)throw new Error('Using undefined validator "'+s+'". Maybe you have forgotten to load the module that "'+s+'" belongs to?');return"validate_checkbox_group"===s&&(t=n.find('[name="'+t.attr("name")+'"]:eq(0)')),("keyup"!==i||l.validateOnKeyUp)&&(u=l.validatorFunction(o,t,r,a,n)),u?void 0:(c=e.formUtils.dialogs.resolveErrorMessage(t,l,s,r,a),!1)})," "),!1===u?(t.trigger("validation",!1),f.errorMsg=c,f.isValid=!1,f.shouldChangeDisplay=!0):null===u?f.shouldChangeDisplay=!1:(t.trigger("validation",!0),f.shouldChangeDisplay=!0),"function"==typeof r.onElementValidate&&null!==c&&r.onElementValidate(f.isValid,t,n,c),t.trigger("afterValidation",[f,i]),f},parseDate:function(t,a,r){var n,i,o,s,l=a.replace(/[a-zA-Z]/gi,"").substring(0,1),d="^",u=a.split(l||null);if(e.each(u,(function(e,t){d+=(e>0?"\\"+l:"")+"(\\d{"+t.length+"})"})),d+="$",r){var c=[];e.each(t.split(l),(function(e,t){1===t.length&&(t="0"+t),c.push(t)})),t=c.join(l)}if(null===(n=t.match(new RegExp(d))))return!1;var f=function(t,a,r){for(var n=0;n<a.length;n++)if(a[n].substring(0,1)===t)return e.formUtils.parseDateInt(r[n+1]);return-1};return o=f("m",u,n),i=f("d",u,n),s=f("y",u,n),!(2===o&&i>28&&(s%4!=0||s%100==0&&s%400!=0)||2===o&&i>29&&(s%4==0||s%100!=0&&s%400==0)||o>12||0===o)&&(!(this.isShortMonth(o)&&i>30||!this.isShortMonth(o)&&i>31||0===i)&&[s,o,i])},parseDateInt:function(e){return 0===e.indexOf("0")&&(e=e.replace("0","")),parseInt(e,10)},isShortMonth:function(e){return e%2==0&&7>e||e%2!=0&&e>7},lengthRestriction:function(t,a){var r=parseInt(a.text(),10),n=0,i=function(){var e=t.val().length;if(e>r){var i=t.scrollTop();t.val(t.val().substring(0,r)),t.scrollTop(i)}0>(n=r-e)&&(n=0),a.text(n)};e(t).bind("keydown keyup keypress focus blur",i).bind("cut paste",(function(){setTimeout(i,100)})),e(document).bind("ready",i)},numericRangeCheck:function(t,a){var r=e.split(a),n=parseInt(a.substr(3),10);return 1===r.length&&-1===a.indexOf("min")&&-1===a.indexOf("max")&&(r=[a,a]),2===r.length&&(t<parseInt(r[0],10)||t>parseInt(r[1],10))?["out",r[0],r[1]]:0===a.indexOf("min")&&n>t?["min",n]:0===a.indexOf("max")&&t>n?["max",n]:["ok"]},_numSuggestionElements:0,_selectedSuggestion:null,_previousTypedVal:null,suggest:function(t,r,n){var i={css:{maxHeight:"150px",background:"#FFF",lineHeight:"150%",textDecoration:"underline",overflowX:"hidden",overflowY:"auto",border:"#CCC solid 1px",borderTop:"none",cursor:"pointer"},activeSuggestionCSS:{background:"#E9E9E9"}},o=function(e,t){var a=t.offset();e.css({width:t.outerWidth(),left:a.left+"px",top:a.top+t.outerHeight()+"px"})};n&&e.extend(i,n),i.css.position="absolute",i.css["z-index"]=9999,t.attr("autocomplete","off"),0===this._numSuggestionElements&&a.bind("resize",(function(){e(".jquery-form-suggestions").each((function(){var t=e(this),a=t.attr("data-suggest-container");o(t,e(".suggestions-"+a).eq(0))}))})),this._numSuggestionElements++;var s=function(t){var a=t.valAttr("suggestion-nr");e.formUtils._selectedSuggestion=null,e.formUtils._previousTypedVal=null,e(".jquery-form-suggestion-"+a).fadeOut("fast")};return t.data("suggestions",r).valAttr("suggestion-nr",this._numSuggestionElements).unbind("focus.suggest").bind("focus.suggest",(function(){e(this).trigger("keyup"),e.formUtils._selectedSuggestion=null})).unbind("keyup.suggest").bind("keyup.suggest",(function(){var a=e(this),r=[],n=e.trim(a.val()).toLocaleLowerCase();if(n!==e.formUtils._previousTypedVal){e.formUtils._previousTypedVal=n;var l=!1,d=a.valAttr("suggestion-nr"),u=e(".jquery-form-suggestion-"+d);if(u.scrollTop(0),""!==n){var c=n.length>2;e.each(a.data("suggestions"),(function(e,t){var a=t.toLocaleLowerCase();return a===n?(r.push("<strong>"+t+"</strong>"),l=!0,!1):void((0===a.indexOf(n)||c&&a.indexOf(n)>-1)&&r.push(t.replace(new RegExp(n,"gi"),"<strong>$&</strong>")))}))}l||0===r.length&&u.length>0?u.hide():r.length>0&&0===u.length?(u=e("<div></div>").css(i.css).appendTo("body"),t.addClass("suggestions-"+d),u.attr("data-suggest-container",d).addClass("jquery-form-suggestions").addClass("jquery-form-suggestion-"+d)):r.length>0&&!u.is(":visible")&&u.show(),r.length>0&&n.length!==r[0].length&&(o(u,a),u.html(""),e.each(r,(function(t,r){e("<div></div>").append(r).css({overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",padding:"5px"}).addClass("form-suggest-element").appendTo(u).click((function(){a.focus(),a.val(e(this).text()),a.trigger("change"),s(a)}))})))}})).unbind("keydown.validation").bind("keydown.validation",(function(t){var a,r,n=t.keyCode?t.keyCode:t.which,o=e(this);if(13===n&&null!==e.formUtils._selectedSuggestion){if(a=o.valAttr("suggestion-nr"),(r=e(".jquery-form-suggestion-"+a)).length>0){var l=r.find("div").eq(e.formUtils._selectedSuggestion).text();o.val(l),o.trigger("change"),s(o),t.preventDefault()}}else{a=o.valAttr("suggestion-nr");var d=(r=e(".jquery-form-suggestion-"+a)).children();if(d.length>0&&e.inArray(n,[38,40])>-1){38===n?(null===e.formUtils._selectedSuggestion?e.formUtils._selectedSuggestion=d.length-1:e.formUtils._selectedSuggestion--,e.formUtils._selectedSuggestion<0&&(e.formUtils._selectedSuggestion=d.length-1)):40===n&&(null===e.formUtils._selectedSuggestion?e.formUtils._selectedSuggestion=0:e.formUtils._selectedSuggestion++,e.formUtils._selectedSuggestion>d.length-1&&(e.formUtils._selectedSuggestion=0));var u=r.innerHeight(),c=r.scrollTop(),f=r.children().eq(0).outerHeight()*e.formUtils._selectedSuggestion;return(c>f||f>c+u)&&r.scrollTop(f),d.removeClass("active-suggestion").css("background","none").eq(e.formUtils._selectedSuggestion).addClass("active-suggestion").css(i.activeSuggestionCSS),t.preventDefault(),!1}}})).unbind("blur.suggest").bind("blur.suggest",(function(){s(e(this))})),t},LANG:{errorTitle:"Form submission failed!",requiredField:"This is a required field",requiredFields:"You have not answered all required fields",badTime:"You have not given a correct time",badEmail:"You have not given a correct e-mail address",badTelephone:"You have not given a correct phone number",badSecurityAnswer:"You have not given a correct answer to the security question",badDate:"You have not given a correct date",lengthBadStart:"The input value must be between ",lengthBadEnd:" characters",lengthTooLongStart:"The input value is longer than ",lengthTooShortStart:"The input value is shorter than ",notConfirmed:"Input values could not be confirmed",badDomain:"Incorrect domain value",badUrl:"The input value is not a correct URL",badCustomVal:"The input value is incorrect",andSpaces:" and spaces ",badInt:"The input value was not a correct number",badSecurityNumber:"Your social security number was incorrect",badUKVatAnswer:"Incorrect UK VAT Number",badUKNin:"Incorrect UK NIN",badUKUtr:"Incorrect UK UTR Number",badStrength:"The password isn't strong enough",badNumberOfSelectedOptionsStart:"You have to choose at least ",badNumberOfSelectedOptionsEnd:" answers",badAlphaNumeric:"The input value can only contain alphanumeric characters ",badAlphaNumericExtra:" and ",wrongFileSize:"The file you are trying to upload is too large (max %s)",wrongFileType:"Only files of type %s is allowed",groupCheckedRangeStart:"Please choose between ",groupCheckedTooFewStart:"Please choose at least ",groupCheckedTooManyStart:"Please choose a maximum of ",groupCheckedEnd:" item(s)",badCreditCard:"The credit card number is not correct",badCVV:"The CVV number was not correct",wrongFileDim:"Incorrect image dimensions,",imageTooTall:"the image can not be taller than",imageTooWide:"the image can not be wider than",imageTooSmall:"the image was too small",min:"min",max:"max",imageRatioNotAccepted:"Image ratio is not be accepted",badBrazilTelephoneAnswer:"The phone number entered is invalid",badBrazilCEPAnswer:"The CEP entered is invalid",badBrazilCPFAnswer:"The CPF entered is invalid",badPlPesel:"The PESEL entered is invalid",badPlNip:"The NIP entered is invalid",badPlRegon:"The REGON entered is invalid",badreCaptcha:"Please confirm that you are not a bot"}})}(e,window),function(e){e.formUtils.addValidator({name:"email",validatorFunction:function(t){var a=t.toLowerCase().split("@"),r=a[0],n=a[1];if(r&&n){if(0===r.indexOf('"')){var i=r.length;if((r=r.replace(/\"/g,"")).length!==i-2)return!1}return e.formUtils.validators.validate_domain.validatorFunction(a[1])&&0!==r.indexOf(".")&&"."!==r.substring(r.length-1,r.length)&&-1===r.indexOf("..")&&!/[^\w\+\.\-\#\-\_\~\!\$\&\'\(\)\*\+\,\;\=\:]/.test(r)}return!1},errorMessage:"",errorMessageKey:"badEmail"}),e.formUtils.addValidator({name:"domain",validatorFunction:function(e){return e.length>0&&e.length<=253&&!/[^a-zA-Z0-9]/.test(e.slice(-2))&&!/[^a-zA-Z0-9]/.test(e.substr(0,1))&&!/[^a-zA-Z0-9\.\-]/.test(e)&&1===e.split("..").length&&e.split(".").length>1},errorMessage:"",errorMessageKey:"badDomain"}),e.formUtils.addValidator({name:"required",validatorFunction:function(t,a,r,n,i){switch(a.attr("type")){case"checkbox":return a.is(":checked");case"radio":return i.find('input[name="'+a.attr("name")+'"]').filter(":checked").length>0;default:return""!==e.trim(t)}},errorMessage:"",errorMessageKey:function(e){return"top"===e.errorMessagePosition||"function"==typeof e.errorMessagePosition?"requiredFields":"requiredField"}}),e.formUtils.addValidator({name:"length",validatorFunction:function(t,a,r,n){var i=a.valAttr("length"),o=a.attr("type");if(void 0===i)return alert('Please add attribute "data-validation-length" to '+a[0].nodeName+" named "+a.attr("name")),!0;var s,l="file"===o&&void 0!==a.get(0).files?a.get(0).files.length:t.length,d=e.formUtils.numericRangeCheck(l,i);switch(d[0]){case"out":this.errorMessage=n.lengthBadStart+i+n.lengthBadEnd,s=!1;break;case"min":this.errorMessage=n.lengthTooShortStart+d[1]+n.lengthBadEnd,s=!1;break;case"max":this.errorMessage=n.lengthTooLongStart+d[1]+n.lengthBadEnd,s=!1;break;default:s=!0}return s},errorMessage:"",errorMessageKey:""}),e.formUtils.addValidator({name:"url",validatorFunction:function(t){if(/^(https?|ftp):\/\/((((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|\[|\]|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)){var a=t.split("://")[1],r=a.indexOf("/");return r>-1&&(a=a.substr(0,r)),e.formUtils.validators.validate_domain.validatorFunction(a)}return!1},errorMessage:"",errorMessageKey:"badUrl"}),e.formUtils.addValidator({name:"number",validatorFunction:function(e,t,a){if(""!==e){var r,n,i=t.valAttr("allowing")||"",o=t.valAttr("decimal-separator")||a.decimalSeparator,s=!1,l=t.valAttr("step")||"",d=!1;if((t.attr("data-sanitize")||"").match(/(^|[\s])numberFormat([\s]|$)/i)){if(!window.numeral)throw new ReferenceError("The data-sanitize value numberFormat cannot be used without the numeral library. Please see Data Validation in http://www.formvalidator.net for more information.");e.length&&(e=String(numeral().unformat(e)))}if(-1===i.indexOf("number")&&(i+=",number"),-1===i.indexOf("negative")&&0===e.indexOf("-"))return!1;if(i.indexOf("range")>-1&&(r=parseFloat(i.substring(i.indexOf("[")+1,i.indexOf(";"))),n=parseFloat(i.substring(i.indexOf(";")+1,i.indexOf("]"))),s=!0),""!==l&&(d=!0),","===o){if(e.indexOf(".")>-1)return!1;e=e.replace(",",".")}if(""===e.replace(/[0-9-]/g,"")&&(!s||e>=r&&n>=e)&&(!d||e%l==0))return!0;if(i.indexOf("float")>-1&&null!==e.match(new RegExp("^([0-9-]+)\\.([0-9]+)$"))&&(!s||e>=r&&n>=e)&&(!d||e%l==0))return!0}return!1},errorMessage:"",errorMessageKey:"badInt"}),e.formUtils.addValidator({name:"alphanumeric",validatorFunction:function(t,a,r,n){var i="^([a-zA-Z0-9",o="]+)$",s=a.valAttr("allowing"),l="";if(s){l=i+s+o;var d=s.replace(/\\/g,"");d.indexOf(" ")>-1&&(d=d.replace(" ",""),d+=n.andSpaces||e.formUtils.LANG.andSpaces),this.errorMessage=n.badAlphaNumeric+n.badAlphaNumericExtra+d}else l=i+o,this.errorMessage=n.badAlphaNumeric;return new RegExp(l).test(t)},errorMessage:"",errorMessageKey:""}),e.formUtils.addValidator({name:"custom",validatorFunction:function(e,t){return new RegExp(t.valAttr("regexp")).test(e)},errorMessage:"",errorMessageKey:"badCustomVal"}),e.formUtils.addValidator({name:"date",validatorFunction:function(t,a,r){var n=a.valAttr("format")||r.dateFormat||"yyyy-mm-dd",i="false"===a.valAttr("require-leading-zero");return!1!==e.formUtils.parseDate(t,n,i)},errorMessage:"",errorMessageKey:"badDate"}),e.formUtils.addValidator({name:"checkbox_group",validatorFunction:function(t,a,r,n,i){var o=!0,s=a.attr("name"),l=e('input[type=checkbox][name^="'+s+'"]',i),d=l.filter(":checked").length,u=a.valAttr("qty");if(void 0===u){var c=a.get(0).nodeName;alert('Attribute "data-validation-qty" is missing from '+c+" named "+a.attr("name"))}var f=e.formUtils.numericRangeCheck(d,u);switch(f[0]){case"out":this.errorMessage=n.groupCheckedRangeStart+u+n.groupCheckedEnd,o=!1;break;case"min":this.errorMessage=n.groupCheckedTooFewStart+f[1]+n.groupCheckedEnd,o=!1;break;case"max":this.errorMessage=n.groupCheckedTooManyStart+f[1]+n.groupCheckedEnd,o=!1;break;default:o=!0}if(!o){var g=function(){l.unbind("click",g),l.filter("*[data-validation]").validateInputOnBlur(n,r,!1,"blur")};l.bind("click",g)}return o}})}(e)}));
