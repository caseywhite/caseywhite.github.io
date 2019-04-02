$(document).ready(function(){
    // Init ScrollMagic
    // let controller = new ScrollMagic.Controller();

    // //build a scene
    // let ourScene = new ScrollMagic.Scene({
    //     triggerElement: '#project01 img',
    //     // duration: '90%', makes a fade out that is responsive
    //     triggerHook: 0.9
    // })
    // //add class to project one
    // .setClassToggle('#project01', 'fade-in')
    // .addIndicators({
    //     name: 'fade scene',
    //     colorTrigger: 'black',
    //     colorStart: 'pink',
    //     colorEnd: 'black'
    // })
    // .addTo(controller);
    
// how to create a scene for multiple elements
    // Init ScrollMagic
    // where we turn the scroll bar into a controller
    let controller = new ScrollMagic.Controller();

    //pin the intro
    // what keeps the intro div static for a perod of time
    let pinIntroScene = new ScrollMagic.Scene({
        // where we set the trigger div
        triggerElement:'#intro',
        triggerHook:0,
        duration: '20%'
    }) 
    // what turns it into a pinned element
    .setPin('#intro', {pushFollowers: false})
    .addTo(controller);
    //loop through each .project element 
    // .each function allows me to use this code for ALL projects
    $('.project').each(function(){
    //build a scene
    let ourScene = new ScrollMagic.Scene({
        //change project to this
        triggerElement: this.children[0],
        // makes a fade out that is responsive
        duration: '90%',
        triggerHook: 0.9
    })
    //add class to project one
    // where the toggle is set, going from one class to another
    .setClassToggle(this, 'fade-in')
    .addIndicators({
        // where we name our scenes
        name: 'fade scene',
        // where we set the colors for the triggers
        colorTrigger: 'black',
        colorStart: 'pink',
        colorEnd: 'black'
    })
    .addTo(controller);
	
    });
});



















