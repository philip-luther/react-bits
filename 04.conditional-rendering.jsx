/**
 * You can use regular if/else conditions inside a component render. The conditional (ternary) operator is your friend.
 * Although, as the markup gets larger or more varied - it is advisable to split it up into separate components and use them instead.
 */

//if
function render() {
  return condition && <span>Rendered when `truthy`</span>
}

// unless
function render() {
  return condition || <span>Rendered when `falsey`</span>
}

// if- else (tidy one - liners)
function render() {
  return condition
    ? <span>Rendered when `truthy`</span>
    : <span>Rendered when `falsey`</span>
}

// if- else (big blocks)
function render() {
  return condition ? (
    <span>
    Rendered when `truthy`
  </span>
  ) : (
    <span>
    Rendered when `falsey`
  </span>
  )
}