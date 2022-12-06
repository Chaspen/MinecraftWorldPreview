


var loader = new GLTFLoader();				
loader.load( '/media/mdl/obj-test.glb', function ( gltf ) {              
var object = gltf.scene;				
gltf.scene.scale.set( 8, 8, 8 );			   
gltf.scene.position.x = 0;				    //Position (x = right+ left-) 
gltf.scene.position.y = -150;				    //Position (y = up+, down-)
gltf.scene.position.z = 0;


scene.traverse( ( object ) => {

    if ( object.isMesh === true && object.material.map !== null  ) {
    
        
        object.material.alphaTest = 1;
        object.material.map.magFilter = THREE.NearestFilter;
        object.material.map.minFilter = THREE.NearestFilter;
    
    }

scene.add( gltf.scene );
});
