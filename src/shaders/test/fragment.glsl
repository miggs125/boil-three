#define PI 3.141592535897932384626433832795
uniform float uResolution;
uniform float time;
uniform sampler2D uTexture;
uniform float distortionAmount;
varying vec2 vUv;
varying float vNoise;

void main()
{
    vec2 newUv = vUv;
    vec3 color = vec3(1.,0.,0.0);



    gl_FragColor  = vec4(color,1.0);
}