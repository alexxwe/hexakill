interface configInterface {
    base: {
        health: number
        ad: number
        ap: number
        armor: number
        mr: number
        speed: number
    }
    names: string[]
}

export const config: configInterface = {
    base: {
        // multiples of 4
        // so u can multiply by: 0.75, 1.25, 1.75, ...
        health: 200,
        ad: 32,
        ap: 40,
        armor: 12,
        mr: 12,
        speed: 4,
    },
    names: ['Pablo', 'Miguel', 'Paco', 'Jose Luis', 'Berto', 'Juan'],
}

export default config
