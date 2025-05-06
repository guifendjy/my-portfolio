<script>
    import { theme } from "../stores/theme";
    import {link} from "svelte-spa-router";

    $: document.body.setAttribute("data-theme", $theme ? 'dark' : 'light')

    let activeRoute = window.location.hash.slice(1) || "/";


	function changeTheme(){
		$theme = !$theme
	}

    function setRoute(path){
        activeRoute = path
    }
    
</script>


<nav class="navbar">
    <a aria-label="home"  on:click={()=> setRoute("/")} class={$theme ? 'dark':'light'} class:active={activeRoute == "/"} href="/" use:link>Home</a>
    <a aria-label="projects"  on:click={()=> setRoute("/projects")} class={$theme ? 'dark':'light'} class:active={activeRoute == "/projects"}  href="/projects" use:link>Projects</a>
    <a aria-label="resume"  on:click={()=> setRoute("/resume")} class={$theme ? 'dark':'light'} class:active={activeRoute == "/resume"}  href="/resume" use:link>Resume</a>
    {#if $theme}
        <button aria-label="theme button" on:click={changeTheme}>
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 21h6v-1H9v1zm3-20a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3.5 5.5V17a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-3.5c2-1 3.5-3 3.5-5.5a7 7 0 0 0-7-7zm0 12a5 5 0 0 1-5-5 5 5 0 0 1 10 0 5 5 0 0 1-5 5z" fill="#f4f4f4"/>
            </svg>
        </button>
    {:else}
        <button aria-label="theme button" on:click={changeTheme}>
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 21h6v-1H9v1zm3-20a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3.5 5.5V17a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-3.5c2-1 3.5-3 3.5-5.5a7 7 0 0 0-7-7zm0 12a5 5 0 0 1-5-5 5 5 0 0 1 10 0 5 5 0 0 1-5 5z" fill="gold"/>
            </svg>
        </button>
    {/if}
</nav>


<style>
    svg{
        cursor: pointer;
        scale: 1;
        transition: scale .2s ease;
    }
    svg:hover{
        scale: 1.2;
    }

    nav{
        position: fixed;
        top: 0;
        left: 50%;
        transform: translate(-50%);

        width: 300px;
        border-radius: 35px;
        padding: 1em;
        margin-top: 1em;
        
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: .5em;

        z-index: 99;
    }

    .navbar{
        background-color: var(--bg-color);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    }

    a{
        color: var(--text-color);
        font-weight: normal;
        font-size: 1rem;
        transition: all .2s ease-out;
    }

    a.active{
        font-weight: 900;
        color: var(--primary-color);
        text-shadow: var(--text-shadow);
    }

    a:hover{
        font-weight: 900;
    }
    button{
        background: none;
    }


</style>