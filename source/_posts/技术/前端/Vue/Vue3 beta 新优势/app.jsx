import { onMounted } from 'vue'

export default {
    setup() {
        onMounted(() => {
            console.log(`component is mounted`)
        })
    },
}
