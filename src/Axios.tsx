import axios from "axios";

async function getResponse(page: number) {
    try {
        const params = {
            page: page
        };

        const response = await axios.get("http://localhost:3000/api", {
            params,
            withCredentials: true,
        });

        return JSON.parse(response.data)["data"];
    } catch (error) {
        console.error("Error: ", error);
    }
}

export { getResponse };
