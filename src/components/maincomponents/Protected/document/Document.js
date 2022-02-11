import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Paper from '../../../minorcomponents/Paper';
import SearchBar from '../../../minorcomponents/Search';
import ButtonPrimary from '../../../minorcomponents/ButtonPrimary';
import Title from '../../../minorcomponents/Title';
import FileUpload from '../../../minorcomponents/FileUpload';
import Form from '../../../minorcomponents/Form'
import ChoiceBar from "../../../minorcomponents/ChoiceBar";
import { useFetch } from '../../../../utils/CustomHooks';
import { ToastContainer } from 'react-toastify'



const Document = () => {

  return (
    <Paper>
      <Title text="Document" />
    <div className="">
      <ChoiceBar text1="Upload New document"
        text3="Download document"
        text4="Delete a document"
        link1="/main/documents/"
        link3="/main/documents/download"
        link4="/main/documents/delete"

      />
      <Route path="/main/documents/" exact component={UploadDocument} />
      {/* <Route path="/main/documents/search" exact component={SearchDocument} /> */}
      <Route path="/main/documents/download" exact component={DeleteDocument} />
      <Route path="/main/documents/delete" exact component={DownloadDocument} />

      <ToastContainer />
    </div>
    </Paper>
  );
};


export const UploadDocument = () => {
  const [newDocs, setNewDocs] = useState([])
  const { post, setContentType } = useFetch(`/documents/XRAY/upload/1/for/booking`)

  useEffect(() => {
    setContentType('multipart/form-data')
  }, [])

  const handleDrop = (files) => {
    setNewDocs([...newDocs, ...files])
  }

  const handleUpload = (e) => {
    e.preventDefault()
    let formData = new FormData()
    newDocs.forEach(file => {
      formData.append('file', file)
    })
    post(formData)

  }

  return (
    <div className="show">
      <h5 className="text-center mt-4 mb-3 text-uppercase">Upload Documents</h5>
      <Form onSubmit={handleUpload}>
        <FileUpload handleDrop={handleDrop} files={newDocs} multiple={true} setFiles={setNewDocs} />
        <ButtonPrimary type="submit" text="Submit" className="offset-md-10" />
      </Form>
    </div>
  )
}


export const DownloadDocument = () => {

  const [download, setDownload] = useState('')
  const { get } = useFetch(`/documents/download`)

  const handleDownload = (e) => {
    e.preventDefault()
    get(download)
  }

  return (
    <div className="show">
      <h5 className="text-center mt-4 mb-3">Download a document by filename</h5>
      <SearchBar
        onSubmit={handleDownload}
        onChange={e => setDownload(e.target.value)}
        placeholder="Enter filename to Download"
        text="Download"
      />
    </div>
  )
}


export const DeleteDocument = () => {
  const [deleteQuery, setDelete] = useState('')
  const { deleter } = useFetch(`/documents`)

  const handleDelete = (e) => {
    e.preventDefault()
    deleter(deleteQuery)
  }


  return (
    <div className="show">
      <h5 className="text-center mt-4 mb-3">Delete a document by File Name</h5>
      <SearchBar
        onSubmit={handleDelete}
        onChange={e => setDelete(e.target.value)}
        placeholder="Enter filename to Delete "
        text="Delete"
        btn="btn-danger"
      />
    </div>
  )
}

export default Document;