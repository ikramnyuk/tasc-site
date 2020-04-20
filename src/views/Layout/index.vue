<template>
    <div>
        <Header :key="switchIndex+2" />
        
        <Home :key="switchIndex"/>

        <Footer :key="switchIndex+1" />
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
                switchIndex: 0
            };
        },

        methods: {
            langChanged(){
                this.switchIndex++;
            }
        }
    };
</script>
