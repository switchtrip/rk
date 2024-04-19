<script>
  let btnBg = `rgb(100, 100, 100)`;
  let btnFg = `rgb(0, 0, 0)`;
  let mainBg = `rgb(200, 200, 200)`;
  let dataBorder = getRadius(gRI(100), gRI(100),gRI(100), gRI(100));
  let blobTop = "30%";
  let blobRight = "30%";
  let blobH = "100px";
  let blobW = "80px";

    function gRI(max=100, min=0) {
        return Math.floor(Math.random() * (max-min)+min);
    }
    function gRC(){
        const r = gRI(255);
        const g = gRI(255);
        const b = gRI(255);
        return [`rgb(${r} ${g} ${b})`, `rgb(${255-r} ${255-g} ${255-b})`];
    }
    function cbg(){
        const [c1, c1x] = gRC();
        const [c2, c2x] = gRC();
        const [c3, c3x] = gRC();
        btnBg = `linear-gradient(to bottom, ${c1}, 90%, ${c2})`;
        btnFg = `${c1x}`;
        mainBg = c3;
        document.documentElement.style.setProperty("--mainBg", mainBg);
        dataBorder = getRadius(gRI(80,20), gRI(80, 20),gRI(80, 20), gRI(80, 20));
        blobRight = `${gRI(80)}%`;
        blobTop = `${gRI(80)}%`;
        blobH = `${gRI(400, 50)}px`;
        blobW = `${gRI(400, 50)}px`;
    }
    function getRadius(a=50, b=50, c=50, d=50){
      return `${a}% ${100-a}% ${b}% ${100-b}% / ${c}% ${100-d}% ${d}% ${100-c}%`;
    }
</script>


<svelte:head>
  <title>Surabhi Music Academy</title>
  <meta name="description" content="Testing Svelte app for Surabhi music app dev" />
  <!-- For sharing -->
  <meta property="og:title" content="Surabhi Music Academy" />
  <meta property="og:description" content="Learn Flute, Mouth organ, Hindustani classical Music"/>
  <meta property="og:image" content="https://surabhimusic.com/logo" />
  <meta property="og:url" content="https://surabhimusic.com" />
  <link rel="canonical" href="https://surabhimusic.com/" />
</svelte:head>




<main class="h-screen grid gap-8 md:gap-16 content-center bg-slate-600 justify-center justify-items-center">
<h1 class=" font-serif text-7xl md:text-9xl p-2 md:p-4 text-center ">Random bg</h1>
<button  class="font-sans text-2xl md:text-4xl font-black text-white bg-black hover:shadow-md hover:shadow-black active:translate-y-1 transition duration-100 rounded-full p-6 md:p-9  w-max h-max" style="background:{btnBg}; color:{btnFg}" on:click={cbg}>
        Try!!
</button>
<div class="bubble" style="width:{blobW}; height:{blobH}; background:{btnBg}; top:{blobTop}; right:{blobRight}; border-radius:{dataBorder}"></div>
</main>

<style>
  :root{
    --mainBg: rgb(200, 200, 200);
  }
  main{
    background-color:var(--mainBg);
  }
  .bubble{
    position: fixed;
    overflow: hidden;
    width:180px;
    height:280px;
    background-color: crimson;
    border-radius: attr(data-border);
    opacity: 0.5;
  }
  button{
    z-index: 999;
  }
</style>
