
import test from 'ava'

import { cat } from '../src/cat.ts'

test('It tests concatenating some parameters into a string', t => {
  t.is(cat({ pre: '>>' }, 'foo'), '>> foo', 'Works with a pre parameter')
  t.is(cat({}, 'bar'), 'bar', 'Works without a pre parameter')
})
