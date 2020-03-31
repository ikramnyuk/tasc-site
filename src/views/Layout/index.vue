<template>
    <div>
        <Header :key="switchIndex+2"/>
        
        <router-view :key="switchIndex"></router-view>

        <Footer :key="switchIndex+1"/>
    </div>
</template>

<script>
    import Header from '../../components/Header/index.vue';
    import Footer from '../../components/Footer/index.vue';

    import './style.scss';

    export default {
        name: "Layout",

        components: {Header, Footer},

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
