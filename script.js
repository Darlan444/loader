onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
        const r = 1;
    },1000)
}

function loaded(){
    document.getElementById("loader").style.display="none";
}
