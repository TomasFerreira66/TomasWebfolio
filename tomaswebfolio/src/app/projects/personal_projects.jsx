"use client";
import ProjectCard from "./projectCard.jsx";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

export default function Projects() {
  const sunRef = useRef();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const projects = [
    {
      id: 'portfolio',
      title: "Portfolio",
      description: "My first project done by myself... well, you're here after all. My portfolio! This portfolio was made using some beautiful components by Aceternity UI.",
      link: "../#",
      planetType: "purple",
      orbitRadius: 180,
      orbitSpeed: 0.02
    },
    {
      id: 'dpp',
      title: "Digital Product Passport",
      description: "Silsa's Digital Product Passport is a project I worked on during my internship at Silsa. It is a digital passport for products that allows users to track the lifecycle of a product, from production to disposal. The project was built using NextJS.",
      link: "https://dpp.silsa.pt",
      planetType: "red",
      orbitRadius: 220,
      orbitSpeed: 0.015
    }
  ];

  // Handle responsive sizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!sunRef.current) return;

    // Scene setup for the sun
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });

    // Responsive sun size
    const sunSize = isMobile ? 150 : 200;
    renderer.setSize(sunSize, sunSize);
    renderer.setClearColor(0x000000, 0);
    sunRef.current.appendChild(renderer.domElement);

    // Create sun geometry
    const geometry = new THREE.SphereGeometry(1.5, 32, 32);

    // Create sun material with fiery effect
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        
        void main() {
          vPosition = position;
          vNormal = normal;
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        
        void main() {
          float noise = sin(vPosition.x * 8.0 + time * 2.0) * sin(vPosition.y * 8.0 + time * 2.0) * 0.1;
          float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 1.5);
          
          vec3 color1 = vec3(1.0, 0.8, 0.0); // Golden yellow
          vec3 color2 = vec3(1.0, 0.4, 0.0); // Orange
          vec3 color3 = vec3(1.0, 0.2, 0.0); // Red-orange
          
          vec3 color = mix(color1, color2, vUv.y + noise);
          color = mix(color, color3, fresnel * 0.8);
          
          gl_FragColor = vec4(color, 1.0);
        }
      `
    });

    const sun = new THREE.Mesh(geometry, material);
    scene.add(sun);

    // Add sun glow
    const glowGeometry = new THREE.SphereGeometry(2.0, 32, 32);
    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.8 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          gl_FragColor = vec4(1.0, 0.6, 0.0, intensity * 0.4);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
    });

    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    // Add bright point light for the sun
    const light = new THREE.PointLight(0xffaa00, 2, 100);
    light.position.set(0, 0, 0);
    scene.add(light);

    camera.position.z = 4;

    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;
      material.uniforms.time.value = time;
      glowMaterial.uniforms.time.value = time;

      // Rotate sun
      sun.rotation.y += 0.008;
      sun.rotation.x += 0.003;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (sunRef.current && renderer.domElement) {
        sunRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
    };
  }, [isMobile]);

  const handlePlanetClick = (project) => {
    setSelectedProject(project);
  };

  const handleVisitPlanet = () => {
    if (selectedProject && selectedProject.link) {
      window.open(selectedProject.link, '_blank');
    }
  };

  return (
    <div>

      <div className="absolute top-1/2 w-full">
        {/* Fixed Description Box above instruction text */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed bottom-16 w-full flex justify-center z-50 pointer-events-auto"
            >
              <div className="bg-black/90 backdrop-blur-md border border-white/30 rounded-xl p-4 md:p-6 shadow-2xl min-w-[280px] max-w-[400px] text-center">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <motion.button
                      onClick={handleVisitPlanet}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg text-sm"
                    >
                      🚀 Visit Planet
                    </motion.button>
                    <motion.button
                      onClick={() => setSelectedProject(null)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-3 rounded-lg transition-all duration-300 text-sm"
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>


       {/* Solar system - centered in viewport */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[600px] overflow-hidden">

          {/* Orbit Rings */}
          {projects.map((project, index) => (
            <div
              key={`orbit-${project.id}`}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full pointer-events-none"
              style={{
                width: `${project.orbitRadius * 2 * (isMobile ? 0.6 : 1)}px`,
                height: `${project.orbitRadius * 2 * (isMobile ? 0.6 : 1)}px`,
              }}
            />
          ))}

          {/* Central Sun */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div ref={sunRef} className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]" />
          </div>

          {/* Orbiting planets with animation */}
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="absolute top-1/2 left-1/2"
              style={{
                transformOrigin: "0 0",
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20 + index * 5, // Different speeds for each planet
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div
                className="relative"
                style={{
                  transform: `translate(-50%, -50%) translateX(${project.orbitRadius * (isMobile ? 0.6 : 1)}px)`,
                }}
              >
                <ProjectCard
                  {...project}
                  onPlanetClick={() => handlePlanetClick(project)}
                  isSelected={selectedProject?.id === project.id}
                  isMobile={isMobile}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instruction text - stuck to bottom */}
        <div className="fixed bottom-0 w-full z-40">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 text-sm md:text-base py-2 bg-transparent"
          >
            Click on a planet to explore the project details
          </motion.div>
        </div>
      </div>
    </div>
  );
}