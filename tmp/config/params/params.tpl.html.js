angular.module("config/params/params.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("config/params/params.tpl.html",
    "<div class=\"scrollable\">" +
    "" +
    "" +
    "<!--div class=\"span4\"-->" +
    "" +
    "<div class=\"row\">" +
    "    <div class=\"well well-small span4\">" +
    "        <h4>Информация о трекере</h4>" +
    "" +
    "        <dl class=\"dl-horizontal\">" +
    "            <dt>Наименование</dt><dd>{{ account.account.systems[skey].desc }}</dd>" +
    "            <dt>IMEI</dt><dd>{{ account.account.systems[skey].imei }}</dd>" +
    "            <dt>Телефон SIM-карты</dt><dd>{{ account.account.systems[skey].phone }}</dd>" +
    "            <dt>Зарегестрирована</dt><dd>{{ account.account.systems[skey].date | fromnow }}</dd>" +
    "            <dt>Версия ПО</dt><dd>3021 <i class=\"icon-question-sign cmd\" title=\"Проверить доступность обновления\"></i></dd>" +
    "        </dl>" +
    "" +
    "        <button class=\"btn btn-small\" ng-click=\"new()\">Добавить произвольное поле</button>" +
    "    </div>" +
    "" +
    "    <div class=\"well well-small span4\">" +
    "        <h4>Сведения о состоянии</h4>" +
    "" +
    "        <dl class=\"dl-horizontal\">" +
    "            <dt>Выход на связь</dt><dd>{{ account.account.systems[skey].date | fromnow }}</dd>" +
    "            <dt>Качество GSM</dt><dd>неизвестно</dd>" +
    "            <dt>Качество GPS</dt><dd>неизвестно</dd>" +
    "            <dt>Состояние</dt><dd>неизвестно</dd>" +
    "        </dl>" +
    "" +
    "        <button class=\"btn btn-small\" ng-click=\"update()\">Обновить</button>" +
    "    </div>" +
    "" +
    "    <div class=\"well well-small span4\">" +
    "        <h4>Информация о транспортном средстве</h4>" +
    "" +
    "        <dl class=\"dl-horizontal\">" +
    "            <dt>Наименование</dt><dd>-</dd>" +
    "            <dt>Гос номер</dt><dd>AA 0000 AA</dd>" +
    "            <dt>Год выпуска</dt><dd>-</dd>" +
    "            <dt>№ двигателя</dt><dd>-</dd>" +
    "            <dt>№ кузова</dt><dd>-</dd>" +
    "            <dt>№ страхового полиса</dt><dd>-</dd>" +
    "        </dl>" +
    "" +
    "        <a class=\"btn btn-small\" href=\"#drivers\">Водители</a>" +
    "    </div>" +
    "" +
    "</div>" +
    "" +
    "<div class=\"well well-small\">" +
    "    <h4>Программирование параметров системы</h4>" +
    "" +
    "    <table class=\"table table-bordered table-condensed table-striped table-hover\">" +
    "        <thead>" +
    "        <tr>" +
    "            <th>№</th>" +
    "            <th>Имя</th>" +
    "            <th>Описание<i class=\"icon-filter cmd\" rel=\"tooltip\" title=\"Показать все параметры\" ng-click=\"filtered=!filtered\"></i></th>" +
    "            <th>Тип</th>" +
    "            <th>Значение</th>" +
    "            <th>Заводское значение</th>" +
    "            <th>Очередь</th>" +
    "        </tr>" +
    "        </thead>" +
    "        <tbody>" +
    "        <!--tr ng-repeat=\"p in params | isFiltered:filtered\"-->" +
    "        <tr ng-repeat=\"(k, p) in params.value | filter:isFiltered\">" +
    "            <td>{{p.index}}</td>" +
    "            <td>{{k}}</td>" +
    "            <td>{{p.desc}}</td>" +
    "            <td>{{p.type}}</td>" +
    "            <td>{{p.value}}</td>" +
    "            <td>{{p.default}}</td>" +
    "            <td>{{p.queue}}</td>" +
    "        </tr>" +
    "        <tr ng-show=\"!params.length\">" +
    "            <td colspan=\"7\">Данные еще не получены</td>" +
    "        </tr>" +
    "        </tbody>" +
    "    </table>" +
    "    <div class=\"\" style=\"text-align: right;\">" +
    "        <button class=\"btn btn-danger\" ng-click=\"stopqueue()\"><i class=\"icon-trash icon-white\"></i> Отменить внесенные изменения</button>" +
    "        <button class=\"btn btn-warning\" ng-click=\"resetdefaults()\"><i class=\"icon-adjust icon-white\"></i> Установить все значения в заводское</button>" +
    "    </div>" +
    "<!--/div-->" +
    "<!--/div-->" +
    "" +
    "</div>");
}]);