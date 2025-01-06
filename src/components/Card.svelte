<script>
    import { theme } from "../stores/theme";
    export let project = {} // expects an obj
</script>

<!-- will use a component for the cards -->
<div class="card glass {$theme ? 'dark': 'light'}">
    <div class="head">
        <img class="icon" src={project.svgSrc} alt="logo">
        <h2 class="title">{project.title}</h2>
        <span class="subtitle">{project.subtitle}</span>
    </div>
    <div class="body">
        <p>{project.description}</p>
        <ul class="tools">
            {#each project.tools as tool }
                {#if tool.name}
                    <li>{tool.name}</li>
                {/if}
            {/each}
        </ul>
    </div>
    <div class="footer">
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <span>demo</span>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
            <span>code</span>
            <i class="fa-solid fa-code"></i>
        </a>
    </div>
</div>


<style>
.glass{
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(10px);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.glass.dark{
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass.light{
    border: 1px solid #e1e1e1 ;

}

.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow: hidden;
  margin: 1rem auto;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.head {
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: .5em;
  border-bottom: 1px solid  #f0f0f0;
}


.dark .head{
  border-bottom: 1px solid rgba(120, 120, 120, 0.722);

}


.icon {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.title {
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
  color: var(--text-color);
}

.subtitle {
  font-size: 0.9rem;
  color: var(--text-color);

}

.body {
  height: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.body p {
  margin: 0 0 1rem;
  font-size: .85rem;
  color: var(--text-color);
  line-height: 1.5;
  flex-grow: 1;
}

.tools {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tools li {
text-align: center;
  background-color: #f4f4f4;
  padding: 0.3rem 0.8rem;
  font-size: 0.83rem;
  color: #555;
  border-radius: 8px;
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-top: 1px solid #f0f0f0;
}
.dark .footer{
  border-top: 1px solid rgba(120, 120, 120, 0.722);

}
.footer a {
    padding: .2rem;
  text-decoration: none;
  color: var( --primary-color);
  font-weight: bold;
  font-size: 0.95rem;
  transition: color 0.3s;
}

.footer a{
    text-align: center;
}

.footer a span{
    margin-right: .3em;
}


.footer a:hover span{
  text-decoration: underline;
}

@media (max-width: 550px) {
  .card {
    max-width: 100%;
  }

  .head {
    flex-direction: column;
    text-align: center;
  }

  .icon {
    margin-bottom: 0.5rem;
  }

  .footer {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
</style>