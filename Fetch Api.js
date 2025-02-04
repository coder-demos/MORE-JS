const URL = "https://dog.ceo/api/breeds/image/random";

const getFacts = async () => {
    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response); //JSON Format
    let data = await response.json();
    console.log(data);
}