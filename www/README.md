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

Configure your http server like that : 

```nginx
server {
	root '/path/to/odoo-ionic-sample/www';
	location /web {
		proxy_pass	http://odoo-server/;
		proxy_set_header	X-Forwarded-For $proxy_add_x_forwarded_for;
	}
}

```


## Demo
http://plnkr.co/edit/tpl:IUU30p?p=preview

## Issues
Issues have been disabled on this repo, if you do find an issue or have a question consider posting it on the [Ionic Forum](http://forum.ionicframework.com/).  Or else if there is truly an error, follow our guidelines for [submitting an issue](http://ionicframework.com/contribute/#issues) to the main Ionic repository. On the other hand, pull requests are welcome here!
