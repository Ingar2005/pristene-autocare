export default function box({title,price,description,image}){

  return (
  <div className="flex flex-col align-middle justify-around h-[30rem] w-96 border-black border-2 my-10">
    <img className="mx-3 " src={image} alt="maintanance"></img>
    <div className="flex justify-center"><h2 className="font-bold">{title} (From {price})</h2></div>
    <div className="flex flex-col items-center ">
      {description.map((text) => {return(<><p className="">{text}</p> </>)})}
    </div>
    </div>)

}