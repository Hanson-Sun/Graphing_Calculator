import * as THREE from 'three';

var width = 500;
var height = 500;

const scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( width, height );
document.getElementById("three").insertBefore(renderer.domElement, document.getElementById("three").children[1]);

//camera.up.set(0,0,1);
// camera.position.z = 100;
// camera.position.x = 100;
//  camera.position.y = 20;
// camera.rotation.z += THREE.MathUtils.degToRad(0);
// camera.rotation.y += THREE.MathUtils.degToRad(20);
// camera.rotation.x += THREE.MathUtils.degToRad(10);
var VIEW_ANGLE = 45;
var ASPECT = width / height;
var NEAR = 0.1;
var FAR = 10000;
var camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
camera.up.set(0, 1, 0);
camera.lookAt(0, 0, 0);
camera.position.z = 200;
camera.position.y = 25;
camera.position.x = 25;
// camera.rotation.y += THREE.MathUtils.degToRad(10);
// camera.rotation.x += THREE.MathUtils.degToRad(10);
scene.add(camera);


const vertices = [];

for ( var i = -50; i<=50; i+=.8) {
	
    for (var j = -50; j<= 50; j+=.8) {
        var x = i;
        var y = j;
        var z = Math.pow((x*x-y*y), .5);
        //var z = y*y;
        vertices.push( x, z, y );
    }
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
const material = new THREE.PointsMaterial( { color: 0x888888 } );
const points = new THREE.Points( geometry, material );
scene.add( points );

function axes() {

    const axesHelper = new THREE.AxesHelper( 10000 );
    scene.add( axesHelper );
}

function animate() {
	requestAnimationFrame( animate );

    // camera.rotation.x += .004;
    //camera.rotation.y += .004;
    // camera.rotation.z += .004;

	renderer.render( scene, camera );
}

axes();
renderer.render( scene, camera );
// animate()