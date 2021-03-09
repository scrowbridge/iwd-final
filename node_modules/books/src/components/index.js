import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"

const Root = ({state}) => {
    return (
        <>
            <h1>Nicholas Sparks Books</h1>
            <p>Current URL: {state.router.link}</p>
            <nav>
                <Link link="/">Home</Link>
                <br />
                <Link link="/author-bio">About</Link>
                <br />
                <Link link="/book">Books</Link>
                <br />
                <Link link="/contact">Contact Us</Link>
            </nav>
        </>
    )
}

export default connect(Root)