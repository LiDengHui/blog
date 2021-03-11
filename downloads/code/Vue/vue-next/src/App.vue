<template>
<div>{{ a.b.c }}</div>
</template>

<script>
export default {
    data() {
        return {
            a: {},
        };
    },
    created() {
        this.a.b = {
            c: 1,
        };
    },
    mounted() {
        this.a.b.c = 2;
    },
};
</script>

<style>
</style>
