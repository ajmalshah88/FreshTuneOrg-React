import React from 'react'

import PropTypes from 'prop-types'

import StoreBanner from './store-banner'
import './cta.css'

const CTA = (props) => {
  return (
    <div className="cta-cta">
      <div className="cta-container">
        <div className="cta-container1">
          <h2 className="cta-text">
            Join us in unlocking children&apos;s full potential today!
          </h2>
          <span className="cta-text1 Lead1">
            <span className="cta-text2">
              Download the app to manage your projects, keep track of the
              progress and complete tasks without procastinating. Stay on track
              and complete on time!
            </span>
          </span>
          <span className="cta-text3 Subtitle2">
            <span className="cta-text4">Get the App</span>
          </span>
          <StoreBanner></StoreBanner>
        </div>
        <div className="cta-container2">
          <img
            alt={props.image_alt}
            src={props.image_src}
            image_src="/playground_assets/iphonex-300w.png"
            className="cta-image"
          />
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            image_src="/playground_assets/iphonex-300w.png"
            className="cta-image1"
          />
        </div>
      </div>
    </div>
  )
}

CTA.defaultProps = {
  image_src1: '/playground_assets/iphonex-300w.png',
  image_alt1: 'image',
  image_alt: 'image',
  image_src: '/playground_assets/iphonex-300w.png',
}

CTA.propTypes = {
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default CTA
