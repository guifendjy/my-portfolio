<script>
    import { theme } from "../stores/theme";
    import {link} from "svelte-spa-router";

    $: document.body.setAttribute("data-theme", $theme ? 'dark' : 'light')

    $: showNav = false
    let activeRoute = window.location.hash.slice(2) || "/";

	function changeTheme(){
		$theme = !$theme

	}

    function toggleNav(){
        showNav = !showNav
    }
    function setRoute(path){
        activeRoute = path
        setTimeout(toggleNav, 500) // makes it less snappy!
    }


    // page transition animation
    // onNavigate(navigation=>{
    //     if(document.startViewTransition) return

    //     return new Promise(resolve=>{
    //         document.startViewTransition(async()=>{
    //             resolve()
    //             await navigation.complete
    //         })
    //     })
    // })
    
</script>


<nav>
    <div class="nav-content">
        <button id="menu" class="btn {$theme ? 'dark': 'light'}" on:click={toggleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                <path d="M 2 9 L 2 11 L 48 11 L 48 9 L 2 9 z M 2 24 L 2 26 L 48 26 L 48 24 L 2 24 z M 2 39 L 2 41 L 48 41 L 48 39 L 2 39 z"></path>
                </svg>
        </button>
        <ul class="nav-links {$theme ? 'dark': 'light'}" class:expanded={showNav}>
            <li class:active={activeRoute == "/"}>
                <a on:click={()=> setRoute("/")} class={$theme ? 'dark':'light'} href="/" use:link>Home</a>
            </li>
            <li class:active={activeRoute == "projects"}>
                <a on:click={()=> setRoute("projects")} class={$theme ? 'dark':'light'} href="/projects" use:link>Projects</a>
            </li>
            <li class:active={activeRoute == "resume"}>
                <a on:click={()=> setRoute("resume")} class={$theme ? 'dark':'light'} href="/resume" use:link>Resume</a>
            </li>
        </ul>
    </div>
	<button class="btn {$theme ? 'dark': 'light'}" on:click={changeTheme}>
		<svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
            <path d="M 24.90625 3.96875 C 24.863281 3.976563 24.820313 3.988281 24.78125 4 C 24.316406 4.105469 23.988281 4.523438 24 5 L 24 11 C 23.996094 11.359375 24.183594 11.695313 24.496094 11.878906 C 24.808594 12.058594 25.191406 12.058594 25.503906 11.878906 C 25.816406 11.695313 26.003906 11.359375 26 11 L 26 5 C 26.011719 4.710938 25.894531 4.433594 25.6875 4.238281 C 25.476563 4.039063 25.191406 3.941406 24.90625 3.96875 Z M 10.65625 9.84375 C 10.28125 9.910156 9.980469 10.183594 9.875 10.546875 C 9.769531 10.914063 9.878906 11.304688 10.15625 11.5625 L 14.40625 15.8125 C 14.648438 16.109375 15.035156 16.246094 15.410156 16.160156 C 15.78125 16.074219 16.074219 15.78125 16.160156 15.410156 C 16.246094 15.035156 16.109375 14.648438 15.8125 14.40625 L 11.5625 10.15625 C 11.355469 9.933594 11.054688 9.820313 10.75 9.84375 C 10.71875 9.84375 10.6875 9.84375 10.65625 9.84375 Z M 39.03125 9.84375 C 38.804688 9.875 38.59375 9.988281 38.4375 10.15625 L 34.1875 14.40625 C 33.890625 14.648438 33.753906 15.035156 33.839844 15.410156 C 33.925781 15.78125 34.21875 16.074219 34.589844 16.160156 C 34.964844 16.246094 35.351563 16.109375 35.59375 15.8125 L 39.84375 11.5625 C 40.15625 11.265625 40.246094 10.800781 40.0625 10.410156 C 39.875 10.015625 39.460938 9.789063 39.03125 9.84375 Z M 24.90625 15 C 24.875 15.007813 24.84375 15.019531 24.8125 15.03125 C 24.75 15.035156 24.6875 15.046875 24.625 15.0625 C 24.613281 15.074219 24.605469 15.082031 24.59375 15.09375 C 19.289063 15.320313 15 19.640625 15 25 C 15 30.503906 19.496094 35 25 35 C 30.503906 35 35 30.503906 35 25 C 35 19.660156 30.746094 15.355469 25.46875 15.09375 C 25.433594 15.09375 25.410156 15.0625 25.375 15.0625 C 25.273438 15.023438 25.167969 15.003906 25.0625 15 C 25.042969 15 25.019531 15 25 15 C 24.96875 15 24.9375 15 24.90625 15 Z M 24.9375 17 C 24.957031 17 24.980469 17 25 17 C 25.03125 17 25.0625 17 25.09375 17 C 29.46875 17.050781 33 20.613281 33 25 C 33 29.421875 29.421875 33 25 33 C 20.582031 33 17 29.421875 17 25 C 17 20.601563 20.546875 17.035156 24.9375 17 Z M 4.71875 24 C 4.167969 24.078125 3.78125 24.589844 3.859375 25.140625 C 3.9375 25.691406 4.449219 26.078125 5 26 L 11 26 C 11.359375 26.003906 11.695313 25.816406 11.878906 25.503906 C 12.058594 25.191406 12.058594 24.808594 11.878906 24.496094 C 11.695313 24.183594 11.359375 23.996094 11 24 L 5 24 C 4.96875 24 4.9375 24 4.90625 24 C 4.875 24 4.84375 24 4.8125 24 C 4.78125 24 4.75 24 4.71875 24 Z M 38.71875 24 C 38.167969 24.078125 37.78125 24.589844 37.859375 25.140625 C 37.9375 25.691406 38.449219 26.078125 39 26 L 45 26 C 45.359375 26.003906 45.695313 25.816406 45.878906 25.503906 C 46.058594 25.191406 46.058594 24.808594 45.878906 24.496094 C 45.695313 24.183594 45.359375 23.996094 45 24 L 39 24 C 38.96875 24 38.9375 24 38.90625 24 C 38.875 24 38.84375 24 38.8125 24 C 38.78125 24 38.75 24 38.71875 24 Z M 15 33.875 C 14.773438 33.90625 14.5625 34.019531 14.40625 34.1875 L 10.15625 38.4375 C 9.859375 38.679688 9.722656 39.066406 9.808594 39.441406 C 9.894531 39.8125 10.1875 40.105469 10.558594 40.191406 C 10.933594 40.277344 11.320313 40.140625 11.5625 39.84375 L 15.8125 35.59375 C 16.109375 35.308594 16.199219 34.867188 16.039063 34.488281 C 15.882813 34.109375 15.503906 33.867188 15.09375 33.875 C 15.0625 33.875 15.03125 33.875 15 33.875 Z M 34.6875 33.875 C 34.3125 33.941406 34.011719 34.214844 33.90625 34.578125 C 33.800781 34.945313 33.910156 35.335938 34.1875 35.59375 L 38.4375 39.84375 C 38.679688 40.140625 39.066406 40.277344 39.441406 40.191406 C 39.8125 40.105469 40.105469 39.8125 40.191406 39.441406 C 40.277344 39.066406 40.140625 38.679688 39.84375 38.4375 L 35.59375 34.1875 C 35.40625 33.988281 35.148438 33.878906 34.875 33.875 C 34.84375 33.875 34.8125 33.875 34.78125 33.875 C 34.75 33.875 34.71875 33.875 34.6875 33.875 Z M 24.90625 37.96875 C 24.863281 37.976563 24.820313 37.988281 24.78125 38 C 24.316406 38.105469 23.988281 38.523438 24 39 L 24 45 C 23.996094 45.359375 24.183594 45.695313 24.496094 45.878906 C 24.808594 46.058594 25.191406 46.058594 25.503906 45.878906 C 25.816406 45.695313 26.003906 45.359375 26 45 L 26 39 C 26.011719 38.710938 25.894531 38.433594 25.6875 38.238281 C 25.476563 38.039063 25.191406 37.941406 24.90625 37.96875 Z"></path>
        </svg>
	</button>
</nav>


<style>

    nav{
        display: flex;
        align-items: baseline;
        gap: 1em;
        justify-content: space-between;
    }


	.nav-links{
		margin: 0;
		padding: 0;
		display: flex;
		gap: .7em;
		list-style: none;
	}

    .nav-content{
        width: 100%;
    }


    a{
        color: var(--text-color);
        font-size: 1rem;
        transition: all .2s ease;
    }


    li.active a{
        font-weight: 900;
        color: var(--primary-color);
        text-shadow: var(--text-shadow);
    }

    
    /* enable transtns for all li effects */
    li{
        transition:  all 250ms ease-in;
    }

	#menu{
        display: none;
	}


    @media (max-width: 550px){
        #menu{
            display: block;
	    }
        .nav-links{
            margin-left: .77em;
            opacity: 0;
            max-height: 0;
            visibility: hidden;
            display: flex;
            flex-direction: column;
            width: 0;
            transition: opacity 200ms ease, max-height 300ms ease-out, width 300ms ease-out;
        }

       .expanded{
            width: 10%;
            visibility: visible;
            opacity: 1;
            max-height: 200px;
        }
        .expanded li.active, .expanded li.active a{
            scale: 1.1;
            margin-left: 15%;
        }
       .expanded li, .expanded li a{
            padding:0;
            scale: 1;
            margin: 0;
            transition: all .3s ease-in;
        }
        .expanded li:hover a{
            scale: 1.1;
            margin-left: 15%;
        }

       .expanded.dark li{
            border-left: 1px solid var(--border-color);
            border-bottom: 1px solid var(--border-color);
        }

       .expanded.light li{
            border-left: 1px solid var(--border-color);
            border-bottom: 1px solid var(--border-color);
        }

       .expanded li a{
            position: relative;
            top: .5em;
            left: 3.168em;
        }

    }

</style>