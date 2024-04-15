<script>
  let btnBg = `rgb(100, 100, 100)`;
  let btnFg = `rgb(0, 0, 0)`;
  let mainBg = `rgb(200, 200, 200)`;
  let dataBorder = getRadius(gRI(100), gRI(100),gRI(100), gRI(100));
  let blobTop = "30%";
  let blobRight = "30%";
  let blobH = "100px";
  let blobW = "100px";
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
        dataBorder = getRadius(gRI(80,20), gRI(80, 20),gRI(80, 20), gRI(80, 20));
        blobRight = `${gRI(80)}%`;
        blobTop = `${gRI(80)}%`;
        blobH = `${gRI(400, 50)}px`;
        blobW = `${gRI(400, 50)}px`;
    }
    function getRadius(a, b, c, d){
      return `${a}% ${100-a}% ${b}% ${100-b}% / ${c}% ${100-d}% ${d}% ${100-c}%`;
    }
</script>

<main style="background-color:{mainBg}" class="w-screen h-screen grid gap-6 content-center bg-slate-600 justify-center justify-items-center">
<h1 class="font-serif text-9xl text-center ">Random bg</h1>
<button style="background:{btnBg}; color:{btnFg}" class="font-sans text-4xl font-black text-white bg-black hover:shadow-md hover:shadow-black transition duration-200 rounded-full p-9 my-7 w-max h-max" on:click={cbg}>
        Try!!
</button>
<div class="bubble" style="width:{blobW}; height:{blobH}; background:{btnBg}; top:{blobTop}; right:{blobRight}; border-radius:{dataBorder}"></div>
</main>

<style>
  .bubble{
    position: fixed;
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
