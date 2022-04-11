function mergeSortedAray(a1,a2)
{

let f=[]
    for(let i =0;i<=a1.length-1;i++)
    {
        for(let j =0;j<=a2.length-1;j++)
        {
            if(a1[i]<a2[j])
            {
                f.push(a1[i])

                a1[i] = f[i]
                a1[i]
                =a2[j]
            }else{
                f.push(a2[j])

            }
            // break;
        }

    }

    console.log(f)
    return f;
}


mergeSortedAray([1,3,5],[2,4,6])