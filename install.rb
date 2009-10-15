require 'fileutils'

# Install all the needed support files (CSS and JavaScript)
js_dir = File.dirname(__FILE__) + '/../../../public/javascripts/'
css_dir = File.dirname(__FILE__) + '/../../../public/stylesheets/'
images_dir = File.dirname(__FILE__) + '/../../../public/images/'

# install all javascript files
FileUtils.cp File.dirname(__FILE__) + '/public/javascripts/qunit.js', js_dir unless File.exists?(js_dir + "qunit.js")
FileUtils.cp File.dirname(__FILE__) + '/public/javascripts/qunit_for_rails.js', js_dir unless File.exists?(js_dir + "qunit_for_rails.js")

# install all needed CSS
FileUtils.cp File.dirname(__FILE__) + '/public/stylesheets/qunit_for_rails.css', css_dir unless File.exists?(css_dir + "qunit_for_rails.css")

# install all image files
FileUtils.cp File.dirname(__FILE__) + '/public/images/l_qunit.png', images_dir unless File.exists?(images_dir + "l_qunit.png")
FileUtils.cp File.dirname(__FILE__) + '/public/images/i_loading_bar.gif', images_dir unless File.exists?(images_dir + "i_loading_bar.gif")
FileUtils.cp File.dirname(__FILE__) + '/public/images/bg_secondaryNav_right.gif', images_dir unless File.exists?(images_dir + "bg_secondaryNav_right.gif")
FileUtils.cp File.dirname(__FILE__) + '/public/images/bg_secondaryNav_left.gif', images_dir unless File.exists?(images_dir + "bg_secondaryNav_left.gif")
FileUtils.cp File.dirname(__FILE__) + '/public/images/bg_diagonalDarkBlue.gif', images_dir unless File.exists?(images_dir + "bg_diagonalDarkBlue.gif")

# create the tests directory
FileUtils.mkdir js_dir + 'tests'
FileUtils.cp File.dirname(__FILE__) + '/public/javascripts/tests/test.js', js_dir + 'tests' unless File.exists?(js_dir + 'tests/' + "test.js")

