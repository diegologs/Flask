import Vue from 'vue';
// The path is relative to the project root.
import LandingPage from 'src/rendered/LandingPage';

describe('LandingPage.vue', () => {
  it(`should render propValue as its text content`, () => {
    // Extend the component to get the constructor, which we can then initialize directly.
    const Constructor = Vue.extend(LandingPage);

    const comp = new Constructor({
      propsData: {
        // Props are passed in "propsData".
        propValue: 'Test Text'
      }
    }).$mount();

    expect(comp.$el.textContent)
      .to.equal('Test Text');
  });
});