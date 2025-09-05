import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Scene3DProps {
  className?: string;
}

export const Scene3D = ({ className }: Scene3DProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const frameId = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x8B5CF6, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xEC4899, 1, 100);
    pointLight.position.set(-5, 5, 5);
    scene.add(pointLight);

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.7, 32, 32),
      new THREE.ConeGeometry(0.7, 1.5, 32),
      new THREE.TorusGeometry(0.7, 0.3, 16, 100),
    ];

    const materials = [
      new THREE.MeshPhongMaterial({ 
        color: 0x8B5CF6, 
        transparent: true, 
        opacity: 0.8,
        shininess: 100 
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x3B82F6, 
        transparent: true, 
        opacity: 0.8,
        shininess: 100 
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0xEC4899, 
        transparent: true, 
        opacity: 0.8,
        shininess: 100 
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x10B981, 
        transparent: true, 
        opacity: 0.8,
        shininess: 100 
      }),
    ];

    const meshes: THREE.Mesh[] = [];

    // Create multiple floating objects
    for (let i = 0; i < 15; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);

      // Random positioning
      mesh.position.x = (Math.random() - 0.5) * 20;
      mesh.position.y = (Math.random() - 0.5) * 20;
      mesh.position.z = (Math.random() - 0.5) * 20;

      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      // Random scale
      const scale = Math.random() * 0.5 + 0.5;
      mesh.scale.setScalar(scale);

      meshes.push(mesh);
      scene.add(mesh);
    }

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);

      // Rotate all meshes
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        
        // Float animation
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
        
        // Mouse interaction
        mesh.rotation.x += mouse.y * 0.001;
        mesh.rotation.y += mouse.x * 0.001;
      });

      // Camera movement
      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
      camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js resources
      geometries.forEach(geo => geo.dispose());
      materials.forEach(mat => mat.dispose());
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={className} />;
};