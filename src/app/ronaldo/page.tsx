import Header1 from "../componenets/header"; // Corrected the path from "componenets" to "components"
import Image from "next/image";

import ronaldoImage from "../images/Ronaldo-YouTube-Thumbnail.jpg";
import Footer1 from "../componenets/footer"; // Corrected the path

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

import conflictImage from "../images/maxresdefault.jpg";
import trumpImage from "../images/trump.jpeg";
import cr7Image from "../images/Ronaldo-YouTube-Thumbnail.jpg";
import babarImage from "../images/babar.jpeg";
import ZnImage from "../images/1244297-Dr_Zakir_Naik_bx-1480091393.jpg";
import sco from "../images/twitter.jpg";
import oly from "../images/images.jpeg";
import Link from "next/link";

export default function Ronaldo10MillionYT() {
  return (
    <div>
      <Header1 />

      <div id="page2">
       

        <h2>Cristiano Ronaldo Crosses 10 Million Subscribers on YouTube</h2>
        <Image
          id="ronaldoImage"
          src={ronaldoImage}
          alt="Cristiano Ronaldo celebrating his 10 million YouTube subscribers"
        />
        <div className="p-4">
          <h2 className={montserrat.className}>
            Ronaldo Reaches 10 Million YouTube Subscribers in 24 Hours: A
            Phenomenon On and Off the Pitch
          </h2>

          <p className="text-lg">
            Cristiano Ronaldo, one of the greatest footballers of all time, has
            achieved yet another milestone, this time in the digital realm. In
            just 24 hours, Ronaldo's newly launched YouTube channel surpassed 10
            million subscribers, marking his dominance not just in sports but
            also in global entertainment. This achievement adds to his
            illustrious career, solidifying his influence far beyond the
            football field.
          </p>

          <h3
            className={`text-3xl font-extrabold mt-6 mb-2 ${montserrat.className}`}
          >
            A Legendary Football Journey
          </h3>

          <p className="text-lg">
            Ronaldo’s journey from a young boy in Madeira to becoming a global
            football icon is nothing short of legendary. Starting his
            professional career at Sporting Lisbon, he quickly caught the eye of
            Manchester United, where he began making his mark on world football.
            His dedication, work ethic, and incredible talent earned him
            accolades and records that have cemented his place in the annals of
            football history.
          </p>

          <ol className="list-decimal pl-6 mt-2">
            <li className="page2li">
              <strong>Manchester United:</strong>{" "}
              <p className="text-lg">
                Ronaldo won his first Ballon d'Or at Manchester United, along
                with three Premier League titles, a Champions League, and a FIFA
                Club World Cup.
              </p>
            </li>

            <li className="page2li">
              <strong>Real Madrid:</strong>{" "}
              <p className="text-lg">
                At Real Madrid, Ronaldo became the club's all-time top scorer,
                winning four Champions League titles and four more Ballon d'Ors
                during his time at the club.
              </p>
            </li>

            <li className="page2li">
              <strong>Juventus and Al-Nassr:</strong>{" "}
              <p className="text-lg">
                Even in the later stages of his career, Ronaldo continues to
                break records, from Serie A in Juventus to his current role at
                Al-Nassr in Saudi Arabia.
              </p>
            </li>
          </ol>

          <h3
            className={`text-3xl font-extrabold mt-6 mb-2 ${montserrat.className}`}
          >
            Achievements on and off the Pitch
          </h3>

          <p className="text-lg">
            Ronaldo's football career has been filled with extraordinary
            achievements. He has scored over 800 career goals, won five Ballon
            d'Ors, and lifted numerous trophies across Europe's top leagues. His
            international success includes winning the UEFA European
            Championship and the UEFA Nations League with Portugal.
          </p>

          <ol className="list-decimal pl-6 mt-2">
            <li className="page2li">
              <strong>Most Goals in International Football:</strong>
              <p className="text-lg">
                Ronaldo holds the record for the most goals scored in
                international football, surpassing 120 goals for Portugal.
              </p>
            </li>

            <li className="page2li">
              <strong>Global Icon:</strong>
              <p className="text-lg">
                Beyond his football achievements, Ronaldo has become a global
                brand with endorsement deals, business ventures, and now, his
                massive online presence.
              </p>
            </li>

            <li className="page2li">
              <strong>Social Media Leader:</strong>{" "}
              <p className="text-lg">
                Ronaldo is the most followed individual on Instagram and now has
                made his mark on YouTube, showcasing his influence across all
                platforms.
              </p>
            </li>
          </ol>

          <h3
            className={`text-3xl font-extrabold mt-6 mb-2 ${montserrat.className}`}
          >
            The Power of Ronaldo’s Digital Presence
          </h3>

          <p className="text-lg">
            Ronaldo’s reach on social media has transformed him into a digital
            phenomenon. His YouTube channel launch was met with overwhelming
            enthusiasm from his global fanbase, catapulting him to 10 million
            subscribers within a day. This rapid success mirrors his impact on
            other platforms, where he is already a leader in follower counts and
            engagement.
          </p>

          <ol className="list-decimal pl-6 mt-2">
            <li className="page2li">
              <strong>Content Variety:</strong>
              <p className="text-lg">
                His YouTube channel features a mix of behind-the-scenes content,
                fitness routines, football insights, and glimpses into his
                personal life.
              </p>
            </li>

            <li className="page2li">
              <strong>Fan Engagement:</strong>
              <p className="text-lg">
                Ronaldo’s YouTube success is a testament to his ability to
                connect with fans on a personal level, sharing his life beyond
                football.
              </p>
            </li>

            <li className="page2li">
              <strong>Influence Beyond Football:</strong>{" "}
              <p className="text-lg">
                Ronaldo’s influence now spans entertainment, fitness, and
                lifestyle, proving that his legacy transcends football.
              </p>
            </li>
          </ol>

          <h3
            className={`text-3xl font-extrabold mt-6 mb-2 ${montserrat.className}`}
          >
            Conclusion
          </h3>

          <p className="text-lg">
            Cristiano Ronaldo’s latest achievement—reaching 10 million YouTube
            subscribers in just 24 hours—further highlights his global influence
            and appeal. From dominating football to captivating millions online,
            Ronaldo continues to break barriers and set new standards. His
            YouTube success not only reflects his unmatched popularity but also
            his ability to adapt and thrive in any arena, on or off the pitch.
          </p>
        </div>
      </div>

      <Footer1 />
    </div>
  );
}
