This a sample application with a ionic hybrid app and odoo.


### Install

Checkout this repo
```bash
$ git clone https://github.com/hparfr/odoo-ionic-sample.git 
```


Get js dependencies with bower : 
```bash
$ bower install
```

Get ionic and cordova if you want to build or deploy for Android, iOS and FirefoxOS
```bash
$ sudo npm install -g ionic cordova
```


Odoo server

If you don't want to fight against CORS issues, set a proxy : 
redirect all /web request to http://odooserver/web

If you use nginx, configure your it like that 

```nginx
server {
	root '/path/to/odoo-ionic-sample/www';
	location /web {
		proxy_pass	http://odoo-server/;
		proxy_set_header	X-Forwarded-For $proxy_add_x_forwarded_for;
	}
}

```
