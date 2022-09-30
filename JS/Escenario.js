const scene = new THREE.Scene();
var loader = new THREE.TextureLoader()
loader.load('../imagenes/fondo.jpeg', function(textura){
	scene.background = textura;
});


const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const gltfLoader = new THREE.GLTFLoader();


gltfLoader.load('../modelos/Apofis/scene.gltf',
(gltf) =>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(50,30,30);

    loaderObjeto.position.z = 500;
    loaderObjeto.position.y = -200;
    loaderObjeto.position.x = -30;
    scene.add(loaderObjeto);

    console.log('carga completa');
    


const DragControls = new THREE.DragControls( [loaderObjeto], camera, renderer.domElement );
DragControls.deactivate();
DragControls.activate();

}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error');
}
); 


gltfLoader.load('../modelos/Alicia/scene.gltf',
(gltf) =>{
    var loaderObjeto2 = gltf.scene;
    loaderObjeto2.scale.set(250,250,-250);

    loaderObjeto2.position.y =-800;
    loaderObjeto2.position.z =-50;
    loaderObjeto2.position.x =700;
    scene.add(loaderObjeto2);
    
    console.log('carga completa');


const DragControls1 = new THREE.DragControls( [loaderObjeto2], camera, renderer.domElement );
DragControls1.deactivate();
DragControls1.activate();

}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error');
}
);


gltfLoader.load('../modelos/Pool/scene.gltf',
(gltf) =>{
    var loaderObjeto3 = gltf.scene;
    loaderObjeto3.scale.set(2,2,-2);
    loaderObjeto3.position.z =90;
    loaderObjeto3.position.y =-700;
    loaderObjeto3.position.x =200;
    scene.add(loaderObjeto3);
    
    console.log('carga completa');


const DragControls2 = new THREE.DragControls( [loaderObjeto3], camera, renderer.domElement );
DragControls2.deactivate();
DragControls2.activate();

}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log(error);
}
);


const Light1 = new THREE.DirectionalLight(0xffffff, 1)
Light1.position.set(6,6,6)
scene.add(Light1)

const luz = new THREE.AmbientLight(0xffffff,1)
scene.add(luz)

camera.position.z = 950;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
