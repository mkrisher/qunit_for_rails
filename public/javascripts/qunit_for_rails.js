(function(){
	
	var QUnit_For_Rails = {
		
		init: function init()
		{
			// define qunit menu
			var qm = "";
			qm += "<div id=\"qunit-menu\">";
			qm += "<ul class=\"qunit-menu\">";
			qm += "<li><b>Shortcuts (shift + ):</b></li>";
			qm += "<li><b>?</b> - shows/hides the menu</li>";
			qm += "<li><b>s</b> - shows qunit overlay</li>";
			qm += "<li><b>h</b> - hides qunit overlay</li>";
			qm += "<li><b>a</b> - runs all tests</li>";
			qm += "<li><b>t</b> - shows/hides tests</li>";
			qm += "</ul>";
			qm += "</div>";

			// define qunit results
			var qr = "";
			qr += "<div id=\"qunit-results\">";
			qr += "<h1 id=\"qunit-header\">Results</h1>";
			qr += "<h2 id=\"qunit-banner\"></h2>";
			qr += "<h2 id=\"qunit-userAgent\"></h2>";
			qr += "<br /><img id=\"qunit-loading\" src=\"/images/i_loading_bar.gif\" alt=\"loading\">";
			qr += "<ol id=\"qunit-tests\"></ol>";
			qr += "</div>";

			// define qunit-overlay
			var qo = "";
			qo += "<div id=\"qunit-overlay\">";
			qo += "<div id=\"qunit-test-options\">";
			qo += "<ul class=\"qunit\">";
			qo += "<li class=\"first\"><a id=\"qunit-all-tests\" href=\"#\">Run All Tests</a></li>";
			qo += "<li class=\"last\">Or Choose A Test: " + $collection;
			qo += "</ul>";
			qo += "<img src=\"/images/bg_secondaryNav_right.gif\">";
			qo += "</div>";
			qo += qm;
			qo += "<div id=\"qunit-logo\">";
			qo += "JavaScript testing powered by: <a href=\"http://docs.jquery.com/QUnit\">";
			qo += "<img src=\"/images/l_qunit.png\" alt=\"qunit\" border=\"0\"></a></div>";
			qo += "</div>";
			qo += qr;
			qo += "<div style='clear:both;'></div>";
			
			$("body").prepend(qo);
		},
		
		respond_to_key: function respond_to_key(e) 
		{
			if (document.activeElement['nodeName'] == "INPUT" || document.activeElement['nodeName'] == "TEXTAREA") {
				// escape if in a textfield
			} else {
				if (e.shiftKey) {
					var unicode = e.keyCode? e.keyCode : e.charCode;
					switch (unicode) {
						case 83: case 115: 			// s keypress
				    	$('#qunit-overlay').show();
					    break;
					  case 72: case 104: 			// h keypress
					  	if($("#qunit-results").height() > 0)
								$("#qunit-results").animate({ height: "0px"}, 500 );
							$('#qunit-overlay').hide();
					    break;
					 	case 191: case 47: 			// ? keypress
					  	$('#qunit-overlay').show();
							$('#qunit-menu').toggle();
					    break;
						case 65: case 97: 			// a keypress
							$("#qunit-all-tests").click();
					    break;
						case 84: case 116: 			// t keypress
							if($("#qunit-results").height() > 0) {
								$("#qunit-results").animate({ height: "0px"}, 500 );
							} else {
								$('#qunit-overlay').show();
								$("#qunit-results").animate({ height: "400px"}, 500 );
							}
							break;
					  default:
				    	break;
				  }
				}
			}
		},

		load_js_file: function load_js_file(filename)
		{
			var fileref=document.createElement('script');
			fileref.setAttribute("type","text/javascript");
			fileref.setAttribute("src", "/javascripts/tests/" + filename + "?" + Math.floor(Math.random()*11));
		 	if (typeof fileref!="undefined")
		  	document.getElementsByTagName("head")[0].appendChild(fileref);
		},

		unload_js_file: function unload_js_file(filename)
		{
			var targetelement="script";
		 	var targetattr="src";
		 	var allsuspects=document.getElementsByTagName(targetelement);
		 	for (var i=allsuspects.length; i>=0; i--) {
		  	if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
		   		allsuspects[i].parentNode.removeChild(allsuspects[i]);
		 	}
		},

		show_tests: function show_tests()
		{
			$('#qunit-overlay').show();
			// clear out any previous results
			$("#qunit-tests li").remove();
			$("#qunit-testresult").remove();
			$("#qunit-banner").attr("class", "");
			$("#qunit-results").show();
			$("#qunit-results").animate({ height: "400px"}, 500 );
			$("#qunit-loading").show();
		},

		run_tests: function run_tests()
		{
			init();
			for (var i in tests) {
				var test = eval(tests[i]);
				test(test);
			}
			$("#qunit-loading").hide();
			start();
		}
	};

	$(document).ready(function() 
	{
		QUnit_For_Rails.init();

		$("#qunit-results").hide();
		$("#qunit-loading").hide();
		$("#qunit-results").animate({ height: "0px"}, 1 );
		$('#qunit-menu').toggle();

		if ($.browser.mozilla) {
			$(document).keypress (QUnit_For_Rails.respond_to_key);
		} else {
			$(document).keydown (QUnit_For_Rails.respond_to_key);
		}

		$("#qunit-test-select").change( function() {
			tests = {};
			for(var i in $list) {
				QUnit_For_Rails.unload_js_file($list[i]);
			}
			if ($(this).val() != "all") {
				QUnit_For_Rails.load_js_file($(this).val());
			} else {
				for(var j in $list) {
					QUnit_For_Rails.load_js_file($list[j]);
				}
			}
			QUnit_For_Rails.show_tests();
			setTimeout(QUnit_For_Rails.run_tests, 2000);
		});

		$("#qunit-all-tests").click( function() {
			$("#qunit-test-select option:contains(all)").attr("selected", true);
			$("#qunit-test-select").change();
		});

		if ($autohide == "true") {
			$('#qunit-overlay').toggle();
		}
	});
	
})();