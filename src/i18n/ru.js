/* global angular:true */

angular.module('i18n.ru', ['pascalprecht.translate'])

.config(['$translateProvider',
    function($translateProvider) {

        'use strict';

        // Simply register translation table as object hash
        $translateProvider.translations('ru_RU', {
            'translate': 'Ошибка описания',
            'error_msg': 'Ууууупс. Что-то произошло. Попробуйте перейти по одной из следующих ссылок:',

            // Login page
            'enter': 'Вход',
            'enter_help': 'Введите имя пользователя и пароль своей учетной записи.',
            'enter_comment': 'Чтобы пользоваться сервисом необходимо авторизоваться в системе.',
            'enter_comment2': 'Для создания новой учетной записи придумайте имя пользователя и пароль, учетная запись будет создана автоматически.',
            'user_name': 'Имя пользователя',
            'user_password': 'Пароль',
            'enter_cmd': 'Войти',
            'register_cmd': 'Зарегестритоваться',
            'enter_as': 'Вы вошли как {{ value }}',
            'Display name': 'Отображаемое имя',
            'Register date': 'Дата регистрации',
            'Administrator': 'Администратор',
            'Observed systems': 'Наблюдаемых систем',
            'for_recovery': 'Для восстановления пароля',
            'error_auth': 'Ошибка авторизации, перепроверьте данные.',

            'Login': 'Вход',
            'Map': 'Карта',
            'Logs': 'События',
            'Reports': 'Отчеты',
            'Export GPS': 'Экспорт GPS',
            'Config': 'Настройки',
            'Help': 'Помощь',
            'User': 'Пользователь',
            'Admin': 'Администрирование',

            // Карта
            'Display Settings': 'Настройки отображения',
            'Hide track': 'Скрыть трек',
            'Show track': 'Показать трек',
            'points_in_track': 'Точек в треке: {{value}}',

            // Панель настроек карты
            'AUTO_BOUND_TRACK': 'Автоматически центровать трек',
            'ANIMATION_DIR': 'Анимация направления движения',
            'STOP_NUMBERS': 'Нумерация остановок / стоянок',
            'FILTERS_ON': 'Фильтры',

            // Страница настроек
            'add_system': 'Добавить трекер',
            'system_not_found': 'Система не найдена. Возможные причины: \n1. Система еще не выходила на связь.\n2. Проверте правильность ввода IMEI.',

            // Страница params
            'contenteditableTitle': 'Для изменения описания поместите курсор в поле',
            'Has a fuel sensor': 'Имеет датчик уровня топлива',

            // report
            'Generate report': 'Сгенерировать отчет',
            'event': 'Событие',
            'Start date:': 'Дата начала:',
            'Stop date:': 'Дата окончания:',
            'System:': 'Система:',
            'Select system': 'Выберите систему',
            'Template': 'Шаблон',
            'All reports': 'Все отчеты',
            'System Name': "Имя системы",
            'Date': 'Дата',
            'Open': 'Открыть',
            'Download': 'Загрузить отчет',
            'Remove': 'Удалить',
            'Templates settings': 'Персонализация отчетов',
            'Template name': 'Имя шаблона',
            'Add new template': 'Создать новый шаблон',
            'Main report': 'Основной отчет',
            'Summary report': 'Итоговый отчет',
            'Events': 'События',
            'Select main report data': 'Выберите данные, которые хотите отслеживать в основном отчете',
            'Select summary report data': 'Выберите данные, которые хотите отслеживать в итоговом отчете',
            'Data': 'Данные',
            'c': 'Координаты',
            'i': 'Временной интервал',
            'cFL': 'Изменение уровня топлива',
            'fL': 'Уровень топлива',
            'd': 'Продолжительность',
            'aS': 'Средняя скорость',
            'dT': 'Пройденная дистанция',
            're': 'Заправка топлива',
            'fD': 'Слив топлива',
            'tTT': 'Общее время в пути',
            'tTOPAS': 'Общее время стоянок',
            'mS': 'Максимальная скорость',
            'fCs': 'Израсходовано топлива (по показаниям датчика)',
            'fCa': 'Израсходовано топлива (аналитически)',
            'tF': 'Всего заправлено топлива',
            'tDF': 'Всего слито топлива',
            'v': 'Значение',
            'm': 'Движение',
            's': 'Стоянка',
            'Empty data': 'Нет данных для отображения',
            'Download report': 'Загрузить отчет',
            'Controlled parameters': 'Контролируемые параметры',
            'Report options': 'Параметры отчета',
            'Full template': 'Полный шаблон',
            'Note': 'Примечание',
            'cFLa': 'Израсходовано топлива (аналитически)',
            'report in': 'Отчет в формате',
            'Show map': 'Показать карту'
        });
    }
]);
