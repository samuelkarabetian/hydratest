setFunction({
  name: 'gradient2',
  type: 'src',
  inputs: [
    {
      type: 'float',
      name: 'speed',
      default: 0,
    }
  ],
  glsl:
`   return vec4(sin(time*speed), _st, 1.0);`
})
