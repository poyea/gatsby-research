import React from "react"
import { Link } from "gatsby"


//export default () => <h1>This is a header.</h1>
export default props => (
    <div>
        <Link to="/">Home...</Link>
		<Link to="/about/">About...</Link>
		<Link to="/contact/">Contact...</Link>
        <h1>{props.headerText}</h1>
    </div>
)
