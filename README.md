# Hackable Website (SQL Injection)
Website for a group assignment. It's meant to be bad.

## Instructions (Linux)
*NOTE: These instructions are rough guidelines to setup the project, they may not be accurate.*
- Install `nodejs` `npm`  `apache` `PHP7` `mysql` `phpmyadmin` and `nodejs`
    - May need extra packages like: `php7-apache`
    - Check your distribution documentation for these packages if you cannot install them
- (Debian Based - Ubuntu, Kali etc)
    - [Insall LAMP Guide](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-ubuntu-18-04)
- Arch Based distros (Manjaro etc)
    - [Install LAMP Guide](https://www.linode.com/docs/guides/how-to-install-a-lamp-stack-on-arch-linux/)
- Git clone into project/extra into /var/www/
- NPM
    - Use `npm install` to download all packages required otherwise do: `npm install express express-session mysql --save`
    - If you still receive errors, check the log for potentially required packages to install with npm
- In a terminal write `nmp start server.js` (You will have to be in the project directory
- Open a browser to `localhost:3000` to view the website
- Should be good to go :)


Make sure to enable apache or httpd with `systemctl`. They will need to be restarted when configuring a file.
