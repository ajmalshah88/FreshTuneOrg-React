import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderContainer from '../components/header-container'
import PrimaryButton from '../components/primary-button'
import FeatureCard from '../components/feature-card'
import TestimonialsCard from '../components/testimonials-card'
import StatsCard from '../components/stats-card'
import LinkIconButton from '../components/link-icon-button'
import CTA from '../components/cta'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>FreshTuneOrg</title>
        <meta property="og:title" content="FreshTuneOrg" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2bbe42e9-4b94-4e37-9e9e-2278c7060a16/c9065c82-ce7d-4740-bd33-5f5a0bb677fc?org_if_sml=1"
        />
      </Helmet>
      <HeaderContainer text3="Features"></HeaderContainer>
      <div className="home-main">
        <div
          src="https://images.unsplash.com/photo-1568205612837-017257d2310a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwZW5jaWxzfGVufDB8fHx8MTY3Njk0MzgwOA&amp;ixlib=rb-4.0.3&amp;h=1500"
          className="home-container01"
        ></div>
        <div className="home-blur-background"></div>
        <div className="home-hero">
          <div className="home-container02">
            <h1 className="home-text Headline1">
              <span>
                Making a positive
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                impact on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>children&apos;s lives.</span>
              <br></br>
              <span>One goal at a time.</span>
            </h1>
            <PrimaryButton button="Get Started"></PrimaryButton>
          </div>
          <img
            alt="image"
            src="/playground_assets/iphonex-1200w.png"
            className="home-image"
          />
        </div>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="home-turquoise-cirble"
        />
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="home-purple-circle"
        />
        <img
          alt="image"
          src="/playground_assets/left.svg"
          className="home-left"
        />
        <img
          alt="image"
          src="/playground_assets/right.svg"
          className="home-right"
        />
      </div>
      <div id="partners" className="home-clients">
        <div className="home-divider"></div>
        <img
          alt="image"
          src="/playground_assets/full%20color%20stacked%20long%20logo_edited-200h.webp"
          className="home-image1"
        />
        <img
          alt="image"
          src="/playground_assets/gsksmo-green-200h.png"
          className="home-image2"
        />
        <img
          alt="image"
          src="/playground_assets/bvh1-200h.png"
          className="home-image3"
        />
        <img
          alt="image"
          src="/playground_assets/datacruise-logo-v1.svg"
          className="home-image4"
        />
        <img
          alt="image"
          src="/playground_assets/mainnavlogo-200h.png"
          className="home-image5"
        />
        <div className="home-divider1"></div>
      </div>
      <div id="features" className="home-features">
        <h2 className="Headline2 home-text07">Tailor-made features</h2>
        <span className="home-text08">
          <span>
            Fresh Tune app is full of tailor made features made to support
          </span>
          <br></br>
          <span> kids, parents and teachers bridge the gaps</span>
          <br></br>
        </span>
        <div className="home-features1">
          <FeatureCard
            text="Personalized rewards and recognition for achieving goals and milestones"
            card_title="Personalized rewards"
          ></FeatureCard>
          <FeatureCard
            text="Gamification of positive behavior to encourage and incentivize students"
            image_src="/playground_assets/02.svg"
            card_title="Gamification"
          ></FeatureCard>
          <FeatureCard
            text="Real-time tracking of student progress and behavior patterns"
            image_src="/playground_assets/03.svg"
            card_title="Real-time tracking"
          ></FeatureCard>
          <FeatureCard
            text="Analytics and reporting capabilities to measure impact and effectiveness"
            image_src="/playground_assets/04.svg"
            card_title="Analytics"
          ></FeatureCard>
          <FeatureCard
            text="Customizable by mentors and coaches settings to tailor the app to individual student needs"
            image_src="/playground_assets/05.svg"
            card_title="Customizable"
          ></FeatureCard>
          <FeatureCard
            text="Integration with existing school systems and platforms for seamless use"
            image_src="/playground_assets/06.svg"
            card_title="Integration"
          ></FeatureCard>
        </div>
      </div>
      <div className="home-testimonials">
        <div className="home-container03">
          <div className="home-container04">
            <img
              alt="image"
              src="/playground_assets/quote-mark.svg"
              className="home-image6"
            />
            <h1 className="home-text13 Headline2">
              Real Stories from Real Humans
            </h1>
            <span>Get inspired by these stories.</span>
            <div className="home-container05">
              <TestimonialsCard
                text="I am grateful for the positive influence that your organization is having on our community. Your focus on education and empowerment is helping to build a brighter future for our youth."
                text1="Dr Dachman"
                text2="CEO"
                image_src="/playground_assets/full%20color%20stacked%20long%20logo_edited-200h.webp"
              ></TestimonialsCard>
            </div>
          </div>
          <div className="home-container06">
            <div className="home-container07">
              <TestimonialsCard
                src="/playground_assets/logo-1.svg"
                text="I am impressed by the creativity and innovation that your organization brings to the table. Your use of technology to incentivize positive behavior is a game-changer for our community"
                text1="Jane Cooper"
                text2="Principal"
                image_src="/playground_assets/bvh1-200h.png"
              ></TestimonialsCard>
            </div>
            <div className="home-container08">
              <TestimonialsCard
                text="Your organization's commitment to unlocking the full potential of every child is admirable. Keep up the great work!"
                text1="Kristin Watson"
                text2="Co-Founder"
                image_src="/playground_assets/gsksmo-green-200h.png"
              ></TestimonialsCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-achievements">
        <div className="home-container09">
          <h2 className="home-text15">
            <span>
              Made by a kid
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Run by a community</span>
          </h2>
          <span className="home-text19">
            And with our super powers we have  achieved
          </span>
        </div>
        <div className="home-container10">
          <div className="home-container11">
            <StatsCard
              number="1000+"
              image_src="/playground_assets/01.svg"
              description="Goals achieved"
            ></StatsCard>
            <StatsCard
              number="250"
              image_src="/playground_assets/04.svg"
              description="Users"
            ></StatsCard>
          </div>
          <div className="home-container12">
            <StatsCard number="500+" description="Grown ups"></StatsCard>
            <StatsCard
              number="3"
              image_src="/playground_assets/07.svg"
              description="Schools"
            ></StatsCard>
          </div>
        </div>
      </div>
      <div id="about" className="home-feature1">
        <div className="home-container13">
          <img
            alt="image"
            src="/playground_assets/iphonex-1200w.png"
            image_src="/playground_assets/iphonex-1200w.png"
            className="home-image7"
          />
        </div>
        <div className="home-container14">
          <h3 className="home-text20">Helping students achieve goals</h3>
          <span className="home-text21">
            Enabling children to reach their full potential requires a holistic
            approach that includes education, engagement, and support. By
            providing children with the tools and resources they need to
            succeed, we can empower them to achieve their dreams and make a
            positive impact in the world.
          </span>
          <LinkIconButton text="Get Started"></LinkIconButton>
        </div>
      </div>
      <div className="home-feature2">
        <div className="home-container15">
          <h2 className="home-heading">
            Inspiring a love of learning and achievement in every child.
          </h2>
          <span className="home-text22">
            Unlocking the full potential of every child is possible through
            education and active involvement. An app that rewards positive
            behavior can help unlock the full potential of every child through
            education and active involvement. It incentivizes positive behavior
            and creates a positive environment that fosters growth and
            self-improvement.
          </span>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1535157412991-2ef801c1748b?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
          image_src="/playground_assets/iphonex-1200w.png"
          className="home-image8"
        />
      </div>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  )
}

export default Home
