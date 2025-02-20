'use client'

import { useEffect, useState } from "react"

export default function PageTeste() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data.posts))
    },[])

    return (
        <div className="flex flex-col items-center" >
            <h1 className="text-center font-bold mt-5 mb-2 text-3xl"> Pagina Client</h1>
            <div className="bg-green-500 px-2 py-1 text-center rounded-md mb-4 ">
                <button onClick={() => alert("TESTTTTTTT")} >
                    Click
                </button>
            </div>

            <div className="flex flex-col gap-5">
                {posts.map((post: any) => (
                    <div key={post.id} className="bg-gray-200 p-4 rounded-md">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}