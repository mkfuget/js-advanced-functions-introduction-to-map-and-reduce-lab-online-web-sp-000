// Your code here
function mapToNegativize(array)
{
  for(let i=0; i<array.length; i++)
  {
    array[i]*=-1;
  }
  return array;
}
function mapToNoChange(array)
{
  return array;
}
function mapToDouble(array)
{
  for(let i=0; i<array.length; i++)
  {
    array[i]*=2;
  }
  return array;
}
function mapToSquare(array)
{
  for(let i=0; i<array.length; i++)
  {
    array[i]*=array[i];
  }
  return array;
}

function reduceToTotal(sourceArray, startingPoint)
{
  let out  = 0;
  for(let i=0; i<sourceArray.length; i++)
  {
    out+=sourceArray[i];
  }
  return out+startingPoint;
}
