import React from "react"
import ContentLoader from "react-content-loader"

const Preloader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#dbdbdb"
    {...props}
  >
    <rect x="0" y="0" rx="6" ry="6" width="390" height="310" />
  </ContentLoader>
)

export default Preloader