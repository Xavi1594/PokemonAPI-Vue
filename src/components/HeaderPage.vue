
<template>
<header>
    <div id="img-fondo">
        <img src="../assets/img/pokemon_logo_PNG3.png" alt="Imagen de fondo de Pokémon">
    </div>
</header>
</template>
<style lang = "scss" scoped>
    header {
        display: flex;
        width: 100%;
        height: 20vh;
        
            #img-fondo {
                width: 100%;
                height: 100vh;
                display: flex;
                justify-content: center;
                
                
                    img {
                        width: 100%;
                        height: 50vh;
                        display: flex;
                        background-color: black;
                        padding-top: 2%;
                        padding-bottom: 2%;
                    }
            }
    }
</style>
