import axios from 'axios';

export async function callGetDogs() {
    try {
        const { data } = await axios
            .get('http://localhost:3000/api/v1/dog');
        console.log(data);
        return data;
    } catch (error) {
        return console.log(error);
    }
}

