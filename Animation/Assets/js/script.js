document.addEventListener("DOMContentLoaded", function() {
    const cat = document.querySelector('.cat');
    const foodButton = document.querySelector('.food-button');
    const ballButton = document.querySelector('.ball-button');
    const waterButton = document.querySelector('.water-button');
    const fish = document.querySelector('.fish');
    const ball = document.querySelector('.ball');
    const mouth = document.querySelector('.mouth');

    let foodAnimationTimeout; // Declare a variable to hold the timeout ID for food animation
    let ballAnimationTimeout; // Declare a variable to hold the timeout ID for ball animation
    let waterSplashTimeout; // Declare a variable to hold the timeout ID for water splashing

    // Add event listener to the food button
    foodButton.addEventListener('click', function() {
        // Move the cat lower left
        cat.style.transition = 'transform 3s';
        cat.style.transform = 'translate(-590px, 180px)';

        // Gradually make the fish disappear
        let opacity = 1;
        const interval = setInterval(function() {
            opacity -= 0.1; // Decrease opacity by 0.1
            fish.style.opacity = opacity; // Set new opacity
            if (opacity <= 0) {
                clearInterval(interval); // Stop the interval when fish is completely gone
                fish.style.display = 'none'; // Hide the fish
            }
        }, 1000); // Adjust the interval duration as needed

        // Start the mouth animation after the cat's movement
        foodAnimationTimeout = setTimeout(function() {
            mouth.style.animation = 'chew 1s infinite alternate'; // Start chewing animation
        }, 3000); // Adjust timing if needed, considering the cat's movement duration
    });

    // Add event listener to the ball button
    ballButton.addEventListener('click', function() {
        // Stop the cat from chewing
        mouth.style.animation = ''; // Clear the mouth animation

        // Move the cat to lower center
        cat.style.transition = 'transform 3s';
        cat.style.transform = 'translate(10px, 230px)';

        // After the cat's movement, start the ball animation
        setTimeout(function() {
            // Animate ball movement
            ball.style.transition = 'left 2s linear';
            ball.style.left = 'calc(100% - 50px)'; // Move the ball to the right

            // After the animation completes, move the ball back to the left
            ballAnimationTimeout = setTimeout(function() {
                ball.style.transition = 'left 2s linear';
                ball.style.left = '900px';
            }, 2000); // Adjust timing if needed
        }, 3000); // Adjust timing if needed, considering the cat's movement duration
    });

    // Add event listener to the water button
    waterButton.addEventListener('click', function() {
        // Move the cat to lower center
        cat.style.transition = 'transform 3s';
        cat.style.transform = 'translate(470px, 270px)';

        // After the cat reaches the water, start the drinking animation
        setTimeout(function() {
            // Animate mouth movement
            mouth.style.animation = 'drink 1s infinite alternate';

            // Create a function to handle water splashing
            function splashWater() {
                // Create and append the water splash element
                const waterSplash = document.createElement('div');
                waterSplash.classList.add('water-splash');
                document.body.appendChild(waterSplash);

                // Remove the water splash after a delay
                setTimeout(function() {
                    waterSplash.remove();
                }, 1000); // Adjust timing as needed

                // Schedule next splash
                waterSplashTimeout = setTimeout(splashWater, 1500); // Adjust timing between splashes
            }

            // Start the water splashing
            splashWater();
        }, 3000); // Adjust timing if needed, considering the cat's movement duration
    });

    // Add event listeners to other buttons to stop the animations
    foodButton.addEventListener('click', stopAnimations);
    ballButton.addEventListener('click', stopAnimations);
    waterButton.addEventListener('click', stopAnimations);

    function stopAnimations() {
        // Stop the mouth animation
        mouth.style.animation = '';
        // Stop the ball animation
        clearTimeout(ballAnimationTimeout);
        // Stop the water splashing animation
        clearTimeout(waterSplashTimeout);
    }
});
