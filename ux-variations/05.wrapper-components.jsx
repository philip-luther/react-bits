/**
 * Using Wrappers to handle UX/style variations
 *
 * For Handling Wrapper <div>’s and other markup around component, use composition!
 *
 * When you create a React component instance, you can include additional React components or JavaScript expressions between the opening and closing tags.
 * Parent can read its children by accessing the special this.props.children prop.
 *
 * @Reference:
 * https://speakerdeck.com/vasa/building-multitenant-ui-with-react-dot-js
 */

const SampleComponent = () => {
  <Parent>
    <Child />
  </Parent>
};

const Parent = () => {
  // You can use class 'bla' or any other classed to handle any style variations for the same markup.
  <div className="bla">
    {this.props.children}
  </div>
};