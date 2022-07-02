import AddTutorial from '../components/AddTutorial';
import TutorialList from '../components/TutorialList';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {
  const [tutorials, setTutorials] = useState()
  const url = 'https://axios-example-cw.herokuapp.com/api/tutorials';

  /* GET */

  const getTutorials = async () => {
    try {
      const {data} = await axios.get(url);
      setTutorials(data);
    } catch (error) {
      alert('something went wrong')
    }
  };

  useEffect(() => {
    getTutorials();
  }, [])

  /* POST */

  const addTutorial = async(tutorial) => {
    try {
      await axios.post(url,tutorial)
    } catch (error) {
      console.log(error);
    }
    getTutorials()
  };
  
  /*DELETE */

  const deleteTutorial = async (id)=>{
    try {
      await axios.delete(url+`/${id}`);
      // await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  }

  /* UPDATE PUT:WHOLE UPDATE, PATH: PARTIALLY UPDATE */

  const editTutorial = async (id,title,desc)=>{
    const filtered = tutorials.filter((tutor)=>tutor.id === id).map(() =>  ({title:title, description: desc}));
    try {
      await axios.put(url+`/${id}`, filtered[0]);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  }

  return (
    <>
      <AddTutorial addTutorial={addTutorial}/>
      <TutorialList tutorials={tutorials} editTutorial={editTutorial} deleteTutorial={deleteTutorial}/>
    </>
  );
};

export default Home;
