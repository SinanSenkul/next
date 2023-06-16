import Link from "next/link";
import React from "react";

export default function Navbar() {
    const styles = {
        display: `flex`,
        flexDirection: `row`,
        alignItems: `center`,
        justifyContent: `space-between`,
        backgroundColor: `gray`,
        color: `white`,
        padding: '0.5rem'
    }
    return (
        <div style={styles}>
            <Link href="/about"><span>about</span></Link>
            <Link href="/contact"><span>contact</span></Link>
            <Link href="/"><span>home</span></Link>
        </div>
    )
}