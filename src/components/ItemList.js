import { CDN_URL } from '../utils/constants'
const ItemList = (items) => {

    return (
        <div>
            {items.items.map((item) => {
                return (
                    <div key={item.card.info.id} className="flex item-center item-container border-b mb-4">
                        <div>
                            <div className="item-name">{item.card.info.name}</div>
                            <div className="mb-4"><span>&#8377;{item.card.info.price / 100}</span> </div>
                            <div className="flex items-center gap-1 star-rating">
                                <div> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" fillColor="#116649"><rect width="14" height="14" fill="white"></rect><path d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z" fill="#116649"></path></svg></div>
                                <div className="rating-info">
                                    <span className="rating-star-color">{item.card.info.ratings.aggregatedRating.rating}</span>
                                    <span className="rating-count">{item.card.info.ratings.aggregatedRating.ratingCountV2}</span>
                                </div>
                            </div>
                            <div className="jdb2dj">
                                <div> {item.card.info.description} </div>
                            </div>
                        </div>
                        <div className="food-img">
                            <img width={400} height={100} src={CDN_URL + item.card.info.imageId} className="res-img"></img>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default ItemList;
