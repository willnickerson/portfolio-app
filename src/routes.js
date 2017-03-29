routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: 'home',
        url: '/home',
        template: '<home></home>'
    });
    $stateProvider.state({
        name: 'projects',
        url: '/projects',
        template: '<projects><projects>'
    });
    $stateProvider.state({
        name: 'about',
        url: '/about',
        template: '<about></about'
    });

    $urlRouterProvider.otherwise('/home');
}