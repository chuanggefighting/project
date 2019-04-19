<template>
    <div class="info"></div>
</template>
<script>
export default {
    name: "planet",
    data() {
        return {
        };
    },
    mounted() {
        var container, stats;
        var camera, scene, renderer, particle;
        var mouseX = 0,
            mouseY = 0;
        var windowHalfX = window.innerWidth / 2;
        var spheres = [];
        var windowHalfY = window.innerHeight / 2;
        let isPc = IsPC();
        let alpha, gamma, beta, newH, newV;
        document.addEventListener('mousemove', onDocumentMouseMove, false);
        init();
        animate();

        function init() {
            var container = document.querySelector('.info')
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 5000);
            camera.position.z = 2800;
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0x0d0d25);
            var material = new THREE.SpriteMaterial({
                map: new THREE.CanvasTexture(generateSprite()),
                // blending: THREE.AdditiveBlending
            });
            for (var i = 0; i < 400; i++) {
                particle = new THREE.Sprite(material);
                initParticle(particle, i * 10);
                scene.add(particle);
                spheres.push(particle);
            }
            renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth * 1.35, window.innerHeight * 1.35);
            renderer.setClearColor(0x0d0d25);
            container.appendChild(renderer.domElement);
            window.addEventListener('resize', onWindowResize, false);
        }

        function onWindowResize() {
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth * 1.35, window.innerHeight * 1.35);
        }

        function generateSprite() {
            var canvas = document.createElement('canvas');
            canvas.width = 16;
            canvas.height = 16;
            var context = canvas.getContext('2d');
            var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
            gradient.addColorStop(0, 'rgba(200,255,255,.8)');
            gradient.addColorStop(0.3, 'rgba(0,255,255,.5)');
            gradient.addColorStop(0.5, 'rgba(0,0,64,1)');
            gradient.addColorStop(1, 'rgba(10,11,31,0)');
            context.fillStyle = gradient;
            context.fillRect(0, 0, canvas.width, canvas.height);
            return canvas;
        }
        var x, y, z
        function initParticle(particle, delay) {
            var particle = this instanceof THREE.Sprite ? this : particle;
            var delay = delay !== undefined ? delay : 0;
            x = Math.random() * 4000 - 1000
            y = Math.random() * 2000 - 1000
            z = Math.random() * 4000 - 1800
            particle.position.set(x, y, z);
            particle.scale.x = particle.scale.y = Math.random() * 20+6;
            new TWEEN.Tween(particle.position)
        }
        function animate() {
            requestAnimationFrame(animate);
            render();
            // stats.update();
        }
        function onDocumentMouseMove(event) {
            mouseX = (event.clientX - windowHalfX) * .5;
            mouseY = (event.clientY - windowHalfY) * .5;
        }
        window.addEventListener("deviceorientation", function(event) {
            alpha = event.alpha;
            beta = event.beta;
            gamma = event.gamma;
            newH = event.alpha / 2 * (-1);
            newV = event.gamma * 1;
            if (gamma <= 0) {
                newV = 90 + gamma;
                newH = -alpha;
            } else {
                newV = gamma - 90;
                alpha = (alpha + 180) % 360;
                newH = -alpha;
            }
        }, false);

        function IsPC() {
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"
            ];
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag;
        }

        function render() {
            // TWEEN.update();
            var timer = 0.00001 * Date.now();
            for (var i = 0, il = spheres.length; i < il; i++) {
                var sphere = spheres[i];
                sphere.position.x = 1000 * Math.cos(timer + i);
                sphere.position.y = 1000* Math.sin(timer + i * 1.2);
            }
            if (isPc) {
                camera.position.x += (mouseX - camera.position.x) * .04;
                camera.position.y += (-mouseY - camera.position.y) * .04;
            } else {
                camera.position.x = (gamma * 1).toFixed(0)
                camera.position.y = -(beta * 1).toFixed(0);
            }
            camera.lookAt(scene.position);
            renderer.render(scene, camera);
        }
    }
}
</script>
<style lang="scss">

canvas {
    display: block;
}

</style>