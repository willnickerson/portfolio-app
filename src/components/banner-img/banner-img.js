import template from './banner-img.html';
import styles from './banner-img.scss';

export default({
    template,
    controller() {
        this.styles = styles;
    }
});