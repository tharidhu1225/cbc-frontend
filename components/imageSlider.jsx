export default function ImageSlider(){
    return(
        <div className="w-full h-96 flex items-center flex-col">
            <img src={images[0]} className="w-full h-full object-cover"/>            
        </div>
    )
}