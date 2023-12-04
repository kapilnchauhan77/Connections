import { useState } from "react";
import ReactFlow, {
  Background,
  MiniMap
} from "reactflow";

import "./overview.css";
import 'reactflow/dist/style.css';

function Query() {
    const [query, setQuery] = useState('');
    const [selectedLevel, setSelectedLevel] = useState<number>(1);
    const [categories, setCategories] = useState([{key: 1, categories: ['All']}]);
    const [currentCategory, setCurrentCategory] = useState<string>('');

    const [edges, setEdges] = useState<{id: string, source: string, target: string}[]>([]);
    const [nodes, setNodes] = useState<any[]>([{ id: "1", type: 'input', data: { label: "All" }, position: { x: 0, y: 0 } }]);
    // const [nodes, setNodes] = useState<any[]>(initialNodes);

    const handleSubmit = async (e: any): Promise<undefined> => {
        e.preventDefault();
        setNodes((prevNodes) => (
            prevNodes.map(el => ({...el, data: {label: el['data']['label'] + " (Agreeableness for " + query + ": "+(Math.floor(Math.random()*99) + 1).toString()+"%)"}}))
            )
        )
        setQuery('');
    }
    const addCategoryDepth = (e: any) => {
        e.preventDefault();
        console.log(currentCategory)
        console.log(categories)
        console.log(selectedLevel)
        let new_categories;
        if ((selectedLevel + 1) <= categories.length) {
            new_categories =  (categories.map(
            categoryLevel => categoryLevel.key == (selectedLevel+1) ? {key: (selectedLevel+1), categories: [currentCategory, ...categoryLevel.categories]}
            : categoryLevel
            ))
        } else {
                new_categories =  [{key: selectedLevel+1, categories: [currentCategory]}, ...categories]
            }

        setCategories(new_categories)
        /*
        setCategories((prevCategories) => {
            if ((selectedLevel + 1) <= prevCategories.length) {
                return (prevCategories.map(
                categoryLevel => categoryLevel.key == (selectedLevel+1) ? {key: (selectedLevel+1), categories: [currentCategory, ...categoryLevel.categories]}
                : categoryLevel
                ))
            } else {
                    return [{key: selectedLevel+1, categories: [currentCategory]}, ...prevCategories]
                }
        })
        */

        makeNodes(new_categories);
        setCurrentCategory('');
    }

    const makeNodes = (new_categories: any) => {
        // var nodes_to_add: {id: number, type: string, data: {label: string}, position: {x: number, y: number}}[] = [];
        var nodes_to_add: any[] = [];

        var edges_to_add: {id: string, source: string, target: string}[] = []

        var temp_track: number = 2;
        let category_selected = new_categories[1];
        let category_prev_selected = new_categories[0];
        var total_tracker: number = 1;
        for (var i = 2; i <= new_categories.length; i++){
            new_categories.forEach((el: any) => {
                (el.key==(i-1))&&(category_prev_selected = el);
                (el.key==i)&&(category_selected = el);
                (el.key<(i-1))&&(total_tracker += el.categories.length);
                })
            console.log(category_selected)
            for (var j = 0; j < category_prev_selected.categories.length; j++){
                category_selected.categories.forEach((el: any, idx: any) => {
                    console.log(el)
                    console.log(idx)
                    console.log(idx+(category_selected.categories.length*(j)))
                    edges_to_add.push({
                            id: `e${(total_tracker+j)}-${temp_track}`, source: `${total_tracker+j}`, target: `${temp_track}`
                        })
                    nodes_to_add.push(
                         {
                             id: `${temp_track}`,
                             type: 'default',
                             data: { label: el },
                             position: { x: ((idx+(category_selected.categories.length*(j)))*200), y: ((i-1) * 200) }

                         }
                    )
                    temp_track += 1;
                    })
            }
        }
        console.log(nodes_to_add)
        setNodes([{
                    id: "1",
                    type: 'input',
                    data: { label: "All" },
                    position: { x: 0, y: 0 }
                }, ...nodes_to_add])
        console.log(nodes)

        setEdges(edges_to_add)
        console.log(edges)
        }

    const addCategoryBreadth = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        if (categories.length == 1) {
                addCategoryDepth(e);
                return
            }
        console.log(currentCategory)
        console.log(categories)
        console.log(selectedLevel)
        const new_categories = categories.map(
            categoryLevel => categoryLevel.key == selectedLevel ? {key: selectedLevel, categories: [currentCategory, ...categoryLevel.categories]}
            : categoryLevel
            );

        /*
        setCategories((prevCategories) => (
            prevCategories.map(
            categoryLevel => categoryLevel.key == selectedLevel ? {key: selectedLevel, categories: [currentCategory, ...categoryLevel.categories]}
            : categoryLevel
            )
        ))
        */
        setCategories(new_categories);
        console.log(categories)
        console.log(selectedLevel)
        var num_nodes_to_add: number = 1;
        categories.forEach((el) => {
            if (el.key < selectedLevel) num_nodes_to_add *= el.categories.length; 
                })
        console.log(num_nodes_to_add)

        makeNodes(new_categories);
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
                            <div className="col-span-2 grid grid-cols-3">
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
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e: React.ChangeEvent<any>) => setCurrentCategory(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="level" className="block text-sm font-medium leading-6 text-gray-900">
                                        Level
                                    </label>
                                    <div className="mt-2 pr-3">
                                          <select
                                              id="level"
                                              name="level"
                                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                              onChange={(e: React.ChangeEvent<any>) => setSelectedLevel(parseInt(e.target.value))}
                                            >
                                              {categories.map((category) => (
                                                 <option key={category.key}>{category.key}</option>
                                              ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <button
                                    className={(selectedLevel==1) ? ("absolute right-0 bottom-0 w-full justify-center rounded-md bg-gray-600 px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:cursor-not-allowed") : ("absolute right-0 bottom-0 w-full justify-center rounded-md bg-gray-600 px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600")}
                                    onClick={addCategoryBreadth}
                                    disabled={selectedLevel==1}
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
    <div className="relative isolate px-6 pt-14 lg:px-8 flex justify-center items-center" style={{height: "30em"}}>
          

   <ReactFlow
      nodes={nodes}
      edges={edges}
      fitView
      attributionPosition="top-right"
    >
 <Background color="#aaa" gap={16} />
 <MiniMap style={{height: 120}} zoomable pannable />
    </ReactFlow>
    </div>
        </>
    )
}

export default Query;
