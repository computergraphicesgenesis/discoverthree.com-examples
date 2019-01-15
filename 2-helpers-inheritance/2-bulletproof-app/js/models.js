// A reusable function to setup the models
// assumes that the gltf file contains a single model
// and up to one animation track
const onLoad = ( gltf, position, rotation, scale, scene ) => {

  const model = gltf.scene.children[ 0 ];

  if( position ) model.position.copy( position );
  if( rotation ) model.rotation.copy( rotation );
  if( scale ) model.scale.copy( scale );

  if( gltf.animations[ 0 ] ) {

    const animation = gltf.animations[ 0 ];
    const mixer = new THREE.AnimationMixer( model );

    // we'll check every object in the scene for
    // this function and call it once per frame
    model.userData.onUpdate = ( delta ) => {

      mixer.update( delta );

    };

    const action = mixer.clipAction( animation );
    action.play();

  }

  scene.add( model );

};

function loadModels( scene, loader ) {

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  const rotation = new THREE.Euler( 0, 0, 0  );

  // scale the birds down to be actual bird sized (roughly)
  const scale = new THREE.Vector3( 0.05, 0.05, 0.05 );

  // load the first model. Each model is loaded asynchronously,
  // so don't make any assumption about which one will finish loading first
  const parrotPosition = new THREE.Vector3( 0, 0, 2.5 );
  loader.load( 'models/Parrot.glb', gltf => onLoad( gltf, parrotPosition, rotation, scale, scene ), null, onError );

  const flamingoPosition = new THREE.Vector3( 7.5, 0, -10 );
  loader.load( 'models/Flamingo.glb', gltf => onLoad( gltf, flamingoPosition, rotation, scale, scene ), null, onError );

  const storkPosition = new THREE.Vector3( 0, -2.5, -10 );
  loader.load( 'models/Stork.glb', gltf => onLoad( gltf, storkPosition, rotation, scale, scene ), null, onError );

}