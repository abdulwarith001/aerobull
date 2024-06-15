import React, {useState} from 'react'
import Wrapper from '../assets/wrappers/Whitepaper.page.js'
import Modal from '../components/Modal';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollTop';
import whitepaper02 from '../assets/images/whitepaper02.png'
import whitepaper03 from '../assets/images/whitepaper03.png'
import short_goal from '../assets/images/short_goal.png'
import long_goal from '../assets/images/long_goal.png'
import {Link} from 'react-router-dom'
const Whitepaper = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper>
      <ScrollToTop/>
      {/* {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>} */}
      <div className="header">
        <h2>$ARBL</h2>
        <Link to="mailto:aerobull2024@gmail.com">
          <button>Contact us</button>
        </Link>
      </div>

      <div className="frontImg">Whitepaper</div>

      <article className="content">
        <h2>The Aerobull Mission</h2>
        <p>
          Aerobull is the first humanitarian project on the Base network. Our
          project is a community-driven token that is aiming to bridge the gap
          between third-world countries to Defi. We are relentlessly aiming to
          collectively shape the direction and development of the crypto space
          through Aerobull’s humanitarian utility.
        </p>
        <p>
          Our humanitarian project is pioneering a new path in DeFi by using
          blockchain technology to provide financial solutions that truly make a
          difference. We are bringing millions of people from traditional,
          off-chain systems into the world of decentralized finance, giving them
          access to services they never had before.
        </p>
        <p>
          This isn't just about technology; it's about empowering communities,
          fostering inclusion, and creating opportunities for those who need
          them the most. By bridging the gap between old and new financial
          systems, we're showing how DeFi can be a powerful tool for positive
          change, helping to build stronger, more resilient communities around
          the world.
        </p>
      </article>

      <div className="image2">
        <img src={whitepaper02} alt="aerobull" />
      </div>

      <article className="content2">
        <h2>How We Got Started</h2>

        <p>
          Aerobull was born from a previous humanitarian endeavour our Founder
          led in 2021.During the Covid-19 era, he and a group of college
          students started a non-profit charity named Kabataan Project in
          translation “Youth Project”, with which he shared the same vision of
          giving a hand to those that were severely financially impacted by the
          pandemic in the Philippines.
        </p>

        <p>
          During the span of several weeks, and keeping in mind that the team
          was unbacked by any organization, they raised $2,500 from self-funding
          and community fundraising events. All the proceeds of that fundraising
          event directly went to a great cause impacting hundreds of families
          and children that were struggling to provide food on the table.
          Furthermore, they supported the local authorities by hosting several
          Feeding Program events. Not only that, considering the budget
          restraint, their team was able to build a tiny shelter for an elderly
          homeless man.{" "}
        </p>
      </article>

      <div className="fundamentals">
        <img src={whitepaper03} alt="aerobull fundamentals" />

        <article className="content">
          <h2>Our Fundamentals</h2>
          <p>
            We are excited to pioneer the first humanitarian project on the Base
            network, leveraging its innovative blockchain technology to deliver
            impactful solutions on a global scale. By utilizing the Base
            network, we can ensure secure, transparent, and efficient
            transactions that directly benefit those in need.
          </p>
          <p>
            Our mission is to bridge the gap between advanced financial
            technology and humanitarian aid, providing essential services to
            underserved communities worldwide. With Base, we can reach a larger
            audience, scale our operations, and create a sustainable, inclusive
            financial ecosystem that empowers people everywhere.
          </p>
        </article>
      </div>

      <article className="content3">
        <h2>Why your contribution matters</h2>
        <p>
          Through your support, Aerobull can spread its wings and take flight to
          provide humanitarian utilities around the world. Each and every person
          who supports, understands the narrative, and has full conviction on
          our endeavors, is how Aerobull can get off the ground and take flight
          to these communities.
        </p>
      </article>

      <div className="goals">
        <img src={short_goal} alt="aerobull short term goals" />
        <article className="content4">
          <h2>Short Term Goals</h2>
          <ul>
            <li>Organically grow the Aerobull community</li>
            <li>
              Onboard thousands of investors to see our vision and narrative
            </li>
            <li>
              Lay out the plans and foundation of the project’s humanitarian
              utility.
            </li>
            <li>Develop and grow our core team.</li>
            <li>Network with Base projects. </li>
            <li>Deliver. </li>
          </ul>
        </article>
      </div>
      <div className="goals">
        <article className="content4">
          <h2>Long Term Goals</h2>
          <ul>
            <li>
              Visit third-world countries and scout the best place for Aerobull
              to reach. Onboard the off-chain retail to on-chain.
            </li>
            <li>
              Build Aerobull Foundation Centers, a sustainable center providing
              relief to communities.
            </li>
            <li>Scale the project’s outreach by strategic partnerships.</li>
            <li>Provide access to Defi to unexplored communities.</li>
            <li>Network with Base projects. </li>
            <li>Deliver. </li>
          </ul>
        </article>
        <img src={long_goal} alt="aerobull short term goals" />
      </div>
      <Footer />
    </Wrapper>
  );
}

export default Whitepaper