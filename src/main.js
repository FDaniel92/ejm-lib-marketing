//KOMPONENSEK BEÁLLÍTÁSA
import ejmHeader from './components/ejm-header.vue';
import ejmButton from './components/ejm-button.vue';
import ejmInfoBox from './components/ejm-info-box.vue';
import ejmContainerHeader from './components/ejm-container-header.vue';
import ejmCustomDropdownList from './components/ejm-custom-dropdown-list.vue';
import ejmFooter from './components/ejm-footer.vue';
import ejmMainContainer from './components/ejm-main-container.vue';
import ejmCarousel from './components/ejm-carousel.vue';
import ejmInput from './components/ejm-input.vue';
import ejmTextarea from './components/ejm-textarea.vue';
import ejmCookie from './components/ejm-cookie.vue';
import './assets/styles/app.scss';

const Components = {
    ejmHeader,
    ejmButton,
    ejmInfoBox,
    ejmContainerHeader,
    ejmCustomDropdownList,
    ejmFooter,
    ejmMainContainer,
    ejmCarousel,
    ejmInput,
    ejmTextarea,
    ejmCookie
}

//KOMPONENSEK INSTALL FÜGGVÉNYE
export default function(Vue) {
    Object.keys(Components).forEach(name => {
        Vue.component(name, Components[name]);
    });
}