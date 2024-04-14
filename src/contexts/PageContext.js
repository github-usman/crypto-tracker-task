
import React, { createContext, useState, useContext } from 'react';
const PageContext = createContext();


export const usePageContext = () => useContext(PageContext);
export const PageProvider = ({ children }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const setPageNumber = (pageNumber) => {
    setLoading(true);
    setCurrentPage(pageNumber);
  };
 

  // modal

  const [isOpenModal, setIsOpenModal] = useState(false)
    const handleOpenModal = () => {
        setIsOpenModal(!isOpenModal);
    }


  return (
    <PageContext.Provider value={{ currentPage, setPageNumber, loading, setLoading,isOpenModal,handleOpenModal }}>
      {children}
    </PageContext.Provider>
  );
};
