import { shallowMount } from '@vue/test-utils';
import LayoutHeader from './layout-header.vue';

describe('LayoutHeader.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(LayoutHeader);

    expect(wrapper.exists()).toEqual(true);
  });
});
