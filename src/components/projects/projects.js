import template from './projects.html';
import styles from './projects.scss';

export default({
    template,
    controller() {
        this.styles = styles;
    }
});