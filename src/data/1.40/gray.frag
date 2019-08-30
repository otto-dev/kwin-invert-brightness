#version 140
uniform sampler2D sampler;
uniform vec4 modulation;
uniform float saturation;

in vec2 texcoord0;

out vec4 fragColor;

void main()
{
    vec4 c = texture(sampler, texcoord0);
    float shift = c.a - min(c.r, min(c.g, c.b)) - max(c.r, max(c.g, c.b));
    c = vec4(shift + c.r, shift + c.g, shift + c.b, c.a);
    fragColor = c;
}
