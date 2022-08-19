<template>
    <div class="side-nav">
        <div class="side-grid">
            <h1>Side NAv</h1>
            <div class="buttongroup">

                <button>add Song</button>
                <button>add set</button>
                <button>account</button>
            </div>
        </div>
        <div class=""></div>

    </div>
</template>

<script>
export default {
  name: 'Side Nav',
  
}
</script>

<style lang="scss">
.side-nav {
    max-width: 300px;
    width: 100%;
    position: fixed;
    left: 0;
    top: 100px;
    background-color: blue;
    
    .side-grid {
        max-width: 1440px;
        padding: 10px 50px;
    }

}
</style>