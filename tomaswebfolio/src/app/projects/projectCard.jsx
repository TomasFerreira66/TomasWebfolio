"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const ProjectCard = ({ title, planetType = 'blue', onPlanetClick, isSelected, isMobile = false }) => {
  const planetRef = useRef();
  const sceneRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  // Planet configurations
  const planetConfigs = {
    blue: {
      colors: [0x3b82f6, 0x8b5cf6, 0x06b6d4], // Blue, Purple, Cyan
      glow: [0.2, 0.6, 1.0],
      speed: { x: 0.002, y: 0.005 },
      noise: 5.0
    },
    red: {
      colors: [0xef4444, 0xf97316, 0xfbbf24], // Red, Orange, Yellow
      glow: [1.0, 0.3, 0.2],
      speed: { x: 0.003, y: 0.007 },
      noise: 8.0
    },
    green: {
      colors: [0x10b981, 0x059669, 0x047857], // Green shades
      glow: [0.2, 1.0, 0.4],
      speed: { x: 0.001, y: 0.004 },
      noise: 3.0
    },
    purple: {
      colors: [0x8b5cf6, 0xa855f7, 0xc084fc], // Purple shades
      glow: [0.8, 0.2, 1.0],
      speed: { x: 0.004, y: 0.006 },
      noise: 6.0
    },
    gold: {
      colors: [0xfbbf24, 0xf59e0b, 0xd97706], // Gold shades
      glow: [1.0, 0.8, 0.2],
      speed: { x: 0.002, y: 0.003 },
      noise: 4.0
    }
  };

  const config = planetConfigs[planetType] || planetConfigs.blue;

  useEffect(() => {
    if (!planetRef.current) return;

    // Store the current ref value to avoid stale closure issues
    const currentPlanetRef = planetRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    
    // Responsive planet size
    const planetSize = isMobile ? 80 : 100;
    renderer.setSize(planetSize, planetSize);
    renderer.setClearColor(0x000000, 0);
    currentPlanetRef.appendChild(renderer.domElement);

    // Create planet geometry - responsive size
    const sphereSize = isMobile ? 0.6 : 0.8;
    const geometry = new THREE.SphereGeometry(sphereSize, 32, 32);
    
    // Create planet material with gradient-like effect
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(config.colors[0]) },
        color2: { value: new THREE.Color(config.colors[1]) },
        color3: { value: new THREE.Color(config.colors[2]) },
        noiseScale: { value: config.noise }
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
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        uniform float noiseScale;
        
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        
        void main() {
          float noise = sin(vPosition.x * noiseScale + time) * sin(vPosition.y * noiseScale + time) * 0.1;
          float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          
          vec3 color = mix(color1, color2, vUv.y + noise);
          color = mix(color, color3, fresnel);
          
          gl_FragColor = vec4(color, 1.0);
        }
      `
    });

    const planet = new THREE.Mesh(geometry, material);
    scene.add(planet);

    // Add atmospheric glow - responsive
    const glowSize = isMobile ? 0.8 : 1.0;
    const glowGeometry = new THREE.SphereGeometry(glowSize, 32, 32);
    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        glowColor: { value: new THREE.Vector3(config.glow[0], config.glow[1], config.glow[2]) }
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
        uniform vec3 glowColor;
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          gl_FragColor = vec4(glowColor, intensity * 0.3);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
    });

    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    // Add point light
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(2, 2, 2);
    scene.add(light);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    camera.position.z = 3;

    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      material.uniforms.time.value = time;
      glowMaterial.uniforms.time.value = time;
      
      // Rotate planet with unique speeds
      planet.rotation.y += config.speed.y;
      planet.rotation.x += config.speed.x;
      
      // Hover and selection effects
      if (isHovered || isSelected) {
        planet.rotation.y += 0.01;
        planet.scale.setScalar(isSelected ? 1.2 : 1.1);
        glow.scale.setScalar(isSelected ? 1.3 : 1.2);
      } else {
        planet.scale.setScalar(1);
        glow.scale.setScalar(1);
      }
      
      renderer.render(scene, camera);
    };

    animate();
    sceneRef.current = { scene, camera, renderer, planet, glow, material, glowMaterial };

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (currentPlanetRef && renderer.domElement) {
        currentPlanetRef.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
    };
  }, [isHovered, planetType, isSelected, isMobile, config.colors, config.glow, config.noise, config.speed.x, config.speed.y]);

  const handleClick = () => {
    if (onPlanetClick) {
      onPlanetClick();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      whileTap={{ scale: 0.95 }} // Mobile tap feedback
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      className={`group relative w-20 h-20 md:w-28 md:h-28 cursor-pointer touch-manipulation ${isSelected ? 'ring-2 ring-white/50 rounded-full' : ''}`}
    >
      {/* Planet container */}
      <div 
        ref={planetRef} 
        className="w-full h-full flex items-center justify-center"
      />
      
       {/* Floating title that curves around the planet like a ring */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          className="absolute top-0 left-0 md:w-[112px] md:h-[112px] md:viewBox-0-0-112-112"
        >
          <defs>
            <path
              id="circle"
              d="M 40, 40 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
              className="md:d-M-56-56-m-45-0-a-45-45-0-1-1-90-0-a-45-45-0-1-1-90-0"
            />
          </defs>
          <text className="fill-white text-sm font-medium">
            <textPath
              href="#circle"
              startOffset="0%"
              className="drop-shadow-lg"
              style={{
                fontSize: isMobile ? '8px' : '10px',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: '500'
              }}
            >
              {title} 
            </textPath>
          </text>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;