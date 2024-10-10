export default function box({title,price,description,image}){

  return (
  <div className="flex flex-col align-middle justify-center h-[27rem] w-96 border-black border-2 my-8">
    <img className="mx-3 " src={image} alt="maintanance"></img>
    <div className="flex flex-col justify-center items-center my-8"><h2 className="font-bold">{title} (From {price})</h2>
      {description.map((text) => {return(<><p className="">{text}</p> </>)})}
    </div>
    </div>)

}