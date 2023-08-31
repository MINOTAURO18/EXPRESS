import axios from "axios";
const API = 'https://rickandmortyapi.com/api/character'

const saludar = async(req, res) =>{
    const characters = await axios.get(API)
    try{
        res.status(200).json(characters.data)
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}

export default saludar;