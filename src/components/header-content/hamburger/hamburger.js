import template from './hamburger.html';
import styles from './hamburger.scss';

export default({
    template,
    controller
});

function controller() {
    this.styles = styles;

    var toggles = angular.element(document.querySelectorAll('.c-hamburger')); //eslint-disable-line
    console.log(toggles);
    
    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    }

    function toggleHandler(toggle) {
        toggle.addEventListener( 'click', function(e) {
            e.preventDefault();
            (this.classList.contains('is-active') === true) ? this.classList.remove('is-active') : this.classList.add('is-active');
        });
    }
}