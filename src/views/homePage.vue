<template>
<div class="container">
    
    <div class="left">
         <h1>Co<span>unt</span>ly </h1>
         <p class="midtext">
             "The countly web app is a simple tool that<span style="color:#FE6142"> keep track of users input in % </span>to fill a box with color and displays to the user." 
         </p>
    <p class="endtext"> The counter web app is a convenient and easy way to keep track of numerical data in real-time.</p>

    <router-link to="/counter" class="link">
    <button class="bn5">
        <img src="../assets/right-arrow.png" alt="">
        <span>Counter</span>
    </button>
    </router-link>
    </div>

    <div class="right">
        <img src="../assets/hero-img.png" alt="">
    </div>
  
</div>

</template>



<style scoped>
.container{
    width: 100%;
    height: 85vh;
    display: flex;
    align-items:center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0rem 6rem;
background: #fff;
}


.left{
    width: 50%
}

.right{
    width: 45%;
}
.hero-img{
    width: 100%;
}


h1{
    font-size: 120px;
    font-weight: 700;
    line-height: 120%;

}

h1 span{
    color: #CF990F;
}

.midtext{
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 20px;
    text-align: justify;
}

.endtext{
    font-size: 14px;
    font-weight: 400;
}


button{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0.5rem 1rem;
    border-radius: 5px;

    font-size: 18px;
    font-weight: 600;
    letter-spacing: 3px;
    margin-top: 20px;
}

.link{
    text-decoration: none;

}



.bn5 {
  padding: 1em 2em;
  border: none;
  outline: none;
  color: #CF990F;
  background: #CF990F;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 5px;
}

.bn5:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowingbn5 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowingbn5 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.bn5:active {
  color: #000;
}

.bn5:active:after {
  background: transparent;
}

.bn5:hover:before {
  opacity: 1;
}

.bn5:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #DEE1E6;
  left: 0;
  top: 0;
  border-radius: 10px;
}


@media only screen and (max-width: 800px) {

}

</style>