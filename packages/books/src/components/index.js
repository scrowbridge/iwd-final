import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from "./list"
import Post from "./post"
import Page from "./page"

const Root = ({state}) => {
    const data = state.source.get(state.router.link)
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
            <hr />
            <main>
                <Switch>
                    <List when={data.isArchive} />
                    <Post when={data.isPost} />
                    <Page when={data.isPage} />
                </Switch>
            </main>
        </>
    )
}

export default connect(Root)