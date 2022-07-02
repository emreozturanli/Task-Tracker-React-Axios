import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import EditTutorial from './EditTutorial';
import { useState } from 'react';

const TutorialList = ({tutorials,deleteTutorial, editTutorial}) => {
  const [data,setData] = useState({
    id: '',
    title: '',
    desc: ''
  })

  const sendId = (id,title,description) => {
    setData({
      id:id,
      title:title,
      desc:description
    });
  };

  const handleChange = (e) => {
    setData(()=>({
        ...data,
        [e.target.name] : e.target.value
    }))
}

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center">
                  <FaEdit 
                  data-bs-toggle="modal"
                  data-bs-target="#edit-modal"
                  onClick={()=>sendId(id,title,description)} 
                  size={20} 
                  className="me-3 text-warning " 
                  role="button"
                  />
                  <AiFillDelete onClick={()=>deleteTutorial(id)} size={22} className="text-danger cursor-pointer" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
      <EditTutorial data={data} editTutorial={editTutorial} handleChange={handleChange} setData={setData} />
      
    </div>
  );
};

export default TutorialList;
