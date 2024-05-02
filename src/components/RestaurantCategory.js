
import ItemList from "./ItemList";

const RestaurantCategory = (data) => {
    const handleClick = () => {
        if (data.currentIndex === data.showIndex) {
            data.toggleShowItems();
        }
        data.setShowIndex();
    };
    return (
        <div className="res-category mt-4">
            <div className="flex res-title cursor-pointer" onClick={handleClick}>
                <div className="flex-1">
                    <div>
                        <span>{data?.data?.title}</span>
                        <span className="cHgtwe">{data.data.itemCards.length}</span>
                    </div>
                </div>
                {data.showItems && <div className="chevron-up-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" height="15px" width="15px" version="1.1" id="Layer_1" viewBox="0 0 407.436 407.436" xmlSpace="preserve">
                        <polygon points="203.718,91.567 0,294.621 21.179,315.869 203.718,133.924 386.258,315.869 407.436,294.621 " />
                    </svg>
                </div>
                }
                {!data.showItems && <div className="chevron-down-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" height="15px" width="15px" version="1.1" viewBox="0 0 407.437 407.437" xmlSpace="preserve">
                        <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815" />
                    </svg>
                </div>
                }
            </div>
            {data.showItems && <ItemList item={data.data.itemCards} />}
        </div>
    )

};

export default RestaurantCategory