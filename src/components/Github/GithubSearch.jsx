
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function GithubSearch() {
    const [data, setData] = useState("")

    const handel = (e) => {
        e.preventDefault()
        setData(e.target.value)
    }
    return (
        <>
            <form className="max-w-sm px-4  bg-center m-auto py-7 shadow-black border-spacing-2">
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                        value={data}
                        onChange={handel}
                    />
                    <NavLink
                        to={data}
                    >
                        <button className="bg-orange-500 px-6 text-white rounded-md py-3">Search</button>
                    </NavLink>
                </div>

            </form>


        </>
    );

}