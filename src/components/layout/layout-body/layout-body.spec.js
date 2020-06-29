import { shallowMount } from '@vue/test-utils';
import LayoutBody from './layout-body.vue';

describe('LayoutBody.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(LayoutBody);

    expect(wrapper.exists()).toEqual(true);
  });
});
