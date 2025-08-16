export default function FoodCircle({ foodData }) {
    return (
        <a className="hover:scale-[1.05] duration-200 ease-linear" href={foodData?.action?.link}>
            <img className="min-w-36 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + foodData?.imageId} alt={foodData?.action?.text} />
        </a>
    )
};