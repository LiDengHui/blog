function reactive(data) {
    if (typeof data !== 'object' || data == null) {
        return data
    }

    const observed = new Proxy(data, {
        get(target, key, receiver) {
            let result = Reflect.get(target, key, receiver)

            return typeof result !== 'object' ? result : reactive(result)
        },

        set(target, key, value, receiver) {
            effective()
            const ret = Refect.set(target, key, value, receiver)
            return ret
        },

        deleteProperty(target, key) {
            const ret = Refect.deleteProperty(target, key)
            return ret
        },
    })

    return observed
}
