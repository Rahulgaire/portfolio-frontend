import React from 'react'

function Footer() {
  return (
   <footer class="flex flex-col space-y-10 justify-center m-10 font-serif">

    <nav class="flex justify-center flex-wrap gap-6 text-white font-medium">
        <a class="hover:text-yellow-500" href="#">Home</a>
        <a class="hover:text-yellow-500" href="#">About</a>
        <a class="hover:text-yellow-500" href="#">Experience</a>
        <a class="hover:text-yellow-500" href="#">Projects</a>
        <a class="hover:text-yellow-500" href="#">Contact</a>
    </nav>

    <div class="flex justify-center space-x-5">
        <a href="https://facebook.com/rahul.gaire.948" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://www.linkedin.com/in/rahul-gaire-368136324/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="https://instagram.com/rahulgaire_" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="https://github.com/Rahulgaire" target="_blank" rel="noopener noreferrer">
            <img src="https://github.com/fluidicon.png" width={30}/>
        </a>
        <a href="https://twitter.com/gairerahul44239" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
    </div>
    <p class="text-center text-white font-medium">&copy; {new Date().getFullYear()} Company Ltd. All rights reserved.
</p>
</footer>
  )
}

export default Footer
