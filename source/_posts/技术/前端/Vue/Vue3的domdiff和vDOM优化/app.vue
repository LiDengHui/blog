<template>
    <div id="app">
        <p>周一了</p>
        <p>周二了</p>
        <div>{{ week }}</div>
        <div :class="{ red: isRed }">周三呢</div>
    </div>
</template>