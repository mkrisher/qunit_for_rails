module QunitForRails
  def include_qunit(options = { :autohide => false })
    # write to the head of application.html.erb
    # include the js and css files required, if RAILS_ENV = development
    str = "
      <script language=\"JavaScript\">
          $list = \"#{list_tests}\";
          $list = $list.split(\",\");
          $collection = \"#{collect_tests}\";
          $autohide = \"#{options[:autohide]}\";
      </script>
      <script type=\"text/javascript\" src=\"/javascripts/qunit.js\"></script>
      <script type=\"text/javascript\" src=\"/javascripts/qunit_for_rails.js\"></script>
      <link href=\"/stylesheets/qunit_for_rails.css\" media=\"screen\" rel=\"stylesheet\" type=\"text/css\"/>
    " 
  end

  def collect_tests
    response = "<select id='qunit-test-select'><option></option><option>all</option>"
    Dir.foreach(File.dirname(__FILE__) + "/../../../../public/javascripts/tests") do |f|
      response << "<option id='#{f}'>#{f}</option>" if f.to_s.size > 4
    end
    response << "</select>"
  end
  
  def list_tests
    files = Dir.entries(File.dirname(__FILE__) + "/../../../../public/javascripts/tests")
    files.delete(".")
    files.delete("..")
    files.join(",").to_s
  end
  
end