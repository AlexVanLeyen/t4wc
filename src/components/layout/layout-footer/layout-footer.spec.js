import { shallowMount } from '@vue/test-utils';
import LayoutFooter from './layout-footer.vue';

describe('LayoutFooter.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(LayoutFooter);

    expect(wrapper.exists()).toEqual(true);
  });
});
