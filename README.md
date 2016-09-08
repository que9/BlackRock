

# You should have 
	node, bower, gulp installed on your machine

# Install node packages using
 	npm install or sudo npm install

# Install the client side packages using
	bower install
# in case if that does not work use --allow-root flag option
    sudo bower install --allow-root



# Start application with normal files, it will use files  from public/ folder on localhost:3000
 	node ./bin/www  	

# ******* OR THE GULP WAY ********

# In order to watch file changes and reload browser use the command,
# It creates a build/ folder  minifying and uglifying files and runs on localhost:5000
	gulp serve

# In case of any trouble, please contact me at gkjha009@gmail.com/9718674243
# In case if the auto browser reloading does work please reload it manually 
# Thanks :)