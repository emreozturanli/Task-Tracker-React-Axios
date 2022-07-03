

const EditTutorial = ({editTutorial, data, handleChange}) => {
  
    const saveChanges = () =>{
      editTutorial(data.id,data.title,data.desc);
      // setData({
      //   id: '',
      //   title: '',
      //   desc: ''
      // })   // after adding data-bs-dismiss to button we dont need this anymore. 
    }

    return (
     
      <div>
        <div className="modal fade" tabIndex="-1" id="edit-modal" >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <input className="modal-title form-control w-75"  value={data.title} name="title" onChange={handleChange}/>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
              <input className="modal-title form-control w-75" value={data.desc} name="desc" onChange={handleChange}/>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button onClick={saveChanges} type="button" className="btn btn-primary" data-bs-dismiss="modal">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      
      );
  };
  
  export default EditTutorial;