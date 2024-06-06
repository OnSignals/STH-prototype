import { shaderMaterial } from '@react-three/drei';
import { Color, Texture } from 'three';

const CustomMaterial = shaderMaterial(
    {
        time: 0,
        opacity: 1,
        displacementScale: 0.0,
        colorTexture: new Texture(),
        depthTexture: new Texture(),
    },
    // vertex shader
    /*glsl*/ `
    uniform float displacementScale;
    uniform sampler2D depthTexture;    
    varying vec2 vUv;

    void main() {
        vUv = uv;
        
        float displacement = texture2D(depthTexture, vUv).x;
        vec3 displacedPosition = vec3(position.x, position.y, position.z + displacement * displacementScale);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);
    }
    `,
    // fragment shader
    /*glsl*/ `
    uniform float opacity;
    uniform float time;
    uniform sampler2D colorTexture;
    varying vec2 vUv;
      
    void main() {
        vec4 textureColor = texture2D(colorTexture, vUv);  
        
        gl_FragColor = vec4(textureColor.rgb, opacity );
    }
    `
);

export { CustomMaterial };
