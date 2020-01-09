import Link from "next/link"
import Layout from "../components/Layout"

const Navbar = () => (
    <header>
        <div className="container">
            <h1>ChessGame</h1>
            <nav>
                <ul>
                    <li><Link href="#"><a>Play With Friends</a></Link></li>
                    <li><Link href="#"><a>Option 2</a></Link></li>
                    <li><Link href="#"><a>Option 3</a></Link></li>
                </ul>
            </nav>
        </div>
        <style jsx> {`
            .container {
                width: 80%;
                margin: 0 auto;
            }
            header {
                background: #55d6aa;
            }
            header::after {
                content: "";
                display: table;
                clear: both;
            }
            h1 {
                float: left;
            }
            nav {
                float: right;
            }
            nav ul {
                margin: 0;
                padding: 0;
                list-style: none;
            }
            nav li {
                display: inline-block;
                margin-left: 4rem;
                padding-top: 2rem;
            }
        `} </style>
    </header>
);

export default Navbar