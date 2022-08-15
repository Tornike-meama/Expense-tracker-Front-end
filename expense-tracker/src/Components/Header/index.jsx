import * as React from 'react';
import { Link } from "react-router-dom";

export default function SearchAppBar() {
  return (
    <nav>
        <ul style={{display: "flex", listStyle: "none"}}>
            <li style={{padding: "10px 35px"}}>
                <Link to="/">home</Link>
            </li>
            <li style={{padding: "10px 35px"}}>
                <Link to="/">login</Link>
            </li>
        </ul>
    </nav>
  );
}
