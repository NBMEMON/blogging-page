import Image from "next/image";
import Header1 from "./componenets/header";
import conflictImage from "./images/maxresdefault.jpg";
import trumpImage from "./images/trump.jpeg";
import cr7Image from "./images/Ronaldo-YouTube-Thumbnail.jpg";
import babarImage from "./images/babar.jpeg";
import ZnImage from "./images/1244297-Dr_Zakir_Naik_bx-1480091393.jpg"
import sco from "./images/twitter.jpg"
import oly from "./images/images.jpeg"
import Link from "next/link";
import Footer1 from "./componenets/footer";


export default function Home() {
  return (
    <div className="mainDiv">
      <div>
        {" "}
        <Header1 />
      </div>
      <div className="container">
        <div className="blogContainer1">
        <Link href={"iran"}>
          <Image
            id="conflictImage"
            src={conflictImage}
            alt="iran-israel image"
          />
          <h2>Iran - Israel Conflict</h2>
          
          <p>
            "Iran and Israel have been at odds for decades, with tensions
            escalating in recent years.Iran stands for sovereignty and justice,
            opposing Israeli actions in Palestine. By advocating for the rights
            of the oppressed, Iran seeks regional stability and a fair
            resolution to the conflict."
          </p></Link>
        </div>
        <div className="secondContainer">
        <Link href={"trump"}>
          <Image id="trumpImage" src={trumpImage} alt="iran-israel image" />
          <h2 id="rightHeading">Trump Assassination Attempt</h2>
          <p id="rightPara">
            "On July 13, 2024, Donald Trump, a former president of the United
            States , survived an assassination attempt while speaking at an
            open-air campaign rally near Butler, Pennsylvania."
          </p></Link>
        </div>
        <div className="smallContainer">
          <Link href={"ronaldo"}>
          <Image id="trumpImage" src={cr7Image} alt="cr7 image" />
          <h2 className="smallHeading">CR7 Hit 10Million Subs In 24Hrs.</h2>
          </Link>
        </div>
        <div className="smallContainer" >
          <Link href={"babarazam"}>
          <Image id="trumpImage" src={babarImage} alt="babar image" />
          <h2 className="smallHeading">Babar Azam's fall in ICC Test Rankings.</h2>
          </Link>
        </div>
        <div className="smallContainer" >
          <Link href={"zakirnaik"}>
          <Image id="znImage" src={ZnImage} alt="Zakir Naik image" />
          <h2 className="smallHeading">Dr.Zakir Naik Visits To Pakistan.</h2>
          </Link>
        </div>
        <div className="smallContainer" >
          <Link href={"arshadnadeem"}>
          <Image id="trumpImage" src={oly} alt="arshad nadeem image" />
          <h2 className="smallHeading">Arshad Nadeem Wins Gold For Pakistan.</h2>
          </Link>
        </div>
        <div className="smallContainer" >
          <Link href={"scosummit"}>
          <Image id="trumpImage" src={sco} alt="sco summit image" />
          <h2 className="smallHeading">SCO Summit 2024 In Pakistan.</h2>
          </Link>
        </div>
      </div>
      <Footer1/>
    </div>
  );
}
