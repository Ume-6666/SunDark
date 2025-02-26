function set(k)
{
    console.log("hi")
    const br1 = document.getElementById('br1');
    const br2 = document.getElementById('br2');
    const br3 = document.getElementById('br3');

    if(k==1)
    {
        br1.style.display='flex'
        br2.style.display='none'
        br3.style.display='none'
    }
    else if(k==2)
    {
        br1.style.display='none'
        br2.style.display='flex'
        br3.style.display='none'
    }
    else if(k==3)
    {
        br1.style.display='none'
        br2.style.display='none'
        br3.style.display='flex'
    }
    

}
