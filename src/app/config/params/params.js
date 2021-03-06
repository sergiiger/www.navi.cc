/* global angular:true, $:true */

(function() {
    'use strict';

    var params_descs = {
        'accel.deb': {
            'desc': 'Программный антидребезг, число повторов (2-6)',
            'min': 1,
            'max': 10
        },
        'accel.lvl': {
            'desc': 'Чувствительность акселерометра, mg (20-200)',
            'primary': true,
            'min': 10,
            'max': 1000
        },
        'accel.time': {
            'desc': 'Время успокоения акселерметра, секунды (10-300)',
            'min': 1,
            'max': 600,
            'comment': 'INT 60 60'
        },
        'adc.fix.du': {
            'desc': 'Порог изменения напряжения резервного питания, V (?-?)',
            'comment': 'INT 8 8'
        },
        'adc.fix.dub': {
            'desc': 'Порог изменения напряжения основного питания, V (?-?)',
            'comment': ' - INT 31 31'
        },
        'adc.fix.umax': {
            'desc': 'Порог максимально допустимого питания, /29.528, V (350-1200)',
            'min': 300,
            'max': 1240,
            'comment': ' - INT 1063 1063'
        },
        'adc.in.1': {
            'desc': 'Логический порог напряжения входа 1, /?, V (?-?)',
            'comment': ' - INT 50 50'
        },
        'adc.in.2': {
            'desc': 'Логический порог напряжения входа 2, /?, V (?-?)',
            'comment': ' - INT 50 50'
        },
        'adc.photo': {
            'desc': 'Чувствительность фотодатчика, (100-2000; 2000-max)',
            'min': 10,
            'max': 2047,
            'comment': ' - INT 1921 1921'
        },
        'adc.photo.delay': {
            'desc': 'Время включения фотоохраны, сек (1-32000)',
            'min': 1,
            'max': 32767,
            'comment': ' - INT 3600 3600'
        },
        'adc.u.0': {
            'comment': ' - INT 295 295'
        },
        'adc.u.1': {
            'comment': ' - INT 342 342'
        },
        'adc.u.off': {
            'desc': 'Порог выключения основного питания, /29.528, V (100-1000)',
            'min': 10,
            'max': 1240,
            'comment': ' - INT 177 177'
        },
        'adc.u.on': {
            'desc': 'Порог включения основного питания, /29.528, V (100-1000)',
            'min': 10,
            'max': 1240,
            'comment': ' - INT 325 325'
        },
        'akkum.block.vbat': {
            'comment': ' - INT 1092 1092'
        },
        'akkum.block.vdd': {
            'comment': ' - INT 295 295'
        },
        'akkum.charge.0': {
            'desc': 'Индикация полного разряда батареи, /310.29, V (1050-1150)',
            'min': 1000,
            'max': 1300,
            'comment': ' - INT 1086 1086'
        },
        'akkum.charge.30': {
            'desc': 'Индикация заряда батареи 30%, /310.29, V (1100-1200)',
            'min': 1000,
            'max': 1300,
            'comment': ' - INT 1164 1164'
        },
        'akkum.charge.60': {
            'desc': 'Индикация заряда батареи 60%, /310.29, V (1150-1250)',
            'min': 1000,
            'max': 1300,
            'comment': ' - INT 1194 1194'
        },
        'akkum.charge.temp': {
            'desc': 'Максимальная температура батареи, /?, градусов (?-?)',
            'comment': ' - INT 301 301'
        },
        'akkum.i.0': {
            'desc': '?Начальный ток заряда батареи, х 20.408 mA (1-10)',
            'min': 1,
            'max': 100,
            'comment': ' - INT 6 6'
        },
        'akkum.i.1': {
            'desc': '?Максимальный ток заряда батареи, х 20.408 mA (10-100)',
            'min': 1,
            'max': 100,
            'comment': ' - INT 49 49'
        },
        'akkum.i.2': {
            'comment': ' - INT 31 31'
        },
        'akkum.i.3': {
            'comment': ' - INT 31 31'
        },
        'akkum.i.4': {
            'comment': ' - INT 6 6'
        },
        'akkum.i.charge': {
            'comment': ' - INT 49 49'
        },
        'akkum.u.0': {
            'desc': '?Минимальное напряжение для обновления прошивки, /310.29, V (1100-1300)',
            'min': 1000,
            'max': 1300,
            'comment': ' - INT 1210 1210'
        },
        'akkum.u.1': {
            'desc': '?Напряжение полного заряда батареи, /310.29, V (1250-1350)',
            'min': 1200,
            'max': 1400,
            'comment': ' - INT 1306 1306'
        },
        'akkum.u.2': {
            'comment': ' - INT 1306 1306'
        },
        'akkum.u.3': {
            'desc': '?Напряжение поддержания заряда батареи, /310.29, V (1250-1350)',
            'min': 1200,
            'max': 1400,
            'comment': ' - INT 1309 1309'
        },
        'akkum.u.4': {
            'comment': ' - INT 1309 1309'
        },
        'gps.A1.0': {
            'desc': 'Минимальный регистрируемый угол поворота, градусы (1-10)',
            'primary': true,
            'min': 1,
            'max': 30
        },
        'gps.A1.1': {
            'comment': ' - INT 10 10'
        },
        'gps.A1.2': {
            'comment': ' - INT 5 5'
        },
        'gps.A1.3': {
            'comment': ' - INT 15 15'
        },
        'gps.AOFF.0': {
            'desc': 'Автовыключение GPS для экономии основного питания, мин (60-20160)',
            'primary': true,
            'min': 1,
            'max': 32767,
            'comment': 'INT 1440 1440'
        },
        'gps.AOFF.1': {
            'desc': 'Автовыключение GPS для экономии резервного питания, мин (1-2880)',
            'primary': true,
            'min': 1,
            'max': 32768,
            'comment': 'INT 30 30'
        },
        'gps.B1.0': {
            'comment': ' - INT 512 512'
        },
        'gps.B1.1': {
            'comment': ' - INT 512 512'
        },
        'gps.B1.2': {
            'comment': ' - INT 512 512'
        },
        'gps.B1.3': {
            'comment': ' - INT 512 512'
        },
        'gps.FAIL': {
            'comment': ' - INT 5 5'
        },
        'gps.S1.0': {
            'desc': '?Принудительная регистрация координат при движении, метров (100-10000)',
            'min': 1,
            'max': 32767,
            'comment': ' - INT 1000 1000'
        },
        'gps.S1.1': {
            'comment': ' - INT 1000 1000'
        },
        'gps.S1.2': {
            'comment': ' - INT 500 500'
        },
        'gps.S1.3': {
            'comment': ' - INT 1000 1000'
        },
        'gps.TF.MOVE': {
            'desc': 'Принудительная регистрация координат при движении, сек (30-300)',
            'min': 1,
            'max': 600,
            'comment': ' INT 60 60'
        },
        'gps.TF.STOP.0': {
            'desc': 'Период регистрации координат при остановке / основное питание, сек (10-600)',
            'min': 10,
            'max': 600,
            'comment': ' INT 60 60'
        },
        'gps.TF.STOP.1': {
            'desc': 'Период регистрации координат при остановке / резервное питание, сек (10-600)',
            'min': 10,
            'max': 600,
            'comment': ' INT 60 60'
        },
        'gps.TF.STOP.ACC.0': {
            'desc': 'Период регистрации координат при стоянке / основное питание, сек (60-3600)',
            'primary': true,
            'min': 10,
            'max': 32768,
            'comment': ' INT 600 600'
        },
        'gps.TF.STOP.ACC.1': {
            'desc': 'Период регистрации координат при стоянке / резервное питание, сек (60-3600)',
            'primary': true,
            'min': 10,
            'max': 32768,
            'comment': ' INT 600 600'
        },
        'gps.TM0.0': {
            'comment': ' - INT 10 10'
        },
        'gps.TM0.1': {
            'comment': ' - INT 10 10'
        },
        'gps.TM0.2': {
            'comment': ' - INT 10 10'
        },
        'gps.TM0.3': {
            'comment': ' - INT 10 10'
        },
        'gps.TP0.0': {
            'comment': ' - INT 720 720'
        },
        'gps.TP0.1': {
            'comment': ' - INT 240 240'
        },
        'gps.TP0.2': {
            'comment': ' - INT 720 720'
        },
        'gps.TP0.3': {
            'comment': ' - INT 120 120'
        },
        'gps.V0.0': {
            'comment': ' - INT 3 3'
        },
        'gps.V0.1': {
            'comment': ' - INT 20 20'
        },
        'gps.V0.2': {
            'comment': ' - INT 10 10'
        },
        'gps.V0.3': {
            'comment': ' - INT 20 20'
        },
        'gps.VIGNACC': {
            'comment': ' - INT 4000 4000'
        },
        'gps.VSTART': {
            'desc': 'Скорость, выше которой регистрируется начало движения × 0.01852 км/ч',
            'primary': true,
            'min': 50,
            'max': 2700,
            'comment': ' INT 400 400'
        },
        'gps.VSTOP': {
            'desc': 'Скорость, ниже которой регистрируется остановка объекта × 0.01852 км/ч',
            'primary': true,
            'min': 5,
            'max': 270,
            'comment': ' INT 54 54'
        },
        'gps.flush.move': {
            'desc': 'Период отправки данных на сервер при движении, сек, (30-600)',
            'primary': true,
            'min': 10,
            'max': 3600,
            'comment': ' INT 60 60 180'
        },
        'gps.flush.stop': {
            'desc': 'Период отправки данных на сервер при стоянке, сек, (30-600)',
            'min': 10,
            'max': 3600,
            'comment': ' INT 60 60'
        },
        'gps.maxsendfails': {
            'comment': ' - INT 3 3'
        },
        'gsm.admin': {
            'desc': 'Телефон для SMS-администрирования',
            'comment': ' - STR16'
        },
        'gsm.admin.2': {
            'comment': ' - STR16'
        },
        'gsm.admin.3': {
            'comment': ' - STR16'
        },
        'gsm.alarm': {
            'desc': 'Телефон для отправки тревожных SMS',
            'comment': ' - STR16'
        },
        'gsm.alarm.prop': {
            'comment': ' - INT 7 7'
        },
        'gsm.apn': {
            'desc': 'Программируеная точка входа в Интернет - APN',
            'comment': ' - STR32 www.kyivstar.net www.kyivstar.net'
        },
        'gsm.flags': {
            'desc': 'Работа в роуминге, в том числе, в национальном',
            'comment': ' - INT 0 0'
        },
        'gsm.lagtime': {
            'comment': ' - INT 900 900'
        },
        'gsm.protbits': {
            'comment': ' - INT 31 31'
        },
        'gsm.pwd': {
            'comment': ' - STR32'
        },
        'gsm.reregtime': {
            'comment': ' - INT 6 6'
        },
        'gsm.server': {
            'desc': 'Адрес сервера слежения и порт',
            'comment': ' - STR32 point.newgps.navi.cc:80 map.navi.cc:80'
        },
        'gsm.test': {
            'desc': 'Период контроля трекера, мин (60-14400)',
            'min': 10,
            'max': 32768,
            'comment': ' - INT 1440 1440'
        },
        'gsm.user': {
            'comment': ' - STR32'
        },
        'in.foo.1': {
            'desc': 'Конфигурация входа 1: 0-выключен / 1-Тревога / 2-Шлейф / 3-Зажигание',
            'primary': true,
            'select': [
                {'value': 0, 'title': 'выключен'},
                {'value': 1, 'title': 'тревожная кнопка'},
                {'value': 2, 'title': 'шлейф'},
                {'value': 3, 'title': 'зажигание'}
            ],
            'comment': ' INT 0 0'
        },
        'in.foo.2': {
            'desc': 'Конфигурация входа 2: 0-выключен / 1-Тревога / 2-Шлейф / 3-Зажигание',
            'primary': true,
            'select': [
                {'value': 0, 'title': 'выключен'},
                {'value': 1, 'title': 'тревожная кнопка'},
                {'value': 2, 'title': 'шлейф'},
                {'value': 3, 'title': 'зажигание'}
            ],
            'comment': ' INT 0 0'
        },
        'in.foo.3': {
            'desc': 'Конфигурация входа 3: 0-выключен / 1-Тревога / 2-Шлейф / 3-Зажигание / 4-Датчик уровня',
            'primary': true,
            'select': [
                {'value': 0, 'title': 'выключен'},
                {'value': 1, 'title': 'тревожная кнопка'},
                {'value': 2, 'title': 'шлейф'},
                {'value': 3, 'title': 'зажигание'},
                {'value': 4, 'title': 'датчик уровня'}
            ],
            'comment': ' INT 0 0'
        },
        'out.1': {
            'desc': 'Состояние выхода 1: 0-выключен / 1-включен (активный уровень - низкий)',
            'primary': true,
            'comment': ' INT 1 1'
        },
        'out.2': {
            'desc': 'Состояние выхода 2: 0-выключен / 1-включен (активный уровень - низкий)',
            'primary': true,
            'comment': ' INT 0 0'
        },
        'power.autooff': {
            'comment': ' - INT 0 0'
        },
        'secure.code': {
            'desc': 'Код-расширение для скрытия IMEI трекера',
            'comment': ' - INT 0 0'
        },
        'service.lock': {
            'comment': ' - INT 0 0'
        },

    };

    angular.module('config.system.params', ['ngRoute', '$strap', 'resources.params', 'app.filters', 'config.system.params.master', 'config.system.params.fuel', 'services.tags'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/config/:skey/params', {
                templateUrl: 'templates/config/params/params.tpl.html',
                controller: 'ConfigParamsCtrl',
                resolve: {
                    account: ['Account',        // Да, вот ради списка всех систем для коллекции ярлыков
                        function(Account) {
                            return Account.get();
                        }
                    ],
                    params: ['Params', '$route',
                        function(Params, $route) {
                            return Params.get($route.current.params.skey);
                        }
                    ],
                    system: ['System', '$route',
                        function(System, $route) {
                            return System.get($route.current.params.skey);
                        }
                    ]
                }
            });
        }
    ])

    .value('extend', function() {
        return params_descs;
    })

    .controller('ConfigParamsCtrl', ['$scope', '$route', '$routeParams', 'account', 'params', 'system', 'System',
        function($scope, $route, $routeParams, account, params, system, System) {
            $scope.system = system;
            $scope.skey = $routeParams.skey;
            $scope.params = params;
            $scope.filtered = true;

            $scope.system.postproc = $scope.system.postproc || {
                min_move: 1,
                min_move_ext: 5,
                min_move_len: 100
            };

            $scope.tooltip = {
                'title': '<hr>Показать все параметры<hr>Внимание! Изменение некоторых параметров может привести к выходу трекера из строя.',
                'checked': false
            };

            $scope.extend = function(key) {
                return params_descs[key];
            };

            // $scope.isFiltered = function(item) {
            //     if (!$scope.filtered) {
            //         return true;
            //     }
            //     return item.filter;
            // };

            $scope.onFilter = function(){
                $scope.filtered = !$scope.filtered;
            };

            $scope.cancelqueue = function(k) {
                delete params.queue[k];
                params.$patch('queue'); // Сохраним очередь
            };

            $scope.stopqueue = function() {
                params.queue = {};
                params.$patch('queue'); // Сохраним очередь
            };

            $scope.tofuel = function() {
                return System.$fuel(system, system.dynamic.fuel);
            };

            // $scope.filtered = function(items) {
            //     var result = {};
            //     angular.forEach(items, function(value, key) {
            //         if ($scope.showall || value.hasOwnProperty('primary')) {
            //             result[key] = value;
            //         }
            //     });
            //     return result;
            // };

            $scope.param = {
                key: null,
                value: null
            };

            $scope.$on('$viewContentLoaded', function() {
                // console.log('tbd setup');
                // console.log('setup changeParamModal', $('#changeParamModal'));
                $('#changeParamModal').modal({
                    show: false
                }).on('hidden.bs.modal', function() {
                    // console.log('changeParamModal. Устаревшее.');
                });
            });

            $scope.changeParamDone = function(){
                // console.log('changeParamDone');
                var key = $scope.param.key,
                    value = $scope.param.value;

                params.queue = params.queue || {};
                if (params.queue[key] === value) return; // Значение уже в очереди
                if (angular.isUndefined(params.queue[key]) && (params.data[key].value === value)) return; // Значение не изменяется

                params.queue[key] = value;
                params.$patch('queue'); // Сохраним очередь
            };

            $scope.changeParam = function(key) {
                params.queue = params.queue || {};
                var param = params.data[key];
                var queue = params.queue[key];
                $scope.param.key = key;
                $scope.param.value = queue || param.value;
                $('#changeParamModal').modal('show');
            };

            // $('[rel=tooltip]').tooltip();
        }
    ])

    .filter('isFiltered', function() {
        return function(invalue, status) {
            if (!status) {
                return invalue;
            }
            var out = {};
            angular.forEach(invalue, function(value, key) {
                if (params_descs[key] && params_descs[key].primary) {
                    out[key] = value;
                }
            });
            return out;
        };
    });

})();
