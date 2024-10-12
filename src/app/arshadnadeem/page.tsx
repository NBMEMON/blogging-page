import Header1 from "../componenets/header";
import Image from "next/image";
import arshadNadeemGoldImage from "../images/240812--Olympics-pakistan-Arshad-Nadeem-with-medal-se-253p-33371f.jpg";
import Footer1 from "../componenets/footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export default function ArshadNadeemWorldRecord() {
  return (
    <div>
      <Header1 />
      <div id="page2">
        

        <h2>Arshad Nadeem's Historic World Record and Gold Medal</h2>
        <Image
          id="arshadNadeemImage"
          src={arshadNadeemGoldImage}
          alt="Arshad Nadeem with his gold medal"
        />
        <div className="p-4">
          <h2 className={montserrat.className}>
            Arshad Nadeem: Pakistan's Golden Arm Breaks World Record
          </h2>

          <p className="text-lg">
            Arshad Nadeem has made history by winning a gold medal for Pakistan
            and setting a new javelin throw world record. This remarkable
            achievement ends a nearly three-decade-long wait for Pakistan's
            return to the top of the podium.
          </p>

          <h3
            className={`text-3xl font-extrabold mt-6 mb-2 ${montserrat.className}`}
          >
            Record-Breaking Performance
          </h3>
          <p className="text-lg">
            Nadeem's performance shattered records and expectations, bringing
            glory to Pakistan.
          </p>

          <ol className="list-decimal pl-6 mt-2">
            <li className="page2li">
              <strong>World Record Throw:</strong>{" "}
              <p className="text-lg">
                Nadeem threw the javelin a staggering 92.98 meters, breaking the
                previous world record.
              </p>
            </li>
            <li className="page2li">
              <strong>Gold Medal Victory:</strong>
              <p className="text-lg">
                This throw secured him the gold medal, marking Pakistan's first
                in track and field in decades.
              </p>
            </li>
            <li className="page2li">
              <strong>Historic Achievement:</strong>{" "}
              <p className="text-lg">
                Nadeem became the first Pakistani to hold a world record in
                athletics.
              </p>
            </li>
          </ol>

          <h3
            className={`text-3xl font-extrabold mt-6 mb-2 ${montserrat.className}`}
          >
            Breaking the Drought
          </h3>
          <p className="text-lg">
            Nadeem's victory is particularly significant given Pakistan's long
            wait for athletic success at this level.
          </p>

          <ol className="list-decimal pl-6 mt-2">
            <li className="page2li">
              <strong>30-Year Wait:</strong>
              <p className="text-lg">
                This gold medal comes after a gap of approximately 30 years
                since Pakistan's last major international athletics victory.
              </p>
            </li>
            <li className="page2li">
              <strong>Resurgence of Pakistani Athletics:</strong>
              <p className="text-lg">
                The win signals a potential revival of Pakistan's prowess in
                track and field events.
              </p>
            </li>
            <li className="page2li">
              <strong>Global Recognition:</strong>{" "}
              <p className="text-lg">
                Nadeem's achievement has put Pakistan back on the global
                athletics map.
              </p>
            </li>
          </ol>

          <h3
            className={`text-3xl font-extrabold mt-6 mb-2 ${montserrat.className}`}
          >
            Journey to Glory
          </h3>
          <p className="text-lg">
            Nadeem's path to this historic win was paved with dedication and
            perseverance.
          </p>

          <ol className="list-decimal pl-6 mt-2">
            <li className="page2li">
              <strong>Consistent Improvement:</strong>
              <p className="text-lg">
                From his fifth-place finish at the Tokyo Olympics to this world
                record, Nadeem showed remarkable progress.
              </p>
            </li>
            <li className="page2li">
              <strong>Overcoming Challenges:</strong>
              <p className="text-lg">
                He battled injuries and limited resources to reach this pinnacle
                of success.
              </p>
            </li>
            <li className="page2li">
              <strong>National Support:</strong>
              <p className="text-lg">
                Increased attention and support following his Olympic
                performance contributed to his development.
              </p>
            </li>
          </ol>

          <h3
            className={`text-3xl font-extrabold mt-6 mb-2 ${montserrat.className}`}
          >
            Impact on Pakistani Sports
          </h3>
          <p className="text-lg">
            Nadeem's world record and gold medal are set to have far-reaching
            effects on sports in Pakistan.
          </p>

          <ol className="list-decimal pl-6 mt-2">
            <li className="page2li">
              <strong>Inspiration for Youth:</strong>
              <p className="text-lg">
                This achievement is likely to inspire a new generation of
                athletes in Pakistan.
              </p>
            </li>
            <li className="page2li">
              <strong>Increased Investment:</strong>
              <p className="text-lg">
                The success may lead to more funding and focus on athletics in
                the country.
              </p>
            </li>
            <li className="page2li">
              <strong>National Pride:</strong>
              <p className="text-lg">
                The victory has become a source of immense pride and unity for
                the Pakistani people.
              </p>
            </li>
          </ol>

          <h3
            className={`text-3xl font-extrabold mt-6 mb-2 ${montserrat.className}`}
          >
            Looking to the Future
          </h3>
          <p className="text-lg">
            Nadeem's historic performance opens new possibilities for him and
            Pakistani athletics.
          </p>

          <ol className="list-decimal pl-6 mt-2">
            <li className="page2li">
              <strong>Olympic Aspirations:</strong>
              <p className="text-lg">
                With this performance, expectations will be high for the next
                Olympic Games.
              </p>
            </li>
            <li className="page2li">
              <strong>Continued Excellence:</strong>
              <p className="text-lg">
                The challenge now is to maintain this level of performance in
                future competitions.
              </p>
            </li>
            <li className="page2li">
              <strong>Legacy Building:</strong>
              <p className="text-lg">
                Nadeem has the opportunity to inspire and mentor the next
                generation of Pakistani athletes.
              </p>
            </li>
          </ol>

          <h3
            className={`text-3xl font-extrabold mt-6 mb-2 ${montserrat.className}`}
          >
            Conclusion
          </h3>
          <p className="text-lg">
            Arshad Nadeem's world record-breaking throw and gold medal victory
            represent a watershed moment for Pakistani athletics. This
            achievement not only ends a three-decade-long wait for glory but
            also rewrites the record books in spectacular fashion. Nadeem's
            journey from a promising talent to a world record holder is a
            testament to his incredible skill, unwavering determination, and the
            potential within Pakistani sports. As the nation celebrates this
            historic victory, the hope is that it will usher in a new era of
            athletic excellence and inspire future generations to reach for
            gold.
          </p>
        </div>
      </div>
      <Footer1 />
    </div>
  );
}
