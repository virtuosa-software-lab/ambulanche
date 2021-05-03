import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import CategoryForm from '@/components/forms/CategoryForm'

describe('CategoryForm', () => {
  let localVue, vuetify

  beforeEach(() => {
    localVue = createLocalVue()
    vuetify = new Vuetify()
  })

  it('sanity test | checks if test configuration is ok', () => {
    console.log(CategoryForm)
  })

  it('renders custom title for adding state of the form', () => {
    const wrapper = shallowMount(CategoryForm, {
      localVue,
      vuetify,
      propsData: {
        adding: true
      }
    })
    expect(wrapper.text()).toContain('Nova categoria')
  })
})
