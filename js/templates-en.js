angular.module('templates', ['error.tpl.html', 'login.tpl.html']);

angular.module("error.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("error.tpl.html",
    "<div>Oooops. Something happened. Try follow one of next links:</div><ul class=\"unstyled\"><li><a href=\"#/login/en\" class=\"btn\">Login</a><a href=\"#/map/en\" class=\"btn\">Map</a></li></ul>");
}]);

angular.module("login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login.tpl.html",
    "<div><div ng-class=\"{hidden: account.isAuthenticated}\"><h4>Enter</h4><span language=\"language\"></span><div>Enter the user name and password of your account.<br/></div><div class=\"wide\">To use the service to log into the system.<br/></div><form name=\"form\" ng-submit=\"onLogin(user.name, user.password)\" style=\"width: auto\"><div class=\"input-prepend\"><span class=\"add-on\"><i class=\"icon-user\"></i></span><input type=\"text\" placeholder=\"User name\" ng-model=\"user.name\" required=\"required\" autofocus=\"autofocus\"/></div><br/><div class=\"input-prepend\"><span class=\"add-on\"><i class=\"icon-key\"></i></span><input type=\"password\" placeholder=\"Password\" ng-model=\"user.password\" required=\"required\"/></div><br/><button ng-click=\"onLogin(user.name, user.password)\" ng-disabled=\"form.$invalid\" class=\"btn btn-primary login\">Confirm</button><button ng-click=\"onRegister(user.name, user.password)\" ng-disabled=\"form.$invalid\" class=\"btn login\">Register</button></form><div class=\"wide\">To create a new account, make up a name and password, your account is automatically created.</div></div><div ng-class=\"{hidden: !account.isAuthenticated}\"><h4>Вы вошли как<i>{{ account.account.title }}</i></h4><dl class=\"dl-horizontal\"><dt>Язык (language)</dt><dd><select style=\"max-width:100px;\" ng-model=\"blah\" ng-options=\"item.id as item.title for item in langs\"></select></dd><dt>Имя входа</dt><dd contenteditable=\"true\" ng-model=\"account.account.name\" ng-change=\"onChange(account.account.name)\"></dd><dt>Дата регистрации</dt><dd>{{ account.account.date | fromnow }}</dd><dt>Администратор</dt><dd>{{ account.account.admin | yesno }}</dd><dt>Наблюдаемых систем</dt><dd>{{ account.account.skeys.length }}</dd><dt title=\"Для восстановления пароля\">email</dt><dd>{{ account.account.email }}</dd></dl><div style=\"text-align: center;\"><button ng-click=\"onLogout();\" class=\"btn btn-warning\"><i class=\"icon-off\"></i>Выйти из учетной записи</button></div></div></div>");
}]);