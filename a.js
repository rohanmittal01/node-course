check{
    pat=[]
    sqlk=[]
    if(search){
        counter=0
        for(j=0;j<sqlk.len;j++){
            if(search){
                counter++
            }
        }
        if(counter==0){
            result=false; break;
        }
        if((i+1)==pat.length){
            result=true
        }
        input = end
    }else{
        result = false;
        break;
    }
    return result
}


chackBooleanBasedSqli(input)
{
    injPattern[]={"'","'","'","=","'","'","#"};
    lOprt[]={"or","||"};
    rOprt[]={'=','>','>=','<','<=','<>','!='};
    for(i=0;i<injPattern.length;i++)
    {
        if(KMPSearch(input,injPattern[i]>0))
        {
            if(i==0)
            {
                counter=0;
                for(j=0;j<lOprt.length;j++)
                {
                    if(KMP_Search(input,lOprt[j]>0))
                    {
                        counter++;
                    }
                }
                if(counter==0)
                {
                    result=false;
                    continue;
                }
            }else if(i==2)
            {
                counter=0;
                for(k=0;k<rOprt.length;k++)
                {
                    if(KMPSearch(input,rOprt[k]>0))
                    {
                        counter++;
                    }
                }
                if (counter==0)
                {
                    result=false;
                    break;
                }
                if((i+1)==injPattern.length)
                {
                    result=true;
                }
                input=end(slice(injPattern[i],input,2));
            }
            else
            {
                result=false;
                continue;
            }
            return result;  
        }
    }
}

