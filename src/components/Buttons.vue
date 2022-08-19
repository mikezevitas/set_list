<template>
    <!-- <div class="sl-button-wrapper"> -->
        <button  :class="[primary ? 'primary' : 'secondary']">
            {{label}}
        </button>
    <!-- </div> -->
</template>


<script>
export default {
  props: {
    label: {
        type: String
    },
    primary: {
        type: Boolean,
        default: () => false,
    },
    // secondary: {
    //     type: Boolean,
    //     default: () => false,
    // }
  }
}
</script>
<style lang="scss">
.primary {
    color: green;
    background-color: white;
}
.secondary {
    color: blue;
    background-color: yellow;
}
</style>