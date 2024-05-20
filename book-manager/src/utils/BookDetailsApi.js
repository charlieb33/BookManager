import axios from "axios";

export const getBookData = async (isbn) => {
    try {
        const response = await axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`);
        return response.data[`ISBN:${isbn}`];
    } catch (error) {
        throw new Error("Failed to retrieve book data");
    }
};