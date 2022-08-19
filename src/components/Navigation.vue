<template>
    <div class="header-nav">

        <div class="header-grid">
            <div>
                <h1>Hello, Almost Famous</h1>
            </div>
            <div>
                <Buttons label="testing" :primary="false" @click="$router.push('about')" />
            </div>
        </div>
    </div>





</template>
<script>
import Buttons from './Buttons.vue'

export default {
  name: 'Navigation',
  components: {
    Buttons
  },

}

</script>

<style lang="scss">

.header-nav {
    width: 100%;
    max-width: 100%;
    position: fixed;
    background-color: red;
    margin: 0 auto;
    
    .header-grid {
        max-width: 1440px;
        padding: 10px 50px;
        display: flex;
        justify-content: space-between;
    margin: 0 auto;

       
    }

}
</style>