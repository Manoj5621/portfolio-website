import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { skills } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import DemoComputer from '../components/DemoComputer.jsx';

const Info = () => {
  useGSAP(() => {
    gsap.fromTo('.progress-fill', { width: 0 }, { width: (i, el) => `${el.dataset.level}%`, duration: 2, stagger: 0.1, ease: 'power2.out' });
  });

  return (
    <section className="c-space my-20">
      <p className="head-text">My Skills</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 sm:p-10 py-10 px-5">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-black-300 rounded-lg">
              <img src={skill.logo} alt={skill.name} className="w-10 h-10" />
              <div className="flex-1">
                <p className="text-white text-lg">{skill.name}</p>
                <div className="w-full bg-gray-700 rounded-full h-3 mt-2">
                  <div className="progress-fill bg-blue-500 h-3 rounded-full" data-level={skill.level}></div>
                </div>
                <p className="text-white text-sm mt-1">{skill.level}%</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-[500px] w-full">
            <Canvas>
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} />
              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                    <DemoComputer />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
            </Canvas>
          </div>

          <div className="text-center max-w-2xl">
            <h3 className="text-4xl font-bold text-white mb-2">Skills & Practical Expertise</h3>
            <p className="text-sm text-gray-400 mb-6 uppercase tracking-wider">Building Real-World Solutions</p>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              As a passionate Computer Science graduate, I excel in creating end-to-end applications that solve complex problems. My expertise spans full-stack development with a focus on AI integration, delivering high-performance solutions that bridge cutting-edge technology with practical business needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-black-300 bg-opacity-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">Backend & AI</h4>
                <ul className="text-gray-300 text-base space-y-1">
                  <li>• Python & FastAPI for robust APIs</li>
                  <li>• Machine Learning & Computer Vision</li>
                  <li>• AI model deployment & optimization</li>
                </ul>
              </div>
              <div className="bg-black-300 bg-opacity-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">Frontend & Tools</h4>
                <ul className="text-gray-300 text-base space-y-1">
                  <li>• React & modern UI development</li>
                  <li>• Three.js for 3D experiences</li>
                  <li>• API testing with Postman</li>
                  <li>• Version control & deployment</li>
                </ul>
              </div>
            </div>
            <div className="w-full bg-black-300 bg-opacity-50 p-4 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-white mb-2 text-center">Databases</h4>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="text-gray-300 text-base">• MongoDB for NoSQL flexible storage</span>
                <span className="text-gray-300 text-base">• MySQL for relational data management</span>
              </div>
            </div>
            <p className="text-lg text-gray-300 italic">
              "Transforming ideas into scalable, AI-enhanced applications that make a real impact."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
