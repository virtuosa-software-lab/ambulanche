import { extend } from 'vee-validate'
import {
  required,
  numeric,
  alpha_spaces,
  integer,
  email,
  regex,
  min,
  max,
} from 'vee-validate/dist/rules'

extend('required', {
  ...required,
})

extend('regex', {
  ...regex,
})

extend('numeric', {
  ...numeric,
})

extend('alpha_spaces', {
  ...alpha_spaces,
})

extend('integer', {
  ...integer,
})

extend('email', {
  ...email,
})

extend('min', {
  ...min,
})

extend('max', {
  ...max,
})
