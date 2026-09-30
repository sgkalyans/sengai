/* Apply the saved light/dark choice before first paint to avoid a flash. */
try{var th=localStorage.getItem("sengai-theme");if(th==="light"||th==="dark")document.documentElement.dataset.theme=th}catch(e){}
