export default function GroceryCard({ groceryData }) {
    return (
        <div className="flex justify-center items-center flex-col container ">
            <a href={groceryData?.action?.link}>
                <img className="min-w-36 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + groceryData?.imageId} alt={groceryData?.action?.text} />
            </a>
            <p className="text-gray-700 font-bold text-center">{groceryData?.action?.text}</p>
        </div>
    )
}