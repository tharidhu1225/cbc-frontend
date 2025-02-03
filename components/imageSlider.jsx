export default function ImageSlider(){
    
    return(
        <div className="w-full h-96 flex items-center flex-col relative">
            <img src={images[0]} className="w-full aspect-square object-cover"/>
            <div className="w-full h-[75px] bg-red-300"></div>            
        </div>
    )
}