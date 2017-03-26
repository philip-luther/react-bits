/**
 * Using Composition to handle UX variations
 *
 * Combining smaller reusable components to build a bigger UI blocks.
 *
 * How do we make sure components are reusable?
 * - By ensuring our UI components are pure presentational components (dumb)
 *
 * What does reusable mean?
 * - No data fetching within the component (do it in Redux).
 * - If data is required from API - goes into Redux
 *      Via redux-thunk API calls are isolated away from the redux containers that deal with the data obtained and pass it on to the dumb component.
 *
 * If we have a bunch of renderBla() functions within the component which are used in the main component render()
 * --- It’s better to move it to separate components. That way it is reusable.
 *
 * @Reference:
 * https://speakerdeck.com/vasa/building-multitenant-ui-with-react-dot-js
 */

/**
 * Example
 *
 * Login page variations
 * UX variations toggle features + add in additional links/markup.
 */

// If the UX variations are involve toggling features within a component + adding minor markup around it
import React, { Component, PropTypes } from "react";
import SignIn from "./sign-in";

class MemberSignIn extends Component {
  _renderMemberJoinLinks() {
    return (
      <div className="member-signup-links">
        ...
      </div>
    );
  }

  _routeTo() {
    // Routing logic here
  }

  render() {
    const {forgotEmailRoute,forgotPwdRoute, showMemberSignupLinks} = this.props;
    return (
      <div>
        <SignIn
          onForgotPasswordRequested={this._routeTo(forgotPwdRoute)}
          onForgotEmailRequested={this._routeTo(forgotEmailRoute)}>
          {this.props.children}
          {showMemberSignupLinks && this._renderMemberJoinLinks()}
        </SignIn>
      </div>
    );
  }
}

export default MemberSignIn;

