<template>
    <div id="app" class="sys-container is-vertical">
        <sys-header></sys-header>
        <div class="sys-main-aside">
            <sys-aside></sys-aside>
            <sys-main></sys-main>
        </div>
    </div>
</template>

<script>
import sysHeader from './layout/Header/Header.vue'
import sysAside from './layout/Aside/Aside.vue'
import sysMain from './layout/Main/Main.vue'

export default {
    computed: {

    },
    methods: {

    },
    mounted() {

      let vm = this

       

    },
    components: {
      sysHeader,
      sysAside,
      sysMain,
    }
}
</script>

<style lang="less">
html,body{
    height: 100%;
}
body {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    background: #f0f0f0;
    margin: 0;
}
h1, h2, h3 {
    margin: 0;
}
p {
    margin: 0;
}
h1, h2, h3, p, div, section, header {
    box-sizing: border-box;
}

ul, dl, ol {
    list-style: none;
    margin: 0;
    padding: 0;
}

div, section, body {
    &::-webkit-scrollbar {
        width: 8px;
        height: 10px;
    }

    &::-webkit-scrollbar-thumb {
        outline-offset: -2px;
        outline: 2px solid #fff;
        -webkit-border-radius: 0px;
        border-radius: 0px;
        border: 2px solid #fff;
        background-color: #bbd;
    }

}

.is-vertical {
    flex-direction: column;
}

.sys-container {
    display: flex;
    flex: 1;
    min-width: 1200px;
    min-height: 600px;

    .sys-main-aside {
        display: flex;
        flex: 1;
    }
}
</style>