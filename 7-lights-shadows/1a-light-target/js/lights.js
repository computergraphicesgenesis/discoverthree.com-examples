function createLights() {

  const ambient = new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 0.5 );

  const main = new THREE.SpotLight( 0xfffffc, 15, 0, Math.PI / 8, 0.5, 2 );

  main.power = 5000; // 5000 lumens ~ 300 watt bulb

  main.position.set( -12, 10, -12 );

  return { ambient, main };

}
