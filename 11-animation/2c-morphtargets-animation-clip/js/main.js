async function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 5, 5, 10 );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const models = await loadModels();
  app.scene.add( models.morphCube );

  setupAnimation( models.morphCube );

  app.start();

}

initScene();
