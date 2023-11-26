import { useState } from "react";

function Query() {
    const [query, setQuery] = useState('');
    const [categories, setCategories] = useState<{key: number, categories: string[]}[]>([{key: 0, categories: []}]);
    const [currentCategory, setCurrentCategory] = useState<string>('');

    const handleSubmit = async (e: any): Promise<undefined> => {
        e.preventDefault();
        console.log(query);
    }
    const addCategoryDepth = (e: any) => {
        e.preventDefault();
        console.log(e)
    }
    const addCategoryBreadth = (e: React.ChangeEvent<any>, key_val: number) => {
        e.preventDefault();
        console.log(currentCategory)
        console.log(categories)
        setCategories((prevCategories) => (
            prevCategories.map(
            categoryLevel => categoryLevel.key == key_val ? {key: key_val, categories: [currentCategory, ...categoryLevel.categories]}
            : categoryLevel
            )
            ))
        setCurrentCategory('');
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://i.ibb.co/b5rX393/connections-logo-removebg-preview.png"
                        alt="Connections"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Search by Categories
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>

                        <div>
                            <label htmlFor="query" className="block text-sm font-medium leading-6 text-gray-900">
                                Query
                            </label>
                            <div className="mt-2">
                                <input
                                    id="query"
                                    name="query"
                                    type="text"
                                    value={query}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e: React.ChangeEvent<any>) => setQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-3">
                            <div className="col-span-2">
                                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                                    Category
                                </label>
                                <div className="mt-2 pr-3">
                                    <input
                                        id="category"
                                        name="category"
                                        type="text"
                                        value={currentCategory}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(e: React.ChangeEvent<any>) => setCurrentCategory(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <button
                                    className="absolute right-0 bottom-0 w-full justify-center rounded-md bg-gray-600 px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={(e: React.ChangeEvent<any>) => addCategoryBreadth(e, 0)}
                                >
                                    Add Category
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2">
                            <div className="relative">
                                <button
                                    className="flex w-full justify-center rounded-md bg-gray-600 px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={addCategoryDepth}
                                >
                                    Add Sub Category
                                </button>
                            </div>

                            <div className="relative pl-6">
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Query;
