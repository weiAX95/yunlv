<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({
        mpType: 'app',
        
        onLaunch() {
            console.log('App Launch')
        },
        onShow() {
            console.log('App Show')
        },
        onHide() {
            console.log('App Hide')
        },
        globalData: {  
            isShowDialog:false
        }
    });
</script>

<style>
    /*每个页面公共css */
    page{
        height: 100%;
    }
</style>
