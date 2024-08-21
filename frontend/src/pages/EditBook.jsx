import React, {useEffect, useState} from 'react'
import axios from 'axios';
import BackButton from '../../components/BackButton';
import Spinner from '../../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
    .get(`http://localhost:5555/books/${id}`)
    .then(response => {
      setTitle(response.data.title);
      setAuthor(response.data.author);
      setPublishYear(response.data.publishYear);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
      alert("An error occured, please check console!");
      console.log(error);
    })
  }, [])

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
    .put(`http://localhost:5555/books/${id}`, data)
    .then(() => {
      setLoading(false);
      navigate('/');
    })
    .catch((error) => {
      setLoading(false);
      alert("Could not save the book");
      console.log(error);
    })
  }
  
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-pink-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 font-bold">Title</label>
          <input 
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a title"
          className='border-2 border-gray-500 px-4 py-2 w-full' 
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 font-bold">Author</label>
          <input 
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter an Author"
          className='border-2 border-gray-500 px-4 py-2 w-full' 
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 font-bold">Publish Year</label>
          <input 
          type="text"
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
          placeholder="Enter the year it was Published"
          className='border-2 border-gray-500 px-4 py-2 w-full' 
          />
        </div>
        <button className='p-2 bg-pink-300' onClick={handleEditBook}>Edit Book</button>
      </div>
    </div>
  )
}

export default EditBook;
