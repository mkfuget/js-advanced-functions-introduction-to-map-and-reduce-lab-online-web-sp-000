// Your code here
function mapToNegativize(array)
{
  for(let i=0; i<array.length; i++)
  {
    if(array(i) > 0)
    {
      array[i]*=-1;
    }
  }
  return array;
}
