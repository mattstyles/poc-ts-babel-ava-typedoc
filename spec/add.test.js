
import test from 'ava'

import { add } from '../src/add.ts'

test('It adds numbers together', t => {
  t.is(add(2, 3), 5, 'positive numbers are good')
  t.is(add(-2, 3), 1, 'negative numbers are good')
})
