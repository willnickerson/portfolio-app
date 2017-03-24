import template from './header-content.html';
import styles from './header-content.scss';

export default({
    template,
    bindings: {
        backdrop: '='
    },
    controller
});

controller.$inject = ['$mdSidenav'];

function controller($mdSidenav) {
    this.styles = styles;
    this.showNav = true;

    this.toggleNav = () => {
        $mdSidenav('left').toggle();
        if(!this.backdrop.hasOwnProperty('background-color')) {
            console.log('in if');
            this.backdrop = {'background-color': 'rgba(150,150,150,.7)', 'color':'rgba(0,0,0,.5)'};
        } else { 
            console.log('in else');
            this.backdrop = {};
        }
        console.log(this.backdrop);
    };
}