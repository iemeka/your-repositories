export default function NetlifyModal() {
  const netlifyIdentity = window.netlifyIdentity;
  if (netlifyIdentity) {
    netlifyIdentity.open();
  } else {
    console.log("identity not defined.")
  }
}
