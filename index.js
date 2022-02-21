let scene,
    camera,
    renderer,
    cube;

function importantMainFunction() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.TorusGeometry( 10, 3, 14, 100 );

    //This is what is the box.
    /*
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    */

    const texture = new THREE.TextureLoader().load('img/my_code.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture});

    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 30;
}
importantMainFunction();


//Not aşağıdaki kısım bir nevi setinterval işlevi gören bir fonksiyon.
function cubeAnimation() {
    requestAnimationFrame(cubeAnimation);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

cubeAnimation();

function resizeAndLiveResponsive() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', resizeAndLiveResponsive, false);  

