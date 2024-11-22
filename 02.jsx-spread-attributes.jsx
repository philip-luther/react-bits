/**
 * Spread Attributes is a JSX feature. It’s syntactic sugar for passing all of an object’s properties as JSX attributes.
 * The ... operator (or spread operator) is already supported for arrays in ES6. There is also a proposal to get the spread operator for object properties in ES2017.
 *
 * @References:
 * https://gist.github.com/sebmarkbage/07bbe37bc42b6d4aef81
 *
 */

// Spread Attributes is a JSX feature. It’s syntactic sugar for passing all of an object’s properties as JSX attributes.
// These two examples are equivalent.

// props written as attributes
let main = () => <main className="main" role="main">{children}</main>;

// props "spread" from object
// Note: `children` key is used to populate the component children.
let main = () => <main {...{className: "main", role: "main", children}} />;

// Use this to forward props to underlying components.
let FancyDiv = (props) => <div className="fancy" {...props} />;

// Now, I can expect FancyDiv to add the attributes it's concerned with as well as those it's not.
let FancyDiv = () => <FancyDiv data-id="my-fancy-div">So Fancy</FancyDiv>;
// output: <div className="fancy" data-id="my-fancy-div">So Fancy</div>

// Keep in mind that order matters. If props.className is defined, it'll clobber the className defined by FancyDiv
let FancyDiv = () => <FancyDiv className="my-fancy-div"/>;
// output: <div className="my-fancy-div"></div>

// We can make FancyDivs className always “win” by placing it after the spread props ({...props}).

// my `className` clobbers your `className`
const FancyDiv = props =>
  <div {...props} className="fancy"/>;
// You should handle these types of props gracefully. In this case, I’ll merge the author’s props.className with the className needed to style my component.

const FancyDiv = ({ className, ...props }) => (
  <div
    className={["fancy", className].join(' ')}
    {...props}
  />
);

