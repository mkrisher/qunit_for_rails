require 'fileutils'

# Uninstall all the needed support files (CSS and JavaScript)
js_dir = File.dirname(__FILE__) + '/../../../public/javascripts/'
css_dir = File.dirname(__FILE__) + '/../../../public/stylesheets/'
images_dir = File.dirname(__FILE__) + '/../../../public/images/'

# uninstall all javascript files
FileUtils.rm File.dirname(__FILE__) + '/public/javascripts/qunit.js', js_dir unless File.exists?(js_dir + "qunit.js")
FileUtils.rm File.dirname(__FILE__) + '/public/javascripts/qunit_for_rails.js', js_dir unless File.exists?(js_dir + "qunit_for_rails.js")

# uninstall all needed CSS
FileUtils.rm File.dirname(__FILE__) + '/public/stylesheets/qunit_for_rails.css', css_dir unless File.exists?(css_dir + "qunit_for_rails.css")

# uninstall all image files
FileUtils.rm File.dirname(__FILE__) + '/public/images/l_qunit.png', images_dir unless File.exists?(images_dir + "l_qunit.png")
FileUtils.rm File.dirname(__FILE__) + '/public/images/l_qunit.png', images_dir unless File.exists?(images_dir + "i_loading_bar.gif")
FileUtils.rm File.dirname(__FILE__) + '/public/images/l_qunit.png', images_dir unless File.exists?(images_dir + "bg_secondaryNav_right.gif")
FileUtils.rm File.dirname(__FILE__) + '/public/images/l_qunit.png', images_dir unless File.exists?(images_dir + "bg_secondaryNav_left.gif")
FileUtils.rm File.dirname(__FILE__) + '/public/images/l_qunit.png', images_dir unless File.exists?(images_dir + "bg_diagonalDarkBlue.gif")
