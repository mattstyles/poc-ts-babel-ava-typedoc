
import test from 'ava'

import { divide } from '../src/divide'

test('It divides numbers', t => {
  t.is(divide(12, 3), 4, 'positive numbers are good')
})
