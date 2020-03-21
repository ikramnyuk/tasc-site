import eng from './eng';
import fr from './fr';

export default {
    methods: {
        translate: (page, location, element) => {
            const lang = localStorage.lang;
    
            switch(lang){
                case 'Eng':
                    return eng[page][location][element];
                    
                case 'Fr':
                    return fr[page][location][element];
                        
                default:
                    return eng[page][location][element];
            }
        }
    }
}