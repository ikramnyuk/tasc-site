<template>
    <div>
        <Header :lang="lang" />
        
        <Home :lang="lang"/>

        <Footer :lang="lang" />
    </div>
</template>

<script>
    import Header from '../../components/Header/index.vue';
    import Footer from '../../components/Footer/index.vue';
    import Home from '../Home/index';

    import './style.scss';

    export default {
        name: "Layout",

        components: {Home, Header, Footer},

        data() {
            return {
                lang: ''
            };
        },

        methods: {
            langChanged(lang){
                this.lang = lang;

                console.log('catch lang ' + lang)
            }
        }
    };
</script>
