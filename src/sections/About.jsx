import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopiedEmail, setHasCopiedEmail] = useState(false);
  const [hasCopiedPhone, setHasCopiedPhone] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('manojgopal5621@gmail.com');
    setHasCopiedEmail(true);
    setTimeout(() => setHasCopiedEmail(false), 2000);
  };

  const handlePhoneCopy = () => {
    navigator.clipboard.writeText('8147290508');
    setHasCopiedPhone(true);
    setTimeout(() => setHasCopiedPhone(false), 2000);
  };

  const handleEmailLink = () => {
    window.open('mailto:manojgopal5621@gmail.com');
  };

  const handlePhoneLink = () => {
    window.open('tel:+918147290508');
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.jpg" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Manoj G</p>
              <p className="grid-subtext">
                Full-stack developer with hands-on experience building scalable, AI-driven web applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in building scalable, high-performance web and AI-driven applications with a strong focus on clean architecture.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Fully flexible with time zone communication and location-independent work.</p>
              <p className="grid-subtext">Currently based in Bangalore, Karnataka, and available for remote opportunities globally..</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container">
                <div className="flex items-center gap-2">
                  <p onClick={handleEmailLink} className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white cursor-pointer">manojgopal5621@gmail.com</p>
                  <img onClick={handleEmailCopy} src={hasCopiedEmail ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy email" className="cursor-pointer" />
                </div>
                <div className="flex items-center gap-2">
                  <p onClick={handlePhoneLink} className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white cursor-pointer">+91 8147290508 (India)</p>
                  <img onClick={handlePhoneCopy} src={hasCopiedPhone ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy phone" className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
