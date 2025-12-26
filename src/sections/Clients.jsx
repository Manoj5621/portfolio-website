import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    const items = gsap.utils.toArray('.project-item');

    items.forEach((item, index) => {
      const image = item.querySelector('.project-image');
      const text = item.querySelector('.project-text');
      const connector = item.querySelector('.project-connector');

      // Set initial states
      gsap.set(image, { opacity: 0, x: index % 2 === 0 ? 300 : -300, scale: 0.8 });
      gsap.set(text, { opacity: 0, x: index % 2 === 0 ? -300 : 300, y: 50 });
      gsap.set(connector, { scale: 0 });

      // Animate image
      gsap.to(image, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse',
        },
      });

      // Animate text
      gsap.to(text, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Animate connector
      gsap.to(connector, {
        scale: 1,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    // Animate center line
    gsap.to('.project-container::before', {
      scaleY: 1,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.project-container',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      },
    });

    // Subtle pulse on the line
    gsap.to('.project-container::before', {
      boxShadow: '0 0 30px rgba(255, 255, 255, 1), 0 0 60px rgba(255, 255, 255, 0.6)',
      duration: 2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      delay: 1,
    });
  }, []);

  return (
    <section className="c-space my-20">
      <h3 className="head-text">My Projects</h3>

      <div className="project-container">
        {projects.map((project, index) => (
          <div key={project.id} className="project-item">
            <div className="project-connector"></div>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <h4 className="project-title">{project.title}</h4>
            </div>
            <div className="project-text">
              <p className="project-description">{project.description}</p>
              <p className="project-tech">
                <span className="font-semibold">Tech Stack:</span> {project.tech}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
