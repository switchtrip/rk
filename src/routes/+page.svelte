<script>
  let btnBg = `rgb(100, 100, 100)`;
  let btnFg = `rgb(0, 0, 0)`;
  let mainBg = `rgb(200, 200, 200)`;

    function gRI(max) {
        return Math.floor(Math.random() * max);
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
        btnFg = `${c2}`;
        mainBg = c3;
    }
</script>

<main style="background-color:{mainBg}" class="w-screen h-screen grid gap-6 content-center bg-slate-600 justify-center justify-items-center">
<h1 class="font-serif text-9xl text-center ">Random bg</h1>
<button style="background:{btnBg}; color:{btnFg}" class="font-sans text-4xl font-black text-white bg-black hover:shadow-md hover:shadow-black transition duration-200 rounded-full p-9 my-7 w-max h-max" on:click={cbg}>
        Try!!
</button>
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
