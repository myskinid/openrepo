jQuery(document).ready((function(o){const{__:a}=wp.i18n;o.post(ajaxurl,{action:"cbsb_get_latest_bookings"},(function(e){if(200==e.code&&"success"==e.status){o(".yesterday").html(a("Yesterday","calendar-booking")+' <strong class="number">'+e.yesterday+"</strong>"),o(".today").html(a("Today","calendar-booking")+' <strong class="number">'+e.today+"</strong>");var n=[],t=(new Date,!1);if(o.each(e.graph,(function(o,a){a>0&&(t=!0),$dataPoint={x:new Date(o),y:a},n.push($dataPoint)})),t){o("#loading-bookings").hide(),o("#has-bookings").show();var i={data:[{type:"line",markerType:"circle",markerColor:"#ffffff",markerBorderColor:"#1480e6",markerBorderThickness:2,lineColor:"#b9bfc5",xValueType:"dateTime",dataPoints:n}],axisX:{labelFontColor:"#5b636a",gridThickness:1,gridColor:"#d1d5da",tickColor:"#ffffff",lineColor:"#ecf0f5",labelFormatter:function(o){return CanvasJS.formatDate(o.value,"DD-MMM")}},axisY:{labelFontColor:"#ffffff",gridThickness:0,lineColor:"#ffffff",tickLength:0},toolTip:{content:"<div class='\"'tooltip_wrapper'\"'><div class='\"'tooltip_header'\"'>{x}</div><div class='\"'tooltip_body'\"'>{y} "+a("Bookings","calendar-booking")+"</div></div>",cornerRadius:6},animationEnabled:!0,animationDuration:1e3};o("#chartContainer").CanvasJSChart(i)}else o("#loading-bookings").hide(),o("#no-bookings").show()}}))}));