//import './main.css';

//import * as THREE from './module.js';


import {

    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Mesh,
    MeshBasicMaterial,
    FogExp2,
    BoxGeometry,

} from './three.module.js';





const scene = new Scene();

const camera = new PerspectiveCamera(75, 480/480, 0.01, 30 );

const renderer = new WebGLRenderer({
    canvas: document.querySelector('#bg'),
});


//Pixel ratio
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( 480, 480 );

///Initialise camera away from center
camera.position.setZ(15);


///Pass scene and camera to renderer

renderer.render( scene, camera );


//Fog

scene.fog = new FogExp2(0x091211, 0.003);
renderer.setClearColor(scene.fog.color);

///Cube 

    ///Geometry 

    const cubeGeom = new BoxGeometry( 10, 10, 10, 1, 1, 1);


    ///Material 

    const cubeMaterial = new MeshBasicMaterial( { color: 0xF7EAAB, wireframe: true } );

    ///Shape 

    const cube = new Mesh( cubeGeom, cubeMaterial );


    scene.add(cube);



    document.addEventListener("mousemove", animateCube )

    let mouseY = 0;
    let mouseX = 0;
    let mouseZ = 0;


    function animateCube(event) {

        mouseY = event.clientY*0.003;
        mouseX = event.clientX*0.0015;
        mouseZ = (event.clientX - event.clientY) *-0.0005;
    }


    function animate() {

        requestAnimationFrame( animate );


        cube.rotation.y = mouseX;
        cube.rotation.x = mouseY;
        cube.rotation.z = mouseZ;


        renderer.render( scene, camera );
    }


    animate();