import ItemList from "./ItemList";
import { Collapse, initTWE } from "tw-elements";

const RestaurantCategory = (data) => {
    initTWE({ Collapse });

    return <div id="accordionExample">
        <div className="jd2dj2 mt-4">
            <div
                class="border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
                <h2 class="mb-0" id="headingTwo">
                    <button
                        class="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
                        type="button"
                        data-twe-collapse-init
                        data-twe-collapse-collapsed
                        data-twe-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo">
                        <div className="font-bold">
                            {data.data.title} ({data.data.itemCards.length})
                        </div>
                        <span
                            class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    class="!visible hidden"
                    data-twe-collapse-item
                    aria-labelledby="headingTwo"
                    data-twe-parent="#accordionExample">
                    <div class="px-5 py-4">
                        <ItemList items={data.data.itemCards} />
                    </div>
                </div>
            </div>
        </div>
    </div>
};


export default RestaurantCategory