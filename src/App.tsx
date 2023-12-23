import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";

import { getResponse } from "./Axios";
import Pagination from "./components/Pagination";

function App() {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await getResponse(page);

                setData(resp.movies);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [page]);

    return (
        <>
            <Navbar />

            <div className="columns is-multiline is-flex is-justify-content-center p-4">
                {data.length > 0 ? (
                    data.map((item: any) => (
                        <MovieCard
                            key={item.id}
                            title={item.id}
                            image={item.img}
                            text={item.text}
                            link={item.link}
                        />
                    ))
                ) : (
                    <h1>Loading Movies...</h1>
                )}
            </div>

            <section className="container is-fluid p-2">
                <Pagination length={4} setPage={(e) => {
                    console.log(e + 1);
                    setPage(e + 1);
                    setData([]);
                }} />
            </section>
        </>
    );
}

export default App;
