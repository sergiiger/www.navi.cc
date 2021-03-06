/* global angular:true, $:true */

angular.module('directives.lists', ['app.services.imeicheck'])

.directive('mylist', function() {
    'use strict';

    return {
        restrict: 'E',
        transclude: false,
        template: '<div>List:<ul><li ng-repeat="l in list"><mylistitem></mylistitem></li></ul></div>'
    };
})

.directive('mylistitem', function() {
    'use strict';

    return {
        restrict: 'E',
        transclude: true,
        template: '<div>{{l}}</div>'
    };
})

.directive('mylist2', function() {
    'use strict';

    return {
        restrict: 'E',
        scope: {},
        transclude: false,
        template: '<div>List2:<ul></ul></div>',
        link: function(scope, element) {
            var ul = element[0].querySelector('ul');
            scope.list = scope.$parent.list;
            scope.$watch('list', function() {
                ul.innerHTML = '';
                for (var i = 0; i < scope.list.length; i++) {
                    var l = scope.list[i];
                    var li = document.createElement('LI');
                    li.innerHTML = l;
                    ul.appendChild(li);
                }
            }, true);
        }
    };
})

.directive('contenteditable', ['$filter',
    function($filter) {
        'use strict';

        return {
            restrict: 'A',
            require: '?ngModel',
            link: function(scope, element, attr, ngModel) {

                var read;
                var translate = $filter('translate');

                element.attr('title', translate('contenteditableTitle'));
                if (!ngModel) {
                    return;
                }

                element.attr('title', translate('contenteditableTitle'));
                ngModel.$render = function() {
                    return element.text(ngModel.$viewValue);
                };

                /* Позволим ставить курсор в поле нулевой длины */
                element.click(function(e) {
                    e.preventDefault();

                    // var div = $(this).parent().children("div")[0];
                    var div = element[0];
                    if (document.activeElement == div) return;
                    div.focus();

                    if (window.getSelection && document.createRange) {
                        // IE 9 and non-IE
                        var sel = window.getSelection();
                        var range = document.createRange();
                        range.setStart(div, 0);
                        range.collapse(true);
                        sel.removeAllRanges();
                        sel.addRange(range);
                    } else if (document.body.createTextRange) {
                        // IE < 9
                        var textRange = document.body.createTextRange();
                        textRange.moveToElementText(div);
                        textRange.collapse(true);
                        textRange.select();
                    }
                });
                element.bind('blur', function() {
                    if (ngModel.$viewValue !== $.trim(element.text())) {
                        return scope.$apply(read);
                    }
                });
                element.bind('keypress', function(ev) {
                    if (ev.which === 13) {
                        element.trigger('blur');
                        return false;
                    }
                });
                read = function() {
                    ngModel.$setViewValue($.trim(element.text()));
                    element.trigger('change'); // Вызовем стандартный метод onChange, можно повесить свой обработчик на ng-change="onChange()"
                };
            }
        };
    }
])

.directive('fileload', function() {
    'use strict';

    return {
        restrict: 'E',
        require: '?ngModel',
        template:
            '<span class="btn btn-success fileinput-button">' +
            '  <i class="icon-plus icon-white"></i>' +
            '  <span>Из файла...</span>' +
            ' <input type="file">' +
            '</span>',
        replace: true,
        link: function(scope, element, attr, ngModel) {
            scope.onFileAdd = function() {};
            element[0].querySelector('input').addEventListener('change', function(ev) {
                if ((ev.target.value === null) || (ev.target.value === '')) {
                    return;
                }
                var file = ev.target.files[0];
                var reader = new FileReader();
                reader.onload = function(e) {
                    var list = e.target.result.replace(/[\r\t\n]/g, ' ').replace(/ {2}/g, ' ').split(' ').filter(function(el) {
                        return (el !== '') && (el !== ' ');
                    });
                    scope.$apply(function() {
                        ngModel.$setViewValue(list);
                        element.trigger('change'); // Вызовем стандартный метод onChange, можно повесить свой обработчик на ng-change="onChange()"
                        ev.target.value = null;
                    });
                };
                reader.readAsBinaryString(file);

            }, false);
        }
    };
})

.directive('addtracker', ['imeicheck', function(imeicheck) {
    'use strict';

    return {
        restrict: 'E',
        require: '?ngModel',
        scope: {
            account: '=',
            systems: '=',
            showhelp: '='
        },
        template:
            '<div><button class="btn btn-primary" ng-click="showForm()"><i class="icon-plus-sign"></i><span translate>add_system</span></button>' +
            '&nbsp<a ng-show="showhelp" href="#/help" class="btn btn-primary"><i class="icon-medkit"></i><span translate>Help</span></a>' +
            '<span ng-show="addform">' +
            '   <br><form class="form-inline" style="display: inline-block; margin:0;" name="form" ng-submit="onAdd(newimei)">' +
            '        <label style="display:inline">IMEI</label>' +
            '       <input class="form-control" type="text" ng-model="newimei" required autofocus></input>' +
            '        <button class="btn btn-primary login" id="login" ng-show=\'!form.$invalid\'>Добавить</button>' +
            '        <!--a class="btn btn-primary" ng-click="onGroupSyss()" title="Добавить все трекеры компании"><i class="icon-group" style="margin:0"></i></a-->' +
            '       <fileload ng-model="files" ng-change="onFromFiles()"></fileload>' +
            '    </form>' +
            '</span></div>',
        replace: true,
        controller: ['$scope', 'Account', '$timeout', 'System',
            function($scope, Account, $timeout, System) {
                $scope.addform = false;
                $scope.showhelp = $scope.showhelp || false;
                var add = function(imeis) {
                    Account.systemadd(imeis, function(system) {
                        System.add(system);
                    });
                };

                $scope.showForm = function() {
                    $scope.addform = !$scope.addform;
                    $timeout(function() {
                        $('ul.mapsyslist').scrollTop($(document).height());
                    });
                };

                $scope.onAdd = function(imei) {
                    if(!imeicheck(imei)){
                        if (!window.confirm(
                            'IMEI введен с ошибкой.\n' +
                            'IMEI должен состоять из 15-ти цифр.\n' +
                            'Если задан защитный код, то его необходимо указывать после IMEI ререз разделитель "-".\n' +
                            '\nВсе равно попробовать добавить трекер с таким IMEI?'
                        )) return;
                    }
                    add([imei]);
                    $scope.addform = false;
                };

                $scope.onGroupSyss = function() {
                    window.console.log('TODO: Добавить все трекеры компании.');
                    $scope.addform = false;
                };

                $scope.onFromFiles = function() {
                    add($scope.files);
                    $scope.addform = false;
                };
            }
        ]
    };
}])

.directive('clone', function() {
    'use strict';

    return {
        restrict: 'C',
        link: function(scope, element) {
            element.attr('readonly', 'readonly');
            element.attr('type', 'text');
            element.attr('title', 'Для копирования в буффер обмена нажмите правую кнопку и выберите \'Копировать\'');
            element.bind('mousedown', function() {
                this.select();
            });
        }
    };
})

.directive('datetime', [
    function() {
        'use strict';

        return {
            restrict: 'E',
            scope: {
                datetime: '@',
                'default': '@',
                format: '@',
                seconds: '='
            },
            template: '<span class="datelabel" title="{{ title }}" ng-click="switch()">{{ value }}</span>',
            controller: ['$scope', '$filter',
                function($scope, $filter) {
                    $scope.invert = $scope['default'] || false;
                    var update = function() {
                        if (angular.isUndefined($scope.datetime) || $scope.datetime === '') {
                            $scope.value = '?';
                            $scope.title = 'Значение неопределено';
                            return;
                        }
                        if ($scope.invert) {
                            $scope.value = $filter('datetime')($scope.datetime, $scope.seconds, $scope.format);
                            $scope.title = $filter('fromnow')($scope.datetime);
                        } else {
                            $scope.value = $filter('fromnow')($scope.datetime);
                            $scope.title = $filter('datetime')($scope.datetime, $scope.seconds, $scope.format);
                        }
                    };
                    $scope.
                    switch = function() {
                        $scope.invert = !$scope.invert;
                        update();
                    };
                    $scope.enter = function() {
                        $scope.invert = true;
                        update();
                    };
                    $scope.leave = function() {
                        $scope.invert = false;
                        update();
                    };
                    $scope.$watch('datetime', update);
                    $scope.$on('timetick', update);

                }
            ]
        };
    }
])

.directive('navtool', [
    function() {
        'use strict';
//TODO: локализовать
        return {
            restrict: 'E',
            template:
                '<div style="margin-right:10px" class="btn-group">' +
                '<a type="button" class="btn btn-info" ng-click="back()" title="Назад">&lt;</a>' +
                '<a type="button" class="btn btn-info" href="#/map" title="Карта"><i class="icon-map-marker" style="margin:0"></i></a>' +
                '<a type="button" class="btn btn-info" href="#/reports" title="Отчеты"><i class="icon-table" style="margin:0"></i></a>' +
                '<a type="button" class="btn btn-info" href="#/config" title="Настройки"><i class="icon-gears" style="margin:0"></i></a>' +
                '<a type="button" class="btn btn-info" href="#/" title="Пользователь"><i class="icon-user icon-large" style="margin:0"></i></a>' +
                '<a type="button" class="btn btn-info" href="#/help" title="Помощь"><i class="icon-medkit" style="margin:0"></i></a>' +
                '</div>',
            controller: ['$scope', '$window',
                function($scope, $window) {
                    $scope.back = function() {
                        $window.history.back();
                    };

                }
            ]
        };
    }
])

.directive('focusMe', ['$timeout',
    function($timeout) {
        'use strict';

        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                attrs.$observe('focusMe', function(value) {
                    if (value === 'true') {
                        $timeout(function() {
                            element[0].focus();
                        }, 100);
                    }
                });
            }
        };
    }
]);

// .directive('tabForm', ['$timeout', function($timeout) {
//     return {
//         restrict: 'A',
//         link: function(scope, element, attrs) {
//             // console.log('form', element);
//             // TODO: Хочется чтобы по нажатию "Go/Поиск" в мобильных браузерах осуществлялся переход к следующему полю.
//             // В идеале, хочется чтобы была кнопка "Next", на насколько я понял, это проблема браузера.
//         }
//     }
// }]);

