<script>
import Card from "../components/Card.svelte"
import {
    data
} from "../stores/projectsData"
let projects = $data
</script>

<div class="container">
    <div class="wrapper">
        {#each projects as project}
        <Card {project}/>
            {/each}
            </div>
            </div>

<style>
.container {
    padding: 1em 0;
}

.wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin: 1.5rem
}

@media (max-width: 550px) {
    .wrapper {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
}
</style>
