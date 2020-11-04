import { Type, Static } from '../../src/typebox'

// --------------------------------------------

const T0 = Type.Dict(Type.Union([Type.String(), Type.Number()]))
const F0 = (arg: Static<typeof T0>) => {}
F0({
    'a': 'hello',
    'b': 'world',
    'c': 1
})

