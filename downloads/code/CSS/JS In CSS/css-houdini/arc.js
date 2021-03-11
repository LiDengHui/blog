registerPaint(
    'background-canvas',
    class {
        static get inputProperties() {
            return ['--background-canvas']
        }

        paint(ctx, geom, properties) {
            const str = properties.get('--background-canvas').toString()
            const fn = eval(str)
            fn(ctx, geom)
        }
    }
)
