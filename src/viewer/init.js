import * as THREE from '../lib/three.module.js';
import { OrbitControls } from './OrbitControls.js';
import { GLTFLoader } from '../loader/GLTFLoader.js';
import { FirstPersonControls } from './FirstPersonControls.js';






var scene, camera, renderer, controls;

var canvas = document.getElementById("canvas");

const clock = new THREE.Clock();

 // Load 3D Scene
 var scene = new THREE.Scene(); 

 // Load Camera Perspective
var camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set( -400, 250, 20 );


	
 // Load a Renderer
var renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true, alpha: true });
renderer.setClearColor( 0xFFFFFF, 0.5 );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.gammaFactor = 2.2;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.powerPreference = "high-performance";
document.body.appendChild(renderer.domElement);
	
// Load the Orbitcontroller
// var controls = new OrbitControls( camera, renderer.domElement ); 
controls = new FirstPersonControls( camera, renderer.domElement );
controls.movementSpeed = 200;
controls.lookSpeed = 0.05;
controls.enabled = true;

function GetCoords() {
	document.getElementById("coordsX").innerHTML = camera.position.x;
	document.getElementById("coordsY").innerHTML = camera.position.y;
	document.getElementById("coordsZ").innerHTML = camera.position.z;
}

function DrawcallCounter() {
	document.getElementById("drawcalls").innerHTML = renderer.info.render.calls;
}

function FrameCounter() {
	document.getElementById("vram").innerHTML = renderer.info.memory.textures;
}


document.getElementById("DBGCameraEnable").onclick = function() { controls.enabled = true; };
document.getElementById("DBGCameraDisable").onclick = function() { controls.enabled = false; };









// beetle house box
var BeetleHouse = new THREE.BoxBufferGeometry(70,50,50);
var BeetleHouseWire = new THREE.WireframeGeometry( BeetleHouse );

var BeetleHouseObject = new THREE.LineSegments( BeetleHouseWire );
BeetleHouseObject.material.depthTest = false;
BeetleHouseObject.material.opacity = 1;
BeetleHouseObject.material.transparent = true;
scene.add(BeetleHouseObject);
BeetleHouseObject.position.set(-238,115,60);


// kai house box
var KaiHouse = new THREE.BoxBufferGeometry(80,50,120);
var KaiHouseWire = new THREE.WireframeGeometry( KaiHouse );

var KaiHouseObject = new THREE.LineSegments( KaiHouseWire );
KaiHouseObject.material.depthTest = false;
KaiHouseObject.material.opacity = 1;
KaiHouseObject.material.transparent = true;
scene.add(KaiHouseObject);
KaiHouseObject.position.set(-355,115,60);


// lucky house box
var LuckyHouse = new THREE.BoxBufferGeometry(100,50,100);
var LuckyHouseWire = new THREE.WireframeGeometry( LuckyHouse );

var LuckyHouseObject = new THREE.LineSegments( LuckyHouseWire );
LuckyHouseObject.material.depthTest = false;
LuckyHouseObject.material.opacity = 1;
LuckyHouseObject.material.transparent = true;
scene.add(LuckyHouseObject);
LuckyHouseObject.position.set(-280,130,250);


// jesse house box
var JesseHouse = new THREE.BoxBufferGeometry(50,50,50);
var JesseHouseWire = new THREE.WireframeGeometry( JesseHouse );

var JesseHouseObject = new THREE.LineSegments( JesseHouseWire );
JesseHouseObject.material.depthTest = false;
JesseHouseObject.material.opacity = 1;
JesseHouseObject.material.transparent = true;
scene.add(JesseHouseObject);
JesseHouseObject.position.set(-485,150,290);


// chaspen house box
var ChaspenHouse = new THREE.BoxBufferGeometry(120,50,120);
var ChaspenHouseWire = new THREE.WireframeGeometry( ChaspenHouse );

var ChaspenHouseObject = new THREE.LineSegments( ChaspenHouseWire );
ChaspenHouseObject.material.depthTest = false;
ChaspenHouseObject.material.opacity = 1;
ChaspenHouseObject.material.transparent = true;
scene.add(ChaspenHouseObject);
ChaspenHouseObject.position.set(-620,200,400);



// chaspen house box
var FantoroHouse = new THREE.BoxBufferGeometry(50,30,50);
var FantoroHouseWire = new THREE.WireframeGeometry( FantoroHouse );

var FantoroHouseObject = new THREE.LineSegments( FantoroHouseWire );
FantoroHouseObject.material.depthTest = false;
FantoroHouseObject.material.opacity = 1;
FantoroHouseObject.material.transparent = true;
scene.add(FantoroHouseObject);
FantoroHouseObject.position.set(0,120,-60);






























//change cam position and lookat

document.getElementById("fantoroHouse").onclick = function() {FantoroLookAt()};

function FantoroLookAt() {	
	ui_click.play();
	camera.position.set( -100, 130, 20 );
	camera.lookAt(FantoroHouseObject.position);
	setTimeout(function(){ 
		$("#element").animate({
			height: "0px",
			color: "white"
		  });
		setTimeout(function(){
			document.getElementById("element").innerHTML = "fantoro's house"
		}, 600);
		$("#element").animate({
		height: "50px",
		color: "white"
		});
		setTimeout(function(){
			info_notif.play();
		}, 600);
	}, 1000) 
}




document.getElementById("jesseHouse").onclick = function() {JesseLookAt()};

function JesseLookAt() {	
	ui_click.play();
	camera.position.set( -450, 130, 200 );
	camera.lookAt(JesseHouseObject.position);
	setTimeout(function(){ 
		$("#element").animate({
			height: "0px",
			color: "white"
		  });
		setTimeout(function(){
			document.getElementById("element").innerHTML = "Jesse's house"
		}, 600);
		$("#element").animate({
		height: "50px",
		color: "white"
		});
		setTimeout(function(){
			info_notif.play();
		}, 600);
	}, 1000) 
}

document.getElementById("chaspenHouse").onclick = function() {ChaspenLookAt()};

function ChaspenLookAt() {
	ui_click.play();
	camera.position.set( -500, 200, 300 );
	camera.lookAt(ChaspenHouseObject.position);
	setTimeout(function(){ 
		$("#element").animate({
			height: "0px",
			color: "white"
		  });
		setTimeout(function(){
			document.getElementById("element").innerHTML = "Chaspen's house"
		}, 600);
		$("#element").animate({
		height: "50px",
		color: "white"
		});
		setTimeout(function(){
			info_notif.play();
		}, 600);
		
	}, 1000) 
}

document.getElementById("beetleHouse").onclick = function() {BeetleLookAt()};

function BeetleLookAt() {
	ui_click.play();
	camera.position.set( -150, 120, 150 );
	camera.lookAt(BeetleHouseObject.position);
	setTimeout(function(){ 
		$("#element").animate({
			height: "0px",
			color: "white"
		  });
		setTimeout(function(){
			document.getElementById("element").innerHTML = "Beetle's house"
		}, 600);
		$("#element").animate({
		height: "50px",
		color: "white"
		});
		setTimeout(function(){
			info_notif.play();
		}, 600);
	}, 1000) 
}

document.getElementById("luckyHouse").onclick = function() {LuckyLookAt()};

function LuckyLookAt() {	
	ui_click.play();
	camera.position.set( -400, 160, 200 );
	camera.lookAt(LuckyHouseObject.position);
	setTimeout(function(){ 
		$("#element").animate({
			height: "0px",
			color: "white"
		  });
		setTimeout(function(){
			document.getElementById("element").innerHTML = "Lucky's house"
		}, 400);
		$("#element").animate({
		height: "50px",
		color: "white"
		});
		setTimeout(function(){
			info_notif.play();
		}, 600);
	}, 1000) 
}



// turn off cube
ChaspenHouseObject.material.opacity = 0;
BeetleHouseObject.material.opacity = 0;
JesseHouseObject.material.opacity = 0;
FantoroHouseObject.material.opacity = 0;
LuckyHouseObject.material.opacity = 0;






 // Load Light
var ambientLight = new THREE.AmbientLight( 0xcccccc, 1.1 );
scene.add( ambientLight );
			
var directionalLight = new THREE.DirectionalLight( 0xffffff );
directionalLight.position.set( 0, 900, 1 ).normalize();
scene.add( directionalLight );	






const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
 // glTf 2.0 Loader
var loader = new GLTFLoader();				
	loader.load( '../../media/mdl/obj-test.glb', function ( gltf ) {              
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

document.getElementById("PMOn").onclick = function() {PerformanceModeOn()};

function PerformanceModeOn() {
	const color = 'lightblue';
	scene.fog = new THREE.Fog(0x00ffff, 200, 300);
	camera.far = 400;
	camera.updateProjectionMatrix();
}

function animate() {
    render();
	GetCoords()
	DrawcallCounter()
	FrameCounter()
	requestAnimationFrame( animate );
	}

function render() {
	renderer.render( scene, camera );
	controls.update( clock.getDelta() );
}

render();
animate(); });