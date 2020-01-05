particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 10,
        "density": {
          "enable": true,
          "value_area": 80
        }
      },
      "color": {
        "value": "#9932CC", //random // #FFFFFF
      },
      "shape": {
        "type": "circle", // circle edge triangle polygon star 
        "stroke": {
          "width": 12,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 100
        }
      },
      "opacity": {
        "value": 20,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 30,
          "opacity_min": 20,
          "sync": false
        }
      },
      "size": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 200,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 50,
        "color": "#00f000",
        "opacity": 100,
        "width": 5
      },
      "move": {
        "enable": true,
        "speed": 100,
        "direction": "top-right", // none top top-right right bottom-right bottom bottom-left left top-left
        "random": true,
        "straight": true,
        "out_mode": "bounce", // out bounce
        "attract": {
          "enable": true,
          "rotateX": 1600,
          "rotateY": 1200
        }
      }
    },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" //grab bubble repulse
      },
      "onclick": {
        "enable": true,
        "mode": "push" // push remove bubble repulse
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 3,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 3,
        "size": 100,
        "duration": 0.3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  }
  }

);