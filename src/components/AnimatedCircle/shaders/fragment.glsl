#define PI 3.141592535897932384626433832795
uniform float uResolution;
uniform float uTime;
uniform sampler2D uTexture;
uniform float distortionAmount;
varying vec2 vUv;
varying float vNoise;

void main()
{
    vec2 newUv = vUv;
    vec3 color = vec3(sin(uTime),0.,0.0);
    float diameter = 0.35;
    float position = 0.5;
    float borderThickness = 0.007;
    float strength = step(borderThickness,abs(distance(vUv,vec2(position)) - diameter/uTime));


    gl_FragColor  = vec4(vec3(strength),1.0);
}