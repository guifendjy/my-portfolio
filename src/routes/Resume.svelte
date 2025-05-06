<script>
    import { onMount } from "svelte";
  
    let canvasRef;
    let url = "assets/resume.pdf";
    let status = {success: false, error: null};
    let dlStatus = {isDownloading: false, isCompleted: false};

    function downloadResume() {
    if (dlStatus.isDownloading || dlStatus.isCompleted) return; // Prevent multiple clicks
        dlStatus.isDownloading = true; // Set the flag to true
      const link = document.createElement('a');
      link.href = url;
      link.download = url.split('/').pop(); // Extract the filename from the URL
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      dlStatus.isDownloading = false; // Reset the flag after download
      dlStatus.isCompleted = true; // Set the download completed status

      setTimeout(() => {
        dlStatus.isCompleted = false; // Reset the completed status after a delay
      }, 2000); // Adjust the delay as needed   
    }
  
    onMount(() => {
      // Dynamically import PDF.js to ensure it's available
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.min.js';
      script.onload = () => {  
        const pdfjsLib = window['pdfjs-dist/build/pdf'];
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';
  
        pdfjsLib
          .getDocument(url)
          .promise
          .then(doc => doc.getPage(1))
          .then(page => {
            
            const scale = 1.5; // Adjust scale as needed
            const viewport = page.getViewport({ scale });
  
            // Prepare canvas using PDF page dimensions
            const context = canvasRef?.getContext('2d');
            canvasRef.height = viewport.height;
            canvasRef.width = viewport.width;
  
            // Render PDF page into canvas context
            const renderContext = {
              canvasContext: context,
              viewport: viewport
            };
  
            page.render(renderContext);
            status.success = true;
            status.error = null;
          })
          .catch(err => {
            console.error('Error loading PDF:', err);
            status.success = false;
            status.error = err;
          });
      };
  
      // Append the script to the document
      document.body.appendChild(script);

      return ()=> document.body.removeChild(script); // cleanup the tag from the DOM(if not it will stay on the Dom)
    });
  </script>
  
<div class="container">
    <canvas class:show={status.success} bind:this={canvasRef}></canvas>
    {#if !status.success && !status.error}
        <div class="loader-container">
            <div class="loader">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <p style="font-size: .90rem;">Loading Resume...</p>
        </div>
    {:else if status.error}
        <div class="error">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm1-15h-2v7h2v-7zm0 9h-2v2h2v-2z"/>
            </svg>
            <p>{status.error}</p>
        </div>
    {/if}
    
    <button on:click={downloadResume} class="btn" class:show={status.success}>
        {#if dlStatus.isDownloading}
            <span>Downloading...</span>
        {:else if dlStatus.isCompleted && !dlStatus.isDownloading}
            <span>Download Complete</span>
        {:else}
            <span>Download Resume</span>
        {/if}
    </button>
</div>

<style>
    button{
        display: none;
        margin: 1em auto;
        padding: 1em;
        width: fit-content;
    }
    button:hover{
        scale: 1.05;
        transition: scale .1s ease-out;
    }
    .show {
        display: block;
    }
    .container {
        width: 100%; 
        max-width: 600px;
         height: auto; 
    
         margin: 3em auto;
         padding: 0 0.5em;
         align-content: center;
    }

    canvas {
        width: 100%;
        height: auto;
        display: none;
        box-shadow: 0 5px 7px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.15);
    
    }
        .loader-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            text-align: center;

            margin-top: 4em

        }

        .loader {
            display: flex;
            gap: 0.5em;
            margin-bottom: 0.5em;
        }

            .dot {
                width: 10px;
                height: 10px;
                background-color: var(--primary-color);
                border-radius: 50%;
                animation: bounce 1.5s infinite ease-in-out;
            }

            .dot:nth-child(2) {
            animation-delay: 0.2s;
            }

            .dot:nth-child(3) {
            animation-delay: 0.4s;
            }

            @keyframes bounce {
                0%, 80%, 100% {
                    transform: scale(0);
                }
                40% {
                    transform: scale(1);
                }
            }

            .error{
                width: 100%;
                color: red;
                text-align: center;
            }

</style>
  