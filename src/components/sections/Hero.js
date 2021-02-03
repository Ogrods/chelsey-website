import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div>

          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
              <Image
                src={require('./../../assets/images/chester-logo.JPG')}
                alt="Hero"

                height={304} />
          </div>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <span className="text-color-primary">Chester's House of Hair</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://t.co/Odl8FhDKb8?amp=1" target="_blank">
                    Click Here to Book an Appointment
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        <br></br>
        <br></br>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;