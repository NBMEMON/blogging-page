import Image from "next/image";
import Link from "next/link";
import image1 from "../images/blogify-high-resolution-logo-grayscale-transparent.png"

export default function header(){
    return (
        <div className="header">
         <Image id="Image"
                src={image1}        // Use the imported image1
                alt="Blogify Logo"   // Describe the image for accessibility
                       // Set the height (adjust as per your need)
            /> <p id="logoName"><Link href="/">Blogify</Link></p> <ul id="headerul">
                <li className="headerli"><Link href="/">Home</Link></li>
                <li className="headerli"><Link href="logi">Login</Link></li>
                <li className="headerli"><Link href="about">About</Link></li>
            </ul>
        </div>
    )
}
