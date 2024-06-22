import { useState } from "react";

const SortFilter = () => {
    return (
        <>
            <Sort />
            <Filter />
        </>
    );
}

export default SortFilter;

const Sort = () => {
    return (
        <>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title fw-bold">Sort By</h5>
                    <hr />
                    <ul className="list-group">
                        <li className="list-group-item cursor-pointer">Price: High to Low</li>
                        <li className="list-group-item cursor-pointer">Price: Low to High</li>
                        <li className="list-group-item cursor-pointer">Popularity: Customers Top Rated</li>
                        <li className="list-group-item cursor-pointer active">Popularity: Best Sellers</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

const Filter = () => {
    const filters = [
        {
            id: 1,
            name: "Category",
            options: ["Lipsticks"]
        },
        {
            id: 2,
            name: "Price",
            options: [
                "₹0 - ₹299",
                "₹300 - ₹499",
                "₹500 - ₹699",
                "₹700 - ₹999"
            ]
        },
        {
            id: 3,
            name: "Discount",
            options: [
                "10% and Above",
                "20% and Above",
                "30% and Above",
                "40% and Above",
                "50% and Above"
            ]
        },
        {
            id: 4,
            name: "Color",
            options: ["Red"]
        },
        {
            id: 5,
            name: "Finish",
            options: ["Matte"]
        }
    ];

    const [selectedOptions, setSelectedOptions] = useState(new Set());

    const resetFilters = () => {
        setSelectedOptions(new Set());
    };

    return (
        <div className="card mt-4">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title fw-bold">Filters</h5>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={resetFilters}>
                        Reset
                    </button>
                </div>
                <hr />
                <ul className="list-group">
                    {filters.map((a_filter) => (
                        <FilterGroup
                            key={a_filter.id}
                            filter={a_filter}
                            selectedOptions={selectedOptions}
                            setSelectedOptions={setSelectedOptions}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

const FilterGroup = ({ filter, selectedOptions, setSelectedOptions }) => {
    const options = filter.options;

    const toggleCheckbox = (option) => {
        const updatedSelectedOptions = new Set(selectedOptions);
        if (updatedSelectedOptions.has(option)) {
            updatedSelectedOptions.delete(option);
        } else {
            updatedSelectedOptions.add(option);
        }
        setSelectedOptions(updatedSelectedOptions);
    };

    const handleItemClick = (option, event) => {
        event.preventDefault(); // Prevent default behavior (closing the dropdown)
        toggleCheckbox(option); // Toggle checkbox selection
    };

    return (
        <li className="list-group-item p-0">
            <div className="btn-group dropright w-100">
                <button
                    type="button"
                    className="btn dropdown-toggle w-100 text-align-left"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    {filter.name}
                </button>
                <div className="dropdown-menu">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="dropdown-item cursor-pointer"
                            onClick={(event) => handleItemClick(option, event)}
                        >
                            <input
                                type="checkbox"
                                className="mr-2 mt-1"
                                checked={selectedOptions.has(option)}
                                onChange={() => {}}
                            />
                            {option}
                        </div>
                    ))}
                </div>
            </div>
        </li>
    );
};
