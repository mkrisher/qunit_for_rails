require 'test_helper'
require 'test/unit'
require File.dirname(__FILE__) +  '/../lib/qunit_for_rails'

class QunitForRailsTest < ActiveSupport::TestCase
  include QunitForRails
  
  def setup
    arr = Dir.entries(File.dirname(__FILE__) + "/../../../../public/javascripts/tests")
    @arr_size = arr.size - 2 # removing . and ..
  end
  
  # include_qunit includes string containing qunit js files
  test "will insert javascript files into the head" do
    assert include_qunit.scan(/javascripts\/qunit.js/)
    assert include_qunit.scan(/javascripts\/qunit_for_rails.js/)
    assert include_qunit.scan(/stylesheets\/qunit_for_rails.css/)
  end
  
  # list_tasks will return a list of the test files as a string representing an array
  test "can list files in a directory" do
    assert @arr_size, list_tests.to_a.size
    assert_not_nil list_tests.scan(/../)
  end
  
  # collect_tasks loads test files from directory and creates select block
  test "can create dropdown of tests" do
    # number of file options match arr_size of files in directory
    num = collect_tests.scan(/<option>/)
    assert @arr_size, num
  end
  
end
