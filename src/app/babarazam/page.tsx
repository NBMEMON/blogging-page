import Header1 from "../componenets/header";
import Image from "next/image";
import babarAzamImage from "../images/babar.jpeg";
import Footer1 from "../componenets/footer";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ weight: ['400', '700'], subsets: ['latin'] });

export default function BabarAzamCareer() {
  return (
    <div>
      <Header1 />
      <div id="page2">
        
        
        <h2>Babar Azam: Navigating Challenges and Celebrating Achievements</h2>
        <Image
          id="babarAzamImage"
          src={babarAzamImage}
          alt="Babar Azam batting"
        />
        <div className="p-4">
          <h2 className={montserrat.className}>Babar Azam: A Cricket Star's Journey Through Peaks and Valleys</h2>

          <p className="text-lg">
            Babar Azam, often hailed as one of Pakistan's finest batsmen, has recently faced challenges in maintaining his top position in ICC rankings. This analysis looks at his recent form, potential recovery strategies, and celebrates his numerous achievements in international cricket.
          </p>

          <h3 className={`text-3xl font-extrabold mt-6 mb-2 ${montserrat.className}`}>Recent Downfall in ICC Rankings</h3>
          <p className="text-lg"> 
            Babar's recent performances have led to a slip in his ICC rankings across formats.
          </p>

          <ol className="list-decimal pl-6 mt-2">
            <li className="page2li">
              <strong>Test Rankings:</strong> <p className="text-lg">Dropped out of the top 10 in Test batting rankings for the first time in three years.</p>
            </li>
            <li className="page2li">
              <strong>ODI Rankings:</strong><p className="text-lg">Lost the top spot in ODI rankings after holding it for two years.</p>
            </li>
            <li className="page2li">
              <strong>T20I Rankings:</strong> <p className="text-lg">Slipped from his peak position in T20I rankings.</p>
            </li>
          </ol>

          <h3 className={`text-3xl font-extrabold mt-6 mb-2 ${montserrat.className}`}>Strategies for Recovery</h3>
          <p className="text-lg">
            To regain his form and rankings, Babar Azam could consider the following strategies:
          </p>

          <ol className="list-decimal pl-6 mt-2">
            <li className="page2li">
              <strong>Technical Adjustments:</strong><p className="text-lg">Work with coaches to identify and address any technical issues in his batting.</p>
            </li>
            <li className="page2li">
              <strong>Mental Conditioning:</strong><p className="text-lg">Focus on mental strength and resilience to overcome the pressure of expectations.</p>
            </li>
            <li className="page2li">
              <strong>Targeted Practice:</strong> <p className="text-lg">Engage in focused practice sessions to address specific weaknesses in his game.</p>
            </li>
            <li className="page2li">
              <strong>Rest and Recovery:</strong><p className="text-lg">Ensure adequate rest to avoid burnout from the demanding international schedule.</p>
            </li>
            <li className="page2li">
              <strong>Seeking Advice:</strong><p className="text-lg">Consult with former players and mentors for guidance on regaining form.</p>
            </li>
          </ol>

          <h3 className={`text-3xl font-extrabold mt-6 mb-2 ${montserrat.className}`}>Babar Azam's Achievements</h3>
          <p className="text-lg">
            Despite recent challenges, Babar Azam's career is studded with remarkable achievements:
          </p>

          <ol className="list-decimal pl-6 mt-2">
            <li className="page2li">
              <strong>ICC ODI Player of the Year:</strong><p className="text-lg">Won this prestigious award in 2021 and 2022.</p>
            </li>
            <li className="page2li">
              <strong>ICC Men's Cricketer of the Year:</strong><p className="text-lg">Awarded this honor in 2022.</p>
            </li>
            <li className="page2li">
              <strong>Fastest to 3000 T20I Runs:</strong><p className="text-lg">Achieved this milestone in just 81 innings.</p>
            </li>
            <li className="page2li">
              <strong>Consistent Top Rankings:</strong><p className="text-lg">Held the top spot in ODI rankings for 1,186 days consecutively.</p>
            </li>
            <li className="page2li">
              <strong>Multiple Format Success:</strong><p className="text-lg">One of the few batsmen to be ranked in the top five across all formats simultaneously.</p>
            </li>
            <li className="page2li">
              <strong>Record-Breaking Performances:</strong><p className="text-lg">Scored the most runs (2,598) in all T20s in a calendar year (2021).</p>
            </li>
            <li className="page2li">
              <strong>Captain's Achievements:</strong><p className="text-lg">Led Pakistan to the T20 World Cup semi-finals in 2021 and the final in 2022.</p>
            </li>
          </ol>

          <h3 className={`text-3xl font-extrabold mt-6 mb-2 ${montserrat.className}`}>Impact on Pakistani Cricket</h3>
          <p className="text-lg">
            Babar Azam's career has had a significant impact on Pakistani cricket:
          </p>

          <ol className="list-decimal pl-6 mt-2">
            <li className="page2li">
              <strong>Inspiration for Youth:</strong><p className="text-lg">His success has inspired a new generation of cricketers in Pakistan.</p>
            </li>
            <li className="page2li">
              <strong>Raising Pakistan's Profile:</strong><p className="text-lg">His performances have helped elevate Pakistan's standing in international cricket.</p>
            </li>
            <li className="page2li">
              <strong>Leadership:</strong><p className="text-lg">As captain, he has fostered a positive team culture and improved Pakistan's performances.</p>
            </li>
          </ol>

          <h3 className={`text-3xl font-extrabold mt-6 mb-2 ${montserrat.className}`}>Conclusion</h3>
          <p className="text-lg">
            Babar Azam's recent slip in ICC rankings is a temporary setback in an otherwise stellar career. His numerous achievements and consistent performances over the years have established him as one of the modern greats of cricket. While he faces challenges in regaining his top form, Babar's talent, work ethic, and past successes suggest that a resurgence is likely. As he works towards reclaiming his position at the top of the rankings, the cricketing world watches with interest, knowing that a player of his caliber can never be underestimated. Babar Azam's journey continues to be a source of pride for Pakistan and a testament to the country's cricketing prowess.
          </p>
        </div>
      </div>
      <Footer1/>
    </div>
  );
}