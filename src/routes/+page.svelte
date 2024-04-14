<body class="min-h-screen grid gap-6 content-center justify-center justify-items-center">
<h1 class="font-serif text-9xl text-center ">Random bg</h1>
<button class="font-mono text-4xl font-black text-white bg-black hover:shadow-md hover:shadow-black transition duration-200 rounded-full p-9 my-7 w-max h-max" on:click={cbg}>
        Try!
</button>
</body>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>

<script>
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
        this.style.background = `linear-gradient(to bottom, ${c1}, 90%, ${c2})`;
        this.style.color = `${c2}`;
        document.body.style.background =`rgb(${gRI(255)} ${gRI(255)} ${gRI(255)})`; 
    }
</script>
