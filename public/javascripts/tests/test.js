var localtests = {
	test_another_example : function()
	{
		module("Module Test");
		test("simple passing example", function() 
		{
		  var value = "foo";
		  equals( "foo", value, "We expect value to be foo" );
		});
	}
};

$().extend(tests, localtests);