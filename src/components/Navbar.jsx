import React from 'react'
import { Link } from "react-router-dom";
import '.././App.css'

function Navbar() {

    return (
        <nav>
            <Link to="/">
                <button>
                    Question1
                </button>
            </Link>
            <Link to="/q2">
                <button>
                    Question2
                </button>
            </Link>
        </nav>
    )
}

export default Navbar
