import './a.ts'

it('should retain PURE comments with scope hoisting', () => {
  let factory = __turbopack_modules__.get(
    [...__turbopack_modules__.keys()].find((m) =>
      m.endsWith(
        'scope-hoisting/pure-comments/input/index.js [test] (ecmascript)'
      )
    )
  )

  const source = factory.toString()
  expect(source).toContain('var Unused =' + ' /*#__PURE__*/')
})
